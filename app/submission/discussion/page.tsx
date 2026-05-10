import Container from "@/components/layout/Container";
import Input from "@/components/ui/Input";

export default function SubmissionDiscussionPage() {
  return (
    <section className="page-section guideline-page">
      <Container>
        <div className="guideline-header">
          <p className="guideline-kicker">Discussion / Commentary</p>
          <h1 className="title guideline-title">Submit Discussion</h1>
          <p className="subtitle guideline-lead">
            Submit structured academic discussion topics and formats.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Form Section</h2>
          <p className="guideline-text">
            Provide discussion topic and structure.
          </p>

          <form className="contact-form" style={{ marginTop: "1rem" }}>
            <div className="grid submission-form-grid">
              <Input label="Discussion Type" name="discussionType" placeholder="Enter discussion type" />
              <Input label="Topic" name="topic" placeholder="Enter topic" />
              <Input label="Participants" name="participants" placeholder="Enter participants" />
              <Input label="Format" name="format" placeholder="Enter format" />
            </div>

            <label className="contact-textarea">
              <span className="contact-label">Key Questions</span>
              <textarea name="keyQuestions" rows={6} placeholder="List key questions" />
            </label>

            <div className="contact-actions">
              <button type="button" className="btn btn-primary">
                Submit Discussion
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
