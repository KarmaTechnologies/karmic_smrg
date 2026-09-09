import { notFound } from "next/navigation";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { getJournalDetails } from "@/lib/api";
import JournalSidebar from "@/components/journal/JournalSidebar";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function JournalDetailPage({ params }: Props) {
  const { slug } = await params;
  const journal = await getJournalDetails(slug);

  if (!journal) {
    notFound();
  }

  const tabs = [];
  if (journal.introduction) {
    tabs.push({ id: "introduction", label: "Introduction", content: journal.introduction });
  }
  if (journal.aims_scope) {
    tabs.push({ id: "aims-scope", label: "Aims & Scope", content: journal.aims_scope });
  }

  const hasArticles = journal.allArticles && journal.allArticles.length > 0;

  return (
    <>
      <section className="journal-detail-hero">
        <Image
          src={journal.banner_image_url || journal.image}
          alt={journal.title}
          priority
          width={1600}
          height={400}
          sizes="100vw"
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
      </section>

      {(tabs.length > 0 || hasArticles) && (
        <section className="page-section">
          <Container>
            <JournalSidebar tabs={tabs} articles={journal.allArticles} journalSlug={slug} />
          </Container>
        </section>
      )}
    </>
  );
}