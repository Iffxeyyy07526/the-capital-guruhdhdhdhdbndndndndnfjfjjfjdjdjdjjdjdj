'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ShieldAlert, CheckCircle2, Clock, Send, FileText, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

function DashboardContent() {
  const searchParams = useSearchParams();
  const status = searchParams?.get('status') || 'active'; // 'pending' | 'active' | 'expired'

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative z-10">
        <div>
          <h1 className="font-display text-4xl font-bold tracking-tight mb-2 text-white">Client Portal</h1>
          <p className="text-white/50 font-light">Welcome back. Here is your account overview.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-brand-black/80 backdrop-blur-md border border-white/5 px-5 py-3 rounded-[2rem] shadow-xl">
            <span className="text-sm text-white/50 uppercase tracking-widest font-semibold text-[10px]">Status</span>
            {status === 'pending' && (
              <span className="inline-flex items-center gap-1.5 text-gold-500 text-sm font-medium">
                <Clock className="w-4 h-4" /> Pending
              </span>
            )}
            {status === 'active' && (
              <span className="inline-flex items-center gap-1.5 text-green-500 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4" /> Active
              </span>
            )}
            {status === 'expired' && (
              <span className="inline-flex items-center gap-1.5 text-red-500 text-sm font-medium">
                <ShieldAlert className="w-4 h-4" /> Expired
              </span>
            )}
          </div>
          <button
            onClick={() => {
              document.cookie = "isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
              window.location.href = '/login';
            }}
            className="px-5 py-3 rounded-[2rem] border border-white/10 bg-white/5 font-medium text-white/70 hover:text-white hover:bg-white/10 transition-colors text-sm"
          >
            Logout
          </button>
        </div>
      </div>

      {status === 'pending' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gold-500/5 border border-gold-500/20 rounded-2xl p-6 mb-12 flex flex-col md:flex-row gap-6 items-start md:items-center relative overflow-hidden backdrop-blur-sm"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-gold-500" />
          <Clock className="w-8 h-8 text-gold-500 shrink-0" />
          <div>
            <h3 className="text-lg font-medium text-gold-500 mb-1">Verification in Progress</h3>
            <p className="text-sm font-light text-gold-500/70 leading-relaxed">
              Your payment and details have been received. Our team is manually verifying the transaction. 
              You will receive an email and WhatsApp confirmation once approved (usually within 2-4 hours).
            </p>
          </div>
        </motion.div>
      )}

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        
        {/* Main Content - Signals & Links */}
        <div className="md:col-span-2 space-y-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-brand-gray/30 backdrop-blur-md border border-white/5 rounded-3xl p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50" />
            
            <h2 className="text-2xl font-bold mb-4 font-display">Telegram Access</h2>
            <p className="text-sm font-light text-white/50 mb-8 max-w-md leading-relaxed">
              Real-time actionable signals are delivered exclusively via our private Telegram channel for instant execution.
            </p>
            <a 
              href={status === 'active' ? 'https://t.me/thecapitalgurusupport' : '#'}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-sm text-sm font-bold transition-all duration-300 relative overflow-hidden ${
                status === 'active' 
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:scale-[1.02]' 
                  : 'bg-white/5 text-white/30 border border-white/5 cursor-not-allowed'
              }`}
            >
              {status === 'active' && <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />}
              <span className="relative flex items-center gap-2">
                <Send className="w-4 h-4" />
                Join The Platinum Channel
              </span>
            </a>
            {status !== 'active' && (
              <p className="text-xs font-light text-white/30 mt-4 uppercase tracking-widest">Link unlocks when subscription is active</p>
            )}
          </motion.div>

          <div className="bg-brand-black/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8">
            <h2 className="text-xl font-bold mb-6 text-white font-display">Recent Market Updates</h2>
            
            <div className="space-y-4">
              {[
                { title: 'NIFTY Pre-Market Bias: Bullish', time: 'Today, 8:45 AM', type: 'Analysis' },
                { title: 'BANKNIFTY 45000 CE Target Hit', time: 'Yesterday, 2:15 PM', type: 'Result' },
              ].map((update, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                  <div>
                    <span className="text-[10px] text-gold-400 font-bold tracking-widest uppercase mb-2 block">{update.type}</span>
                    <h4 className="text-sm font-medium text-white/90">{update.title}</h4>
                  </div>
                  <span className="text-xs font-light text-white/40 mt-3 sm:mt-0">{update.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar - Educational & Profile */}
        <div className="space-y-8">
          <div className="bg-brand-gray/30 backdrop-blur-md border border-white/5 rounded-3xl p-8">
            <h2 className="text-lg font-bold mb-6 text-white flex items-center gap-2 font-display">
              <FileText className="w-5 h-5 text-gold-500" />
              Resources
            </h2>
            <ul className="space-y-1">
              {[
                'Trader Psychology Guide',
                'Risk Management Calculator',
                'Educational Archive'
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="py-3 text-sm font-light text-white/50 hover:text-gold-400 flex items-center justify-between group transition-colors border-b border-white/5 last:border-0">
                    <span>{item}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand-black/50 backdrop-blur-sm border border-brand-border rounded-3xl p-8">
            <h2 className="text-sm font-bold tracking-widest uppercase mb-6 text-white/80">Account Details</h2>
            <div className="space-y-5">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-1">Email</span>
                <span className="text-sm font-medium text-white/90">trader@example.com</span>
              </div>
              <div className="w-full h-px bg-white/5" />
              <div>
                <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-1">Telegram ID</span>
                <span className="text-sm font-medium text-white/90">@trader_pro</span>
              </div>
              <div className="w-full h-px bg-white/5" />
              <div>
                <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-1">Plan Valid Till</span>
                <span className="text-sm font-medium text-white/90">
                  {status === 'active' ? 'Oct 24, 2026' : '—'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function DashboardPage() {
  return (
    <div className="py-16 md:py-24 relative overflow-hidden min-h-screen">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <Suspense fallback={<div className="h-[60vh] flex items-center justify-center text-white/40 tracking-widest uppercase text-sm font-light">Loading portal...</div>}>
          <DashboardContent />
        </Suspense>
      </div>
    </div>
  );
}
