"use client";

import { LegalPageLayout } from "@/components/LegalPageLayout";
import { Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function EmailTemplatesPage() {
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates({ ...copiedStates, [id]: true });
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const CONFIRMATION_EMAIL = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirm Your Signup</title>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #000000; color: #ffffff; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .card { background-color: #121212; border: 1px solid #27272a; border-radius: 20px; padding: 40px; text-align: center; }
    
    .title { font-size: 28px; font-weight: bold; margin-bottom: 16px; color: #ffffff; }
    .text { font-size: 16px; color: #a1a1aa; line-height: 1.6; margin-bottom: 30px; }
    .btn { display: inline-block; background-color: #10b981; color: #000000; font-weight: bold; text-decoration: none; padding: 16px 32px; border-radius: 12px; font-size: 16px; }
    .btn:hover { background-color: #34d399; }
    .footer { margin-top: 40px; font-size: 12px; color: #52525b; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 30px; text-align: center;"><tr><td align="center"><a href="{{ .SiteURL }}" style="text-decoration: none; display: inline-block;"><span style="display: block; font-size: 20px; font-weight: 900; color: #ffffff; letter-spacing: 4px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">THE CAPITAL GURU</span><span style="display: block; font-size: 9px; font-weight: 600; color: #10b981; letter-spacing: 6px; text-transform: uppercase; margin-top: 4px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">Wealth Operating System</span></a></td></tr></table>
      <h1 class="title">Welcome to the Club</h1>
      <p class="text">You're just one step away from premium F&O trading signals. Confirm your email to activate your account and start your journey.</p>
      <a href="{{ .ConfirmationURL }}" class="btn">Verify Email Address</a>
    </div>
    <div class="footer">
      &copy; 2024 The Capital Guru. All rights reserved.
    </div>
  </div>
</body>
</html>`;

  const MAGIC_LINK_EMAIL = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Magic Link</title>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #000000; color: #ffffff; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .card { background-color: #121212; border: 1px solid #27272a; border-radius: 20px; padding: 40px; text-align: center; }
    
    .title { font-size: 28px; font-weight: bold; margin-bottom: 16px; color: #ffffff; }
    .text { font-size: 16px; color: #a1a1aa; line-height: 1.6; margin-bottom: 30px; }
    .btn { display: inline-block; background-color: #10b981; color: #000000; font-weight: bold; text-decoration: none; padding: 16px 32px; border-radius: 12px; font-size: 16px; }
    .btn:hover { background-color: #34d399; }
    .footer { margin-top: 40px; font-size: 12px; color: #52525b; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 30px; text-align: center;"><tr><td align="center"><a href="{{ .SiteURL }}" style="text-decoration: none; display: inline-block;"><span style="display: block; font-size: 20px; font-weight: 900; color: #ffffff; letter-spacing: 4px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">THE CAPITAL GURU</span><span style="display: block; font-size: 9px; font-weight: 600; color: #10b981; letter-spacing: 6px; text-transform: uppercase; margin-top: 4px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">Wealth Operating System</span></a></td></tr></table>
      <h1 class="title">Secure Login</h1>
      <p class="text">Click the button below to securely sign in to your Capital Guru account. No password required.</p>
      <a href="{{ .ConfirmationURL }}" class="btn">Login to Dashboard</a>
      <p style="margin-top:20px; font-size:12px; color:#52525b;">If you didn't request this email, you can safely ignore it.</p>
    </div>
    <div class="footer">
      &copy; 2024 The Capital Guru. All rights reserved.
    </div>
  </div>
</body>
</html>`;

  const PASSWORD_RESET_EMAIL = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #000000; color: #ffffff; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .card { background-color: #121212; border: 1px solid #27272a; border-radius: 20px; padding: 40px; text-align: center; }
    
    .title { font-size: 28px; font-weight: bold; margin-bottom: 16px; color: #ffffff; }
    .text { font-size: 16px; color: #a1a1aa; line-height: 1.6; margin-bottom: 30px; }
    .btn { display: inline-block; background-color: #10b981; color: #000000; font-weight: bold; text-decoration: none; padding: 16px 32px; border-radius: 12px; font-size: 16px; }
    .btn:hover { background-color: #34d399; }
    .footer { margin-top: 40px; font-size: 12px; color: #52525b; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 30px; text-align: center;"><tr><td align="center"><a href="{{ .SiteURL }}" style="text-decoration: none; display: inline-block;"><span style="display: block; font-size: 20px; font-weight: 900; color: #ffffff; letter-spacing: 4px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">THE CAPITAL GURU</span><span style="display: block; font-size: 9px; font-weight: 600; color: #10b981; letter-spacing: 6px; text-transform: uppercase; margin-top: 4px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">Wealth Operating System</span></a></td></tr></table>
      <h1 class="title">Reset Password</h1>
      <p class="text">We received a request to reset your password. Click the button below to choose a new password.</p>
      <a href="{{ .ConfirmationURL }}" class="btn">Reset Password</a>
    </div>
    <div class="footer">
      &copy; 2024 The Capital Guru. All rights reserved.
    </div>
  </div>
</body>
</html>`;

  const ACCESS_GRANTED_EMAIL = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Access Granted</title>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #000000; color: #ffffff; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .card { background-color: #121212; border: 1px solid #10b981; border-radius: 20px; padding: 40px; text-align: center; }
    
    .title { font-size: 28px; font-weight: bold; margin-bottom: 16px; color: #ffffff; }
    .text { font-size: 16px; color: #a1a1aa; line-height: 1.6; margin-bottom: 30px; text-align: left; }
    .btn { display: inline-block; background-color: #10b981; color: #000000; font-weight: bold; text-decoration: none; padding: 16px 32px; border-radius: 12px; font-size: 16px; }
    .btn:hover { background-color: #34d399; }
    .footer { margin-top: 40px; font-size: 12px; color: #52525b; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 30px; text-align: center;"><tr><td align="center"><a href="https://thecapitalguru.net" style="text-decoration: none; display: inline-block;"><span style="display: block; font-size: 20px; font-weight: 900; color: #ffffff; letter-spacing: 4px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">THE CAPITAL GURU</span><span style="display: block; font-size: 9px; font-weight: 600; color: #10b981; letter-spacing: 6px; text-transform: uppercase; margin-top: 4px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">Wealth Operating System</span></a></td></tr></table>
      <h1 class="title">Access Granted 🚀</h1>
      <p class="text">Hi {{Name}},<br><br>Welcome to the <strong>{{PlanName}}</strong>. We have securely confirmed your payment and activated your subscription.<br><br>Click the button below to join the private Premium Telegram channel and start receiving live market updates, setup alerts, and exclusive webinar links.</p>
      <a href="{{TelegramLink}}" class="btn">Join Premium Channel</a>
      <p class="text" style="text-align: center; margin-top: 30px; font-size: 14px;"><strong>Golden Rule:</strong> Keep risk management as your top priority.</p>
    </div>
    <div class="footer">&copy; 2024 The Capital Guru. All rights reserved.</div>
  </div>
</body>
</html>`;

  const ACCESS_EXPIRY_EMAIL = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Subscription Expiring Soon</title>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #000000; color: #ffffff; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .card { background-color: #121212; border: 1px solid #ef4444; border-radius: 20px; padding: 40px; text-align: center; }
    
    .title { font-size: 28px; font-weight: bold; margin-bottom: 16px; color: #ffffff; }
    .text { font-size: 16px; color: #a1a1aa; line-height: 1.6; margin-bottom: 30px; text-align: left; }
    .btn { display: inline-block; background-color: #ef4444; color: #ffffff; font-weight: bold; text-decoration: none; padding: 16px 32px; border-radius: 12px; font-size: 16px; }
    .btn:hover { background-color: #dc2626; }
    .footer { margin-top: 40px; font-size: 12px; color: #52525b; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 30px; text-align: center;"><tr><td align="center"><a href="https://thecapitalguru.net" style="text-decoration: none; display: inline-block;"><span style="display: block; font-size: 20px; font-weight: 900; color: #ffffff; letter-spacing: 4px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">THE CAPITAL GURU</span><span style="display: block; font-size: 9px; font-weight: 600; color: #10b981; letter-spacing: 6px; text-transform: uppercase; margin-top: 4px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">Wealth Operating System</span></a></td></tr></table>
      <h1 class="title">Action Required ⚠️</h1>
      <p class="text">Hi {{Name}},<br><br>Your access to the Premium Telegram channel is set to expire in <strong>{{DaysLeft}} days</strong>.<br><br>To ensure you don't miss out on upcoming high-probability trades and VIP webinars, please renew your subscription today.</p>
      <a href="{{RenewalLink}}" class="btn">Renew Subscription</a>
    </div>
    <div class="footer">&copy; 2024 The Capital Guru. All rights reserved.</div>
  </div>
</body>
</html>`;

  const SALES_PROMO_EMAIL = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Special Offer</title>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #000000; color: #ffffff; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .card { background-color: #121212; border: 1px solid #27272a; border-radius: 20px; padding: 40px; text-align: center; }
    
    .title { font-size: 28px; font-weight: bold; margin-bottom: 16px; color: #ffffff; }
    .text { font-size: 16px; color: #a1a1aa; line-height: 1.6; margin-bottom: 30px; text-align: left; }
    .btn { display: inline-block; background-color: #10b981; color: #000000; font-weight: bold; text-decoration: none; padding: 16px 32px; border-radius: 12px; font-size: 16px; }
    .btn:hover { background-color: #34d399; }
    .footer { margin-top: 40px; font-size: 12px; color: #52525b; text-align: center; }
    .highlight { color: #10b981; font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 30px; text-align: center;"><tr><td align="center"><a href="https://thecapitalguru.net" style="text-decoration: none; display: inline-block;"><span style="display: block; font-size: 20px; font-weight: 900; color: #ffffff; letter-spacing: 4px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">THE CAPITAL GURU</span><span style="display: block; font-size: 9px; font-weight: 600; color: #10b981; letter-spacing: 6px; text-transform: uppercase; margin-top: 4px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">Wealth Operating System</span></a></td></tr></table>
      <h1 class="title">Exclusive Offer ✨</h1>
      <p class="text">Hi {{Name}},<br><br>Ready to take your trading to the next level? Upgrade to our <strong>12 Months Annual Plan</strong> today and get <span class="highlight">2 Months Free</span>!<br><br>Our annual members get exclusive benefits including 1-on-1 mentorship sessions and VIP wealth webinars.</p>
      <a href="{{UpgradeLink}}" class="btn">Claim Your Offer</a>
    </div>
    <div class="footer">&copy; 2024 The Capital Guru. All rights reserved.<br>If you wish to unsubscribe, click here.</div>
  </div>
</body>
</html>`;

  const EDUCATIONAL_EMAIL = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Market Analysis</title>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #000000; color: #ffffff; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .card { background-color: #121212; border: 1px solid #27272a; border-radius: 20px; padding: 40px; text-align: left; }
    
    .title { font-size: 24px; font-weight: bold; margin-bottom: 16px; color: #ffffff; }
    .text { font-size: 16px; color: #a1a1aa; line-height: 1.6; margin-bottom: 20px; }
    .btn { display: inline-block; background-color: #10b981; color: #000000; font-weight: bold; text-decoration: none; padding: 12px 24px; border-radius: 10px; font-size: 14px; margin-top: 20px; }
    .footer { margin-top: 40px; font-size: 12px; color: #52525b; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 30px; text-align: center;"><tr><td align="center"><a href="https://thecapitalguru.net" style="text-decoration: none; display: inline-block;"><span style="display: block; font-size: 20px; font-weight: 900; color: #ffffff; letter-spacing: 4px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">THE CAPITAL GURU</span><span style="display: block; font-size: 9px; font-weight: 600; color: #10b981; letter-spacing: 6px; text-transform: uppercase; margin-top: 4px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">Wealth Operating System</span></a></td></tr></table>
      <h1 class="title">Weekly Market Breakdown 📈</h1>
      <p class="text">Hi {{Name}},</p>
      <p class="text">This week we saw serious volatility in the Nifty and BankNifty indices. If you were paying attention to the support zones we highlighted, you probably caught the bounce.</p>
      <p class="text"><strong>Here's the key takeaway for next week:</strong></p>
      <ul>
        <li style="color: #a1a1aa; line-height: 1.6;">Watch the crucial resistance level at <strong>{{Level}}</strong>.</li>
        <li style="color: #a1a1aa; line-height: 1.6;">FII data suggests a potential short-covering rally if we break above it.</li>
      </ul>
      <p class="text">Read the full technical analysis on our blog to prepare your trade plan.</p>
      <div style="text-align: center;">
        <a href="{{BlogLink}}" class="btn">Read Full Breakdown</a>
      </div>
    </div>
    <div class="footer">&copy; 2024 The Capital Guru. All rights reserved.</div>
  </div>
</body>
</html>`;

  return (
    <LegalPageLayout title="Email Templates" lastUpdated="Current Version">
      <div className="space-y-12 text-gray-300">
        <section>
          <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-2xl mb-8">
            <h2 className="text-xl font-bold text-emerald-400 mb-2">Supabase Auth Templates</h2>
            <p className="text-white/80">
              Go to your <strong>Supabase Dashboard</strong> {'->'} <strong>Authentication</strong> {'->'} <strong>Email Templates</strong> and paste the corresponding HTML code below into the HTML body section.
            </p>
          </div>

          {/* Signup Confirmation */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">1. Confirm Signup Template</h3>
              <button
                type="button"
                onClick={() => copyToClipboard(CONFIRMATION_EMAIL, 'confirm')}
                className="flex items-center gap-2 text-sm bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                {copiedStates['confirm'] ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copiedStates['confirm'] ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
            <div className="bg-black/50 border border-white/10 rounded-xl p-4 overflow-x-auto">
              <pre className="text-sm text-gray-400 font-mono"><code>{CONFIRMATION_EMAIL}</code></pre>
            </div>
          </div>

          {/* Magic Link */}
          <div className="space-y-4 pt-8 border-t border-white/10 mt-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">2. Magic Link Template</h3>
              <button
                type="button"
                onClick={() => copyToClipboard(MAGIC_LINK_EMAIL, 'magic')}
                className="flex items-center gap-2 text-sm bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                {copiedStates['magic'] ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copiedStates['magic'] ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
            <div className="bg-black/50 border border-white/10 rounded-xl p-4 overflow-x-auto">
              <pre className="text-sm text-gray-400 font-mono"><code>{MAGIC_LINK_EMAIL}</code></pre>
            </div>
          </div>

          {/* Password Reset */}
          <div className="space-y-4 pt-8 border-t border-white/10 mt-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">3. Reset Password Template</h3>
              <button
                type="button"
                onClick={() => copyToClipboard(PASSWORD_RESET_EMAIL, 'reset')}
                className="flex items-center gap-2 text-sm bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                {copiedStates['reset'] ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copiedStates['reset'] ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
            <div className="bg-black/50 border border-white/10 rounded-xl p-4 overflow-x-auto">
              <pre className="text-sm text-gray-400 font-mono"><code>{PASSWORD_RESET_EMAIL}</code></pre>
            </div>
          </div>
        </section>

        <section className="pt-12 border-t border-white/20">
          <div className="bg-purple-500/10 border border-purple-500/20 p-6 rounded-2xl mb-8">
            <h2 className="text-xl font-bold text-purple-400 mb-2">Marketing & Transactional Templates</h2>
            <p className="text-white/80">
              Use these templates in your preferred ESP (like Resend, Mailchimp, or SendGrid) for manual or automated campaigns. Replace the {'{{Variables}}'} with your merge tags.
            </p>
          </div>

          {/* Access Granted */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Access Granted</h3>
              <button
                type="button"
                onClick={() => copyToClipboard(ACCESS_GRANTED_EMAIL, 'granted')}
                className="flex items-center gap-2 text-sm bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                {copiedStates['granted'] ? <CheckCircle2 className="w-4 h-4 text-purple-400" /> : <Copy className="w-4 h-4" />}
                {copiedStates['granted'] ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
            <div className="bg-black/50 border border-white/10 rounded-xl p-4 overflow-x-auto">
              <pre className="text-sm text-gray-400 font-mono"><code>{ACCESS_GRANTED_EMAIL}</code></pre>
            </div>
          </div>

          {/* Access Expiry */}
          <div className="space-y-4 pt-8 border-t border-white/10 mt-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Access Expiry / Renewal Reminder</h3>
              <button
                type="button"
                onClick={() => copyToClipboard(ACCESS_EXPIRY_EMAIL, 'expiry')}
                className="flex items-center gap-2 text-sm bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                {copiedStates['expiry'] ? <CheckCircle2 className="w-4 h-4 text-purple-400" /> : <Copy className="w-4 h-4" />}
                {copiedStates['expiry'] ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
            <div className="bg-black/50 border border-white/10 rounded-xl p-4 overflow-x-auto">
              <pre className="text-sm text-gray-400 font-mono"><code>{ACCESS_EXPIRY_EMAIL}</code></pre>
            </div>
          </div>

          {/* Sales Promo */}
          <div className="space-y-4 pt-8 border-t border-white/10 mt-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Sales & Promo</h3>
              <button
                type="button"
                onClick={() => copyToClipboard(SALES_PROMO_EMAIL, 'promo')}
                className="flex items-center gap-2 text-sm bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                {copiedStates['promo'] ? <CheckCircle2 className="w-4 h-4 text-purple-400" /> : <Copy className="w-4 h-4" />}
                {copiedStates['promo'] ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
            <div className="bg-black/50 border border-white/10 rounded-xl p-4 overflow-x-auto">
              <pre className="text-sm text-gray-400 font-mono"><code>{SALES_PROMO_EMAIL}</code></pre>
            </div>
          </div>

          {/* Educational */}
          <div className="space-y-4 pt-8 border-t border-white/10 mt-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Educational / Market Update</h3>
              <button
                type="button"
                onClick={() => copyToClipboard(EDUCATIONAL_EMAIL, 'edu')}
                className="flex items-center gap-2 text-sm bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                {copiedStates['edu'] ? <CheckCircle2 className="w-4 h-4 text-purple-400" /> : <Copy className="w-4 h-4" />}
                {copiedStates['edu'] ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
            <div className="bg-black/50 border border-white/10 rounded-xl p-4 overflow-x-auto">
              <pre className="text-sm text-gray-400 font-mono"><code>{EDUCATIONAL_EMAIL}</code></pre>
            </div>
          </div>

        </section>
      </div>
    </LegalPageLayout>
  );
}
