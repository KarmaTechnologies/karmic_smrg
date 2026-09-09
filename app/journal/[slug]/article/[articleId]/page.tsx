import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { getJournalDetails, getArticleDetail } from "@/lib/api";

type Props = {
  params: Promise<{ slug: string; articleId: string }>;
};

export default async function ArticleDetailPage({ params }: Props) {
  const { slug, articleId } = await params;
  const journal = await getJournalDetails(slug);
  const articleData = await getArticleDetail(slug, articleId);

  if (!journal || !articleData) {
    notFound();
  }

  const { article } = articleData;

  return (
    <>
      <section className="journal-detail-hero">
        <Image
          src={journal.banner_image_url || journal.image}
          alt={journal.title}
          priority
          width={1600}
          height={400}
          sizes="100vw"
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
      </section>

      <section className="page-section">
        <Container>
          <Link
            href={`/journal/${slug}`}
            className="btn btn-outline"
            style={{ marginBottom: "1.5rem", display: "inline-flex" }}
          >
            ← Back to Journal
          </Link>

          <div style={{ maxWidth: 800 }}>
            <h1 className="title" style={{ marginBottom: "1rem" }}>
              {article.title}
            </h1>

            {article.authors && article.authors.length > 0 && (
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ color: "var(--muted)", fontWeight: 600, marginBottom: "0.25rem" }}>
                  Authors:
                </p>
                <p style={{ color: "var(--muted)" }}>
                  {article.authors.map((a) => a.display_name).join(", ")}
                </p>
              </div>
            )}

            {article.doi && (
              <p style={{ color: "var(--muted)", marginBottom: "0.5rem" }}>
                <strong>DOI:</strong> {article.doi}
              </p>
            )}

            {article.article_type && (
              <p style={{ color: "var(--muted)", marginBottom: "0.5rem" }}>
                <strong>Type:</strong> {article.article_type}
              </p>
            )}

            {article.publication_status && (
              <p style={{ color: "var(--muted)", marginBottom: "0.5rem" }}>
                <strong>Status:</strong> {article.publication_status}
              </p>
            )}

            {article.volume && (
              <p style={{ color: "var(--muted)", marginBottom: "0.5rem" }}>
                <strong>Volume:</strong> {article.volume}
              </p>
            )}

            {article.issue && (
              <p style={{ color: "var(--muted)", marginBottom: "0.5rem" }}>
                <strong>Issue:</strong> {article.issue}
              </p>
            )}

            {article.publication_date && (
              <p style={{ color: "var(--muted)", marginBottom: "0.5rem" }}>
                <strong>Published:</strong>{" "}
                {(() => {
                  const d = new Date(article.publication_date);
                  const day = String(d.getDate()).padStart(2, "0");
                  const month = String(d.getMonth() + 1).padStart(2, "0");
                  const year = d.getFullYear();
                  return `${day}/${month}/${year}`;
                })()}
              </p>
            )}

            {article.visitor_stats && (
              <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem", marginTop: "0.5rem" }}>
                <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
                  <strong>Views:</strong> {article.visitor_stats.views}
                </p>
                <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
                  <strong>Downloads:</strong> {article.visitor_stats.downloads}
                </p>
              </div>
            )}

            {article.keywords && article.keywords.length > 0 && (
              <div style={{ marginBottom: "1.5rem" }}>
                <p style={{ color: "var(--muted)", fontWeight: 600, marginBottom: "0.5rem" }}>
                  Keywords:
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {article.keywords.map((kw, i) => (
                    <span
                      key={i}
                      style={{
                        display: "inline-block",
                        padding: "0.3rem 0.7rem",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: "var(--primary)",
                        background: "#f0f4ff",
                        borderRadius: "20px",
                      }}
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {article.sections && article.sections.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                {article.sections.map((section, i) => (
                  <div key={i} style={{ marginBottom: "1.5rem" }}>
                    <h2 className="title" style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                      {section.title}
                    </h2>
                    <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {article.references && article.references.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h2 className="title" style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                  References
                </h2>
                <ul style={{ color: "var(--muted)", lineHeight: 1.8, paddingLeft: "1.2rem" }}>
                  {article.references.map((ref, i) => (
                    <li key={i} style={{ marginBottom: "0.5rem" }}>
                      {ref}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {article.media && article.media.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h2 className="title" style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>
                  Attachments
                </h2>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {article.media.map((m, i) => (
                    <a
                      key={i}
                      href={`https://smrg.arditsonline.com/public/public/${m.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      {m.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
