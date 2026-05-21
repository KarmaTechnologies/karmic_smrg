import Container from "@/components/layout/Container";
import JournalCard from "@/components/cards/JournalCard";
import { fetchEstablishedJournals } from "@/lib/api";

export default async function EstablishedJournalsPage() {
  const journals = await fetchEstablishedJournals();

  return (
    <section className="page-section">
      <Container>
        <h1 className="title">Established Journals</h1>
        <p className="subtitle">Browse all established journals.</p>

        {journals.length === 0 ? (
          <div className="card" style={{ marginTop: "1rem", padding: "1rem" }}>
            <p style={{ color: "var(--muted)" }}>No established journals available right now.</p>
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