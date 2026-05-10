"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Zap, BarChart3, LineChart, Target, Users, Star, HelpCircle } from "lucide-react";
import { motion } from "motion/react";
import { AppNavbar } from "@/components/AppNavbar";
import { AppFooter } from "@/components/AppFooter";
import { CheckoutButton } from "@/components/CheckoutButton";

export default function Home() {
  const stats = [
    { label: "Private Members", value: "765" },
    { label: "Trade Accuracy", value: "82%" },
    { label: "Daily Setups", value: "3-5" },
    { label: "Market Edge", value: "Institutional" }
  ];

  const features = [
    {
      title: "Real-time Signals",
      description: "Get instant alerts for NIFTY and BANKNIFTY options trades directly to your devices.",
      icon: <Zap className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Deep Technical Analysis",
      description: "Every signal comes with chart analysis, logic, and exact entry/exit/stop-loss levels.",
      icon: <BarChart3 className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Capital Protection",
      description: "Strict risk management protocols. We prioritize capital preservation over risky trades.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Live Market Support",
      description: "Our experts are available during market hours to answer your queries and guide you.",
      icon: <Target className="w-6 h-6 text-emerald-400" />
    }
  ];

  const plans = [
    {
      name: "Monthly",
      price: "₹2,499",
      period: "/month",
      description: "Perfect for beginners testing the waters.",
      features: ["1-2 Signals Daily", "Nifty & BankNifty Calls", "Basic Support", "Weekly Newsletter"],
      popular: false,
      buttonText: "Start Monthly",
      priceId: "monthly"
    },
    {
      name: "6 Months",
      price: "₹11,999",
      period: "/6 months",
      description: "For serious traders looking for consistent gains.",
      features: ["4-6 Signals Daily", "Nifty, BankNifty & FinNifty", "Priority Support", "Detailed Trade Logic", "Risk Management Guide"],
      popular: true,
      buttonText: "Get Semi-Annual Plan",
      priceId: "semi-annual"
    },
    {
      name: "12 Months",
      price: "₹19,999",
      period: "/12 months",
      description: "Ultimate value for full-time professional traders.",
      features: ["All Pro Features", "Stock Options Signals", "1-on-1 Mentorship (Monthly)", "Exclusive Wealth Webinars", "VIP Telegram Group"],
      popular: false,
      buttonText: "Join Annual Plan",
      priceId: "annual"
    }
  ];

  const faqs = [
    {
      q: "What is the accuracy of your signals?",
      a: "Our historical accuracy is between 80-85%. However, no strategy is 100% foolproof. We strictly adhere to risk management."
    },
    {
      q: "How much capital do I need to start?",
      a: "We recommend a minimum capital of ₹50,000 to trade our F&O signals safely with proper position sizing."
    },
    {
      q: "Where do I receive the signals?",
      a: "All premium members receive instantaneous signals via our dedicated VIP Telegram channels and Dashboard."
    },
    {
      q: "Do you offer refunds?",
      a: "Since this is a digital information service, we do not offer refunds. We recommend starting with a shorter plan if you are unsure."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-emerald-500/30 font-inter">
      <AppNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/40 via-black to-black -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium uppercase tracking-wide mb-8 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
          >
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
             </span>
             <span>Live NSE & BSE Signals</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-8xl font-space font-bold tracking-tight mb-8"
          >
            Master the Markets <br className="hidden md:block"/> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Precision.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Get high-accuracy Futures & Options signals for Indian markets. 
            Trade with confidence using our expert-curated technical setups.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="#pricing"
              className="group relative inline-flex items-center justify-center gap-2 bg-emerald-500 text-black px-8 py-4 rounded-full font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              <span className="relative">View Pricing Profiles</span> 
              <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/blogs"
              className="group inline-flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-zinc-800 w-full sm:w-auto"
            >
              Read Market Insights
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/5 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-space font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-sm md:text-base text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-space font-bold mb-6">Trade Smarter, Not Harder</h2>
            <p className="text-gray-400 text-lg">We do the heavy lifting of market analysis so you can execute stress-free.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-zinc-950 border border-white/5 p-8 rounded-3xl hover:border-emerald-500/30 transition-colors group"
              >
                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Telegram Mockup Section */}
      <section className="py-24 relative overflow-hidden bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-space font-bold mb-6">See our signals in action</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We deliver crisp, clear, and highly accurate trading setups directly to your Telegram. 
                No jargon, no confusion—just exact entry, stop-loss, and target levels so you can execute perfectly.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Clear Entry & Exit Parameters",
                  "Live Pattern Updates",
                  "Strict Stop Loss Rules",
                  "Trailing Profit Guidance"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mx-auto w-full max-w-sm"
            >
              {/* Phone Frame */}
              <div className="relative border-[8px] border-zinc-800 bg-zinc-900 rounded-[2.5rem] h-[600px] overflow-hidden shadow-2xl shadow-emerald-900/20">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-zinc-800 rounded-b-2xl w-40 mx-auto z-20"></div>
                
                {/* Chat Header */}
                <div className="bg-[#1c242f] p-4 flex items-center gap-3 border-b border-white/5 pt-8 z-10 relative">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">The Capital Guru VIP</h4>
                    <p className="text-emerald-400 text-xs">765 members</p>
                  </div>
                </div>

                {/* Chat Body */}
                <div className="bg-[#0f1621] h-full p-4 space-y-4 overflow-y-auto pb-20">
                  {/* Message 1 */}
                  <div className="bg-[#182533] p-3 rounded-2xl rounded-tl-sm w-[85%] mx-1">
                    <p className="text-[13px] text-white font-mono mb-2">⭐ BANKNIFTY 48500 CE</p>
                    <p className="text-[13px] text-gray-300 mb-1">BUY ABOVE: 320</p>
                    <p className="text-[13px] text-gray-300 mb-1">TARGET 1: 360</p>
                    <p className="text-[13px] text-gray-300 mb-1">TARGET 2: 420</p>
                    <p className="text-[13px] text-red-400">SL: 280</p>
                    <div className="flex justify-end mt-1">
                      <span className="text-[10px] text-gray-500">09:18 AM</span>
                    </div>
                  </div>

                  {/* Message 2 */}
                  <div className="bg-[#182533] p-3 rounded-2xl rounded-tl-sm w-[85%] mx-1">
                    <p className="text-[13px] text-emerald-400 font-bold mb-1">UPDATE 🚀</p>
                    <p className="text-[13px] text-gray-300">Target 1 HIT (360). Book 50% lots and trail SL to cost.</p>
                    <div className="flex justify-end mt-1">
                      <span className="text-[10px] text-gray-500">09:24 AM</span>
                    </div>
                  </div>

                  {/* Message 3 */}
                  <div className="bg-[#182533] p-3 rounded-2xl rounded-tl-sm w-[85%] mx-1">
                    <div className="w-full h-32 bg-zinc-800 rounded-lg mb-2 relative overflow-hidden">
                       <Image src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=400&h=300" alt="Chart" fill className="object-cover opacity-80" referrerPolicy="no-referrer" />
                       <div className="absolute inset-0 flex items-center justify-center">
                         <div className="bg-black/50 p-2 rounded-full backdrop-blur-sm">
                           <BarChart3 className="w-6 h-6 text-white" />
                         </div>
                       </div>
                    </div>
                    <p className="text-[13px] text-white font-mono mb-2">🔴 NIFTY 22400 PE</p>
                    <p className="text-[13px] text-gray-300 mb-1">Double top breakdown.</p>
                    <p className="text-[13px] text-gray-300 mb-1">BUY NEAR: 110-115</p>
                    <p className="text-[13px] text-gray-300 mb-1">TARGET: 150/180</p>
                    <p className="text-[13px] text-red-400">SL: 85 (Strict)</p>
                    <div className="flex justify-end mt-1">
                      <span className="text-[10px] text-gray-500">11:05 AM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-[40px] -z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-[50px] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-space font-bold mb-6">Traders Love Us</h2>
            <p className="text-gray-400 text-lg">Don't just take our word for it. Here's what our community has to say.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "I was blowing up my account every month before I joined The Capital Guru. Their strict risk management changed my entire psychology. Up 40% this quarter.",
                author: "Rahul S.",
                role: "Swing Trader",
                rating: 5,
                image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=100&h=100"
              },
              {
                text: "The accuracy of their BankNifty options calls is insane. I love how they provide the exact logic behind every trade so you actually learn while earning.",
                author: "Priya M.",
                role: "Intraday Trader",
                rating: 5,
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100"
              },
              {
                text: "Best decision I've made for my trading career. They don't just give signals; they handhold you through the volatility. The Telegram updates are blazing fast.",
                author: "Vikram D.",
                role: "Part-time Trader",
                rating: 5,
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-zinc-950/50 border border-white/5 p-8 rounded-3xl relative"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-emerald-400 fill-emerald-400" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <Image src={testimonial.image} alt={testimonial.author} fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative bg-zinc-950 mt-10">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-space font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-gray-400 text-lg">Choose the plan that fits your trading style and capital.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative p-8 rounded-3xl border ${plan.popular ? 'bg-emerald-900/10 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)]' : 'bg-black border-white/10'} flex flex-col h-full`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-space font-bold">{plan.price}</span>
                    <span className="text-gray-500 text-sm">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>

                <CheckoutButton 
                  priceId={plan.priceId}
                  planName={plan.name}
                  className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-emerald-500 text-black hover:bg-emerald-400' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-space font-bold mb-6">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-zinc-950 border border-white/5 rounded-2xl p-6"
              >
                <h4 className="flex items-center gap-3 text-lg font-bold mb-3">
                  <HelpCircle className="w-5 h-5 text-emerald-500" />
                  {faq.q}
                </h4>
                <p className="text-gray-400 pl-8 leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-950/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/20 rounded-full blur-[120px] -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-space font-bold mb-6">Ready to become a disciplined trader?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Stop gambling and start trading with an edge. Join our private group of elite members who have transformed their trading journey.
          </p>
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-400 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 transform"
          >
            Join The Community Today <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      <AppFooter />
    </main>
  );
}

