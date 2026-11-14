"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";
import { 
  getAdminSession, 
  clearAdminSession, 
  AdminUser 
} from "@/lib/adminAuth";
import { 
  LayoutDashboard, 
  Package, 
  Briefcase, 
  Server, 
  Building2, 
  FileText, 
  Users, 
  GraduationCap, 
  Inbox, 
  MessageSquare, 
  Image, 
  Search, 
  Compass, 
  Settings, 
  UserCheck, 
  ShieldAlert, 
  LogOut, 
  ExternalLink, 
  ChevronRight, 
  Bell, 
  Menu, 
  X,
  Layers
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<AdminUser | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/admin/login") return;

    const session = getAdminSession();
    if (!session) {
      router.push("/admin/login");
    } else {
      setUser(session);
    }
  }, [pathname, router]);

  const handleLogout = () => {
    clearAdminSession();
    router.push("/admin/login");
  };

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const navSections = [
    {
      title: "Overview",
      items: [
        { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
      ],
    },
    {
      title: "Ecosystem & Solutions",
      items: [
        { label: "Products", href: "/admin/products", icon: Package },
        { label: "Projects", href: "/admin/projects", icon: Briefcase },
        { label: "Services", href: "/admin/services", icon: Server },
        { label: "Industries", href: "/admin/industries", icon: Building2 },
        { label: "Case Studies", href: "/admin/case-studies", icon: FileText },
      ],
    },
    {
      title: "Talent & Inquiries",
      items: [
        { label: "Careers", href: "/admin/careers", icon: GraduationCap },
        { label: "Job Applications", href: "/admin/applications", icon: Inbox },
        { label: "Enquiries", href: "/admin/enquiries", icon: MessageSquare },
        { label: "Leadership & Team", href: "/admin/leadership", icon: Users },
      ],
    },
    {
      title: "Content & Assets",
      items: [
        { label: "Insights & Articles", href: "/admin/insights", icon: FileText },
        { label: "Media Library", href: "/admin/media", icon: Image },
      ],
    },
    {
      title: "Platform & Security",
      items: [
        { label: "SEO Management", href: "/admin/seo", icon: Search },
        { label: "Navigation Items", href: "/admin/navigation", icon: Compass },
        { label: "Website Settings", href: "/admin/settings", icon: Settings },
        { label: "User Management", href: "/admin/users", icon: UserCheck },
        { label: "Audit Logs", href: "/admin/audit-logs", icon: ShieldAlert },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0C0E17] text-white flex flex-col md:flex-row antialiased">
      {/* Mobile Top Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-[#10121C] border-b border-white/10 sticky top-0 z-50">
        <BrandLogo />
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-xl bg-white/[0.05] border border-white/10"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-40 h-screen w-72 bg-[#10121C] border-r border-white/[0.08] flex flex-col justify-between transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full overflow-hidden">
          {/* Logo & Environment Badge */}
          <div className="p-6 border-b border-white/[0.08] flex items-center justify-between">
            <BrandLogo />
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Admin
            </span>
          </div>

          {/* Navigation Links Scrollable Area */}
          <div className="flex-grow overflow-y-auto px-4 py-4 space-y-6">
            {navSections.map((sec, idx) => (
              <div key={idx} className="space-y-1">
                <div className="px-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                  {sec.title}
                </div>
                {sec.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                        isActive
                          ? "bg-survetra-orange text-white shadow-md shadow-orange-500/20 font-semibold"
                          : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>

          {/* User Profile & Logout */}
          <div className="p-4 border-t border-white/[0.08] bg-[#0C0E17]/50 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-xs font-bold text-survetra-orange">
                  {user?.firstName?.charAt(0) || "A"}
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-semibold text-white truncate">
                    {user?.firstName} {user?.lastName}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {user?.role || "SUPER_ADMIN"}
                  </div>
                </div>
              </div>

              <button
                onClick={handleLogout}
                title="Sign Out"
                className="p-2 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>

            <Link
              href="/"
              target="_blank"
              className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-[11px] text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 transition-colors"
            >
              <span>View Public Website</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Pane */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Header Bar */}
        <header className="h-16 border-b border-white/[0.08] bg-[#10121C]/50 backdrop-blur-xl px-6 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Administration</span>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-white font-medium capitalize">
              {pathname.replace("/admin/", "").replace(/-/g, " ") || "Dashboard"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-survetra-orange font-mono">
              Role: {user?.role || "SUPER_ADMIN"}
            </span>
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Database Connected" />
          </div>
        </header>

        {/* Dynamic Route Body */}
        <div className="p-6 md:p-8 space-y-8 flex-1">{children}</div>
      </main>
    </div>
  );
}

