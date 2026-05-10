import { LegalPageLayout } from "@/components/LegalPageLayout";

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="January 1, 2024">
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          At The Capital Guru, we take your privacy seriously. This Privacy Policy outlines the types of personal information we receive and collect when you use our website, services, and Telegram channels, as well as some of the steps we take to safeguard information.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
        <p>
          We may collect the following types of information:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Personal Information:</strong> Name, email address, phone number, and Telegram ID provided during registration and payment processing.</li>
          <li><strong>Usage Data:</strong> Information on how you interact with our website.</li>
          <li><strong>Payment Information:</strong> We do not store your financial details. Primary transaction data like UTR numbers are verified manually for subscription activation.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. How We Use Your Information</h2>
        <p>
          Any of the information we collect from you may be used in one of the following ways:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>To personalize your experience.</li>
          <li>To process transactions and activate subscriptions.</li>
          <li>To send periodic emails or Telegram notifications regarding your account or market updates.</li>
          <li>To improve our website and customer service.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Data Protection</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Third-Party Links</h2>
        <p>
          Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We, therefore, have no responsibility or liability for the content and activities of these linked sites.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Your Consent</h2>
        <p>
          By using our site and services, you consent to our online privacy policy.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Contact Us</h2>
        <p>
          If there are any questions regarding this privacy policy, you may contact us via email at mahir@thecapitalguru.net or via our support Telegram channel.
        </p>
      </div>
    </LegalPageLayout>
  );
}
