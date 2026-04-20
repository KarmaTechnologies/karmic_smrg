import { JournalsApiResponse, Journal } from "@/types/journal";

const DEFAULT_API_BASE = "https://smrg.arditsonline.com/api";

export async function getJournals(): Promise<Journal[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || DEFAULT_API_BASE;

  try {
    const response = await fetch(`${baseUrl}/home/journals`, {
      method: "GET",
      next: { revalidate: 900 },
    });

    if (!response.ok) {
      return [];
    }

    const data = (await response.json()) as JournalsApiResponse;
    return data?.data ?? [];
  } catch {
    return [];
  }
}

export async function getJournalBySlug(slug: string): Promise<Journal | null> {
  const journals = await getJournals();
  return journals.find((journal) => journal.slug === slug) ?? null;
}
