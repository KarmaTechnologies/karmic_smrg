import Container from "@/components/layout/Container";

export default function GuidelineMediaAnnexPage() {
  return (
    <section className="page-section hypothesis-page">
      <Container>
        {/* Header */}
        <div className="hypothesis-header">
          <span className="hypothesis-kicker">MEDIA ANNEX GUIDELINES</span>
          <h1 className="title hypothesis-title">Media Annex Guidelines</h1>
          <p className="hypothesis-lead">
            Media Annex submissions provide supplementary multimedia materials intended to
            enhance the understanding, visualization, interpretation, or communication of
            scholarly work. These materials serve as supporting academic resources alongside
            publications, presentations, discussions, or conference proceedings.
          </p>
          <div className="hypothesis-example" style={{ marginTop: "1rem", background: "#eef4ff", borderLeftColor: "var(--primary)" }}>
            <p style={{ margin: 0 }}>
              Media Annex content may include educational, demonstrative, explanatory, or
              evidence-supportive media prepared in a professional and academic format.
            </p>
          </div>
        </div>

        {/* Accepted Media Formats */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Accepted Media Formats</h2>
          <p className="hypothesis-text">Submissions may include:</p>
          <ul className="hypothesis-list">
            <li>Scientific images and illustrations</li>
            <li>Graphical abstracts</li>
            <li>Infographics</li>
            <li>Educational videos</li>
            <li>Audio discussions or interviews</li>
            <li>Presentation recordings</li>
            <li>Demonstrative laboratory or procedural media</li>
            <li>Data visualization materials</li>
            <li>Supplementary animations or simulations</li>
          </ul>
        </div>

        {/* Purpose */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Purpose of Media Annex</h2>
          <p className="hypothesis-text">Media Annex materials are intended to:</p>
          <ul className="hypothesis-list">
            <li>Improve research accessibility and understanding</li>
            <li>Support scientific communication</li>
            <li>Enhance educational engagement</li>
            <li>Provide visual or audio clarification</li>
            <li>Facilitate interdisciplinary dissemination</li>
            <li>Complement associated scholarly content</li>
          </ul>
        </div>

        {/* Submission Requirements */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Submission Requirements</h2>
          <p className="hypothesis-text">All media submissions should:</p>
          <ul className="hypothesis-list">
            <li>Be relevant to the associated scholarly content</li>
            <li>Maintain academic and professional quality</li>
            <li>Include descriptive titles and captions</li>
            <li>Provide appropriate attribution and permissions</li>
            <li>Avoid copyrighted or unauthorized materials</li>
            <li>Follow ethical, privacy, and institutional standards</li>
          </ul>
        </div>

        {/* Technical Standards */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Technical & Quality Standards</h2>
          <p className="hypothesis-text">Authors are encouraged to ensure:</p>
          <ul className="hypothesis-list">
            <li>Clear audio and visual quality</li>
            <li>Readable graphical elements</li>
            <li>Appropriate formatting and labeling</li>
            <li>Non-deceptive representation of data or procedures</li>
            <li>Compatibility with standard digital viewing platforms</li>
          </ul>
        </div>

        {/* Ethical Compliance */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Ethical & Compliance Requirements</h2>
          <p className="hypothesis-text">Media content must:</p>
          <ul className="hypothesis-list">
            <li>Respect participant privacy and confidentiality</li>
            <li>Avoid misleading editing or manipulation</li>
            <li>Include consent where human subjects are identifiable</li>
            <li>Follow institutional, ethical, and publication policies</li>
            <li>Avoid promotional, defamatory, or non-academic content</li>
          </ul>
        </div>

        {/* Review Process */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Review Process</h2>
          <p className="hypothesis-text">
            Media Annex submissions may undergo editorial screening to evaluate:
          </p>
          <ul className="hypothesis-list">
            <li>Academic relevance</li>
            <li>Technical clarity</li>
            <li>Ethical compliance</li>
            <li>Educational value</li>
            <li>Consistency with associated scholarly material</li>
          </ul>
        </div>

        {/* Accessibility & Archiving */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Accessibility & Archiving</h2>
          <p className="hypothesis-text">Accepted Media Annex materials may be:</p>
          <ul className="hypothesis-list">
            <li>Published alongside scholarly articles or proceedings</li>
            <li>Assigned digital identifiers where applicable</li>
            <li>Archived for educational and academic reference</li>
            <li>Made accessible through institutional or publication platforms</li>
          </ul>
        </div>

        {/* Objective */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Objective</h2>
          <p className="hypothesis-text">
            The purpose of the Media Annex category is to strengthen scholarly communication
            through responsible multimedia integration while supporting transparency, education,
            visualization, and broader scientific engagement.
          </p>
        </div>
      </Container>
    </section>
  );
}