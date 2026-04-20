import { Journal } from "@/types/journal";
import Card from "@/components/ui/Card";
import Link from "next/link";
import Image from "next/image";

export default function JournalCard({ journal }: { journal: Journal }) {
  return (
    <Link href={`/journal/${journal.slug}`} className="journal-card-link" aria-label={`Open ${journal.title}`}>
      <Card className="journal-card">
        <div style={{ width: "100%", aspectRatio: "16 / 9", overflow: "hidden", borderTopLeftRadius: "14px", borderTopRightRadius: "14px" }}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src={journal.image}
              alt={journal.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div style={{ padding: "0.95rem" }}>
          <h3 style={{ fontSize: "1rem", lineHeight: 1.35 }}>{journal.title}</h3>
          <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginTop: "0.4rem" }}>{journal.publisher_name}</p>
        </div>
      </Card>
    </Link>
  );
}
