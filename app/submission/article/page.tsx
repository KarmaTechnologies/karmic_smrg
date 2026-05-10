import Container from "@/components/layout/Container";
import Input from "@/components/ui/Input";

export default function SubmissionArticlePage() {
  return (
    <section className="page-section guideline-page">
      <Container>
        <div className="guideline-header">
          <p className="guideline-kicker">Article (Standard Research)</p>
          <h1 className="title guideline-title">Submit Article</h1>
          <p className="subtitle guideline-lead">
            Submit full-length scholarly research articles following structured academic formats, including abstract, methodology, results, discussion, and references.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Form Section</h2>
          <p className="guideline-text">
            Provide complete research details and upload the manuscript for editorial review.
          </p>

          <form className="contact-form" style={{ marginTop: "1rem" }}>
            <div className="grid submission-form-grid">
              <Input label="Title" name="title" placeholder="Enter article title" />
              <Input label="Authors" name="authors" placeholder="Enter author names" />
              <Input label="Affiliation" name="affiliation" placeholder="Enter affiliation" />
              <Input label="Keywords" name="keywords" placeholder="Enter keywords" />
            </div>

            <label className="contact-textarea">
              <span className="contact-label">Abstract</span>
              <textarea name="abstract" rows={6} placeholder="Write the abstract" />
            </label>

            <label className="input-wrapper">
              <span className="input-label">Manuscript Upload</span>
              <input name="manuscript" type="file" className="input-field" />
            </label>

            <label className="contact-textarea">
              <span className="contact-label">References</span>
              <textarea name="references" rows={6} placeholder="Enter references" />
            </label>

            <label className="input-wrapper">
              <span className="input-label">Optional Media Annex Upload</span>
              <input name="mediaAnnex" type="file" className="input-field" />
            </label>

            <div className="contact-actions">
              <button type="button" className="btn btn-primary">
                Submit Article
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
