import Container from "@/components/layout/Container";

export default function ExploreDiscussionsPage() {
  return (
    <section className="page-section guideline-page">
      <Container>
        <div className="guideline-header">
          <p className="guideline-kicker">Discussions</p>
          <h1 className="title guideline-title">Academic Discussions</h1>
          <p className="subtitle guideline-lead">
            Discussions provide a structured platform for academic dialogue, enabling researchers to engage in critique, collaboration, and knowledge exchange around research topics and publications.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Scope</h2>
          <p className="guideline-text">
            This section supports interactive academic conversations linked to articles, hypotheses, and thematic research areas.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Discussion Formats</h2>
          <p className="guideline-text">
            Panel discussions, author Q&A sessions, and topic-based forums are supported formats.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Processing Fee</h2>
          <p className="guideline-text">
            Open Discussion: USD 3 / EUR 3
            <br />
            Hosted Panel: USD 10 / EUR 9
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Policy Note</h2>
          <p className="guideline-text">
            All discussions must maintain academic relevance, professional conduct, and structured moderation.
          </p>
        </div>

        <div className="guideline-section" style={{ textAlign: "center" }}>
          <button type="button" className="btn btn-primary">
            Submit Discussion
          </button>
        </div>
      </Container>
    </section>
  );
}
