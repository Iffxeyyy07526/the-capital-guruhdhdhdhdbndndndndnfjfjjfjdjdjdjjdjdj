"use client";

import Link from "next/link";
import { TrendingUp, Menu, X, User } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { supabase } from "@/lib/supabase";
import { Logo } from "./Logo";

export function AppNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Initial fetch
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
    });

    // Listen for changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo hideTextOnMobile={false} />
          <div className="hidden sm:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <Link href="/#pricing" className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors">
                About Us
              </Link>
              <Link href="/blogs" className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors">
                Blogs
              </Link>
              {user && (
                <Link href="/dashboard" className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors">
                  Dashboard
                </Link>
              )}
            </div>
            
            {user ? (
               <Link
               href="/dashboard"
               className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-white/5 rounded-full text-sm font-bold hover:bg-zinc-800 transition-colors"
             >
               <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                 <User className="w-3 h-3 text-emerald-400" />
               </div>
             </Link>
            ) : (
              <Link
                href="/register"
                className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-400 hover:text-black transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              >
                Sign Up
              </Link>
            )}
          </div>
          <div className="sm:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="sm:hidden border-t border-white/10 overflow-hidden bg-black/95 backdrop-blur-xl"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              <Link href="/#pricing" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-gray-300 hover:text-emerald-400">
                Pricing
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-gray-300 hover:text-emerald-400">
                About Us
              </Link>
              <Link href="/blogs" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-gray-300 hover:text-emerald-400">
                Blogs
              </Link>
              {user && (
                <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-gray-300 hover:text-emerald-400">
                  Dashboard
                </Link>
              )}
              {user ? (
                 <Link
                 href="/dashboard"
                 onClick={() => setMobileMenuOpen(false)}
                 className="bg-emerald-500 text-black px-6 py-3 rounded-xl text-center text-sm font-bold w-full mt-4"
               >
                 Dashboard
               </Link>
              ) : (
                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-emerald-500 text-black px-6 py-3 rounded-xl text-center text-sm font-bold w-full mt-4"
                >
                  Sign Up
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
