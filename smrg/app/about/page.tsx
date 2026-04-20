import Container from "@/components/layout/Container";

export default function AboutPage() {
  return (
    <section className="page-section about-hero-section">
      <Container>
        <div className="about-content">
          <div className="about-image-wrap">
            <img
              src="/images/about/about-us-hero.jpg"
              alt="Researcher working in a lab"
              className="about-image"
            />
          </div>

          <div className="about-text-card">
            <span className="about-label">ABOUT US</span>
            <h1 className="about-heading">
              The Science Media Online Publishing Group: Elevating The Science Media standards with passion and precision.
            </h1>
            <p className="about-paragraph">
              The Science Media Online Publishing Group is an independent, international publisher of peer-reviewed scientific journals, specializing in clinical and medical research. We are recognized as a leading open-access platform for publishing high-quality research articles, reviews, mini-reviews, case reports, case series, editorials, short communications, opinions, perspectives, rapid communications, commentaries, and brief reports across a wide range of disciplines.
            </p>
            <p className="about-paragraph">
              Our journals cover Clinical, Medical, Pharmaceutical, Biomedical, Life Sciences, Engineering, Environmental, and various other subjects. The Science Media Online Publishing Group boasts a team of highly qualified individuals, including advisory board members and a community of experts dedicated to discovering and advancing new research and development within the organization.
            </p>
            <p className="about-paragraph">
              With a forward-looking vision, The Science Media Online Publishing Group aims to create an optimized knowledge-sharing platform and foster an interactive global network for researchers. Through our scientific publications and meetings, we strive to support researchers worldwide in sharing cutting-edge discoveries and innovations.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
