"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated, removeToken } from "@/lib/auth";
import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      removeToken();
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar-wrap">
        <Sidebar />
      </aside>
      <main className="dashboard-main">{children}</main>
    </div>
  );
}
