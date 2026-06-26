
import Container from "@/components/layout/Container";

const charges = [
  { type: "Article (Standard Research)", charge: "$199 USD" },
  { type: "Exploratory Hypotheses", charge: "$99 USD" },
  { type: "Lab Tours / Experimental Setup Documentation", charge: "$99 USD" },
  { type: "Video Interviews / Research Narratives", charge: "$99 USD" },
  { type: "Discussions / Scholarly Dialogues", charge: "$99 USD" },
  { type: "Slide Presentations / Visual Research", charge: "$99 USD" },
];

const formats = [
  {
    title: "Articles (Standard Research)",
    desc: "Full-length scholarly manuscripts presenting original research findings, methodologies, analyses, and conclusions."
  },
  {
    title: "Exploratory Hypotheses",
    desc: "Structured early-stage scholarly propositions, conceptual frameworks, and testable research ideas intended to stimulate further investigation."
  },
  {
    title: "Lab Tours / Experimental Setup Documentation",
    desc: "Detailed documentation of laboratory environments, experimental systems, methodologies, instrumentation, and procedural workflows supporting reproducibility."
  },
  {
    title: "Video Interviews / Research Narratives",
    desc: "Scholarly interviews and narrative presentations that provide contextual explanations, methodological insights, and expert perspectives related to research outputs."
  },
  {
    title: "Discussions / Scholarly Dialogues",
    desc: "Structured academic discussions, analytical exchanges, and publication-aligned scholarly dialogues that contribute to research interpretation and progression."
  },
  {
    title: "Slide Presentations / Visual Research",
    desc: "Research-focused visual presentations designed to communicate scientific concepts, findings, methodologies, and educational content through structured visual formats."
  }
];

export default function ProcessingChargesPage() {
  return (
    <section className="page-section hypothesis-page">
      <Container>
        {/* Header */}
        <div className="hypothesis-header">
          <span className="hypothesis-kicker">PROCESSING CHARGES</span>
          <h1 className="title hypothesis-title">Publication Processing Charges</h1>
          <p className="hypothesis-lead">
            The Science Media Research Group is committed to promoting accessible, transparent,
            and sustainable scholarly communication. As an open-access publishing platform, we
            maintain a structured Processing Charge model to support editorial management, content
            review, publication infrastructure, digital preservation, indexing initiatives, platform
            maintenance, and global dissemination of scholarly outputs.
          </p>
          <div className="hypothesis-example" style={{ marginTop: "1rem", background: "#eef4ff", borderLeftColor: "var(--primary)" }}>
            <p style={{ margin: 0 }}>
              All accepted submissions are published under open-access principles, ensuring
              worldwide accessibility and visibility without subscription barriers.
            </p>
          </div>
        </div>

        {/* Charge Schedule */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Processing Charge Schedule</h2>
          <div style={{ overflowX: "auto" }}>
            <table className="charges-table">
              <thead>
                <tr>
                  <th>Publication Type</th>
                  <th>Processing Charge (USD)</th>
                </tr>
              </thead>
              <tbody>
                {charges.map((item) => (
                  <tr key={item.type}>
                    <td>{item.type}</td>
                    <td style={{ fontWeight: 700, color: "#0f2f66", whiteSpace: "nowrap" }}>{item.charge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="hypothesis-text" style={{ marginTop: "0.8rem", fontStyle: "italic" }}>
            The applicable charge is invoiced only after a submission successfully completes the
            editorial evaluation process and is approved for publication.
          </p>
        </div>

        {/* What the Charge Covers */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">What the Processing Charge Covers</h2>
          <p className="hypothesis-text">The processing charge contributes toward:</p>
          <ul className="hypothesis-list">
            <li>Editorial screening and administrative processing</li>
            <li>Content quality assessment and review management</li>
            <li>Publication preparation and formatting</li>
            <li>Digital hosting and long-term archiving</li>
            <li>Open-access publication and global accessibility</li>
            <li>Metadata management and discoverability support</li>
            <li>Platform maintenance and scholarly communication services</li>
            <li>Content dissemination through academic and digital channels</li>
          </ul>
        </div>

        {/* Publication Formats */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Publication Formats Covered</h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            {formats.map((f) => (
              <div key={f.title} className="review-card" style={{ padding: "1rem 1.2rem" }}>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0f2f66", marginBottom: "0.3rem" }}>{f.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#4d5f79", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Withdrawal Policy */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Withdrawal Policy</h2>
          <p className="hypothesis-text">
            To maintain the integrity and efficiency of the editorial process, the following
            withdrawal policy applies:
          </p>
          <div className="labtours-compare" style={{ marginTop: "0.8rem" }}>
            <div className="compare-card">
              <span className="compare-label traditional">During Editorial Review</span>
              <p>Withdrawal charge equivalent to <strong>25%</strong> of the applicable Processing Charge.</p>
            </div>
            <div className="compare-card">
              <span className="compare-label setup">After Acceptance</span>
              <p>Withdrawal charge equivalent to <strong>50%</strong> of the applicable Processing Charge.</p>
            </div>
          </div>
        </div>

        {/* Payment Policy */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Payment Policy</h2>
          <ul className="hypothesis-list">
            <li>Processing Charges are applicable only to accepted submissions.</li>
            <li>Submission does not guarantee acceptance.</li>
            <li>Charges are assessed according to the selected publication format.</li>
            <li>Additional professional services, where applicable, may be offered separately and are not included in the standard processing charge.</li>
            <li>All payments are processed in accordance with the platform&rsquo;s publication and financial policies.</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="hypothesis-section">
          <h2 className="hypothesis-section-title">Contact</h2>
          <p className="hypothesis-text">
            For questions regarding processing charges, invoicing, or publication policies, authors
            may contact the editorial office through the official communication channels provided on
            the platform.
          </p>
          <p className="hypothesis-text" style={{ marginTop: "0.5rem" }}>
            The Science Media Research Group remains committed to supporting innovative, transparent,
            and accessible scholarly publishing across traditional and emerging research communication
            formats.
          </p>
        </div>
      </Container>

            <style>{`
        .charges-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.95rem;
        }
        .charges-table th,
        .charges-table td {
          padding: 0.75rem 1rem;
          text-align: left;
          border-bottom: 1px solid #e4edf7;
        }
        .charges-table th {
          background: #f0f5ff;
          color: #0f2f66;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.05em;
        }
        .charges-table tbody tr:hover {
          background: #f8faff;
        }
        .charges-table tbody tr:last-child td {
          border-bottom: none;
        }
        @media (max-width: 600px) {
          .charges-table th,
          .charges-table td {
            padding: 0.6rem 0.7rem;
            font-size: 0.88rem;
          }
        }
      `}</style>
    </section>
  );
}