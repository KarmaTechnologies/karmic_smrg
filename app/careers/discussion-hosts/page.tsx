import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function CareersDiscussionHostsPage() {
  return (
    <section className="page-section guideline-page">
      <Container>
        <div className="guideline-header">
          <h1 className="title guideline-title">Discussion Hosts</h1>
          <p className="subtitle guideline-lead">
            Facilitate structured academic discussions and research interviews.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Description</h2>
          <p className="guideline-text">
            Hosts engage with researchers to improve communication and dissemination of research.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Responsibilities</h2>
          <ul className="guideline-list">
            <li>Conduct interviews</li>
            <li>Moderate discussions</li>
            <li>Facilitate panels</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Opportunities</h2>
          <ul className="guideline-list">
            <li>Engage with researchers</li>
            <li>Gain recognition</li>
            <li>Earn per session</li>
          </ul>
        </div>

        <div className="journal-detail-actions">
          <Button type="button">Apply Now</Button>
        </div>
      </Container>
    </section>
  );
}
