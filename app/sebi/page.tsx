export default function SebiGuidelinesPage() {
  return (
    <div className="py-24 bg-brand-dark min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h1 className="font-display text-4xl font-bold mb-8 text-white tracking-tight">SEBI Guidelines & Risk Disclosure</h1>
        <div className="text-white/70 space-y-8 font-light prose prose-invert max-w-none">
          <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl text-white/90">
            <h2 className="text-xl font-bold text-red-400 mb-4 tracking-tight">Mandatory SEBI Risk Disclosure</h2>
            <p className="text-sm font-medium mb-3 text-white/50">(As per SEBI Circular no. SEBI/HO/MIRSD/MIRSD-PoD-1/P/CIR/2023/71)</p>
            <ul className="list-disc pl-5 mt-3 space-y-2 font-medium">
              <li>9 out of 10 individual traders in equity Futures and Options Segment, incur net losses.</li>
              <li>On an average, loss makers register net trading loss close to ₹ 50,000.</li>
              <li>Over and above the net trading losses incurred, loss makers expend an additional 28% of net trading losses as transaction costs.</li>
              <li>Those making net trading profits, incur between 15% to 50% of such profits as transaction cost.</li>
            </ul>
          </div>
          
          <section className="space-y-4 pt-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">Registration Status & Intent</h2>
            <p>
              The Capital Guru serves as an educational research initiative. The information hosted here, including charts, technical structures, analytical breakdowns, and our Telegram updates, is designed strictly for educational and self-learning purposes.
            </p>
            <p className="font-medium text-gold-400">
              We are NOT a SEBI Registered Investment Advisor (RIA) or Research Analyst. The platform operators are currently pursuing the required certifications, but until officially certified by SEBI, no content should be considered specific financial advice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">Derivative Trading Risks</h2>
            <p>
              Trading in the Indian Futures and Options (F&O) market involves a high degree of leverage. Leverage can act against you as well as for you, and the risk of complete capital destruction exists. It is possible to lose more than your initial margin in certain volatile scenarios.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">Independent Decision Making</h2>
            <p>
              By accessing our dashboard or viewing our strategies, you acknowledge that you have read and understood this SEBI-mandated risk disclosure. Any financial commitments made in the indices or equity markets are your responsibility alone. Do your own research, and always consult a registered financial planner before exposing your portfolio to derivative risks.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
