import Container from "@/components/layout/Container";

export default function ExploreVideosPage() {
  return (
    <section className="page-section guideline-page">
      <Container>
        <div className="guideline-header">
          <p className="guideline-kicker">Video Interviews</p>
          <h1 className="title guideline-title">Research Video Interviews</h1>
          <p className="subtitle guideline-lead">
            Video Interviews provide structured research narratives, allowing authors to communicate methodologies, findings, and insights through visual storytelling and direct explanation.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Scope</h2>
          <p className="guideline-text">
            This format enables researchers to present their work in a conversational or narrative format to improve accessibility and engagement.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Interview Types</h2>
          <p className="guideline-text">
            Hosted interviews involve a moderator, while unhosted interviews are self-recorded by authors.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Processing Fee</h2>
          <p className="guideline-text">
            Unhosted: USD 6 / EUR 5
            <br />
            Hosted: USD 10 / EUR 9
          </p>
        </div>

        <div className="guideline-section" style={{ textAlign: "center" }}>
          <button type="button" className="btn btn-primary">
            Submit Video Interview
          </button>
        </div>
      </Container>
    </section>
  );
}
