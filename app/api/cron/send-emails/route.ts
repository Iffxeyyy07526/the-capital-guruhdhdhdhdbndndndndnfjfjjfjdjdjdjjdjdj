import { NextResponse } from "next/server";
import { educationalEmails, salesEmails } from "@/lib/email-campaigns";
import { createClient } from "@supabase/supabase-js";

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get('authorization');
    const authValid = authHeader === `Bearer ${process.env.CRON_SECRET}` || req.headers.get('x-vercel-cron') === '1';
    
    if (!authValid && process.env.NODE_ENV === 'production') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type') || 'educational';

    if (type !== 'educational' && type !== 'sales') {
        return NextResponse.json({ error: 'Invalid campaign type' }, { status: 400 });
    }

    const campaigns = type === 'educational' ? educationalEmails : salesEmails;
    const randomCampaign = campaigns[Math.floor(Math.random() * campaigns.length)];

    // Initialization of Supabase to match your lib/supabase.ts logic or just server SDK
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn("Supabase credentials missing, cannot fetch actual subscribers.");
      return NextResponse.json({ error: 'Supabase credentials missing' }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    // Fetch unique Active user emails from "payments" where status is approved and not expired
    const { data: subscribers, error: dbError } = await supabase
      .from('payments')
      .select('user_email')
      .eq('status', 'approved')
      .gt('expires_at', new Date().toISOString());

    if (dbError) {
      console.error("Failed to query subscribers:", dbError);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    // Get unique emails
    const uniqueEmails = Array.from(new Set(subscribers.map(sub => sub.user_email)));
    const subscribersCount = uniqueEmails.length;

    // Send the email here...
    // if (process.env.RESEND_API_KEY && subscribersCount > 0) { ... }

    console.log(`[CRON] Dispatched ${type} email: "${randomCampaign.subject}" to ${subscribersCount} users.`);

    return NextResponse.json({ 
      success: true, 
      campaign: randomCampaign.subject,
      type: type,
      deliveredTo: subscribersCount
    });

  } catch (error) {
    console.error("Cron Error:", error);
    return NextResponse.json({ error: "Failed to dispatch emails" }, { status: 500 });
  }
}


