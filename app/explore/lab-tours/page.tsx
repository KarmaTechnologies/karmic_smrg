import Container from "@/components/layout/Container";

const guidelines = [
  {
    number: "1",
    title: "Scope",
    text: "Experimental Setup Documentation Papers are formal scholarly submissions that document experimental systems, laboratory configurations, and methodological execution. These papers are intended to support reproducibility, methodological clarity, and applied research communication."
  },
  {
    number: "2",
    title: "Eligibility Criteria",
    list: [
      "Represent a clearly defined experimental or procedural setup",
      "Demonstrate academic or applied relevance",
      "Provide sufficient detail for reproducibility",
      "Maintain structured and professional presentation"
    ]
  },
  {
    number: "3",
    title: "Mandatory Structure",
    text: "All submissions must include:",
    list: [
      "Research Context",
      "Objective of Setup",
      "Experimental Design",
      "Materials and Equipment",
      "Methodology / Procedure",
      "Visual Documentation",
      "Observations / Expected Behavior",
      "Limitations",
      "Reproducibility Notes"
    ],
    note: "Incomplete or unstructured submissions may be rejected at the screening stage."
  },
  {
    number: "4",
    title: "Content Standards",
    list: [
      "Use clear, precise, and academic language",
      "Avoid informal or purely demonstrative content",
      "Ensure alignment between visual and textual explanation",
      "Provide accurate technical descriptions",
      "Avoid unsupported claims or interpretations"
    ]
  },
  {
    number: "5",
    title: "Ethical Compliance",
    list: [
      "No misleading representation of experimental conditions",
      "Proper attribution of referenced methods or tools",
      "Disclosure of conflicts of interest (if applicable)",
      "Adherence to safety and ethical standards"
    ]
  },
  {
    number: "6",
    title: "Editorial Review Process",
    sections: [
      {
        label: "Stage 1: Editorial Screening",
        items: ["Format compliance", "Relevance and clarity"]
      },
      {
        label: "Stage 2: Technical Validation",
        items: ["Method accuracy", "Completeness of documentation", "Reproducibility feasibility"]
      },
      {
        label: "Stage 3: Final Approval",
        items: ["Editorial verification", "Publication classification assigned"]
      }
    ]
  },
  {
    number: "7",
    title: "Reviewer Guidelines",
    text: "Reviewers evaluate:",
    list: [
      "Whether the setup is clearly and fully described",
      "Whether the methodology is logically structured",
      "Whether replication is feasible based on provided details",
      "Whether visuals enhance understanding",
      "Whether limitations are transparently stated"
    ],
    note2: "Reviewers do not evaluate: novelty of results, statistical outcomes, theoretical contribution"
  },
  {
    number: "8",
    title: "Editor Responsibilities",
    list: [
      "Ensuring submissions meet scholarly standards",
      "Assigning appropriate reviewers (if required)",
      "Verifying structural and technical completeness",
      "Maintaining consistency in classification and labeling",
      "Ensuring neutrality and academic integrity"
    ]
  },
  {
    number: "9",
    title: "Author / Presenter Responsibilities",
    list: [
      "Provide accurate and complete documentation",
      "Ensure clarity in both narrative and visual components",
      "Follow prescribed structure",
      "Maintain academic tone and objectivity",
      "Ensure reproducibility-focused presentation"
    ]
  },
  {
    number: "10",
    title: "Media Requirements",
    list: [
      "Clear audio-visual quality (if video included)",
      "Proper labeling and segmentation",
      "Supporting diagrams or annotations where necessary"
    ]
  },
  {
    number: "11",
    title: "Publication & Labeling",
    list: [
      "Each publication will clearly display: Publication Type, Review Type, Validation Status, Associated Content (if linked)"
    ]
  },
  {
    number: "12",
    title: "Integration with Scholarly Ecosystem",
    list: [
      "Support or extend research articles",
      "Serve as reference for replication studies",
      "Be used in teaching and training",
      "Integrate with discussions and further validation"
    ]
  },
  {
    number: "13",
    title: "Final Statement",
    text: "Experimental Setup Documentation Papers formalize the methodological foundation of research, ensuring that experimental knowledge is not only performed but systematically recorded, evaluated, and disseminated within the scholarly ecosystem."
  }
];

export default function ExploreLabToursPage() {
  return (
    <section className="page-section labtours-page">
      <Container>
        {/* Header */}
        <div className="labtours-header">
          <span className="labtours-kicker">EXPERIMENTAL SETUP DOCUMENTATION</span>
          <h1 className="title labtours-title">
            Experimental Setup Documentation Papers
          </h1>
          <p className="labtours-lead">
            Structured scholarly publications that formally record laboratory environments,
            instrumentation, system configurations, and procedural methodologies for
            reproducibility and transparency in research.
          </p>
        </div>

        {/* Introduction */}
        <div className="labtours-section">
          <h2 className="labtours-section-title">Introduction</h2>
          <p className="labtours-text">
            Experimental Setup Documentation Papers are structured scholarly publications that
            formally record laboratory environments, instrumentation, system configurations,
            and procedural methodologies. These papers are designed to complement traditional
            research articles by providing detailed, reproducible accounts of experimental
            design and execution.
          </p>
          <p className="labtours-text" style={{ marginTop: "0.8rem" }}>
            While conventional publications emphasize results and analysis, Experimental Setup
            Documentation focuses on the methodological and operational foundation of research,
            addressing a critical gap in reproducibility and transparency within scholarly
            communication.
          </p>
        </div>

        {/* Conceptual Alignment */}
        <div className="labtours-section">
          <h2 className="labtours-section-title">Conceptual Alignment with Traditional Publishing</h2>
          <p className="labtours-text">
            Experimental Setup Documentation Papers do not replace traditional research articles;
            rather, they extend and strengthen them.
          </p>
          <div className="labtours-compare">
            <div className="compare-card">
              <span className="compare-label traditional">Traditional Articles</span>
              <p>Present hypotheses, results, and conclusions</p>
            </div>
            <span className="compare-vs">⟶</span>
            <div className="compare-card">
              <span className="compare-label setup">Experimental Setup Papers</span>
              <p>Document how those results are made possible</p>
            </div>
          </div>
          <p className="labtours-text" style={{ marginTop: "1rem" }}>
            This creates a dual-layer publication model:
          </p>
          <ul className="labtours-list">
            <li><strong>Analytical Layer</strong> — results, theory, interpretation</li>
            <li><strong>Methodological Layer</strong> — setup, execution, reproducibility</li>
          </ul>
          <p className="labtours-text" style={{ marginTop: "0.5rem" }}>
            Together, these layers enhance the reliability, interpretability, and reusability
            of research outputs.
          </p>
        </div>

        {/* Why This Format Matters */}
        <div className="labtours-section">
          <h2 className="labtours-section-title">Why This Format Matters</h2>
          <ul className="labtours-list">
            <li>Addresses the reproducibility gap in scientific research</li>
            <li>Provides transparency in experimental design and execution</li>
            <li>Enables accurate replication across institutions and disciplines</li>
            <li>Reduces ambiguity in methodology sections of traditional papers</li>
            <li>Supports training, teaching, and methodological standardization</li>
          </ul>
        </div>

        {/* Academic & Professional Value */}
        <div className="labtours-section">
          <h2 className="labtours-section-title">Academic & Professional Value</h2>
          <ul className="labtours-list">
            <li>Establishes credibility in applied and experimental research</li>
            <li>Recognizes methodological contributions as independent scholarly outputs</li>
            <li>Enhances research portfolios with reproducibility-focused publications</li>
            <li>Supports interdisciplinary collaboration through clear procedural documentation</li>
            <li>Enables citation of experimental setups as standalone references</li>
          </ul>
        </div>

        {/* Impact on Future Research */}
        <div className="labtours-section">
          <h2 className="labtours-section-title">Impact on Future Research</h2>
          <p className="labtours-text">
            Experimental Setup Documentation Papers contribute to the evolution of scholarly
            publishing by:
          </p>
          <ul className="labtours-list">
            <li>Enabling reproducible science as a first-class output</li>
            <li>Supporting method standardization across disciplines</li>
            <li>Facilitating faster validation and replication cycles</li>
            <li>Enhancing open science and collaborative research ecosystems</li>
            <li>Providing a foundation for media-integrated and discussion-driven research models</li>
          </ul>
          <p className="labtours-text" style={{ marginTop: "0.5rem" }}>
            Over time, such documentation is expected to become an essential component of
            credible research dissemination.
          </p>
        </div>

        {/* Structure of Publication */}
        <div className="labtours-section">
          <h2 className="labtours-section-title">Structure of Publication</h2>
          <p className="labtours-text">
            Each submission must follow a structured academic format:
          </p>
          <ol className="labtours-list labtours-steps">
            <li>Research Context</li>
            <li>Objective of Experimental Setup</li>
            <li>Experimental Design and System Architecture</li>
            <li>Materials and Instrumentation</li>
            <li>Methodology / Procedure</li>
            <li>Visual Documentation (images, video, diagrams)</li>
            <li>Observations and Expected Outcomes</li>
            <li>Limitations and Constraints</li>
            <li>Reproducibility Notes</li>
            <li>Applicability and Use Cases</li>
          </ol>
        </div>

        {/* Editorial Approval */}
        <div className="labtours-section">
          <h2 className="labtours-section-title">Editorial Approval & Review Model</h2>
          <p className="labtours-text">
            Experimental Setup Documentation Papers follow a Technical Validation Review Model,
            distinct from traditional hypothesis-driven peer review.
          </p>
          <div className="review-steps">
            <div className="review-card">
              <h3>Editorial Screening</h3>
              <ul>
                <li>Relevance to scholarly or applied research</li>
                <li>Clarity of purpose and documentation</li>
                <li>Compliance with format and ethical standards</li>
              </ul>
            </div>
            <div className="review-card">
              <h3>Technical Review Criteria</h3>
              <ul>
                <li>Completeness of setup description</li>
                <li>Accuracy of methodology</li>
                <li>Reproducibility potential</li>
                <li>Clarity of visual and procedural explanation</li>
                <li>Consistency between narrative and demonstration</li>
              </ul>
            </div>
            <div className="review-card">
              <h3>Review Outcome</h3>
              <ul>
                <li>Accepted (Editorially Verified)</li>
                <li>Revision Required</li>
                <li>Rejected (insufficient clarity or rigor)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Publication Classification */}
        <div className="labtours-section">
          <h2 className="labtours-section-title">Publication Classification</h2>
          <p className="labtours-text">Each published paper will include:</p>
          <ul className="labtours-list">
            <li><strong>Publication Type:</strong> Experimental Setup Documentation</li>
            <li><strong>Review Type:</strong> Technical Validation</li>
            <li><strong>Status:</strong> Editorially Verified</li>
            <li><strong>Linked Content:</strong> (optional) Article / Hypothesis / Discussion</li>
          </ul>
        </div>

        {/* Open Access */}
        <div className="labtours-section">
          <h2 className="labtours-section-title">Open Access & Usage</h2>
          <p className="labtours-text">
            All Experimental Setup Documentation Papers are published under open-access
            principles, enabling:
          </p>
          <ul className="labtours-list">
            <li>Global accessibility</li>
            <li>Educational and training use</li>
            <li>Citation and reuse with attribution</li>
            <li>Integration into future research workflows</li>
          </ul>
        </div>

        {/* How to Contribute */}
        <div className="labtours-section">
          <h2 className="labtours-section-title">How to Contribute</h2>
          <ul className="labtours-list">
            <li>Prepare structured documentation of experimental setup</li>
            <li>Include visual and procedural clarity</li>
            <li>Ensure reproducibility-focused presentation</li>
            <li>Submit through the designated content type</li>
            <li>Undergo editorial and technical validation</li>
          </ul>
        </div>

        <hr className="labtours-divider" />

        {/* Guidelines */}
        <div className="labtours-header">
          <span className="labtours-kicker">GUIDELINES</span>
          <h2 className="title labtours-title">
            Guidelines for Experimental Setup Documentation Papers
          </h2>
        </div>

        {guidelines.map((section) => (
          <div key={section.number} className="labtours-section guideline-card">
            <h3 className="guideline-section-title">
              <span className="guideline-number">{section.number}</span>
              {section.title}
            </h3>
            {section.text && <p className="labtours-text">{section.text}</p>}
            {section.list && (
              <ul className="labtours-list">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {section.sections && section.sections.map((sub, i) => (
              <div key={i} style={{ marginTop: i > 0 ? "1rem" : "0.5rem" }}>
                <p className="labtours-text" style={{ fontWeight: 600, color: "#0f2f66" }}>{sub.label}</p>
                <ul className="labtours-list">
                  {sub.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            {section.note && (
              <div className="labtours-note">{section.note}</div>
            )}
            {section.note2 && (
              <div className="labtours-note">{section.note2}</div>
            )}
          </div>
        ))}
      </Container>
    </section>
  );
}