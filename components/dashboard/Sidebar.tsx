"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { removeToken } from "@/lib/auth";

const navItems = [
  { href: "/dashboard", label: "Dashboards", icon: "📊" },
  { href: "/dashboard/profile", label: "Profile", icon: "👤" },
  { href: "/dashboard/affiliations", label: "Affiliations", icon: "🏢" },
  { href: "/dashboard/credentials", label: "Credentials", icon: "📜" },
  { href: "/dashboard/research-identifiers", label: "Research Identifiers", icon: "🔍" },
  { href: "/dashboard/join-roles", label: "Join Roles", icon: "🤝" },
  { href: "/dashboard/my-contributions", label: "My Contributions", icon: "📝" },
  {
    href: "/dashboard/certifications",
    label: "Certifications & Recognition",
    icon: "🏅",
  },
  { href: "/dashboard/notifications", label: "Notifications", icon: "🔔" },
  { href: "/dashboard/account-settings", label: "Account Settings", icon: "⚙️" },
  {
    href: "/dashboard/password-security",
    label: "Password & Security",
    icon: "🔒",
  },
  { href: "/dashboard/wallet", label: "Wallet", icon: "💰" },
  { href: "/dashboard/transactions", label: "Transactions", icon: "💳" },
  {
    href: "/dashboard/bank-information",
    label: "Bank Information",
    icon: "🏦",
  },
  { href: "/dashboard/withdraw-funds", label: "Withdraw Funds", icon: "💸" },
  {
    href: "/dashboard/withdrawal-history",
    label: "Withdrawal History",
    icon: "📋",
  },
  {
    href: "/dashboard/invoices",
    label: "Invoices & Payment History",
    icon: "🧾",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const handleLogout = () => {
    removeToken();
    window.location.href = "/login";
  };

  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-brand">
        <div className="brand-logo">S</div>
        <div className="brand-name">SMRG Dashboard</div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          // Root "/dashboard" should only be active on exact match,
          // not on every /dashboard/* sub-route.
          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`sidebar-item ${isActive ? "active" : ""}`}
            >
              <span className="sidebar-item-icon">{item.icon}</span>
              <span className="sidebar-item-label">{item.label}</span>
              {isActive && <span className="sidebar-item-indicator" />}
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <button onClick={handleLogout} className="sidebar-logout-btn">
          🚪 Logout
        </button>
      </div>
    </aside>
  );
}
