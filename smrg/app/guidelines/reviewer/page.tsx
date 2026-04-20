import Container from "@/components/layout/Container";

export default function GuidelineReviewerPage() {
  return (
    <section className="page-section guideline-page">
      <Container>
        <div className="guideline-header">
          <p className="guideline-kicker">Reviewer Guidelines</p>
          <h1 className="title guideline-title">Reviewer Responsibilities and Best Practices</h1>
          <p className="subtitle guideline-lead">
            Reviewers support the integrity and quality of the journal by providing fair, timely, and constructive evaluations. The guidelines below outline expectations for assessment, ethics, and professional conduct.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">General Assessment</h2>
          <ul className="guideline-list">
            <li>Evaluate the significance, originality, clarity, methodology, and relevance of the manuscript.</li>
            <li>Consider whether the data supports the conclusions and if the discussion is balanced and evidence-based.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Detailed Comments</h2>
          <ul className="guideline-list">
            <li>Provide clear, numbered, and specific comments addressing the manuscript's strengths and areas for improvement.</li>
            <li>Separate comments intended for the authors from confidential notes to the editor.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Recommendation</h2>
          <ul className="guideline-list">
            <li>Choose an appropriate recommendation (Accept, Minor Revisions, Major Revisions, Reject).</li>
            <li>Justify your recommendation with evidence-based arguments.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Reviewer Responsibilities</h2>

          <h3 className="guideline-subtitle">Confidentiality</h3>
          <ul className="guideline-list">
            <li>All manuscripts and related materials must be treated as confidential documents.</li>
            <li>Do not share, discuss, or disclose content with anyone outside the review process without prior approval from the editorial office.</li>
          </ul>

          <h3 className="guideline-subtitle">Objectivity</h3>
          <ul className="guideline-list">
            <li>Provide fair, unbiased, and constructive evaluations.</li>
            <li>Avoid personal criticism and focus on the scientific content.</li>
          </ul>

          <h3 className="guideline-subtitle">Expertise and Competence</h3>
          <ul className="guideline-list">
            <li>Accept review assignments only if you have sufficient expertise to assess the manuscript.</li>
            <li>Decline the invitation if the topic is outside your area of competence or if you cannot meet the deadline.</li>
          </ul>

          <h3 className="guideline-subtitle">Timeliness</h3>
          <ul className="guideline-list">
            <li>Submit your review within the agreed timeframe.</li>
            <li>Notify the editorial office immediately if delays are expected.</li>
          </ul>

          <h3 className="guideline-subtitle">Ethical Considerations</h3>
          <h4 className="guideline-mini-title">Conflict of Interest</h4>
          <ul className="guideline-list">
            <li>Disclose any potential conflicts of interest (financial, institutional, personal, or collaborative relationships).</li>
            <li>Refrain from reviewing if a conflict could compromise your impartiality.</li>
          </ul>

          <h4 className="guideline-mini-title">Plagiarism and Ethical Concerns</h4>
          <ul className="guideline-list">
            <li>Report any suspected plagiarism, data fabrication, duplicate submission, or ethical concerns regarding human or animal subjects.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Review Format and Submission</h2>
          <ul className="guideline-list">
            <li>Use the journal's online submission system to complete and submit your review.</li>
            <li>Follow any specific formatting or structural guidelines provided in the reviewer form.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Recognition and Acknowledgment</h2>
          <ul className="guideline-list">
            <li>Your contribution may be acknowledged through formal certificates, reviewer listings, or reviewer rewards (subject to journal policy).</li>
            <li>Participation in peer review supports your professional development and academic service record.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Reviewer Qualifications</h2>
          <p className="guideline-text">To ensure high-quality peer review, reviewers should meet the following qualifications:</p>

          <h3 className="guideline-subtitle">Academic and Professional Expertise</h3>
          <ul className="guideline-list">
            <li>Hold a relevant advanced degree (typically a PhD, MD, or equivalent) in the subject area of the manuscript.</li>
            <li>Demonstrated expertise through recent publications in peer-reviewed journals related to the manuscript's topic.</li>
          </ul>

          <h3 className="guideline-subtitle">Research and Analytical Skills</h3>
          <ul className="guideline-list">
            <li>Ability to critically evaluate study design, methodology, data analysis, and interpretation.</li>
            <li>Familiarity with current developments and literature in the relevant field.</li>
          </ul>

          <h3 className="guideline-subtitle">Ethical and Professional Integrity</h3>
          <ul className="guideline-list">
            <li>Adherence to ethical guidelines in research and publishing.</li>
            <li>No history of academic misconduct or unethical behavior.</li>
          </ul>

          <h3 className="guideline-subtitle">Reviewing Experience</h3>
          <ul className="guideline-list">
            <li>Prior experience in peer review or editorial board participation is advantageous.</li>
            <li>Early-career researchers with strong publication records may be considered under the mentorship of experienced reviewers.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Reviewer Benefits</h2>

          <h3 className="guideline-subtitle">Recognition and Accreditation</h3>
          <ul className="guideline-list">
            <li>Acknowledgment: Public recognition through annual Thank You to Reviewers lists published on our website and in the journal.</li>
            <li>Certificates of appreciation: Downloadable certificates for each completed review to add to professional portfolios.</li>
            <li>Reviewer badges: Digital badges compatible with platforms such as Publons and ORCID to showcase reviewing activity.</li>
          </ul>

          <h3 className="guideline-subtitle">Professional Development</h3>
          <ul className="guideline-list">
            <li>Access to reviewer training: Complimentary or discounted access to workshops, webinars, and resources on peer review best practices.</li>
            <li>Feedback: Constructive feedback on review reports to help enhance reviewing skills.</li>
            <li>Networking opportunities: Invitations to editorial board meetings and reviewer forums to connect with other experts.</li>
          </ul>

          <h3 className="guideline-subtitle">Publishing Benefits</h3>
          <ul className="guideline-list">
            <li>Priority consideration: Expedited review or waiver of Article Processing Charges (APCs) for reviewers who publish with us.</li>
            <li>Discounts: Discounts on publication fees, conferences, and affiliated events.</li>
          </ul>

          <h3 className="guideline-subtitle">Contribution to Science</h3>
          <ul className="guideline-list">
            <li>Impact: Play an active role in advancing scientific knowledge by ensuring the quality and rigor of published research.</li>
            <li>Community service: Contribute to the scientific community and uphold ethical standards in research.</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
