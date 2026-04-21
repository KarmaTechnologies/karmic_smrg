import Card from "@/components/ui/Card";

type ArticleCardProps = {
  title: string;
  description: string;
};

export default function ArticleCard({ title, description }: ArticleCardProps) {
  return (
    <Card>
      <div style={{ padding: "1rem" }}>
        <h3 style={{ fontSize: "1rem" }}>{title}</h3>
        <p style={{ marginTop: "0.5rem", color: "var(--muted)", fontSize: "0.92rem" }}>{description}</p>
      </div>
    </Card>
  );
}
