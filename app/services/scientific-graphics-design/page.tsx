import Container from "@/components/layout/Container";

export default function ServicesScientificGraphicsDesignPage() {
  return (
    <section className="page-section guideline-page">
      <Container>
        <div className="guideline-header">
          <p className="guideline-kicker">Graphic Design</p>
          <h1 className="title guideline-title">Scientific Graphic Design</h1>
          <p className="subtitle guideline-lead">
            Provides visual representation of research content through structured design.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Description</h2>
          <p className="guideline-text">
            Enhances research communication through graphical elements.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Scope</h2>
          <ul className="guideline-list">
            <li>Infographics</li>
            <li>Graphical abstracts</li>
            <li>Slide design</li>
            <li>Conceptual diagrams</li>
          </ul>
        </div>

        <div className="guideline-section" style={{ textAlign: "center" }}>
          <button type="button" className="btn btn-primary">
            Request Design Support
          </button>
        </div>
      </Container>
    </section>
  );
}
