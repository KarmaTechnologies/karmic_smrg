import { fetchFeaturedJournals } from "@/lib/api";
import JournalCard from "@/components/cards/JournalCard";

export default async function FeaturedJournalsPage() {
  const journals = await fetchFeaturedJournals();

  return (
    <div>
      <h1>Featured Journals</h1>
      <div>
        {journals.map(journal => (
          <JournalCard key={journal.id} journal={journal} />
        ))}
      </div>
    </div>
  );
}