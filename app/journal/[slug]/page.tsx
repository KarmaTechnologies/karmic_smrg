import { notFound } from "next/navigation";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { getJournalDetails } from "@/lib/api";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function JournalDetailPage({ params }: Props) {
  const { slug } = await params;
  const journal = await getJournalDetails(slug);

  if (!journal) {
    notFound();
  }

  return (
    <>
      <section className="page-section journal-detail-hero">
        <Container>
          <div className="journal-detail-grid">
            <div className="journal-detail-cover">
              <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
                <Image
                  src={journal.banner_image_url || journal.image}
                  alt={journal.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div>
              <h1 className="journal-detail-title">{journal.title}</h1>
              {journal.publisher_name && (
                <p className="journal-detail-meta">
                  Published by: <span>{journal.publisher_name}</span>
                </p>
              )}
            </div>
          </div>
        </Container>
      </section>

      {journal.introduction && (
        <section className="page-section">
          <Container>
            <div style={{ maxWidth: 800, margin: "0 auto" }}>
              <h2 className="title" style={{ marginBottom: "1rem" }}>Introduction</h2>
              {journal.introduction.split("\n\n").map((para, i) => (
                <p key={i} style={{ color: "var(--muted)", lineHeight: 1.8, marginTop: i > 0 ? "1rem" : 0 }}>
                  {para}
                </p>
              ))}
            </div>
          </Container>
        </section>
      )}

      {journal.aims_scope && (
        <section className="page-section" style={{ background: "#f5f8ff" }}>
          <Container>
            <div style={{ maxWidth: 800, margin: "0 auto" }}>
              <h2 className="title" style={{ marginBottom: "1rem" }}>Aims & Scope</h2>
              {journal.aims_scope.split("\n\n").map((para, i) => (
                <p key={i} style={{ color: "var(--muted)", lineHeight: 1.8, marginTop: i > 0 ? "1rem" : 0 }}>
                  {para}
                </p>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}