import Container from "@/components/layout/Container";
import Input from "@/components/ui/Input";

export default function ContactPage() {
  return (
    <section className="page-section contact-page">
      <Container>
        <div className="contact-cards">
          <div className="card contact-info-card">
            <h3>Email</h3>
            <a className="contact-link" href="mailto:contactus@thesciencemedia.com">
              contactus@thesciencemedia.com
            </a>
          </div>
          <div className="card contact-info-card">
            <h3>Phone</h3>
            <a className="contact-link" href="tel:+15172524700">
              +15172524700
            </a>
          </div>
          <div className="card contact-info-card">
            <h3>Address</h3>
            <p className="contact-text">
              The Science Media Research Group LLC, 1309 Coffeen Avenue STE 1200 Sheridan Wyoming 82801, USA
            </p>
          </div>
        </div>

        <div className="card contact-form-card">
          <h2 className="contact-form-title">Contact Us</h2>
          <form className="contact-form">
            <div className="contact-fields">
              <Input label="Full Name" name="name" placeholder="Enter Your Full Name" />
              <Input label="Email" name="email" type="email" placeholder="Enter Your Email" />
              <Input label="Contact Number" name="phone" placeholder="Enter Your Contact Number" />
            </div>
            <label className="contact-textarea">
              <span className="contact-label">Additional Details</span>
              <textarea name="message" rows={5} placeholder="Write your message" />
            </label>
            <div className="contact-actions">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
