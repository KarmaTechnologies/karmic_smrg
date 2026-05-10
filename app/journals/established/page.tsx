import { fetchAllJournals } from "@/lib/api";
import JournalCard from "@/components/cards/JournalCard";

export default async function EstablishedJournalsPage() {
  const journals = await fetchAllJournals();
  // Filter for has_editorial_board === true
  const establishedJournals = journals.filter(j => j.has_editorial_board === true);

  return (
    <div>
      <h1>Established Journals</h1>
      <div>
        {establishedJournals.map(journal => (
          <JournalCard key={journal.id} journal={journal} />
        ))}
      </div>
    </div>
  );
}