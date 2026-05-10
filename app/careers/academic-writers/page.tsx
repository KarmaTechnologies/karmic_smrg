import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function CareersAcademicWritersPage() {
  return (
    <section className="page-section guideline-page">
      <Container>
        <div className="guideline-header">
          <h1 className="title guideline-title">Academic Writers</h1>
          <p className="subtitle guideline-lead">
            Provide structured writing support for research content.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Description</h2>
          <p className="guideline-text">
            Assist authors in preparing and refining scholarly manuscripts.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Responsibilities</h2>
          <ul className="guideline-list">
            <li>Manuscript drafting</li>
            <li>Content structuring</li>
            <li>Language improvement</li>
            <li>Formatting</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Opportunities</h2>
          <ul className="guideline-list">
            <li>Work with global researchers</li>
            <li>Earn project-based income</li>
          </ul>
        </div>

        <div className="journal-detail-actions">
          <Button type="button">Apply Now</Button>
        </div>
      </Container>
    </section>
  );
}
