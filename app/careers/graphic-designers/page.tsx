import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function CareersGraphicDesignersPage() {
  return (
    <section className="page-section guideline-page">
      <Container>
        <div className="guideline-header">
          <h1 className="title guideline-title">Graphic Designers</h1>
          <p className="subtitle guideline-lead">Create visual research materials.</p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Description</h2>
          <p className="guideline-text">Support research communication through design.</p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Responsibilities</h2>
          <ul className="guideline-list">
            <li>Design visuals</li>
            <li>Create infographics</li>
            <li>Prepare slides</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Opportunities</h2>
          <ul className="guideline-list">
            <li>Work on research design projects</li>
            <li>Earn per assignment</li>
          </ul>
        </div>

        <div className="journal-detail-actions">
          <Button type="button">Apply Now</Button>
        </div>
      </Container>
    </section>
  );
}
