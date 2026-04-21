import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { getJournalBySlug } from "@/lib/api";

type JournalDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function JournalDetailPage({ params }: JournalDetailPageProps) {
  const { slug } = await params;
  const journal = await getJournalBySlug(slug);

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
                  src={journal.image}
                  alt={journal.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div>
              <h1 className="journal-detail-title">{journal.title}</h1>
              <p className="journal-detail-meta">
                Published by: <span>{journal.publisher_name}</span>
              </p>
              <div className="journal-detail-actions">
                <Link href="/journals" className="btn btn-primary">
                  View Journal
                </Link>
                <button type="button" className="btn btn-outline">
                  Join as Reviewer
                </button>
                <button type="button" className="btn btn-outline">
                  Join as Editor
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="page-section">
        <Container>
          <div className="journal-content-section">
            <h2 className="title">Journal Content</h2>
            <p>
              This is where you can add more detailed journal information, articles, submission guidelines,
              and other relevant content.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
