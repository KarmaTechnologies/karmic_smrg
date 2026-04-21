import Link from "next/link";

const items = [
  { href: "/dashboard/author", label: "Author" },
  { href: "/dashboard/reviewer", label: "Reviewer" },
  { href: "/dashboard/editorial", label: "Editorial" },
  { href: "/dashboard/discussion-host", label: "Discussion Host" },
];

export default function Sidebar() {
  return (
    <aside
      className="card"
      style={{
        padding: "1rem",
        minWidth: "220px",
        height: "fit-content",
        position: "sticky",
        top: "92px",
      }}
    >
      <h3 style={{ marginBottom: "0.8rem" }}>Dashboard</h3>
      <nav style={{ display: "grid", gap: "0.5rem" }}>
        {items.map((item) => (
          <Link key={item.href} href={item.href} style={{ color: "var(--muted)", fontWeight: 600 }}>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
