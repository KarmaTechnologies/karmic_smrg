import Container from "@/components/layout/Container";
import JournalCard from "@/components/cards/JournalCard";
import { fetchFeaturedJournals } from "@/lib/api";

export default async function FeaturedJournalsPage() {
  const journals = await fetchFeaturedJournals();

  return (
    <section className="page-section">
      <Container>
        <h1 className="title">Featured Journals</h1>
        <p className="subtitle">Browse all featured journals.</p>

        {journals.length === 0 ? (
          <div className="card" style={{ marginTop: "1rem", padding: "1rem" }}>
            <p style={{ color: "var(--muted)" }}>No featured journals available right now.</p>
          </div>
        ) : (
          <div className="journals-grid">
            {journals.map((journal) => (
              <JournalCard key={journal.id} journal={journal} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}