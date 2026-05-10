"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  loadingText?: string;
  setLoadingText: (text: string) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  setLoading: () => {},
  loadingText: "Processing",
  setLoadingText: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Processing");
  const pathname = usePathname();

  // Reset loading state on route change completion
  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading: setIsLoading, loadingText, setLoadingText }}>
      {children}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 transition-all"
          >
            <div className="flex flex-col items-center gap-8 p-10 rounded-3xl bg-[#0a0a0a] border border-white/5 shadow-[0_0_100px_rgba(16,185,129,0.05)] max-w-sm w-full text-center">
              {/* Luxury Geometric CG Emblem Spinner */}
              <div className="relative flex items-center justify-center shrink-0 w-20 h-20">
                <div className="absolute inset-0 bg-emerald-500/10 blur-xl rounded-full animate-pulse" />
                <svg 
                  viewBox="0 0 48 48" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full relative z-10 animate-[spin_3s_cubic-bezier(0.4,0,0.2,1)_infinite]"
                >
                  <path 
                    d="M 38 12 L 18 12 C 11.372 12 6 17.372 6 24 C 6 30.627 11.372 36 18 36 L 42 36" 
                    stroke="url(#emerald-gradient-loading)" 
                    strokeWidth="3.5" 
                    strokeLinecap="square"
                    className="drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]"
                  />
                  <path 
                    d="M 42 36 L 42 24 L 28 24" 
                    stroke="url(#platinum-gradient-loading)" 
                    strokeWidth="3.5" 
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                  />
                  <defs>
                    <linearGradient id="emerald-gradient-loading" x1="6" y1="12" x2="42" y2="36" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#10b981" />
                      <stop offset="0.5" stopColor="#059669" />
                      <stop offset="1" stopColor="#047857" />
                    </linearGradient>
                    <linearGradient id="platinum-gradient-loading" x1="28" y1="24" x2="42" y2="36" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ffffff" />
                      <stop offset="1" stopColor="#94a3b8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col items-center gap-3">
                <span className="font-space font-bold tracking-[0.25em] text-white/90 text-sm uppercase">
                  {loadingText}
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </LoadingContext.Provider>
  );
}
