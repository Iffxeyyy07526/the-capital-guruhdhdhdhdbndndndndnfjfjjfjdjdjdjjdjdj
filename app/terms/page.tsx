import { LegalPageLayout } from "@/components/LegalPageLayout";

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms and Conditions" lastUpdated="January 1, 2024">
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing and using The Capital Guru (the "Website") and our Telegram channels, you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Services Description</h2>
        <p>
          The Capital Guru provides educational content, market analysis, and trading signals primarily focused on the Indian Stock Market (Nifty, BankNifty, options, and cash market). All information is for educational purposes only.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Subscription and Payments</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>All subscription fees are non-refundable once paid and access is granted.</li>
          <li>Payments are collected securely through UPI. Users must verify the correct merchant UPI before initiating a transaction.</li>
          <li>We reserve the right to change our subscription fees upon reasonable notice.</li>
          <li>Access to premium Telegram channels is strictly tied to your active subscription status.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. No Investment Advice / Risk Acknowledgment</h2>
        <p>
          The content provided by The Capital Guru does not constitute financial, investment, or trading advice. Trading in the stock market, especially derivatives (F&O), involves substantial risk of loss and is not suitable for every investor. You are solely responsible for your trading decisions.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. User Conduct</h2>
        <p>
          You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service, use of the Service, or access to the Service without express written permission by us. Forwarding our trading signals or premium content to non-members is strictly prohibited and will result in an immediate ban without a refund.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Limitation of Liability</h2>
        <p>
          In no event shall The Capital Guru, its directors, employees, or agents be liable for any direct, indirect, incidental, special, or consequential damages arising out of your use of or inability to use the service.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. Continued use of the platform constitutes your acceptance of the new terms.
        </p>
      </div>
    </LegalPageLayout>
  );
}
