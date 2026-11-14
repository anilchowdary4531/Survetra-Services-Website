"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Database, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Activity, 
  UtensilsCrossed, 
  Share2 
} from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-xl mx-auto h-[480px] lg:h-[540px] flex items-center justify-center select-none pointer-events-none lg:pointer-events-auto">
      {/* Background ambient radial gradients */}
      <div className="absolute w-[360px] h-[360px] rounded-full bg-survetra-violet/20 blur-3xl -top-10 -left-10 animate-pulse-slow" />
      <div className="absolute w-[360px] h-[360px] rounded-full bg-survetra-orange/15 blur-3xl -bottom-10 -right-10 animate-pulse-slow" />

      {/* Central Rotating Coordinate Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[380px] h-[380px] sm:w-[440px] sm:h-[440px] rounded-full border border-dashed border-white/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full border border-white/[0.08]"
      />

      {/* Center Core: Convergence Engine */}
      <div className="relative z-10 w-28 h-28 rounded-2xl bg-gradient-to-br from-[#1E2235] via-[#161926] to-[#10121C] border border-survetra-orange/40 shadow-glow-combined flex flex-col items-center justify-center p-3 text-center backdrop-blur-xl">
        <div className="relative">
          <Cpu className="w-8 h-8 text-survetra-orange animate-pulse" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
        </div>
        <span className="text-[10px] font-bold tracking-wider uppercase text-white mt-1.5 font-display">
          SURVETRA
        </span>
        <span className="text-[8px] text-survetra-muted tracking-widest uppercase">
          ENGINE
        </span>
      </div>

      {/* Floating Orbital Node 1: Tiffzy Ecosystem Node */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 right-6 sm:right-12 z-20"
      >
        <div className="px-4 py-3 rounded-2xl bg-[#161926]/90 border border-orange-500/30 shadow-card-subtle backdrop-blur-xl flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-survetra-orange">
            <UtensilsCrossed className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-white">Tiffzy Suite</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <span className="text-[10px] text-slate-400">2.5M+ Orders Handled</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Orbital Node 2: SocialSea Platform Node */}
      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-10 left-2 sm:left-6 z-20"
      >
        <div className="px-4 py-3 rounded-2xl bg-[#161926]/90 border border-violet-500/30 shadow-card-subtle backdrop-blur-xl flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-survetra-violet">
            <Share2 className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-white">SocialSea Mesh</span>
              <span className="text-[9px] px-1 rounded bg-violet-500/20 text-violet-300 font-mono">
                &lt;42ms
              </span>
            </div>
            <span className="text-[10px] text-slate-400">45K msg/s Stream</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Orbital Node 3: AI & Microservices Telemetry */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 -translate-y-1/2 -left-4 sm:left-0 z-20"
      >
        <div className="px-3.5 py-2.5 rounded-2xl bg-[#161926]/90 border border-white/10 shadow-card-subtle backdrop-blur-xl flex items-center gap-2.5">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <div>
            <div className="text-[11px] font-semibold text-white">AI Agent Mesh</div>
            <div className="text-[9px] text-emerald-400 font-mono">Deterministic 99.4%</div>
          </div>
        </div>
      </motion.div>

      {/* Floating Orbital Node 4: Cloud & Security Badge */}
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-4 right-4 sm:right-10 z-20"
      >
        <div className="px-3.5 py-2.5 rounded-2xl bg-[#161926]/90 border border-white/10 shadow-card-subtle backdrop-blur-xl flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <div>
            <div className="text-[11px] font-semibold text-white">Zero Trust Core</div>
            <div className="text-[9px] text-slate-400">ISO & SOC Certified</div>
          </div>
        </div>
      </motion.div>

      {/* Connective subtle SVG lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="50%" y1="50%" x2="75%" y2="18%" stroke="rgba(242,139,50,0.3)" strokeDasharray="3 3" />
        <line x1="50%" y1="50%" x2="25%" y2="78%" stroke="rgba(118,85,232,0.3)" strokeDasharray="3 3" />
        <line x1="50%" y1="50%" x2="16%" y2="50%" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" />
        <line x1="50%" y1="50%" x2="78%" y2="82%" stroke="rgba(16,185,129,0.3)" strokeDasharray="3 3" />
      </svg>
    </div>
  );
}

