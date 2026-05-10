import Link from "next/link";

interface LogoProps {
  className?: string;
  hideTextOnMobile?: boolean;
}

export function Logo({ className = "", hideTextOnMobile = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-4 group w-fit ${className}`}>
      <div className="relative flex items-center justify-center shrink-0">
        {/* Ambient Dark Premium Glow */}
        <div className="absolute inset-0 bg-emerald-500/10 blur-xl rounded-full group-hover:bg-emerald-400/20 transition-all duration-700 ease-out" />
        
        {/* Luxury Geometric CG Emblem */}
        <svg 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-11 h-11 relative z-10 transition-transform duration-700 ease-out group-hover:scale-105"
        >
          {/* Institutional 'C' - The Vault */}
          <path 
            d="M 38 12 L 18 12 C 11.372 12 6 17.372 6 24 C 6 30.627 11.372 36 18 36 L 42 36" 
            stroke="url(#emerald-gradient)" 
            strokeWidth="5" 
            strokeLinecap="square"
            className="drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]"
          />
          {/* Capital 'G' - The Growth Vector */}
          <path 
            d="M 42 36 L 42 24 L 28 24" 
            stroke="url(#platinum-gradient)" 
            strokeWidth="5" 
            strokeLinecap="square"
            strokeLinejoin="miter"
            className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          />
          
          <defs>
            <linearGradient id="emerald-gradient" x1="6" y1="12" x2="42" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10b981" />
              <stop offset="0.5" stopColor="#059669" />
              <stop offset="1" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="platinum-gradient" x1="28" y1="24" x2="42" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f8fafc" />
              <stop offset="1" stopColor="#94a3b8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className={`flex-col justify-center ${hideTextOnMobile ? 'hidden sm:flex' : 'flex'}`}>
        <span className="font-space font-bold tracking-[0.12em] text-white text-xl leading-tight pt-1">
          THE CAPITAL GURU
        </span>
        <span className="text-[9px] tracking-[0.35em] text-emerald-400/80 font-medium uppercase mt-0.5">
          Wealth Operating System
        </span>
      </div>
    </Link>
  );
}
