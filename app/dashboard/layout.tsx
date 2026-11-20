"use client";

import { ReactNode } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function DashboardLayoutRoute({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
