import Link from "next/link";
import Container from "@/components/layout/Container";

export default function ExploreArticlesPage() {
  return (
    <section className="page-section guideline-page">
      <Container>
        <div className="guideline-header" style={{ marginBottom: "1.5rem" }}>
          <h1 className="title guideline-title">All Articles</h1>
          <p className="subtitle guideline-lead">
            The Articles section presents peer-reviewed scholarly research across multidisciplinary domains. Submissions follow structured academic formats and undergo editorial screening, reviewer evaluation, and editorial board decisions to ensure clarity, methodological integrity, and academic relevance.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Standard Article Structure</h2>
          <ul className="guideline-list" style={{ marginBottom: "1rem" }}>
            <li>Abstract</li>
            <li>Methodology</li>
            <li>Results</li>
            <li>Discussion</li>
            <li>References</li>
          </ul>
        </div>

        <div className="guideline-section" style={{ marginBottom: "1.5rem" }}>
          <h2 className="guideline-section-title">Scope</h2>
          <p className="guideline-text">
            This section includes full-length research articles prepared according to standard academic structures, including abstract, methodology, results, discussion, and references.
          </p>
        </div>

        <div className="guideline-section" style={{ marginBottom: "1.5rem" }}>
          <h2 className="guideline-section-title">Media Annex Support</h2>
          <p className="guideline-text">
            Published articles may include additional media components such as video interviews, slide presentations, graphical abstracts, and lab-based visual documentation to enhance understanding and dissemination.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Processing Fee</h2>
          <p className="guideline-text">
            Standard Article Processing Charge (APC): USD 5 / EUR 5
          </p>
        </div>

        <div className="guideline-section" style={{ textAlign: "center" }}>
          <Link href="/submission/article" className="btn btn-primary">
            Submit Article
          </Link>
        </div>
      </Container>
    </section>
  );
}
