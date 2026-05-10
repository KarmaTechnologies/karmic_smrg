import Container from "@/components/layout/Container";

export default function ExploreHypothesesPage() {
  return (
    <section className="page-section guideline-page">
      <Container>
        <div className="guideline-header">
          <p className="guideline-kicker">Exploratory Hypotheses</p>
          <h1 className="title guideline-title">Exploratory Hypotheses</h1>
          <p className="subtitle guideline-lead">
            Exploratory Hypotheses provide a structured pathway for presenting testable research ideas that may not yet have complete experimental validation. This format supports early-stage insights while maintaining transparency in reasoning and scope.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Scope</h2>
          <p className="guideline-text">
            This format is designed for concept-driven, observation-based, and interdisciplinary research ideas that require structured documentation and future validation.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Review Model</h2>
          <p className="guideline-text">
            Submissions are evaluated through an editorial and structured review model focusing on logical coherence, clarity, and potential for validation rather than experimental completion.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Processing Fee</h2>
          <p className="guideline-text">USD 5 / EUR 5</p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Policy Note</h2>
          <p className="guideline-text">
            Hypotheses must clearly define assumptions, limitations, and testability pathways. All submissions are labeled with maturity indicators and may be subject to post-publication discussion.
          </p>
        </div>

        <div className="guideline-section" style={{ textAlign: "center" }}>
          <button type="button" className="btn btn-primary">
            Submit Hypothesis
          </button>
        </div>
      </Container>
    </section>
  );
}
