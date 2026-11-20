"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Shell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDashboard = pathname.startsWith("/dashboard");

  // Avoid hydration mismatch: don't render Navbar/Footer until mounted
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {!isDashboard && <Navbar />}
      <main style={{ flex: 1 }}>{children}</main>
      {!isDashboard && <Footer />}
    </div>
  );
}
