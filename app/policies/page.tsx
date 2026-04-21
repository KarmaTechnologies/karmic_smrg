import Container from "@/components/layout/Container";

export default function PoliciesPage() {
  return (
    <section className="page-section">
      <Container>
        <h1 className="title">Publisher Policies</h1>
        <div className="card" style={{ marginTop: "1rem", padding: "1.2rem", color: "var(--muted)" }}>
          <p>All submissions must follow peer-review ethics, data integrity standards, and publication transparency principles.</p>
          <p style={{ marginTop: "0.7rem" }}>SMRG reserves the right to reject work that does not meet editorial policies or scientific quality requirements.</p>
        </div>
      </Container>
    </section>
  );
}
