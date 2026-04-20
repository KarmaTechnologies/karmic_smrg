import Link from "next/link";
import Container from "@/components/layout/Container";

export default function CTA() {
  return (
    <section className="page-section">
      <Container>
        <div className="card" style={{ padding: "1.5rem", display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <div>
            <h3 style={{ fontSize: "1.4rem" }}>Ready to submit your research?</h3>
            <p className="subtitle">Start your submission in a few simple steps.</p>
          </div>
          <Link href="/submission" className="btn btn-primary">
            Submit Research
          </Link>
        </div>
      </Container>
    </section>
  );
}
