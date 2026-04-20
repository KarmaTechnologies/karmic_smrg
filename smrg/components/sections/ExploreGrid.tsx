import Link from "next/link";
import Card from "@/components/ui/Card";
import Container from "@/components/layout/Container";

const items = [
  { label: "Articles", href: "/explore/articles" },
  { label: "Hypotheses", href: "/explore/hypotheses" },
  { label: "Lab Tours", href: "/explore/lab-tours" },
  { label: "Videos", href: "/explore/videos" },
  { label: "Discussions", href: "/explore/discussions" },
  { label: "Slides", href: "/explore/slides" },
];

export default function ExploreGrid() {
  return (
    <section className="page-section">
      <Container>
        <h2 className="title">Explore Research</h2>
        <p className="subtitle">Discover content by format.</p>
        <div className="grid" style={{ marginTop: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))" }}>
          {items.map((item) => (
            <Card key={item.href}>
              <Link href={item.href} style={{ display: "block", padding: "1rem", fontWeight: 600 }}>
                {item.label}
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
