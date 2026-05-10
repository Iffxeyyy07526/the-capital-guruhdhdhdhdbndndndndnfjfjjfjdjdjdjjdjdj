import { LegalPageLayout } from "@/components/LegalPageLayout";
import { TrendingUp, Target, Shield, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <LegalPageLayout title="About The Capital Guru" lastUpdated="January 1, 2024">
      <div className="space-y-12 text-gray-300 leading-relaxed">
        
        {/* Mission Statement */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-500/10 rounded-xl">
              <Target className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-space font-bold text-white">Our Mission</h2>
          </div>
          <p className="text-lg">
            At The Capital Guru, we are dedicated to transforming retail traders into disciplined, consistent market participants. Our mission is to bridge the gap between institutional strategies and retail execution by providing high-quality, actionable educational insights into the Indian Stock Market.
          </p>
        </section>

        {/* What We Do */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-500/10 rounded-xl">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-space font-bold text-white">What We Do</h2>
          </div>
          <p className="mb-4">
            We specialize in Futures & Options (F&O) within the Indian market indices, primarily Nifty50, BankNifty, and FinNifty. Instead of just giving blind signals, our focus is on:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Logic-Driven Trading:</strong> Explaining the "why" behind every market move using price action.</li>
            <li><strong>Risk Management:</strong> Teaching traders how to protect capital before seeking profits.</li>
            <li><strong>Market Psychology:</strong> Helping members conquer the emotional hurdles of trading.</li>
          </ul>
        </section>

        {/* Why Choose Us */}
        <section>
           <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-500/10 rounded-xl">
              <Shield className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-space font-bold text-white">Why Choose Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 bg-zinc-900 border border-white/5 rounded-2xl">
              <h3 className="font-bold text-white mb-2">Transparency</h3>
              <p className="text-sm">We share both our winning and losing trades. We believe in authenticity over hype.</p>
            </div>
            <div className="p-6 bg-zinc-900 border border-white/5 rounded-2xl">
              <h3 className="font-bold text-white mb-2">Community Driven</h3>
              <p className="text-sm">Join a vibrant community of like-minded individuals focused on collective growth.</p>
            </div>
          </div>
        </section>

      </div>
    </LegalPageLayout>
  );
}
