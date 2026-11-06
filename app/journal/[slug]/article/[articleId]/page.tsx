import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import {
  getJournalDetails,
  getArticleDetailById,
  getArticleSectionContent,
  ArticleDetailSection,
} from "@/lib/api";

type Props = {
  params: Promise<{ slug: string; articleId: string }>;
};

function articleSectionId(title: string): string {
  const normalizedTitle = title.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  const aliases: Record<string, string> = {
    method: "methods",
    methodology: "methods",
    "materials and methods": "methods",
    "material and methods": "methods",
    result: "results",
  };
  const sectionId = aliases[normalizedTitle] ?? normalizedTitle.replace(/\s+/g, "-");
  return `article-section-${sectionId}`;
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug, articleId } = await params;
  const journal = await getJournalDetails(slug);

  if (!journal) {
    notFound();
  }

  // Match the requested numeric id against the journal article list, then load
  // the detail from the slug-based article API.
  const articleData = await getArticleDetailById(journal, articleId);

  if (!articleData) {
    notFound();
  }

  const { article } = articleData;

  const sections = (
    await Promise.all(
      (article.sections ?? []).map((section) => getArticleSectionContent(section))
    )
  ).filter((section) => section.content);

  const navigationSections = [
    ...(article.abstract
      ? [{ id: articleSectionId("abstract"), label: "Abstract" }]
      : []),
    ...sections.map((section) => ({
      id: articleSectionId(section.title),
      label: section.title,
    })),
  ];

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
            <nav className="article-section-nav" aria-label="Article sections">
              <h2 className="article-section-nav-title">On this page</h2>
              {navigationSections.map((section) => (
                <a key={section.id} href={`#${section.id}`}>
                  {section.label}
                </a>
              ))}
            </nav>

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

              {article.abstract && (
                <section id={articleSectionId("abstract")} className="article-detail-block">
                  <h2 className="article-detail-block-title">Abstract</h2>
                  <p className="article-detail-text">{article.abstract}</p>
                </section>
              )}

              {sections.map((section: ArticleDetailSection) => (
                <section
                  key={section.title}
                  id={articleSectionId(section.title)}
                  className="article-detail-block"
                >
                  <h2 className="article-detail-block-title">{section.title}</h2>
                  <div
                    className="article-detail-text article-html-content"
                    dangerouslySetInnerHTML={{ __html: section.content ?? "" }}
                  />
                </section>
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
                  <p className="article-info-value">{articleData.journal.name}</p>
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
