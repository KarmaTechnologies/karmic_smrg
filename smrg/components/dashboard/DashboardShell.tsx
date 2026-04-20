"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Container from "@/components/layout/Container";
import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/dashboard") {
    return <>{children}</>;
  }

  return (
    <section className="page-section">
      <Container>
        <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", flexWrap: "wrap" }}>
          <Sidebar />
          <div style={{ flex: 1, minWidth: "280px" }}>{children}</div>
        </div>
      </Container>
    </section>
  );
}