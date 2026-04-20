import Container from "@/components/layout/Container";

export default function ComingSoon({ pageName }: { pageName: string }) {
  return (
    <section className="page-section">
      <Container>
        <div className="coming-soon">
          <h2>{pageName} - Coming Soon</h2>
          <p>This page is under development.</p>
        </div>
      </Container>
    </section>
  );
}
