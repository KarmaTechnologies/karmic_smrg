import Container from "@/components/layout/Container";

const guidelines = [
  {
    number: "1", title: "Scope",
    text: "Research Interviews are recognized as structured scholarly outputs that complement traditional publications. They are intended to present research insights, contextual explanations, and analytical discussions in a narrative format."
  },
  {
    number: "2", title: "Eligibility & Acceptance",
    list: [
      "Interview topics are accepted at the discretion of the Editorial Board",
      "Submissions must demonstrate academic relevance and clarity",
      "Interviews may be linked to published or submitted research"
    ]
  },
  {
    number: "3", title: "Format Compliance",
    text: "All submissions must adhere to structured presentation:",
    list: [
      "Research context and background",
      "Clearly defined discussion objectives",
      "Methodological explanation (if applicable)",
      "Analytical insights and interpretation",
      "Limitations and future scope"
    ]
  },
  {
    number: "4", title: "Hosted vs Unhosted Standards",
    sections: [
      {
        label: "Hosted Interviews",
        items: [
          "Conducted with approved moderators or discussion hosts",
          "Follow structured questioning frameworks",
          "Moderation ensures academic rigor and neutrality"
        ]
      },
      {
        label: "Unhosted Interviews",
        items: [
          "Must be pre-scripted or outline-driven",
          "Should maintain clarity, coherence, and academic tone",
          "Subject to stricter editorial screening"
        ]
      }
    ]
  },
  {
    number: "5", title: "Script & Content Expectations",
    list: [
      "Use structured question-answer or narrative format",
      "Avoid informal or unstructured dialogue",
      "Maintain professional and academic language",
      "Ensure logical flow and thematic consistency"
    ]
  },
  {
    number: "6", title: "Ethical & Editorial Compliance",
    list: [
      "No misleading or unverified claims",
      "Proper attribution of referenced work",
      "Disclosure of conflicts of interest (if any)",
      "Respect for academic integrity and neutrality"
    ]
  },
  {
    number: "7", title: "Review Process",
    list: [
      "Editorial screening for relevance and clarity",
      "Format validation (structure and completeness)",
      "Optional reviewer input for technical accuracy",
      "Final approval by editorial board"
    ]
  },
  {
    number: "8", title: "Media & Technical Standards",
    list: [
      "Clear audio and visual quality",
      "Structured segmentation (if long format)",
      "Supporting materials (slides, visuals) where applicable"
    ]
  },
  {
    number: "9", title: "Open Access & Usage",
    list: [
      "Published under open-access principles",
      "May be cited as supplementary scholarly material",
      "Can be integrated into discussions and teaching"
    ]
  },
  {
    number: "10", title: "Role of Editorial Board",
    list: [
      "Approves interview topics",
      "Defines thematic direction",
      "Ensures academic quality and consistency",
      "May recommend hosted formats for higher-impact content"
    ]
  },
  {
    number: "11", title: "Integration with Platform Ecosystem",
    list: [
      "Interviews may lead to: discussions, panel sessions, extended research engagement"
    ]
  },
  {
    number: "12", title: "Final Note",
    text: "Research Interviews represent a structured extension of scholarly communication, enabling knowledge to be articulated, contextualized, and disseminated beyond traditional textual formats while maintaining academic rigor and credibility."
  }
];

export default function ExploreVideosPage() {
  return (
    <section className="page-section hypothesis-page">
      <Container>
        {/* Header */}
        <div className="hypothesis-header">
          <span className="hypothesis-kicker">RESEARCH INTERVIEWS</span>
          <h1 className="title hypothesis-title">
            Research Interviews & Scholarly Narratives
          </h1>
          <p className="hypothesis-lead">
            Structured academic dialogues designed to contextualize research outputs,
            methodologies, and insights through guided or self-presented narrative formats.
          </p>
        </div>

        {/* What is a Research Interview? */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">What is a Research Interview?</h2>
          <p className="hypothesis-text">
            Research Interviews are structured academic dialogues designed to contextualize
            research outputs, methodologies, and insights through guided or self-presented
            narrative formats. These interviews extend traditional publications by enabling
            authors and experts to articulate reasoning, interpretation, and implications
            beyond written manuscripts.
          </p>
        </div>

        {/* Why This Format Matters */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Why This Format Matters</h2>
          <ul className="hypothesis-list">
            <li>Enhances interpretability of research findings</li>
            <li>Enables contextual explanation of complex methodologies</li>
            <li>Bridges the gap between technical content and broader understanding</li>
            <li>Supports interdisciplinary accessibility</li>
            <li>Encourages citation through clarity and engagement</li>
          </ul>
        </div>

        {/* Academic & Career Value */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Academic & Career Value</h2>
          <ul className="hypothesis-list">
            <li>Strengthens researcher visibility and academic presence</li>
            <li>Establishes domain authority through articulated insights</li>
            <li>Enables narrative-based scholarly communication</li>
            <li>Adds multimedia depth to research portfolios</li>
            <li>Supports teaching, outreach, and collaboration</li>
          </ul>
        </div>

        {/* Format Types */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Format Types</h2>
          <div className="review-steps">
            <div className="review-card">
              <h3>Hosted Interviews</h3>
              <ul>
                <li>Moderated by approved discussion hosts or editorial representatives</li>
                <li>Structured, guided conversation</li>
                <li>Ensures academic flow and thematic consistency</li>
              </ul>
            </div>
            <div className="review-card">
              <h3>Unhosted (Author-Led) Interviews</h3>
              <ul>
                <li>Self-recorded by authors or contributors</li>
                <li>Requires structured scripting for clarity and coherence</li>
                <li>Subject to editorial screening before publication</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Structure */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Recommended Structure (Section-wise Presentation)</h2>
          <p className="hypothesis-text">
            Each interview should follow a structured academic flow:
          </p>
          <ol className="hypothesis-list hypothesis-steps">
            <li><strong>Introduction</strong> — Research context, author background, scope of discussion</li>
            <li><strong>Research Overview</strong> — Problem statement, objectives, key contributions</li>
            <li><strong>Methodology Explanation</strong> — Approach used, tools, models, justification</li>
            <li><strong>Key Findings & Insights</strong> — Major observations, interpretations, comparative relevance</li>
            <li><strong>Critical Discussion</strong> — Limitations, challenges, alternative perspectives</li>
            <li><strong>Future Scope</strong> — Extensions, open questions, potential applications</li>
            <li><strong>Closing Summary</strong> — Key takeaways, final remarks</li>
          </ol>
        </div>

        {/* Scripted Approach */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Scripted Approach (Recommended)</h2>
          <p className="hypothesis-text">
            While interviews may appear conversational, a pre-structured script is strongly
            encouraged to maintain clarity, academic coherence, and effective knowledge transfer.
          </p>
        </div>

        {/* Review */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Review & Editorial Oversight</h2>
          <ul className="hypothesis-list">
            <li>All interview topics are subject to editorial approval</li>
            <li>Content must align with scholarly relevance and integrity</li>
            <li>Structured review ensures clarity, neutrality, and academic tone</li>
            <li>Hosted sessions may include moderated question frameworks</li>
          </ul>
        </div>

        {/* Fee */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Processing & Participation</h2>
          <p className="hypothesis-text">
            <strong>Unhosted Interview:</strong> USD 6 / EUR 5
          </p>
          <p className="hypothesis-text" style={{ marginTop: "0.3rem" }}>
            <strong>Hosted Interview:</strong> USD 10 / EUR 9
          </p>
          <p className="hypothesis-text" style={{ marginTop: "0.8rem" }}>Optional:</p>
          <ul className="hypothesis-list">
            <li>Host engagement</li>
            <li>Video editing</li>
            <li>Script development (via Careers marketplace)</li>
          </ul>
        </div>

        {/* Integration */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Integration with Research</h2>
          <ul className="hypothesis-list">
            <li>May be linked to published articles or hypotheses</li>
            <li>Can function as standalone scholarly narratives</li>
            <li>Supports citation, teaching, and discussion integration</li>
          </ul>
        </div>

        {/* How to Contribute */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">How to Contribute</h2>
          <ul className="hypothesis-list">
            <li>Choose interview type (hosted / unhosted)</li>
            <li>Prepare structured script or discussion outline</li>
            <li>Record or schedule session</li>
            <li>Submit for editorial screening</li>
          </ul>
        </div>

        <hr className="hypothesis-divider" />

        {/* Guidelines */}
        <div className="hypothesis-header">
          <span className="hypothesis-kicker">GUIDELINES</span>
          <h2 className="title hypothesis-title">
            Guidelines for Research Interviews & Scholarly Narratives
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
          </div>
        ))}
      </Container>
    </section>
  );
}