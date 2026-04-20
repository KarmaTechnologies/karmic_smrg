import Container from "@/components/layout/Container";

export default function GuidelineAuthorPage() {
  return (
    <section className="page-section guideline-page">
      <Container>
        <div className="guideline-header">
          <p className="guideline-kicker">Author Guidelines</p>
          <h1 className="title guideline-title">Instructions for Authors</h1>
          <p className="subtitle guideline-lead">
            At Science Media Research Group, we provide a platform for the dissemination of high-quality scholarly research across multiple disciplines. To maintain the integrity, consistency, and readability of published work, all authors must carefully follow the manuscript preparation and submission guidelines outlined below.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">General Requirements</h2>
          <ul className="guideline-list">
            <li>Manuscripts must be written in clear, grammatical English. Authors whose native language is not English are strongly encouraged to seek professional editing support before submission.</li>
            <li>All submissions should be prepared in Microsoft Word format (DOC/DOCX). PDF files will not be accepted for initial submission.</li>
            <li>Use a uniform font such as Times New Roman, size 12, with double-line spacing and margins of at least 2.5 cm on all sides.</li>
            <li>Pages should be numbered consecutively, and line numbers may be included for easier review.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Manuscript Structure</h2>
          <p className="guideline-text">To ensure clarity, manuscripts should follow the standard structure below:</p>

          <h3 className="guideline-subtitle">Title Page</h3>
          <ul className="guideline-list">
            <li>Full manuscript title (concise, informative, and without abbreviations).</li>
            <li>Full names of all authors, along with institutional affiliations.</li>
            <li>Corresponding author details (name, email, phone number, and postal address).</li>
            <li>Acknowledgment of contributions, funding, or conflicts of interest, if applicable.</li>
          </ul>

          <h3 className="guideline-subtitle">Abstract</h3>
          <ul className="guideline-list">
            <li>A single paragraph of no more than 250-300 words.</li>
            <li>Should summarize background, objectives, methods, key findings, and conclusions.</li>
            <li>Avoid citations and abbreviations.</li>
          </ul>

          <h3 className="guideline-subtitle">Keywords</h3>
          <ul className="guideline-list">
            <li>Provide 3-6 relevant keywords arranged alphabetically.</li>
          </ul>

          <h3 className="guideline-subtitle">Main Text (IMRAD Format)</h3>
          <ul className="guideline-list">
            <li><strong>Introduction:</strong> Present the background, significance, and aim of the study.</li>
            <li><strong>Materials and Methods:</strong> Clearly describe the methodology, including study design, population/sample, instruments, data collection, and statistical methods. Ensure reproducibility.</li>
            <li><strong>Results:</strong> Present findings logically using text, tables, and figures. Avoid duplicating information across formats.</li>
            <li><strong>Discussion:</strong> Interpret results, highlight their significance, compare with prior studies, and acknowledge limitations.</li>
            <li><strong>Conclusion:</strong> Briefly summarize the major findings and their implications.</li>
          </ul>

          <h3 className="guideline-subtitle">Acknowledgments</h3>
          <ul className="guideline-list">
            <li>Mention individuals, institutions, or funding bodies that supported the work.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">References</h2>
          <ul className="guideline-list">
            <li>Must be formatted consistently according to the journal's reference style (APA/Harvard/Vancouver, depending on journal policy).</li>
            <li>Include all authors (unless more than six, then use "et al.").</li>
            <li>Provide DOIs or URLs where applicable.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Tables and Figures</h2>
          <ul className="guideline-list">
            <li><strong>Tables:</strong> Prepare tables using Word's table function; do not insert images of tables. Each table should have a descriptive title and be numbered in order of appearance. Footnotes may be used to explain abbreviations.</li>
            <li><strong>Figures:</strong> Submit high-resolution images (minimum 300 dpi) in JPEG, PNG, or TIFF format. Each figure must have a clear legend.</li>
            <li>Ensure that figures and tables are cited in the text in sequential order.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Supplementary Materials</h2>
          <p className="guideline-text">
            Authors may include additional datasets, appendices, or multimedia files as supplementary information. These should be clearly labeled and referenced in the manuscript.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Ethical Standards</h2>
          <ul className="guideline-list">
            <li><strong>Human and Animal Studies:</strong> Submissions involving human participants must include a statement of ethical approval from an appropriate committee and informed consent from participants. Studies involving animals must follow internationally accepted guidelines.</li>
            <li><strong>Plagiarism Policy:</strong> Manuscripts will be screened using plagiarism detection software. Any submission with significant overlap will be rejected.</li>
            <li><strong>Conflicts of Interest:</strong> All authors must declare financial or personal relationships that could influence the work.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Authorship Criteria</h2>
          <p className="guideline-text">
            Authorship should be limited to individuals who made significant contributions to the conception, design, execution, or interpretation of the research. Contributors not meeting authorship criteria should be acknowledged separately.
          </p>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Length of Manuscripts</h2>
          <ul className="guideline-list">
            <li><strong>Original Research Articles:</strong> 4,000-6,000 words excluding references.</li>
            <li><strong>Review Articles:</strong> Up to 8,000 words with comprehensive coverage.</li>
            <li><strong>Case Reports / Short Communications:</strong> 1,500-2,500 words.</li>
            <li><strong>Letters / Editorials:</strong> Maximum 1,000 words.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Submission Process</h2>
          <ul className="guideline-list">
            <li>Manuscripts should be submitted electronically via the online submission system or designated journal email.</li>
            <li>Only one submission per manuscript is allowed; duplicate submissions will not be considered.</li>
            <li>A cover letter must accompany the submission, briefly outlining the significance of the study and confirming that the work is original and not under consideration elsewhere.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Peer Review and Revision</h2>
          <ul className="guideline-list">
            <li>All manuscripts undergo double-blind peer review by at least two independent reviewers.</li>
            <li>Authors may be requested to revise their manuscripts in response to reviewer comments. Revised versions should highlight changes made.</li>
            <li>The editorial office reserves the right to reject submissions that do not meet journal standards.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Copyright and Licensing</h2>
          <ul className="guideline-list">
            <li>Upon acceptance, authors must sign a copyright transfer agreement granting Science Media Research Group publishing rights.</li>
            <li>Articles are published under an open-access model, ensuring free availability worldwide. Authors retain rights for non-commercial reuse of their work.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Proofs and Publication</h2>
          <ul className="guideline-list">
            <li>Page proofs will be sent to the corresponding author before publication. Authors should review carefully and return corrections promptly.</li>
            <li>Only minor corrections (spelling, formatting) will be accepted at proof stage.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h2 className="guideline-section-title">Post-Publication Policies</h2>
          <ul className="guideline-list">
            <li>Authors may request reprints or share their articles via institutional repositories.</li>
            <li>Any corrections, retractions, or expressions of concern will be issued in line with publication ethics guidelines.</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
