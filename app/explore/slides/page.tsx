import Container from "@/components/layout/Container";

export default function ExploreSlidesPage() {
  return (
    <section className="page-section guideline-page">
      <Container>
        <div className="guideline-header">
          <p className="guideline-kicker">Slide Presentations</p>
          <h1 className="title guideline-title">Slide Presentations & Visual Research</h1>
          <p className="subtitle guideline-lead">
            Slide Presentations provide structured visual summaries of research through presentation decks, graphical representations, and conceptual frameworks.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Scope</h2>
          <p className="guideline-text">
            This format supports visual communication of research ideas for teaching, dissemination, and simplified understanding.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Supported Formats</h2>
          <p className="guideline-text">
            Slide decks, visual abstracts, infographics, and conceptual diagrams are supported formats.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Processing Fee</h2>
          <p className="guideline-text">USD 5 / EUR 5</p>
        </div>

        <div className="guideline-section" style={{ textAlign: "center" }}>
          <button type="button" className="btn btn-primary">
            Submit Presentation
          </button>
        </div>
      </Container>
    </section>
  );
}
