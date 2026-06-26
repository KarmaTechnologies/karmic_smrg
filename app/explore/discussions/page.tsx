import Container from "@/components/layout/Container";

const guidelines = [
  {
    number: "1", title: "Scope",
    text: "Academic Discussions are structured scholarly engagements designed to support the evaluation, interpretation, and progression of research through moderated and academically aligned dialogue. These discussions function as an extension of formal publication processes."
  },
  {
    number: "2", title: "Nature of Discussions",
    list: [
      "Discussions are not conferences or informal forums",
      "They are structured, topic-driven scholarly interactions",
      "They may be linked to research outputs or thematic areas",
      "They are subject to editorial oversight and validation"
    ]
  },
  {
    number: "3", title: "Eligibility & Topic Approval",
    list: [
      "Topics may be proposed by authors, institutions, or academic groups",
      "All topics are subject to editorial screening and approval",
      "Topics must demonstrate academic relevance and clarity",
      "Predefined objectives and discussion questions are required"
    ]
  },
  {
    number: "4", title: "Structure Requirements",
    text: "Each discussion must include:",
    list: [
      "Topic title and abstract",
      "Defined objectives",
      "Pre-structured discussion questions",
      "Identified participants and roles",
      "Expected outcomes"
    ],
    note: "Unstructured or informal discussions will not be accepted."
  },
  {
    number: "5", title: "Participation Roles & Responsibilities",
    sections: [
      {
        label: "Host / Moderator",
        items: ["Ensures structured flow and academic integrity", "Maintains neutrality and time management"]
      },
      {
        label: "Speaker / Author",
        items: ["Presents research or topic context", "Engages in analytical discussion"]
      },
      {
        label: "Panel Contributor",
        items: ["Provides expert insights and critical perspectives", "Contributes to analytical depth"]
      },
      {
        label: "Participant",
        items: ["Engages within defined discussion scope", "Follows structured interaction guidelines"]
      }
    ]
  },
  {
    number: "6", title: "Editorial Oversight",
    list: [
      "Screening and approving discussion topics",
      "Validating structure and academic relevance",
      "Ensuring neutrality and compliance",
      "Monitoring adherence to discussion framework"
    ]
  },
  {
    number: "7", title: "Conduct & Academic Integrity",
    list: [
      "Maintain professional and academic tone",
      "Avoid unverified or misleading claims",
      "Respect intellectual contributions",
      "Disclose conflicts of interest where applicable"
    ]
  },
  {
    number: "8", title: "Discussion Execution Standards",
    list: [
      "Discussions must be structured and time-bound",
      "Moderation is required for all formal sessions",
      "Pre-defined discussion flow must be followed",
      "Deviation from structure may result in termination or rejection"
    ]
  },
  {
    number: "9", title: "Output & Publication",
    list: [
      "Structured discussion summary (publishable output)",
      "Recorded session (archival or access-based)",
      "Certification records"
    ]
  },
  {
    number: "10", title: "Certification Framework",
    list: [
      "The platform provides certification for: participation, panel contribution, moderation / hosting",
      "Certification is based on structured participation and compliance with guidelines"
    ]
  },
  {
    number: "11", title: "Platform Role & Limitations",
    list: [
      "The platform provides infrastructure, validation, and certification",
      "It does not function as a conference organizer",
      "It does not assume responsibility for institutional hosting arrangements",
      "It maintains neutrality in academic discourse"
    ]
  },
  {
    number: "12", title: "Bidding / Topic Initiation",
    list: [
      "Approved participants (authors, institutions, organizations) may initiate discussion topics",
      "Topic initiation is subject to editorial approval",
      "Participation structures are defined post-approval"
    ]
  },
  {
    number: "13", title: "Compliance & Enforcement",
    list: [
      "Non-compliant discussions may be rejected or discontinued",
      "Violations of academic standards may result in removal or restriction",
      "Editorial decisions are final"
    ]
  },
  {
    number: "14", title: "Final Statement",
    text: "Academic Discussions represent a structured evolution of scholarly communication, enabling research to be evaluated, contextualized, and advanced through disciplined and participatory academic dialogue."
  }
];

export default function ExploreDiscussionsPage() {
  return (
    <section className="page-section hypothesis-page">
      <Container>
        {/* Header */}
        <div className="hypothesis-header">
          <span className="hypothesis-kicker">ACADEMIC DISCUSSIONS</span>
          <h1 className="title hypothesis-title">
            Academic Discussions & Structured Research Dialogues
          </h1>
          <p className="hypothesis-lead">
            A structured extension of scholarly publishing, designed to facilitate the
            evaluation, interpretation, and progression of research through guided
            intellectual exchange.
          </p>
        </div>

        {/* Introduction */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Introduction</h2>
          <p className="hypothesis-text">
            Academic Discussions represent a structured extension of scholarly publishing,
            designed to facilitate the evaluation, interpretation, and progression of research
            through guided intellectual exchange. Unlike traditional conferences or informal
            forums, these discussions are positioned as publication-aligned scholarly
            interactions, contributing to the evolving dynamics of research validation and
            knowledge dissemination.
          </p>
          <p className="hypothesis-text" style={{ marginTop: "0.8rem" }}>
            This format enables researchers, institutions, and academic bodies to actively
            participate in the discourse surrounding research outputs, methodologies, and
            emerging ideas within a controlled and academically structured environment.
          </p>
        </div>

        {/* Conceptual Role */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Conceptual Role in Research Publishing</h2>
          <p className="hypothesis-text">
            Academic Discussions function as a post-publication and parallel-validation
            layer, complementing traditional research outputs:
          </p>
          <div className="labtours-compare" style={{ marginTop: "1rem" }}>
            <div className="compare-card">
              <span className="compare-label traditional">Research Articles</span>
              <p>Present validated findings</p>
            </div>
            <div className="compare-card">
              <span className="compare-label traditional">Hypotheses</span>
              <p>Introduce early-stage ideas</p>
            </div>
            <div className="compare-card">
              <span className="compare-label setup">Experimental Setup</span>
              <p>Define methodological execution</p>
            </div>
            <div className="compare-card">
              <span className="compare-label" style={{ background: "#fef3c7", color: "#92400e" }}>Discussions</span>
              <p>Evaluate, interpret, and expand research</p>
            </div>
          </div>
          <p className="hypothesis-text" style={{ marginTop: "0.8rem" }}>
            This establishes a multi-layered scholarly ecosystem, where knowledge is not
            only published but also actively examined and contextualized.
          </p>
        </div>

        {/* Purpose */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Purpose and Academic Value</h2>
          <ul className="hypothesis-list">
            <li>Encourages active participation from institutional and academic communities</li>
            <li>Enables critical evaluation of research methodologies and findings</li>
            <li>Supports interdisciplinary dialogue and knowledge exchange</li>
            <li>Enhances transparency and interpretability of research outputs</li>
            <li>Contributes to future-ready models of research presentation and validation</li>
          </ul>
        </div>

        {/* Nature of Participation */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Nature of Participation</h2>
          <p className="hypothesis-text">
            The discussion framework is designed to support contributions from:
          </p>
          <ul className="hypothesis-list">
            <li>Authors and researchers</li>
            <li>Editorial members and reviewers</li>
            <li>Universities and academic institutions</li>
            <li>Research groups and collaborative bodies</li>
          </ul>
          <p className="hypothesis-text" style={{ marginTop: "0.3rem" }}>
            Participation is structured and role-based, ensuring academic relevance and coherence.
          </p>
        </div>

        {/* Discussion Models */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Discussion Models</h2>
          <p className="hypothesis-text">The platform supports multiple structured formats:</p>
          <div className="review-steps" style={{ marginTop: "0.8rem", gridTemplateColumns: "repeat(2, 1fr)" }}>
            <div className="review-card">
              <h3>Structured Academic Discussion</h3>
              <p style={{ fontSize: "0.88rem", color: "#4d5f79", lineHeight: 1.5 }}>
                Focused dialogue linked to specific research outputs or themes
              </p>
            </div>
            <div className="review-card">
              <h3>Panel-Based Discussion</h3>
              <p style={{ fontSize: "0.88rem", color: "#4d5f79", lineHeight: 1.5 }}>
                Multi-participant analytical exchange involving domain experts
              </p>
            </div>
            <div className="review-card">
              <h3>Institutional Discussion</h3>
              <p style={{ fontSize: "0.88rem", color: "#4d5f79", lineHeight: 1.5 }}>
                Organized by universities or research bodies
              </p>
            </div>
            <div className="review-card">
              <h3>Thematic Research Dialogue</h3>
              <p style={{ fontSize: "0.88rem", color: "#4d5f79", lineHeight: 1.5 }}>
                Topic-driven discussions addressing broader research questions
              </p>
            </div>
          </div>
        </div>

        {/* Participation Roles */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Participation Roles</h2>
          <p className="hypothesis-text">Each discussion operates within a defined role hierarchy:</p>
          <ul className="hypothesis-list">
            <li><strong>Host / Moderator</strong> — Institutional or approved academic facilitator</li>
            <li><strong>Speaker / Author</strong> — Research presenter or contributor</li>
            <li><strong>Panel Contributor</strong> — Invited expert providing analytical insights</li>
            <li><strong>Participant</strong> — Active contributor within structured limits</li>
            <li><strong>Listener</strong> — Observational access, where applicable</li>
          </ul>
        </div>

        {/* Lifecycle */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Structured Discussion Lifecycle</h2>
          <ol className="hypothesis-list hypothesis-steps">
            <li><strong>Topic Definition</strong> — Proposed by authors, institutions, or academic bodies; includes abstract, objectives, and key questions</li>
            <li><strong>Editorial Screening</strong> — Ensures academic relevance and clarity; validates scope and structure</li>
            <li><strong>Participant Structuring</strong> — Defined roles and participation limits; institutional or individual involvement</li>
            <li><strong>Session Execution</strong> — Moderated and time-bound; structured into phases (introduction, analysis, discussion, conclusion)</li>
            <li><strong>Output Generation</strong> — Discussion summary (publishable), recorded session (archival access), participation certifications</li>
          </ol>
        </div>

        {/* Platform Role */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Platform Role</h2>
          <p className="hypothesis-text">The platform provides:</p>
          <ul className="hypothesis-list">
            <li>Structured environment for academic discussions</li>
            <li>Editorial screening and validation</li>
            <li>Certification for participation and contribution</li>
            <li>Archival and publication support</li>
          </ul>
          <p className="hypothesis-text" style={{ marginTop: "0.5rem" }}>
            The platform does not function as a conference organizer and does not assume
            hosting responsibilities beyond providing the structured framework.
          </p>
        </div>

        {/* Certification */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Certification & Academic Recognition</h2>
          <ul className="hypothesis-list">
            <li>Discussion Participation Certificates</li>
            <li>Panel Contributor Recognition</li>
            <li>Moderator / Host Certification</li>
          </ul>
          <p className="hypothesis-text" style={{ marginTop: "0.3rem" }}>
            These certifications are designed to support academic profiles and contribution records.
          </p>
        </div>

        {/* Bidding */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Bidding & Topic Initiation Model</h2>
          <p className="hypothesis-text">
            Authors, researchers, and institutions may propose or initiate discussion topics.
            Approved topics may be opened for participation and structured engagement through
            the platform, with institutional or organizational involvement encouraged.
          </p>
          <p className="hypothesis-text" style={{ marginTop: "0.5rem" }}>This model enables:</p>
          <ul className="hypothesis-list">
            <li>Academic-driven topic creation</li>
            <li>Institutional participation</li>
            <li>Structured expansion of research dialogue</li>
          </ul>
        </div>

        {/* Future */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Alignment with Future Research Ecosystems</h2>
          <ul className="hypothesis-list">
            <li>Evolution of interactive research validation</li>
            <li>Integration of dialogue into scholarly workflows</li>
            <li>Expansion of research beyond static publications</li>
            <li>Development of collaborative and participatory research environments</li>
          </ul>
        </div>

        {/* How to Participate */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">How to Participate</h2>
          <ul className="hypothesis-list">
            <li>Propose or join a discussion topic</li>
            <li>Participate as author, contributor, or institutional member</li>
            <li>Engage in structured academic dialogue</li>
            <li>Contribute to discussion outputs and scholarly exchange</li>
          </ul>
        </div>

        <hr className="hypothesis-divider" />

        {/* Guidelines */}
        <div className="hypothesis-header">
          <span className="hypothesis-kicker">GUIDELINES</span>
          <h2 className="title hypothesis-title">
            Guidelines for Academic Discussions & Structured Research Dialogues
          </h2>
        </div>

        {guidelines.map((section) => (
          <div key={section.number} className="hypothesis-section guideline-card">
            <h3 className="guideline-section-title">
              <span className="guideline-number">{section.number}</span>
              {section.title}
            </h3>
            {section.text && <p className="hypothesis-text">{section.text}</p>}
            {section.list && (
              <ul className="hypothesis-list">
                {section.list.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            )}
            {section.sections && section.sections.map((sub, i) => (
              <div key={i} style={{ marginTop: i > 0 ? "1rem" : "0.5rem" }}>
                <p className="hypothesis-text" style={{ fontWeight: 600, color: "#0f2f66" }}>{sub.label}</p>
                <ul className="hypothesis-list">
                  {sub.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
            {section.note && (
              <div className="labtours-note">{section.note}</div>
            )}
          </div>
        ))}
      </Container>
    </section>
  );
}