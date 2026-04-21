import Link from "next/link";
import Container from "@/components/layout/Container";

const highlights = [
  "Founding Phase Participation",
  "Recognition for Expertise",
  "Honorarium for Contributions",
  "Influence Research Direction",
  "Build Academic Visibility",
];

export default function Hero() {
  return (
    <section className="page-section hero-section">
      <Container>
        <div className="hero-layout">
          <div>
            <span className="card hero-tag">
              Trusted by 10,000+ readers worldwide
            </span>
            <h1 className="title hero-title">
              Explore Books and Journals That Inspire Minds
            </h1>
            <p className="subtitle hero-subtitle">
              Your gateway to quality publications, from research journals to literature. Discover, read, and grow with SMRG publications.
            </p>
            <div className="hero-actions">
              <Link href="/journals" className="btn btn-primary">
                Browse Publications
              </Link>
              <Link href="/about" className="btn btn-outline">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero-highlights">
            {highlights.map((item) => (
              <div key={item} className="card hero-highlight-card">
                <p className="hero-highlight-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
