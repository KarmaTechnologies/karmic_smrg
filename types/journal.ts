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
