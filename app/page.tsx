import Container from "@/components/layout/Container";
import JournalCard from "@/components/cards/JournalCard";
import CTA from "@/components/sections/CTA";
import ExploreGrid from "@/components/sections/ExploreGrid";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import { featuredJournals } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="page-section">
        <Container>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
            <div>
              <h2 className="title">Featured Publications</h2>
              <p className="subtitle">Hand-picked by our editorial team.</p>
            </div>
            <a href="/journals" style={{ color: "var(--primary)", fontWeight: 600 }}>
              View all
            </a>
          </div>

          <div className="grid" style={{ marginTop: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
            {featuredJournals.map((journal) => (
              <JournalCard key={journal.id} journal={journal} />
            ))}
          </div>
        </Container>
      </section>

      <ExploreGrid />
      <ServicesSection />

      <section className="page-section">
        <Container>
          <div className="card about-card">
            <div className="about-copy">
              <p className="about-eyebrow">ABOUT US</p>
              <h2 className="title about-title">25 Years of Sharing Knowledge with the World</h2>
              <p className="subtitle about-subtitle">
                We are dedicated to advancing knowledge through high-quality publishing. Our catalog spans science, literature, research, and academia.
              </p>
              <a href="/about" className="btn btn-primary about-cta">
                Learn About Us
              </a>
            </div>

            <div className="about-stats">
              {[
                { value: "25+", label: "Years of publishing" },
                { value: "48", label: "Active journals" },
                { value: "340+", label: "Expert authors" },
                { value: "Global", label: "Distribution reach" },
              ].map((item) => (
                <div key={item.label} className="card about-stat-card">
                  <h3 className="about-stat-value">{item.value}</h3>
                  <p className="about-stat-label">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
