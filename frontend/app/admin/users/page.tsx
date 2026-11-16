"use client";

import React, { useState } from "react";
import { UserCheck, Plus, Edit3, Shield, Key, Trash2 } from "lucide-react";

interface AdminUserRecord {
  id: string;
  name: string;
  email: string;
  role: "SUPER_ADMIN" | "CONTENT_MANAGER" | "HR_MANAGER" | "BUSINESS_DEVELOPMENT_MANAGER";
  status: "ACTIVE" | "INACTIVE" | "LOCKED";
  lastLogin: string;
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<AdminUserRecord[]>([
    {
      id: "usr-1",
      name: "Suresh Babu",
      email: "admin@survetra.com",
      role: "SUPER_ADMIN",
      status: "ACTIVE",
      lastLogin: "Today at 5:10 PM",
    },
    {
      id: "usr-2",
      name: "System Operations",
      email: "systems@survetra.com",
      role: "SUPER_ADMIN",
      status: "ACTIVE",
      lastLogin: "Today at 2:05 PM",
    },
    {
      id: "usr-3",
      name: "Content Operations",
      email: "editorial@survetra.com",
      role: "CONTENT_MANAGER",
      status: "ACTIVE",
      lastLogin: "Yesterday at 11:30 AM",
    },
    {
      id: "usr-4",
      name: "Talent Acquisition",
      email: "talent@survetra.com",
      role: "HR_MANAGER",
      status: "ACTIVE",
      lastLogin: "Nov 12, 2026",
    },
    {
      id: "usr-5",
      name: "Enterprise Partnerships",
      email: "partnerships@survetra.com",
      role: "BUSINESS_DEVELOPMENT_MANAGER",
      status: "ACTIVE",
      lastLogin: "Nov 10, 2026",
    },
  ]);

  const toggleStatus = (id: string) => {
    setUsers((prev) =>
      prev.map((u) => {
        if (u.id === id) {
          const next = u.status === "ACTIVE" ? "INACTIVE" : "ACTIVE";
          return { ...u, status: next };
        }
        return u;
      })
    );
  };

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-extrabold text-white">
            Administrative Users & Access Control ({users.length})
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Role-based permissions (SUPER_ADMIN, CONTENT_MANAGER, HR_MANAGER, BUSINESS_DEVELOPMENT_MANAGER).
          </p>
        </div>

        <button
          onClick={() => {
            const email = prompt("Enter new administrator corporate email:");
            const name = prompt("Enter administrator full name:");
            if (email && name) {
              const newUser: AdminUserRecord = {
                id: `usr-${Date.now()}`,
                name,
                email,
                role: "CONTENT_MANAGER",
                status: "ACTIVE",
                lastLogin: "Never",
              };
              setUsers([...users, newUser]);
            }
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-survetra-orange hover:bg-survetra-orange-hover shadow-md shadow-orange-500/20 transition-all self-start"
        >
          <Plus className="w-4 h-4" />
          <span>Provision New Admin</span>
        </button>
      </div>

      <div className="rounded-2xl bg-[#161926] border border-white/[0.08] overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-[#1D2132] text-slate-400 uppercase tracking-wider font-semibold border-b border-white/[0.06]">
            <tr>
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Assigned Role</th>
              <th className="px-6 py-4">Account Status</th>
              <th className="px-6 py-4">Last Login</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.06] text-slate-300">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4 font-semibold text-white">
                  <div>{u.name}</div>
                  <div className="text-[10px] text-slate-500 font-mono">{u.email}</div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold border ${
                      u.role === "SUPER_ADMIN"
                        ? "bg-purple-500/10 text-purple-300 border-purple-500/20"
                        : u.role === "CONTENT_MANAGER"
                        ? "bg-blue-500/10 text-blue-300 border-blue-500/20"
                        : u.role === "HR_MANAGER"
                        ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
                        : "bg-amber-500/10 text-amber-300 border-amber-500/20"
                    }`}
                  >
                    {u.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => toggleStatus(u.id)}
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${
                      u.status === "ACTIVE"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : "bg-red-500/10 text-red-400 border-red-500/20"
                    }`}
                  >
                    {u.status}
                  </button>
                </td>
                <td className="px-6 py-4 text-slate-400 font-mono">{u.lastLogin}</td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button
                    onClick={() => alert(`Password reset token dispatched to ${u.email}`)}
                    className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white"
                    title="Send Password Reset"
                  >
                    <Key className="w-3.5 h-3.5" />
                  </button>
                  {u.email !== "admin@survetra.com" && (
                    <button
                      onClick={() => {
                        if (confirm(`Revoke access for ${u.name}?`)) {
                          setUsers(users.filter((item) => item.id !== u.id));
                        }
                      }}
                      className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-red-500/20 text-slate-400 hover:text-red-400"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

