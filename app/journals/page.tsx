import Container from "@/components/layout/Container";
import JournalCard from "@/components/cards/JournalCard";
import { getJournals } from "@/lib/api";

export default async function JournalsPage() {
  const journals = await getJournals();

  return (
    <section className="page-section">
      <Container>
        <h1 className="title">Journals</h1>
        <p className="subtitle">Browse all of our journals in one place. Pick a title to learn more.</p>

        {journals.length === 0 ? (
          <div className="card" style={{ marginTop: "1rem", padding: "1rem" }}>
            <p style={{ color: "var(--muted)" }}>No journals available right now. Please try again later.</p>
          </div>
        ) : (
          <div className="grid" style={{ marginTop: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
            {journals.map((journal) => (
              <JournalCard key={journal.id} journal={journal} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
