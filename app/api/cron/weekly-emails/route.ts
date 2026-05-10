import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// NOTE: Add RESEND_API_KEY to your .env file
const resend = new Resend(process.env.RESEND_API_KEY || 're_mock_key');

// A sample of the 50 Educational Emails
const EDUCATIONAL_EMAILS = [
  { subject: 'The Power of Risk Management in F&O', body: '...' },
  { subject: 'Understanding Options Greeks (Delta & Theta)', body: '...' },
  // ... Up to 50
];

// A sample of the 50 Sales Emails
const SALES_EMAILS = [
  { subject: 'Why 90% of Traders Fail (And How You Can Be in the 10%)', body: '...' },
  { subject: 'Unlock Premium Insights - Special Weekend Offer', body: '...' },
  // ... Up to 50
];

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Logic to select "Registered but not purchased" users from Supabase would go here
    // const { data: users } = await supabase.from('users').select('*').eq('status', 'registered_unpaid');
    
    // Simulating email send via Resend
    /*
    for (const user of users) {
      await resend.emails.send({
        from: 'mahir@thecapitalguru.net',
        to: user.email,
        subject: EDUCATIONAL_EMAILS[currentWeek % 50].subject,
        html: `<p>Hi ${user.name},</p><p>...</p>`
      });
    }
    */

    return NextResponse.json({ success: true, message: 'Weekly email sequence triggered' });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
