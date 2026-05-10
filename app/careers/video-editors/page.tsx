import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function CareersVideoEditorsPage() {
  return (
    <section className="page-section guideline-page">
      <Container>
        <div className="guideline-header">
          <h1 className="title guideline-title">Video Editors</h1>
          <p className="subtitle guideline-lead">Support research video production and editing.</p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Description</h2>
          <p className="guideline-text">Prepare high-quality research video content.</p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Responsibilities</h2>
          <ul className="guideline-list">
            <li>Video editing</li>
            <li>Content structuring</li>
            <li>Visual enhancement</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Opportunities</h2>
          <ul className="guideline-list">
            <li>Work on academic media</li>
            <li>Earn per project</li>
          </ul>
        </div>

        <div className="journal-detail-actions">
          <Button type="button">Apply Now</Button>
        </div>
      </Container>
    </section>
  );
}
