export default function DisclaimerPage() {
  return (
    <div className="py-24 bg-brand-dark min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-600/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h1 className="font-display text-4xl font-bold mb-8 text-gold-500 tracking-tight">Financial Disclaimer</h1>
        <div className="text-white/70 space-y-8 font-light prose prose-invert max-w-none">
          <p className="text-lg">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">1. Purely Educational</h2>
            <p>
              The materials, signals, trade setups, screen recordings, performance trackers, and dashboard insights provided by The Capital Guru are exclusively for educational, learning, and observational purposes. Nothing provided herein should be construed as investment or financial advice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">2. Liability Waver</h2>
            <p>
              We are not registered financial advisors with SEBI or any other regulatory body. The founders, operators, and affiliates of The Capital Guru explicitly disclaim any liability, loss, or risk, personal or otherwise, which is incurred as a consequence, directly or indirectly, of the use and application of any contents of this site or our Telegram channels.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">3. Hypothetical Performance</h2>
            <p>
              Any past performance or hypothetical performance showcased on the website, social media, or other communication channels is not indicative of future results. F&O trading in Nifty and BankNifty is extremely volatile. Inherent limitations exist with hypothetical results, as they are generally prepared with the benefit of hindsight and do not involve financial risk.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">4. User Responsibility</h2>
            <p>
              You make your own trading decisions. Under no circumstances should any analysis be taken as a signal to buy or sell securities without your own independent verification. 
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
