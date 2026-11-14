"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export interface AdminUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "SUPER_ADMIN" | "CONTENT_MANAGER" | "HR_MANAGER" | "BUSINESS_DEVELOPMENT_MANAGER";
  token?: string;
}

const STORAGE_KEY = "survetra_admin_session";

export function getAdminSession(): AdminUser | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function setAdminSession(user: AdminUser) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function clearAdminSession() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

export function useAdminAuth(requiredRoles?: string[]) {
  const router = useRouter();
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = getAdminSession();
    if (!session) {
      router.push("/admin/login");
    } else if (requiredRoles && requiredRoles.length > 0 && !requiredRoles.includes(session.role)) {
      router.push("/admin/dashboard");
    } else {
      setUser(session);
      setLoading(false);
    }
  }, [router]);

  return { user, loading };
}

