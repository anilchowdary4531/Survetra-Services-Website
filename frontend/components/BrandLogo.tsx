import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function BrandLogo({ className = "", showTagline = false }: BrandLogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`} aria-label="Survetra Services Home">
      <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#1E2235] via-[#161926] to-[#10121C] border border-white/10 group-hover:border-survetra-orange/50 transition-all duration-300 shadow-md group-hover:shadow-glow-orange/20 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-survetra-orange/10 via-transparent to-survetra-violet/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Modern geometric vector glyph: Intersecting S and V technology convergence */}
        <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6 transform group-hover:scale-105 transition-transform duration-300">
          <path
            d="M6 10C6 7.79086 7.79086 6 10 6H20C21.1046 6 22 6.89543 22 8C22 9.10457 21.1046 10 20 10H10C8.89543 10 8 10.8954 8 12C8 13.1046 8.89543 14 10 14H22C24.2091 14 26 15.7909 26 18C26 20.2091 24.2091 22 22 22H12C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18H22C23.1046 18 24 17.1046 24 16"
            stroke="url(#survetra-grad-orange)"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 24L16 14L23 24"
            stroke="url(#survetra-grad-violet)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.85"
          />
          <circle cx="16" cy="14" r="2.2" fill="#F28B32" />
          <defs>
            <linearGradient id="survetra-grad-orange" x1="6" y1="6" x2="26" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F28B32" />
              <stop offset="1" stopColor="#FFAA64" />
            </linearGradient>
            <linearGradient id="survetra-grad-violet" x1="9" y1="14" x2="23" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9A81F0" />
              <stop offset="1" stopColor="#7655E8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col">
        <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-white/95 transition-colors">
          SURVETRA<span className="text-survetra-orange ml-0.5">.</span>
        </span>
        {showTagline ? (
          <span className="text-[10px] tracking-widest uppercase text-survetra-muted font-medium">
            Services
          </span>
        ) : null}
      </div>
    </Link>
  );
}

