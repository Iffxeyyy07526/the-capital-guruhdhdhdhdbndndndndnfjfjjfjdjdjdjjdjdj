'use client';
import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  variant?: 'wordmark' | 'monogram';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Logo({ className = '', variant = 'wordmark', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12',
    xl: 'h-16',
  };

  const monogramSizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  if (variant === 'monogram') {
    return (
      <div className={`relative flex items-center justify-center ${monogramSizeClasses[size]} ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg shadow-[0_0_20px_rgba(212,175,55,0.2)]" />
        <div className="absolute inset-[1px] bg-brand-black rounded-[7px]" />
        <span className="relative z-10 font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-gold-300 to-gold-600 tracking-tighter leading-none" style={{ fontSize: size === 'xl' ? '2.5rem' : size === 'lg' ? '1.5rem' : '1rem' }}>
          CG
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative flex items-center justify-center shrink-0 ${sizeClasses[size]} aspect-square`}>
        <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-600 rounded-sm" />
        <div className="absolute inset-[1.5px] bg-brand-black rounded-[1px] flex items-center justify-center">
            <span className="text-[10px] font-display font-black text-gold-500 leading-none">C</span>
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display font-black tracking-tighter text-white uppercase" style={{ fontSize: size === 'xl' ? '1.5rem' : size === 'lg' ? '1.25rem' : '1.1rem' }}>
          THE CAPITAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600">GURU</span>
        </span>
        <span className="text-[8px] tracking-[0.25em] text-white/40 font-bold uppercase mt-1">Institutional Grade Edge</span>
      </div>
    </div>
  );
}
