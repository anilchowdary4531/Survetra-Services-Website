"use client";

import React, { useState } from "react";
import { LEADERSHIP_DATA, TeamMember } from "@/lib/data";
import { Users, Plus, Edit3, Trash2 } from "lucide-react";

export default function AdminLeadershipPage() {
  const [members, setMembers] = useState<TeamMember[]>(LEADERSHIP_DATA);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-extrabold text-white">
            Leadership & Technical Staff ({members.length})
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Manage executive leadership profiles, practice directors, and public biographies.
          </p>
        </div>

        <button
          onClick={() => {
            const name = prompt("Enter leader name:");
            if (name) {
              const newMember: TeamMember = {
                id: `lead-${Date.now()}`,
                name,
                role: "Practice Lead",
                category: "Technology & Engineering",
                bio: "Experienced technology leader driving digital transformation.",
                avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
              };
              setMembers([...members, newMember]);
            }
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-survetra-orange hover:bg-survetra-orange-hover shadow-md shadow-orange-500/20 transition-all self-start"
        >
          <Plus className="w-4 h-4" />
          <span>Add Team Member</span>
        </button>
      </div>

      <div className="rounded-2xl bg-[#161926] border border-white/[0.08] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#1D2132] text-slate-400 uppercase tracking-wider font-semibold border-b border-white/[0.06]">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Title / Role</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Bio Excerpt</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-slate-300">
              {members.map((m) => (
                <tr key={m.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-semibold text-white">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center font-bold text-xs text-survetra-orange">
                        {m.name.charAt(0)}
                      </div>
                      <span>{m.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-survetra-orange-light">{m.role}</td>
                  <td className="px-6 py-4 text-slate-400">{m.category}</td>
                  <td className="px-6 py-4 text-slate-400 max-w-xs truncate">{m.bio}</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button
                      onClick={() => {
                        const newRole = prompt("Update role:", m.role);
                        if (newRole) {
                          setMembers((prev) =>
                            prev.map((item) => (item.id === m.id ? { ...item, role: newRole } : item))
                          );
                        }
                      }}
                      className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Remove ${m.name}?`)) {
                          setMembers(members.filter((item) => item.id !== m.id));
                        }
                      }}
                      className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-red-500/20 text-slate-400 hover:text-red-400"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

