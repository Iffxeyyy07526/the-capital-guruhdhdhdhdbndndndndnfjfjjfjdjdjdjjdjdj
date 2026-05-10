import { LegalPageLayout } from "@/components/LegalPageLayout";

export default function DisclaimerPage() {
  return (
    <LegalPageLayout title="Disclaimer" lastUpdated="January 1, 2024">
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p className="font-semibold text-white text-lg">
          Trading and investing in the stock market (including equities, futures, and options) involves substantial risk of loss and is not suitable for every investor. The valuation of stocks, futures, and options may fluctuate, and, as a result, clients may lose more than their original investment. 
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Educational Purposes Only</h2>
        <p>
          All content provided by The Capital Guru, including but not limited to alerts, signals, chart analysis, webinars, blogs, and telegram messages, is for educational and informational purposes only. It should not be construed as investment or trading advice.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Past Performance</h2>
        <p>
          Past performance of any trading system or methodology is not necessarily indicative of future results. The hypothetical or past performance results have certain inherent limitations, and actual trading outcomes will vary. 
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Personal Responsibility</h2>
        <p>
          You are solely responsible for your own investment and trading decisions. We strongly encourage you to consult with a registered financial advisor or conduct your own thorough research before making any trading decisions. We do not guarantee any specific outcome or profit.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Accuracy of Information</h2>
        <p>
          While we strive to ensure that the information we provide is accurate, we cannot guarantee its complete accuracy. Market conditions change rapidly, and we do not assume liability for any errors or omissions in the information provided.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Affiliates and External Services</h2>
        <p>
          We may recommend or link to third-party services, such as brokers or charting software. We make no representations or warranties regarding these third parties and are not responsible for any losses incurred through their use.
        </p>
      </div>
    </LegalPageLayout>
  );
}
