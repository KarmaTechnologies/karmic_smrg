import Container from "@/components/layout/Container";

export default function ExploreHypothesesPage() {
  return (
    <section className="page-section hypothesis-page">
      <Container>
        {/* Header */}
        <div className="hypothesis-header">
          <span className="hypothesis-kicker">EXPLORATORY HYPOTHESES</span>
          <h1 className="title hypothesis-title">
            Exploratory Hypotheses & Early-Stage Research Frameworks
          </h1>
          <p className="hypothesis-lead">
            A structured pathway for publishing early-stage research ideas, conceptual
            reasoning, and observational insights with academic recognition.
          </p>
        </div>

        {/* What is an Exploratory Hypothesis? */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">What is an Exploratory Hypothesis?</h2>
          <p className="hypothesis-text">
            An Exploratory Hypothesis is a structured, testable proposition derived from
            observation, conceptual reasoning, or interdisciplinary insight, which may not
            yet have full experimental validation. It represents an early-stage contribution
            to scholarly knowledge, positioned prior to or alongside formal research validation.
          </p>
        </div>

        {/* Why This Format Matters */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Why This Format Matters</h2>
          <ul className="hypothesis-list">
            <li>Enables publication of early-stage research ideas</li>
            <li>Captures valuable observations often excluded from traditional journals</li>
            <li>Encourages innovation and interdisciplinary thinking</li>
            <li>Supports research direction-setting and hypothesis generation</li>
            <li>Provides a formal pathway for pre-validation scholarly contributions</li>
          </ul>
        </div>

        {/* Academic & Career Value */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Academic & Career Value</h2>
          <ul className="hypothesis-list">
            <li>Establishes intellectual contribution at an early stage</li>
            <li>Enables recognition for conceptual and theoretical work</li>
            <li>Supports citation as origin of ideas and research direction</li>
            <li>Enhances academic portfolio with structured hypotheses</li>
            <li>Encourages collaboration and future validation studies</li>
          </ul>
        </div>

        {/* HML Framework */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Hypothesis Maturity Level (HML Framework)</h2>
          <p className="hypothesis-text">
            Each submission is assigned a Hypothesis Maturity Level (HML) to indicate its
            stage of development:
          </p>
          <div className="hml-grid">
            <div className="hml-card">
              <span className="hml-badge">HML-0</span>
              <h3>Observational Insight</h3>
              <p>Initial observation or idea without structured reasoning</p>
            </div>
            <div className="hml-card">
              <span className="hml-badge">HML-1</span>
              <h3>Pattern Identification</h3>
              <p>Repeated or consistent observation across contexts</p>
            </div>
            <div className="hml-card">
              <span className="hml-badge">HML-2</span>
              <h3>Conceptual Reasoning</h3>
              <p>Logical explanation or theoretical basis proposed</p>
            </div>
            <div className="hml-card">
              <span className="hml-badge">HML-3</span>
              <h3>Testable Hypothesis</h3>
              <p>Clearly defined, falsifiable hypothesis with testing pathway</p>
            </div>
            <div className="hml-card">
              <span className="hml-badge">HML-4</span>
              <h3>Partial Validation</h3>
              <p>Preliminary evidence or supporting results available</p>
            </div>
            <div className="hml-card">
              <span className="hml-badge">HML-5</span>
              <h3>Replicated Validation</h3>
              <p>Verified through repeated or independent validation</p>
            </div>
          </div>
        </div>

        {/* Recommended Structure */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Recommended Structure (Section-wise Presentation)</h2>
          <ol className="hypothesis-list hypothesis-steps">
            <li><strong>Observation Source</strong> — Origin of the idea (field, lab, theory, experience)</li>
            <li><strong>Problem Context</strong> — Background and relevance</li>
            <li><strong>Hypothesis Statement</strong> — Clearly defined and testable</li>
            <li><strong>Supporting Reasoning</strong> — Logical or theoretical justification</li>
            <li><strong>Boundary Conditions</strong> — Where the hypothesis may not apply</li>
            <li><strong>Alternative Explanations</strong> — Competing interpretations</li>
            <li><strong>Testability Path</strong> — Proposed method for validation or falsification</li>
            <li><strong>Expected Implications</strong> — Potential impact if validated</li>
          </ol>
        </div>

        {/* Review & Approval */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Review & Approval Model</h2>
          <ul className="hypothesis-list">
            <li>Editorial screening is mandatory</li>
            <li>Evaluation focuses on: logical consistency, clarity of hypothesis, testability, academic relevance</li>
            <li>Traditional &ldquo;proof&rdquo; is not required</li>
            <li>HML level is assigned or validated during review</li>
          </ul>
        </div>

        {/* Fee */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Processing & Participation</h2>
          <p className="hypothesis-text">
            <strong>Exploratory Hypothesis Processing Fee:</strong> USD 5 / EUR 5
          </p>
          <p className="hypothesis-text" style={{ marginTop: "0.5rem" }}>Optional:</p>
          <ul className="hypothesis-list">
            <li>Academic writing refinement</li>
            <li>Visual explanation / diagrams</li>
            <li>Discussion integration</li>
          </ul>
        </div>

        {/* Integration */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Integration with Platform Ecosystem</h2>
          <ul className="hypothesis-list">
            <li>May evolve into full research articles</li>
            <li>Can be linked to discussions and debates</li>
            <li>Open for replication and validation</li>
            <li>Supports citation as conceptual origin</li>
          </ul>
        </div>

        {/* How to Contribute */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">How to Contribute</h2>
          <ul className="hypothesis-list">
            <li>Develop structured hypothesis using defined format</li>
            <li>Select appropriate HML level</li>
            <li>Submit for editorial screening</li>
            <li>Participate in discussions and validation</li>
          </ul>
        </div>

        <hr className="hypothesis-divider" />

        {/* Guidelines Section */}
        <div className="hypothesis-header">
          <span className="hypothesis-kicker">GUIDELINES</span>
          <h2 className="title hypothesis-title">
            Guidelines for Exploratory Hypotheses & HML-Based Evaluation
          </h2>
        </div>

        {[
          {
            number: "1",
            title: "Scope",
            text: "Exploratory Hypotheses are recognized as structured scholarly contributions representing early-stage research, conceptual reasoning, or observational insights. These submissions extend traditional academic publishing by enabling formal recognition of pre-validation research."
          },
          {
            number: "2",
            title: "Eligibility & Acceptance",
            list: [
              "Submissions must present a clearly defined hypothesis",
              "Content must demonstrate academic relevance and coherence",
              "Acceptance is subject to editorial board discretion",
              "Hypotheses lacking testability or structure may be rejected"
            ]
          },
          {
            number: "3",
            title: "Hypothesis Maturity Level (HML) Compliance",
            text: "All submissions must align with one of the defined HML categories:",
            list: [
              "HML-0 to HML-5 classification required",
              "Authors may propose a level, subject to editorial validation",
              "Misclassification may be corrected during review"
            ]
          },
          {
            number: "4",
            title: "Structural Requirements",
            text: "Mandatory components:",
            list: [
              "Observation or conceptual origin",
              "Clear hypothesis statement",
              "Logical reasoning or theoretical support",
              "Defined scope and limitations",
              "Testability or validation pathway"
            ]
          },
          {
            number: "5",
            title: "Evaluation Criteria",
            text: "Submissions are evaluated based on:",
            list: [
              "Clarity and precision of hypothesis",
              "Logical consistency",
              "Feasibility of validation",
              "Relevance to scholarly discourse",
              "Transparency of limitations"
            ]
          },
          {
            number: "6",
            title: "Review Process",
            list: [
              "Initial editorial screening",
              "Structured evaluation (non-traditional peer review)",
              "Optional expert input",
              "Final approval with HML classification"
            ]
          },
          {
            number: "7",
            title: "Ethical & Academic Standards",
            list: [
              "No misleading or unsupported claims",
              "Proper attribution of referenced concepts",
              "Disclosure of conflicts of interest",
              "Clear distinction between speculation and structured hypothesis"
            ]
          },
          {
            number: "8",
            title: "Labeling & Transparency",
            text: "Published hypotheses will include:",
            list: [
              "Assigned HML level",
              "Validation status",
              "Disclaimer (where applicable)"
            ],
            example: true
          },
          {
            number: "9",
            title: "Post-Publication Engagement",
            list: [
              "Open for discussion and critique",
              "May undergo HML upgrades based on validation",
              "Supports replication studies and collaborative research"
            ]
          },
          {
            number: "10",
            title: "Integration with Other Formats",
            list: [
              "May lead to: full research articles, discussions or debates, interviews and explanatory media"
            ]
          },
          {
            number: "11",
            title: "Editorial Authority",
            list: [
              "Editorial board determines: acceptance, HML classification, required revisions",
              "Maintains academic rigor and consistency"
            ]
          },
          {
            number: "12",
            title: "Final Note",
            text: "Exploratory Hypotheses formalize the early stages of scientific inquiry, enabling structured recognition of ideas, observations, and conceptual reasoning while maintaining academic transparency and rigor."
          }
        ].map((section) => (
          <div key={section.number} className="hypothesis-section guideline-card">
            <h3 className="guideline-section-title">
              <span className="guideline-number">{section.number}</span>
              {section.title}
            </h3>
            {section.text && <p className="hypothesis-text">{section.text}</p>}
            {section.list && (
              <ul className="hypothesis-list">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {section.example && (
              <div className="hypothesis-example">
                <em>Example:</em> &ldquo;This hypothesis is classified as HML-2 (Conceptual Reasoning)
                and is pending experimental validation.&rdquo;
              </div>
            )}
          </div>
        ))}
      </Container>
    </section>
  );
}