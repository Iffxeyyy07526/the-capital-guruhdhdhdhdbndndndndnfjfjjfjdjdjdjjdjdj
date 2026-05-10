export default function NDAPage() {
  return (
    <div className="py-24 bg-brand-dark min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-600/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h1 className="font-display text-4xl font-bold mb-8 text-gold-500 tracking-tight">Non-Disclosure Agreement (NDA)</h1>
        <div className="text-white/70 space-y-8 font-light prose prose-invert max-w-none">
          <p className="text-lg">Last updated: {new Date().toLocaleDateString()}</p>
          
          <p>
            This Digital Non-Disclosure Agreement defines the confidential boundaries between The Capital Guru (the &quot;Disclosing Party&quot;) and you, the user/subscriber (the &quot;Receiving Party&quot;). Upon purchasing a subscription or accessing our services, you mathematically agree to these stipulations.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">1. Definition of Confidential Information</h2>
            <p>
              &quot;Confidential Information&quot; refers to any proprietary system, algorithms, specific market setups, entry/exit calls, educational documents, videos, and private Telegram channel contents shared under the purview of your subscription.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">2. Strict Prohibition on Sharing</h2>
            <p>
              The Receiving Party agrees not to reproduce, screenshot, screen-record, forward, publish, or redistribute any Confidential Information to public forums, other trading communities, or individuals who do not possess an active subscription with The Capital Guru.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/10 pb-2">3. Consequences of Breach</h2>
            <p>
              If our systems detect anomalous activity bridging this agreement (e.g., automated scraping, synchronized IP switching, or public leaks tracing back to your identifier), your access will be instantly and permanently revoked without a refund. We reserve the right to pursue civil damages for intellectual property theft.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
