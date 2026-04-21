import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer-top">
          <div>
            <h3 className="site-footer-brand">SMRG Publications</h3>
            <p className="site-footer-copy">
              Advancing global research publishing through accessible, quality-first platforms.
            </p>
          </div>

          <div className="site-footer-links">
            <Link href="/policies">Privacy</Link>
            <Link href="/policies">Terms</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className="site-footer-bottom">
          <span>2026 SMRG Publications. All rights reserved.</span>
        </div>
      </Container>
    </footer>
  );
}