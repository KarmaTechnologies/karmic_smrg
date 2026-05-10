import Container from "@/components/layout/Container";

export default function ExploreLabToursPage() {
  return (
    <section className="page-section guideline-page">
      <Container>
        <div className="guideline-header">
          <p className="guideline-kicker">Lab Tours</p>
          <h1 className="title guideline-title">Lab Tours & Experimental Setups</h1>
          <p className="subtitle guideline-lead">
            Lab Tours document experimental environments, research workflows, and procedural insights through structured visual and descriptive formats. This format enhances transparency and reproducibility in research practices.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Scope</h2>
          <p className="guideline-text">
            This section focuses on documenting real-world laboratory setups, equipment usage, and methodological workflows in a structured manner.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Supported Formats</h2>
          <p className="guideline-text">
            Video walkthroughs, annotated images, method demonstrations, and equipment explanations are supported to provide comprehensive documentation.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Processing Fee</h2>
          <p className="guideline-text">USD 8 / EUR 7</p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Optional Support</h2>
          <p className="guideline-text">
            Authors may use video editing and visual enhancement services to improve the presentation quality of submitted content.
          </p>
        </div>

        <div className="guideline-section" style={{ textAlign: "center" }}>
          <button type="button" className="btn btn-primary">
            Submit Lab Tour
          </button>
        </div>
      </Container>
    </section>
  );
}
