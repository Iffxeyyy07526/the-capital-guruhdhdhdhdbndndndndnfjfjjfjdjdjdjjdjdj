import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// A secret to verify that the webhook actually comes from Supabase
const WEBHOOK_SECRET = process.env.SUPABASE_WEBHOOK_SECRET || 'secret';

export async function POST(req: Request) {
  try {
    const url = new URL(req.url);
    const secret = url.searchParams.get('secret');
    if (secret !== WEBHOOK_SECRET && process.env.NODE_ENV === 'production') {
       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();

    // Supabase Webhook payload format
    if (body.type === 'UPDATE' && body.table === 'payments') {
      const record = body.record;
      const oldRecord = body.old_record;

      // Check if it transitioned to 'approved'
      if (record.status === 'approved' && oldRecord.status !== 'approved') {
        const userEmail = record.user_email;
        const planId = record.plan_id;
        const telegramLink = process.env.TELEGRAM_GROUP_LINK || "https://t.me/+AbCdEfGhIjKlMnOp";
        
        if (resend) {
          await resend.emails.send({
            from: 'The Capital Guru <noreply@thecapitalguru.net>',
            to: userEmail,
            subject: 'Payment Confirmed! Your Telegram Access Link inside',
            html: `
              <h2>Payment Successful!</h2>
              <p>Your payment for the <strong>${planId}</strong> plan has been manually verified and approved.</p>
              <p>You now have access to our Premium F&O signals.</p>
              <br/>
              <h3>Your Access Link</h3>
              <p>Click the link below to join our premium Telegram channel:</p>
              <p><a href="${telegramLink}" style="display:inline-block;padding:12px 24px;background-color:#10b981;color:#000;text-decoration:none;font-weight:bold;border-radius:8px;">Join Telegram Channel</a></p>
              <br/>
              <p>Make sure to join within 24 hours. The link will expire.</p>
              <p>If you have any issues, reply to this email or contact +919106713107 on WhatsApp.</p>
              <p>Welcome to The Capital Guru!</p>
            `
          });
        }
      }
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Webhook Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
