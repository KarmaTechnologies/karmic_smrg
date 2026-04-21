import Container from "@/components/layout/Container";
import ServiceCard from "@/components/cards/ServiceCard";
import { services } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <section className="page-section">
      <Container>
        <h2 className="title">Services</h2>
        <p className="subtitle">Support offerings for authors and institutions.</p>
        <div className="grid" style={{ marginTop: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} details={service.description} />
          ))}
        </div>
      </Container>
    </section>
  );
}
