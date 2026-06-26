import Container from "@/components/layout/Container";

export default function GuidelineHypothesisPage() {
  return (
    <section className="page-section hypothesis-page">
      <Container>
        {/* Header */}
        <div className="hypothesis-header">
          <span className="hypothesis-kicker">HYPOTHESIS PUBLICATION GUIDELINES</span>
          <h1 className="title hypothesis-title">Hypothesis Publication Guidelines</h1>
          <p className="hypothesis-lead">
            Hypothesis Publications are structured scholarly submissions designed to present
            original scientific assumptions, conceptual frameworks, predictive models, emerging
            theories, or exploratory interpretations that may not yet have complete experimental
            validation but contribute meaningfully to academic advancement and future research
            direction.
          </p>
          <div className="hypothesis-example" style={{ marginTop: "1rem", background: "#eef4ff", borderLeftColor: "var(--primary)" }}>
            <p style={{ margin: 0 }}>
              These publications encourage innovative scientific thinking while maintaining
              academic integrity, logical reasoning, methodological transparency, and ethical
              responsibility.
            </p>
          </div>
        </div>

        {/* Scope */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Scope of Hypothesis Publications</h2>
          <p className="hypothesis-text">Submissions may include:</p>
          <ul className="hypothesis-list">
            <li>Novel scientific hypotheses</li>
            <li>Predictive or conceptual frameworks</li>
            <li>Theoretical models</li>
            <li>Interdisciplinary scientific interpretations</li>
            <li>Exploratory clinical or technological assumptions</li>
            <li>Future-oriented research propositions</li>
            <li>Mechanism-based scientific discussions</li>
            <li>Early-stage scientific concepts with scholarly justification</li>
          </ul>
        </div>

        {/* Submission Requirements */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Submission Requirements</h2>
          <p className="hypothesis-text">Authors should ensure that submissions:</p>
          <ul className="hypothesis-list">
            <li>Present a clearly defined hypothesis or conceptual proposition</li>
            <li>Include scientific rationale supported by relevant literature</li>
            <li>Maintain logical structure and academic coherence</li>
            <li>Clearly distinguish established evidence from speculative interpretation</li>
            <li>Discuss possible limitations and future validation approaches</li>
            <li>Follow ethical and scholarly communication standards</li>
          </ul>
        </div>

        {/* Recommended Structure */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Recommended Structure</h2>
          <p className="hypothesis-text">Hypothesis submissions are encouraged to include:</p>
          <ol className="hypothesis-list hypothesis-steps">
            <li>Title</li>
            <li>Abstract</li>
            <li>Introduction & Background</li>
            <li>Statement of Hypothesis</li>
            <li>Scientific Rationale</li>
            <li>Supporting Evidence or Literature Context</li>
            <li>Potential Implications</li>
            <li>Limitations</li>
            <li>Future Research Directions</li>
            <li>References</li>
          </ol>
        </div>

        {/* Review & Evaluation */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Review & Evaluation</h2>
          <p className="hypothesis-text">
            Hypothesis Publications undergo editorial and scholarly evaluation focusing on:
          </p>
          <ul className="hypothesis-list">
            <li>Originality and innovation</li>
            <li>Scientific plausibility</li>
            <li>Logical consistency</li>
            <li>Relevance to the field</li>
            <li>Academic contribution</li>
            <li>Ethical compliance</li>
          </ul>
          <div className="hypothesis-example" style={{ marginTop: "1rem" }}>
            Acceptance does not necessarily imply experimental confirmation, but recognition
            of scholarly value and potential scientific relevance.
          </div>
        </div>

        {/* Ethical Considerations */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Ethical Considerations</h2>
          <p className="hypothesis-text">Authors must:</p>
          <ul className="hypothesis-list">
            <li>Avoid misleading or unsupported claims</li>
            <li>Clearly identify speculative elements</li>
            <li>Properly cite all referenced materials</li>
            <li>Ensure responsible scientific communication</li>
            <li>Avoid clinical or public recommendations without evidence-based support</li>
          </ul>
        </div>

        {/* Publication Objective */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Publication Objective</h2>
          <p className="hypothesis-text">
            The objective of Hypothesis Publications is to promote responsible scientific
            exploration, encourage intellectual discussion, and stimulate future research
            collaborations across academic and professional communities.
          </p>
        </div>
      </Container>
    </section>
  );
}