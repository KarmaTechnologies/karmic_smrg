import { JournalsApiResponse, Journal } from "@/types/journal";


const DEFAULT_API_BASE = "https://smrg.arditsonline.com/api";
const DEFAULT_IMAGE_BASE = "https://smrg.arditsonline.com";

const LOCAL_IMAGE_ORIGIN_HTTP = "http://127.0.0.1:8000";
const LOCAL_IMAGE_ORIGIN_HTTPS = "https://127.0.0.1:8000";

const normalizeImageUrl = (url: string) => {
  if (!url) return url;
  if (url.startsWith(LOCAL_IMAGE_ORIGIN_HTTP)) {
    return `${DEFAULT_IMAGE_BASE}${url.slice(LOCAL_IMAGE_ORIGIN_HTTP.length)}`;
  }
  if (url.startsWith(LOCAL_IMAGE_ORIGIN_HTTPS)) {
    return `${DEFAULT_IMAGE_BASE}${url.slice(LOCAL_IMAGE_ORIGIN_HTTPS.length)}`;
  }
  if (url.startsWith("/")) {
    return `${DEFAULT_IMAGE_BASE}${url}`;
  }
  return url;
};

const mapJournalImage = (journal: Journal): Journal => ({
  ...journal,
  image: normalizeImageUrl(journal.image),
});

export async function getJournals(): Promise<Journal[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || DEFAULT_API_BASE;

  try {
    const response = await fetch(`${baseUrl}/home-journals`, {
      method: "GET",
      next: { revalidate: 900 },
    });

    if (!response.ok) {
      return [];
    }

    const data = (await response.json()) as JournalsApiResponse;
    return (data?.data ?? []).map(mapJournalImage);
  } catch {
    return [];
  }
}

export async function getJournalBySlug(slug: string): Promise<Journal | null> {
  const journals = await getJournals();
  return journals.find((journal) => journal.slug === slug) ?? null;
}

// lib/api.ts

// export async function fetchFeaturedJournals() {
//   const res = await fetch("https://smrg.arditsonline.com/api/home-journals", { cache: "no-store" });
//   if (!res.ok) throw new Error("Failed to fetch featured journals");
//    const data = await res.json();
//    // If your API returns { data: [...] }

//    const journals = data.data || data; // Handle both { data: [...] } and [...] formats

//    //Filter for featured journals: true and has_editorial_board: false
//    return journals.filter(
//     (journal: Journal) => journal.featured === true && journal.has_editorial_board === false
//    );
//   // return data.data; // <-- return the array
//   // // If your API returns an array directly, just return data;\
// }


// export async function fetchFeaturedJournals(): Promise<Journal[]> {
//   const res = await fetch("https://smrg.arditsonline.com/api/home-journals.json", { cache: "no-store" });
//   if (!res.ok) throw new Error("Failed to fetch featured journals");
//   const data = await res.json();
//   console.log("Fetched data:", data);

//   // Safely get the journals array
//   let journals: Journal[] = [];
//   if (Array.isArray(data)) {
//     journals = data;
//   } else if (data && Array.isArray(data.data)) {
//     journals = data.data;
//   } else {
//     journals = [];
//   }

//   return journals.filter(
//     (journal) => journal.featured === true && journal.has_editorial_board === false
//   );
// }



export async function fetchFeaturedJournals(): Promise<Journal[]> {
  const res = await fetch("https://smrg.arditsonline.com/api/home-journals.json", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch featured journals");
  const data = await res.json();
  return (data?.sections?.featured_journals ?? []).map(mapJournalImage);
}


// export async function fetchAllJournals() {
//   const res = await fetch("https://smrg.arditsonline.com/api/home-journals", { cache: "no-store" });
//   if (!res.ok) throw new Error("Failed to fetch journals");
//   const data = await res.json();
//   // If your API returns { data: [...] }
//   return data.data; // <-- return the array
// }

export async function fetchAllJournals(): Promise<Journal[]> {
  try {
    const res = await fetch("https://smrg.arditsonline.com/api/home-journals.json", { cache: "no-store" });
    console.log("API status:", res.status, res.statusText);
    if (!res.ok) {
      const text = await res.text();
      console.error("API error response:", text);
      throw new Error("Failed to fetch journals");
    }
    const data = await res.json();

    let journals: Journal[] = [];
    if (Array.isArray(data)) {
      journals = data;
    } else if (data && Array.isArray(data.data)) {
      journals = data.data;
    } else {
      journals = [];
    }

    return journals.map(mapJournalImage);
  } catch (error) {
    console.error("Network or fetch error:", error);
    return [];
  }
}