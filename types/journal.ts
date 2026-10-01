export type Article = {
  id: number;
  title: string;
  abstract?: string;
  article_type?: string;
  publication_status?: string;
  publication_date?: string;
  volume?: string;
  issue?: string;
  authors?: string[];
  media?: { url: string; label: string }[];
};

export type Keyword = string | { keyword?: string; name?: string; title?: string };

export type PersonMember = {
  display_name?: string;
  name?: string;
  role?: string;
  designation?: string;
};

export type Journal = {
  id: number;
  title: string;
  slug: string;
  image: string;
  publisher_name: string;
  featured: boolean;
  label?: string;
  has_editorial_board: boolean;

  // New fields from journal-details API
  banner_image?: string;
  banner_image_url?: string;
  introduction?: string | null;
  aims_scope?: string | null;
  highlights?: string | string[];
  allArticles?: Article[];
  keywords?: Keyword[];
  people_members?: PersonMember[];
};

export type JournalsApiResponse = {
  status: boolean;
  message: string;
  data: Journal[];
  sections?: {
    all_journals?: Journal[];
    featured_journals?: Journal[];
    established_journals?: Journal[];
  };
};
