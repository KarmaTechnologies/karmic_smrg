import Container from "@/components/layout/Container";
import Input from "@/components/ui/Input";

export default function SubmissionHypothesisPage() {
  return (
    <section className="page-section guideline-page">
      <Container>
        <div className="guideline-header">
          <p className="guideline-kicker">Exploratory Hypothesis</p>
          <h1 className="title guideline-title">Submit Exploratory Hypothesis</h1>
          <p className="subtitle guideline-lead">
            Submit structured research ideas that are testable, logically reasoned, and academically relevant, even without complete experimental validation.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Form Section</h2>
          <p className="guideline-text">
            Provide hypothesis details, reasoning, and validation pathway.
          </p>

          <form className="contact-form" style={{ marginTop: "1rem" }}>
            <div className="grid submission-form-grid">
              <Input label="Title" name="title" placeholder="Enter hypothesis title" />
              <Input label="Domain" name="domain" placeholder="Enter research domain" />
              <Input label="Observation Source" name="observationSource" placeholder="Enter observation source" />
              <Input label="Hypothesis Maturity Level" name="maturityLevel" placeholder="Enter maturity level" />
            </div>

            <label className="contact-textarea">
              <span className="contact-label">Hypothesis Statement</span>
              <textarea name="hypothesisStatement" rows={5} placeholder="Write the hypothesis statement" />
            </label>

            <label className="contact-textarea">
              <span className="contact-label">Supporting Reasoning</span>
              <textarea name="supportingReasoning" rows={5} placeholder="Explain the reasoning" />
            </label>

            <label className="contact-textarea">
              <span className="contact-label">Testability Path</span>
              <textarea name="testabilityPath" rows={5} placeholder="Describe how it can be tested" />
            </label>

            <label className="contact-textarea">
              <span className="contact-label">Limitations</span>
              <textarea name="limitations" rows={5} placeholder="List limitations" />
            </label>

            <div className="contact-actions">
              <button type="button" className="btn btn-primary">
                Submit Hypothesis
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
