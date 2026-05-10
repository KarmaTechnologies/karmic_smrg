import Container from "@/components/layout/Container";
import Input from "@/components/ui/Input";

export default function SubmissionLabTourPage() {
  return (
    <section className="page-section guideline-page">
      <Container>
        <div className="guideline-header">
          <p className="guideline-kicker">Lab Tour / Experimental Setup</p>
          <h1 className="title guideline-title">Submit Lab Tour / Experimental Setup</h1>
          <p className="subtitle guideline-lead">
            Submit structured documentation of laboratory environments, experimental setups, and workflows.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Form Section</h2>
          <p className="guideline-text">
            Provide lab details and upload visual documentation.
          </p>

          <form className="contact-form" style={{ marginTop: "1rem" }}>
            <div className="grid submission-form-grid">
              <Input label="Title" name="title" placeholder="Enter lab tour title" />
              <Input label="Lab Description" name="labDescription" placeholder="Enter lab description" />
              <Input label="Objective" name="objective" placeholder="Enter objective" />
              <Input label="Equipment Used" name="equipmentUsed" placeholder="List equipment used" />
            </div>

            <label className="contact-textarea">
              <span className="contact-label">Method / Setup</span>
              <textarea name="methodSetup" rows={6} placeholder="Describe the method or setup" />
            </label>

            <label className="input-wrapper">
              <span className="input-label">Video Upload</span>
              <input name="videoUpload" type="file" className="input-field" />
            </label>

            <label className="input-wrapper">
              <span className="input-label">Supporting Images</span>
              <input name="supportingImages" type="file" className="input-field" multiple />
            </label>

            <div className="contact-actions">
              <button type="button" className="btn btn-primary">
                Submit Lab Tour
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
