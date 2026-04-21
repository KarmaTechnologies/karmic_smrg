import Card from "@/components/ui/Card";

type ServiceCardProps = {
  title: string;
  details: string;
};

export default function ServiceCard({ title, details }: ServiceCardProps) {
  return (
    <Card>
      <div style={{ padding: "1rem" }}>
        <h3>{title}</h3>
        <p style={{ color: "var(--muted)", marginTop: "0.55rem" }}>{details}</p>
      </div>
    </Card>
  );
}
