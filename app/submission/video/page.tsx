import Container from "@/components/layout/Container";
import Input from "@/components/ui/Input";

export default function SubmissionVideoPage() {
  return (
    <section className="page-section guideline-page">
      <Container>
        <div className="guideline-header">
          <p className="guideline-kicker">Video Interview / Research Narrative</p>
          <h1 className="title guideline-title">Submit Video Interview</h1>
          <p className="subtitle guideline-lead">
            Submit video-based research explanations, interviews, or narrative content.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Form Section</h2>
          <p className="guideline-text">
            Provide interview details and upload video content.
          </p>

          <form className="contact-form" style={{ marginTop: "1rem" }}>
            <div className="grid submission-form-grid">
              <Input label="Interview Type" name="interviewType" placeholder="Enter interview type" />
              <Input label="Research Context" name="researchContext" placeholder="Enter research context" />
            </div>

            <label className="contact-textarea">
              <span className="contact-label">Key Discussion Points</span>
              <textarea name="keyDiscussionPoints" rows={5} placeholder="List key discussion points" />
            </label>

            <label className="contact-textarea">
              <span className="contact-label">Script (optional)</span>
              <textarea name="script" rows={5} placeholder="Add an optional script" />
            </label>

            <label className="input-wrapper">
              <span className="input-label">Video Upload</span>
              <input name="videoUpload" type="file" className="input-field" />
            </label>

            <div className="contact-actions">
              <button type="button" className="btn btn-primary">
                Submit Video Interview
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
