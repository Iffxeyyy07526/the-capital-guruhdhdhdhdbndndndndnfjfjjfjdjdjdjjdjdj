export default function TermsPage() {
  return (
    <div className="py-24 bg-brand-dark min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-600/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h1 className="font-display text-4xl font-bold mb-8 text-gold-500 tracking-tight">Terms & Conditions / User Agreement</h1>
        <div className="text-white/70 space-y-8 font-light prose prose-invert max-w-none">
          <p className="text-lg">Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            By accessing or using The Capital Guru (thecapitalguru.net) services, dashboard, and associated Telegram channels, you enter into a legally binding agreement to comply with the terms listed below. Please read these terms carefully before proceeding.
          </p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">1. Subscription Characteristics</h2>
            <p>
              Access to our exclusive Telegram signals and premium content is provided on a subscription basis. We reserve the absolute right to manually verify any payment via UTR number before granting access. Subscriptions cannot be transferred.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">2. Refunds and Cancellations</h2>
            <p>
              Due to the digital and immediate nature of our intellectual property and market signals, <strong>all payments are strictly final and non-refundable</strong> once a subscription is activated and access is granted. No prorated refunds will be issued for partial usage or early cancellations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">3. Risk Warning & No Guarantee of Profits</h2>
            <p>
              The Capital Guru serves as an educational and informational platform. We are not a registered investment advisor. The financial signals provided represent our own analysis and opinions. Financial market trading, particularly in derivatives (F&O), involves an exceptionally high degree of risk.
            </p>
            <p>
              <strong>We do not guarantee any specific returns, profits, or freedom from capital loss.</strong> You are solely responsible for executing any trades, and for the consequences of those trades.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">4. Intellectual Property Rights (IPR)</h2>
            <p>
              All materials, inclusive of but not limited to trade signals, analytical reports, charts, website content, and dashboard designs, are the intellectual property of The Capital Guru.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reproduction, forwarding, scraping, or reselling of our signals or materials is strictly prohibited.</li>
              <li>Violation of this rule will lead to instant termination of the subscription, IP bans, and potential legal action.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">5. Platform Independence</h2>
            <p>
              We distribute our services primarily via Telegram. We are an independent entity and are not affiliated, endorsed, or sponsored by Telegram, TradingView, SEBI (unless explicitly listed), or any specific brokerage.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">6. Discontinuation of Services</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect of our services at our sole discretion with or without notice. In event of a permanent shutdown initiated by us, ongoing subsciptions may be compensated at our discretion.
            </p>
          </section>

          <p className="pt-8 border-t border-white/10 text-sm text-white/50">
            For further queries or clarifications regarding our terms, please contact mahir@thecapitalguru.net.
          </p>
        </div>
      </div>
    </div>
  );
}
