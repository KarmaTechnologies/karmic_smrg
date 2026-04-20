import Link from "next/link";
import Container from "@/components/layout/Container";

export default function NotFound() {
  return (
    <section className="page-section">
      <Container>
        <div className="coming-soon">
          <h2>404 - Page Not Found</h2>
          <p>The page you are looking for does not exist.</p>
          <Link href="/" className="btn btn-primary" style={{ marginTop: "0.9rem" }}>
            Go Home
          </Link>
        </div>
      </Container>
    </section>
  );
}
