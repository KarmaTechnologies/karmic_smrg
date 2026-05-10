import Container from "@/components/layout/Container";
import Input from "@/components/ui/Input";

export default function SubmissionSlidesPage() {
  return (
    <section className="page-section guideline-page">
      <Container>
        <div className="guideline-header">
          <p className="guideline-kicker">Slide Presentation / Visual Research</p>
          <h1 className="title guideline-title">Submit Slide Presentation</h1>
          <p className="subtitle guideline-lead">
            Submit visual research content including slides and graphical summaries.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Form Section</h2>
          <p className="guideline-text">
            Provide presentation details and upload slides.
          </p>

          <form className="contact-form" style={{ marginTop: "1rem" }}>
            <div className="grid submission-form-grid">
              <Input label="Title" name="title" placeholder="Enter presentation title" />
              <Input label="Research Context" name="researchContext" placeholder="Enter research context" />
            </div>

            <label className="input-wrapper">
              <span className="input-label">Slides Upload</span>
              <input name="slidesUpload" type="file" className="input-field" multiple />
            </label>

            <label className="contact-textarea">
              <span className="contact-label">Summary</span>
              <textarea name="summary" rows={6} placeholder="Write a brief summary" />
            </label>

            <label className="contact-textarea">
              <span className="contact-label">Key Takeaways</span>
              <textarea name="keyTakeaways" rows={6} placeholder="List key takeaways" />
            </label>

            <div className="contact-actions">
              <button type="button" className="btn btn-primary">
                Submit Presentation
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
