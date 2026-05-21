import Container from "@/components/layout/Container";
import JournalCard from "@/components/cards/JournalCard";
import CTA from "@/components/sections/CTA";
import ExploreGrid from "@/components/sections/ExploreGrid";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import { fetchFeaturedJournals, fetchEstablishedJournals } from "@/lib/api";
import JournalCarousel from "@/components/cards/JournalCarousel";

export default async function Home() {
  const featuredJournals = await fetchFeaturedJournals(); 
  const establishedJournals = await fetchEstablishedJournals();
  return (
    <>
      <Hero />

      <section className="page-section">
        <Container>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
            <div>
              <h2 className="title">Featured Journals</h2>
              {/* <p className="subtitle">Hand-picked by our editorial team.</p> */}
            </div>
            <a href="/journals/featured" style={{ color: "var(--primary)", fontWeight: 600 }}>
              View all
            </a>
          </div>

          {/* <div className="grid" style={{ marginTop: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
            {featuredJournals.map((journal) => (
              <JournalCard key={journal.id} journal={journal} />
            ))}
          </div> */}

          {/* <div className="grid" style={{ marginTop: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
            {Array.isArray(featuredJournals) && featuredJournals.map((journal) => (
             <JournalCard key={journal.id} journal={journal} />
            ))}
          </div> */}
          <JournalCarousel journals={featuredJournals} />
        </Container>
      </section>

      <section className="page-section">
        <Container>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
            <div>
              <h2 className="title">Established Journals</h2>
              {/* <p className="subtitle">Hand-picked by our editorial team.</p> */}
            </div>
            <a href="/journals/established" style={{ color: "var(--primary)", fontWeight: 600 }}>
              View all
            </a>
          </div>

          <JournalCarousel journals={establishedJournals} />
        </Container>
      </section>

      <ExploreGrid />
      <ServicesSection />

      {/* <section className="page-section">
      </section> */}

      <CTA />
    </>
  );
}
