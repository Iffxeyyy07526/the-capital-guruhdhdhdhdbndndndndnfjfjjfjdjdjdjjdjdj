import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Helper if ENV variable is not set locally
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, userEmail, planId, amount, utrNumber } = body;

    // Send email to Support (Admin)
    if (resend) {
      await resend.emails.send({
        from: 'The Capital Guru <noreply@thecapitalguru.net>',
        to: 'mahir@thecapitalguru.net',
        subject: `New Payment Verification Request: ${planId} - ₹${amount}`,
        html: `
          <h2>New Payment Pending Verification</h2>
          <p><strong>User Email:</strong> ${userEmail}</p>
          <p><strong>User ID:</strong> ${userId}</p>
          <p><strong>Plan:</strong> ${planId}</p>
          <p><strong>Amount:</strong> ₹${amount}</p>
          <p><strong>UTR Number:</strong> <span style="font-family: monospace; font-size: 16px;">${utrNumber}</span></p>
          <p>Verify the payment in your bank account and approve it from the Supabase Dashboard, then send them the Telegram link.</p>
          <p>User has been asked to send the screenshot on WhatsApp to +919106713107.</p>
        `
      });

      // Send email to User
      await resend.emails.send({
        from: 'The Capital Guru <noreply@thecapitalguru.net>',
        to: userEmail,
        subject: 'Payment Received - Pending Verification',
        html: `
          <h2>Hello!</h2>
          <p>We have received your UTR number (<strong>${utrNumber}</strong>) for the <strong>${planId}</strong> plan (₹${amount}).</p>
          <p>Our team is currently verifying the payment manually. It usually takes 1-2 hours.</p>
          <p>If you haven't already, please send the payment screenshot on WhatsApp to <strong>+919106713107</strong> to speed up verification.</p>
          <p>Once verified, you will receive another email with your Premium Telegram Access Link.</p>
          <br />
          <p>Thank you,</p>
          <p>The Capital Guru Team</p>
        `
      });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Resend API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
