import { JournalsApiResponse, Journal } from "@/types/journal";
import { extractArticleHtml, slugify } from "@/lib/helpers";


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

export async function fetchEstablishedJournals(): Promise<Journal[]> {
  const res = await fetch("https://smrg.arditsonline.com/api/home-journals.json", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch established journals");
  const data = await res.json();

  const journals = data?.sections?.established_journals ?? [];
  return journals
    .filter((journal: Journal) => journal.has_editorial_board === true)
    .map(mapJournalImage);
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
    const res = await fetch("https://smrg.arditsonline.com/api/home-journals.json", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch journals");

    const data = await res.json();
    const featured = data?.sections?.featured_journals ?? [];
    const established = data?.sections?.established_journals ?? [];

    const allJournals = [...featured, ...established];

    return allJournals.map(mapJournalImage);
  } catch {
    return [];
  }
}


//journal-detail page api call
export async function getJournalDetails(slug: string): Promise<Journal | null> {
  try {
    const res = await fetch("https://smrg.arditsonline.com/public/api/journal-details", {
      next: { revalidate: 900 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    const journal = json?.data?.find((j: Journal) => j.slug === slug) ?? null;


    // Fix broken banner_image_url (double /public/public/)
    if (journal?.banner_image_url) {
      journal.banner_image_url = journal.banner_image_url.replace(
        "/public/public/",
        "/public/"
      );
    }


    
    return journal;
  } catch {
    return null;
  }
}

// Article detail API
export type ArticleDetailSection = {
  title: string;
  display_order?: number;
  url: string;
  content?: string;
};

export type ArticleDetailResponse = {
  journal: {
    id: number;
    name: string;
    slug: string;
    about_sections?: { key: string; title: string }[];
  };
  article: {
    id: number;
    slug: string;
    publication_uid?: string;
    title: string;
    abstract?: string;
    doi?: string | null;
    publication_date: string;
    article_type: string;
    journal?: string;
    volume?: string | null;
    issue?: string | null;
    publication_status: string;
    authors: {
      display_name: string;
      affiliation?: string;
      contribution_role?: string;
    }[];
    keywords: string[];
    sections: ArticleDetailSection[];
    media: { url: string; label: string }[];
    references?: string[];
    citations?: { citation_count: number };
    visitor_stats?: { views: number; downloads: number };
  };
};

// The article API is keyed by the article slug, not its numeric id.
export async function getArticleDetail(
  journalSlug: string,
  articleSlug: string
): Promise<ArticleDetailResponse | null> {
  try {
    const res = await fetch(
      `https://smrg.arditsonline.com/public/api/journals/${journalSlug}/article/${articleSlug}`,
      { next: { revalidate: 900 } }
    );
    if (!res.ok) return null;
    const json = await res.json();
    return json?.data ?? null;
  } catch {
    return null;
  }
}

/**
 * Resolve an article route segment against the journal article list. Numeric
 * segments remain supported for links created before article-name URLs.
 */
export async function getArticleDetailBySlug(
  journal: Journal,
  articleSlugOrId: string
): Promise<ArticleDetailResponse | null> {
  const isLegacyId = /^\d+$/.test(articleSlugOrId);
  let articleSlug = articleSlugOrId;
  let expectedArticleId: number | undefined;

  if (isLegacyId) {
    const summary = journal.allArticles?.find(
      (article) => article.id === Number(articleSlugOrId)
    );
    if (!summary) return null;

    articleSlug = summary.slug || slugify(summary.title);
    expectedArticleId = summary.id;
  }
  if (!articleSlug) return null;

  const data = await getArticleDetail(journal.slug, articleSlug);
  if (!data) return null;
  if (
    expectedArticleId !== undefined &&
    Number(data.article?.id) !== expectedArticleId
  ) {
    return null;
  }

  return data;
}

// Section files are standalone HTML documents; fetch their content for display.
export async function getArticleSectionContent(
  section: ArticleDetailSection
): Promise<ArticleDetailSection> {
  if (!section.url) return { ...section, content: "" };

  try {
    const res = await fetch(section.url, { next: { revalidate: 900 } });
    if (!res.ok) return { ...section, content: "" };
    const html = await res.text();
    return { ...section, content: extractArticleHtml(html) };
  } catch {
    return { ...section, content: "" };
  }
}

// Article sections API
export type ArticleSection = {
  title: string;
  content: string;
};

export async function getArticleSections(): Promise<ArticleSection[]> {
  try {
    const res = await fetch(
      "https://smrg.arditsonline.com/public/api/sample/article-sections",
      { next: { revalidate: 900 } }
    );
    if (!res.ok) return [];
    const json = await res.json();
    return json?.data ?? [];
  } catch {
    return [];
  }
}