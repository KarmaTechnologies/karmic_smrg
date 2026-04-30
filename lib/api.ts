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

// lib/api.ts
export async function fetchFeaturedJournals() {
  const res = await fetch("https://smrg.arditsonline.com/api/home/journals", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch featured journals");
   const data = await res.json();
   // If your API returns { data: [...] }
  return data.data; // <-- return the array
  // If your API returns an array directly, just return data;\
}


export async function fetchAllJournals() {
  const res = await fetch("https://smrg.arditsonline.com/api/home/journals", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch journals");
  const data = await res.json();
  // If your API returns { data: [...] }
  return data.data; // <-- return the array
}