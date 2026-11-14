"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Layers, 
  Cpu, 
  Compass, 
  UtensilsCrossed, 
  Share2, 
  Sparkles 
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setProductsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services", hasDropdown: true },
    { label: "Industries", href: "/industries" },
    { label: "Products", href: "/products", hasDropdown: true },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Insights", href: "/insights" },
    { label: "Careers", href: "/careers" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#10121C]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <BrandLogo showTagline={true} />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              if (link.label === "Products") {
                return (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <Link
                      href="/products"
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        isActive
                          ? "text-survetra-orange bg-white/[0.04]"
                          : "text-slate-300 hover:text-white hover:bg-white/[0.03]"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    </Link>

                    {/* Products Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-1 w-80 p-3 rounded-2xl bg-[#161926]/95 backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-200 ${
                        productsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="p-2 border-b border-white/5 mb-2">
                        <span className="text-[11px] font-semibold tracking-wider text-survetra-muted uppercase">
                          Our Ecosystem Products
                        </span>
                      </div>
                      <Link
                        href="/products/tiffzy"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group/item"
                      >
                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-survetra-orange mt-0.5 group-hover/item:scale-105 transition-transform">
                          <UtensilsCrossed className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover/item:text-survetra-orange transition-colors flex items-center gap-2">
                            Tiffzy
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-normal">
                              Live
                            </span>
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                            Restaurant & food service management ecosystem.
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/products/socialsea"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group/item"
                      >
                        <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-survetra-violet mt-0.5 group-hover/item:scale-105 transition-transform">
                          <Share2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover/item:text-survetra-violet transition-colors flex items-center gap-2">
                            SocialSea
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 font-normal">
                              Beta
                            </span>
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                            High-engagement community & social networking platform.
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/products/survetra-nexus"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group/item"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mt-0.5 group-hover/item:scale-105 transition-transform">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover/item:text-blue-400 transition-colors flex items-center gap-2">
                            Survetra Nexus
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-normal">
                              R&D
                            </span>
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                            Autonomous AI agent orchestration fabric.
                          </div>
                        </div>
                      </Link>

                      <div className="mt-2 pt-2 border-t border-white/5 px-2">
                        <Link
                          href="/products"
                          className="text-xs text-survetra-orange hover:text-survetra-orange-light font-medium flex items-center justify-between"
                        >
                          View All Products
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              if (link.label === "Services") {
                return (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href="/services"
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        isActive
                          ? "text-survetra-orange bg-white/[0.04]"
                          : "text-slate-300 hover:text-white hover:bg-white/[0.03]"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    </Link>

                    {/* Services Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-1 w-[460px] p-4 rounded-2xl bg-[#161926]/95 backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-200 ${
                        servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="p-2 border-b border-white/5 mb-3">
                        <span className="text-[11px] font-semibold tracking-wider text-survetra-muted uppercase">
                          Core Capabilities & Engineering Studios
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          href="/services/ai-and-machine-learning"
                          className="p-2 rounded-xl hover:bg-white/[0.05] transition-colors group/item"
                        >
                          <div className="text-xs font-semibold text-white group-hover/item:text-survetra-orange transition-colors">
                            AI & Machine Learning
                          </div>
                          <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                            Predictive intelligence & MLOps.
                          </p>
                        </Link>
                        <Link
                          href="/services/generative-ai-and-llm"
                          className="p-2 rounded-xl hover:bg-white/[0.05] transition-colors group/item"
                        >
                          <div className="text-xs font-semibold text-white group-hover/item:text-survetra-orange transition-colors">
                            Generative AI & LLMs
                          </div>
                          <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                            Fine-tuning & enterprise guardrails.
                          </p>
                        </Link>
                        <Link
                          href="/services/rag-and-ai-agents"
                          className="p-2 rounded-xl hover:bg-white/[0.05] transition-colors group/item"
                        >
                          <div className="text-xs font-semibold text-white group-hover/item:text-survetra-orange transition-colors">
                            RAG & Autonomous Agents
                          </div>
                          <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                            Deterministic knowledge tools.
                          </p>
                        </Link>
                        <Link
                          href="/services/backend-engineering"
                          className="p-2 rounded-xl hover:bg-white/[0.05] transition-colors group/item"
                        >
                          <div className="text-xs font-semibold text-white group-hover/item:text-survetra-orange transition-colors">
                            Backend Microservices
                          </div>
                          <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                            High-throughput Java & Go.
                          </p>
                        </Link>
                        <Link
                          href="/services/cloud-and-devops"
                          className="p-2 rounded-xl hover:bg-white/[0.05] transition-colors group/item"
                        >
                          <div className="text-xs font-semibold text-white group-hover/item:text-survetra-orange transition-colors">
                            Cloud & DevOps
                          </div>
                          <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                            Kubernetes, AWS/GCP & IaC.
                          </p>
                        </Link>
                        <Link
                          href="/services/web-application-development"
                          className="p-2 rounded-xl hover:bg-white/[0.05] transition-colors group/item"
                        >
                          <div className="text-xs font-semibold text-white group-hover/item:text-survetra-orange transition-colors">
                            Modern Web Apps
                          </div>
                          <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                            Next.js, TypeScript, React.
                          </p>
                        </Link>
                      </div>

                      <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between px-2">
                        <Link
                          href="/innovation"
                          className="text-xs text-survetra-violet hover:text-survetra-violet-light font-medium flex items-center gap-1"
                        >
                          Explore Innovation Lab
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                        <Link
                          href="/services"
                          className="text-xs text-survetra-orange hover:text-survetra-orange-light font-medium flex items-center gap-1"
                        >
                          All 11 Services
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-survetra-orange bg-white/[0.04]"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Contact Button & Admin Link */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/admin/login"
              className="text-xs text-slate-400 hover:text-slate-200 transition-colors font-medium px-2 py-1 rounded"
              title="Employee & Admin Portal"
            >
              Portal
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-survetra-orange to-[#F59E0B] hover:brightness-110 active:scale-[0.98] transition-all duration-200 shadow-md shadow-orange-500/20"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#10121C]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            <Link
              href="/about"
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-white/[0.05]"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-white/[0.05]"
            >
              Services & Capabilities
            </Link>
            <Link
              href="/industries"
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-white/[0.05]"
            >
              Industries
            </Link>
            <Link
              href="/products"
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-white/[0.05]"
            >
              Products Portfolio (Tiffzy & SocialSea)
            </Link>
            <Link
              href="/case-studies"
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-white/[0.05]"
            >
              Case Studies
            </Link>
            <Link
              href="/innovation"
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-white/[0.05]"
            >
              Innovation Lab
            </Link>
            <Link
              href="/insights"
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-white/[0.05]"
            >
              Insights & Articles
            </Link>
            <Link
              href="/leadership"
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-white/[0.05]"
            >
              Leadership
            </Link>
            <Link
              href="/careers"
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-white/[0.05]"
            >
              Careers
            </Link>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-survetra-orange to-[#F59E0B] shadow-md shadow-orange-500/20"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/admin/login"
              className="w-full text-center py-2.5 text-xs text-slate-400 hover:text-slate-200 rounded-lg bg-white/[0.02] border border-white/5"
            >
              Admin & Staff Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

