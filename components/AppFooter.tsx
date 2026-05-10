"use client";

import { TrendingUp } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

import { Logo } from "./Logo";

export function AppFooter() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-white/10 bg-black pt-16 pb-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-900/10 via-black to-black -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <Logo className="mb-6" hideTextOnMobile={false} />
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Premium F&O trading signals for the Indian stock market. Join our community and trade smarter.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="mailto:mahir@thecapitalguru.net" className="hover:text-emerald-400 transition">Email: mahir@thecapitalguru.net</a></li>
                <li><a href="https://t.me/TheCapitalGuruSupport" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition">Telegram: @TheCapitalGuruSupport</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-emerald-400 transition">About Us</Link></li>
                <li><Link href="/blogs" className="hover:text-emerald-400 transition">Blogs</Link></li>
                <li><a href="https://wa.me/919106713107" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition">WhatsApp: +91 9106713107</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/terms" className="hover:text-emerald-400 transition">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="hover:text-emerald-400 transition">Privacy Policy</Link></li>
                <li><Link href="/disclaimer" className="hover:text-emerald-400 transition">Disclaimer</Link></li>
                <li><Link href="/sebi" className="hover:text-emerald-400 transition">SEBI Guidelines</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} The Capital Guru. All rights reserved.</p>
          <p>Disclaimer: Trading in securities market are subject to market risks. Read all related documents carefully before investing.</p>
        </div>
      </div>
    </motion.footer>
  );
}
