export default function PrivacyPolicyPage() {
  return (
    <div className="py-24 bg-brand-dark min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-600/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h1 className="font-display text-4xl font-bold mb-8 text-gold-500 tracking-tight">Privacy Policy</h1>
        <div className="text-white/70 space-y-8 font-light prose prose-invert max-w-none">
          <p className="text-lg">Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            At The Capital Guru, we take your privacy incredibly seriously. We are committed to protecting your personal data and respecting your privacy rights. This Privacy Policy details the information we collect, how it will be used, and how it is protected.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">1. Information We Collect</h2>
            <p>To provide our services efficiently, we may collect the following personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, Email Address, Mobile Number, WhatsApp Number, Telegram ID.</li>
              <li><strong>Financial Information:</strong> Payment details such as UTR numbers and transaction histories for verification.</li>
              <li><strong>Usage Data:</strong> Information on how you interact with our Website, dashboards, and services.</li>
              <li><strong>Device Data:</strong> IP address, browser type, device information, and operating systems.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">2. How We Use Your Data</h2>
            <p>Your data is strictly utilized for the following core purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Provisioning:</strong> Setting up and managing your subscriptions and dashboard access.</li>
              <li><strong>Service Delivery:</strong> Granting access to our Telegram channels, and forwarding relevant educational market updates.</li>
              <li><strong>Billing & Verification:</strong> Validating your UTR payments and maintaining accurate billing records.</li>
              <li><strong>Communication:</strong> Transmitting necessary updates, promotional materials (which you can opt out of), and policy changes.</li>
              <li><strong>Security:</strong> Detecting and mitigating potential fraudulent activities or unauthorized sharing of access.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">3. Data Protection and Security</h2>
            <p>
              We implement industry-standard encryption protocols and advanced security mechanisms to protect your data. Your personal identifiers and transaction data reside securely on high-tier encrypted database structures. However, no data transmission across the internet can be fully guaranteed, and you share information at your own risk.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">4. Third-Party Disclosures</h2>
            <p>
              We do not sell, rent, or trade your personally identifiable information. We may share information with trusted third-party service providers (such as payment gateways or email service providers) purely to facilitate our business operations, provided they agree to maintain standard confidentiality.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">5. Cookies and Tracking</h2>
            <p>
              The Capital Guru may use cookies and similar tracking technologies to enhance user experience, track user patterns, and maintain active sessions across the dashboard.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">6. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to request access, correction, or deletion of your personal data. To exercise these rights, please contact our support desk.
            </p>
          </section>

          <p className="pt-8 border-t border-white/10 text-sm text-white/50">
            For further privacy-related inquiries, please contact us at mahir@thecapitalguru.net.
          </p>
        </div>
      </div>
    </div>
  );
}
