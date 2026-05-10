import Container from "@/components/layout/Container";

export default function ServicesResearchVideoProductionPage() {
  return (
    <section className="page-section guideline-page">
      <Container>
        <div className="guideline-header">
          <p className="guideline-kicker">Video Production</p>
          <h1 className="title guideline-title">Research Video Production</h1>
          <p className="subtitle guideline-lead">
            Supports the creation of research videos, interviews, and visual narratives.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Description</h2>
          <p className="guideline-text">
            Helps transform research into engaging visual formats for better communication.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Scope</h2>
          <ul className="guideline-list">
            <li>Video recording</li>
            <li>Editing and post-production</li>
            <li>Script-based content development</li>
          </ul>
        </div>

        <div className="guideline-section" style={{ textAlign: "center" }}>
          <button type="button" className="btn btn-primary">
            Contact for Production
          </button>
        </div>
      </Container>
    </section>
  );
}
