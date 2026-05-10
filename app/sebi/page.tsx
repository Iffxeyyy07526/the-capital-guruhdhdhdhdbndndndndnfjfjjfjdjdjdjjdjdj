import { LegalPageLayout } from "@/components/LegalPageLayout";

export default function SebiGuidelinesPage() {
  return (
    <LegalPageLayout title="SEBI Guidelines & Disclosures" lastUpdated="January 1, 2024">
      <div className="space-y-6 text-gray-300 leading-relaxed">
        
        <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-2xl mb-8">
          <h2 className="text-xl font-bold text-red-400 mb-2">Important SEBI Disclosure</h2>
          <p className="text-white">
            <strong>The Capital Guru is NOT an SEBI registered investment advisor or research analyst.</strong>
          </p>
          <p className="mt-2 text-sm text-gray-300">
            All the views and information shared on this website, associated Telegram channels, WhatsApp, or any other medium are strictly for educational and sharing purposes only. 
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Regulatory Compliance</h2>
        <p>
          As per SEBI (Research Analysts) Regulations, 2014 and SEBI (Investment Advisers) Regulations, 2013, providing specific buy/sell/hold recommendations for financial consideration without being registered is prohibited. The Capital Guru operates strictly as an educational platform teaching chart patterns, price action, and market study. 
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Nature of Guidance</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>We share our personal trades, view, and analysis for case studies so that members can learn the methodology.</li>
          <li>We do NOT provide portfolio management services (PMS) or handle clients' funds in any capacity.</li>
          <li>We do NOT promise fixed returns or guaranteed profits under any circumstances.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. F&O Trading Risk Disclosure (SEBI Mandated)</h2>
        <p>
          As mandated by the Securities and Exchange Board of India (SEBI), all investors must be aware of the following statistics regarding Equity Derivatives (F&O) segment:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li><strong>9 out of 10 individual traders</strong> in equity Futures and Options Segment incur net losses.</li>
          <li>On average, loss makers register net trading loss close to <strong>₹50,000</strong>.</li>
          <li>Over and above the net trading losses incurred, loss makers expend an additional <strong>28%</strong> of net trading losses as transaction costs.</li>
          <li>Those making net trading profits incur between <strong>15% to 50%</strong> of such profits as transaction cost.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Conflict of Interest</h2>
        <p>
          The individuals running The Capital Guru may or may not hold positions in the stocks or instruments discussed. Our analysis is unbiased and based on technical metrics, but users should consider this potential conflict of interest.
        </p>
        
        <p className="mt-8 text-sm text-gray-400 border-t border-white/10 pt-6">
          By proceeding with any of our services, you acknowledge that you have read and understood these disclosures and accept that any trading decisions you make are completely your own responsibility.
        </p>

      </div>
    </LegalPageLayout>
  );
}
