import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { getJournalDetails, getArticleDetail, getArticleSections } from "@/lib/api";

type Props = {
  params: Promise<{ slug: string; articleId: string }>;
};

function detectSubheading(text: string): { subheading: string; rest: string } | null {
  const patterns = [
    /^([A-Z][^:.\n]{2,50}):\s+(.+)/,
    /^([A-Z][^:.\n]{2,50})\.\s+(.+)/,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) {
      return { subheading: match[1].trim(), rest: match[2].trim() };
    }
  }
  return null;
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug, articleId } = await params;
  const journal = await getJournalDetails(slug);
  const articleData = await getArticleDetail(slug, articleId);
  const articleSections = await getArticleSections();

  if (!journal || !articleData) {
    notFound();
  }

  const { article } = articleData;

  const abstractSection = articleSections.find((s) => s.title === "Abstract");
  const otherSections = articleSections.filter((s) => s.title !== "Abstract");

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

      <section className="article-detail-section">
        <Container>
          <Link
            href={`/journal/${slug}`}
            className="article-back-link"
          >
            ← Back to {journal.title}
          </Link>

          <div className="article-detail-container">
            <div className="article-detail-main">
              <div className="article-detail-header">
                <span className="article-detail-type">{article.article_type}</span>
                <h1 className="article-detail-title">{article.title}</h1>
              </div>

              {article.authors && article.authors.length > 0 && (
                <div className="article-detail-authors">
                  {article.authors.map((a, i) => (
                    <span key={i} className="article-author-chip">
                      {a.display_name}
                      {a.affiliation && <span className="article-author-affiliation"> — {a.affiliation}</span>}
                    </span>
                  ))}
                </div>
              )}

              <div className="article-detail-meta-grid">
                {article.doi && (
                  <div className="article-meta-item">
                    <span className="article-meta-label">DOI</span>
                    <span className="article-meta-value">{article.doi}</span>
                  </div>
                )}
                {article.volume && (
                  <div className="article-meta-item">
                    <span className="article-meta-label">Volume</span>
                    <span className="article-meta-value">{article.volume}</span>
                  </div>
                )}
                {article.issue && (
                  <div className="article-meta-item">
                    <span className="article-meta-label">Issue</span>
                    <span className="article-meta-value">{article.issue}</span>
                  </div>
                )}
                {article.publication_date && (
                  <div className="article-meta-item">
                    <span className="article-meta-label">Published</span>
                    <span className="article-meta-value">
                      {(() => {
                        const d = new Date(article.publication_date);
                        const day = String(d.getDate()).padStart(2, "0");
                        const month = String(d.getMonth() + 1).padStart(2, "0");
                        const year = d.getFullYear();
                        return `${day}/${month}/${year}`;
                      })()}
                    </span>
                  </div>
                )}
                {article.publication_status && (
                  <div className="article-meta-item">
                    <span className="article-meta-label">Status</span>
                    <span className={`article-status-badge ${article.publication_status.toLowerCase()}`}>
                      {article.publication_status}
                    </span>
                  </div>
                )}
                {article.visitor_stats && (
                  <>
                    <div className="article-meta-item">
                      <span className="article-meta-label">Views</span>
                      <span className="article-meta-value">{article.visitor_stats.views}</span>
                    </div>
                    <div className="article-meta-item">
                      <span className="article-meta-label">Downloads</span>
                      <span className="article-meta-value">{article.visitor_stats.downloads}</span>
                    </div>
                  </>
                )}
              </div>

              {article.keywords && article.keywords.length > 0 && (
                <div className="article-detail-keywords">
                  <h3 className="article-section-label">Keywords</h3>
                  <div className="article-keyword-list">
                    {article.keywords.map((kw, i) => (
                      <span key={i} className="article-keyword-tag">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {abstractSection && (
                <div className="article-detail-block">
                  <h2 className="article-detail-block-title">Abstract</h2>
                  <p className="article-detail-text">{abstractSection.content}</p>
                </div>
              )}

              {otherSections.map((section, i) => (
                <div key={i} className="article-detail-block">
                  <h2 className="article-detail-block-title">{section.title}</h2>
                  <div className="article-detail-text">
                    {section.content.split("\n\n").map((para, j) => {
                      const result = detectSubheading(para);
                      if (result) {
                        return (
                          <div key={j} style={{ marginBottom: j > 0 ? "1rem" : 0 }}>
                            <h3 className="article-subheading">{result.subheading}</h3>
                            <p>{result.rest}</p>
                          </div>
                        );
                      }
                      return (
                        <p key={j} style={{ marginBottom: j > 0 ? "1rem" : 0 }}>
                          {para}
                        </p>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <aside className="article-detail-sidebar">
              <div className="article-sidebar-card">
                <h3 className="article-sidebar-title">Attachments</h3>
                {article.media && article.media.length > 0 ? (
                  <div className="article-sidebar-files">
                    {article.media.map((m, i) => (
                      <a
                        key={i}
                        href={`https://smrg.arditsonline.com/public/public/${m.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="article-file-link"
                      >
                        <span className="article-file-icon">📄</span>
                        <span className="article-file-name">{m.label}</span>
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="article-sidebar-empty">No attachments available</p>
                )}
              </div>

              <div className="article-sidebar-card">
                <h3 className="article-sidebar-title">Journal Info</h3>
                <div className="article-sidebar-info">
                  <p className="article-info-label">Journal</p>
                  <p className="article-info-value">{article.journal}</p>
                </div>
                {article.citations && (
                  <div className="article-sidebar-info">
                    <p className="article-info-label">Citations</p>
                    <p className="article-info-value">{article.citations.citation_count}</p>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
