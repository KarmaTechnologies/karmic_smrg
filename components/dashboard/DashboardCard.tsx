import Card from "@/components/ui/Card";

export default function DashboardCard({ title, value }: { title: string; value: string }) {
  return (
    <Card>
      <div style={{ padding: "1rem" }}>
        <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{title}</p>
        <h3 style={{ marginTop: "0.35rem" }}>{value}</h3>
      </div>
    </Card>
  );
}

