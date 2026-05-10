export type Journal = {
  id: number;
  title: string;
  slug: string;
  image: string;
  publisher_name: string;
  featured: boolean;
  has_editorial_board: boolean;
};

export type JournalsApiResponse = {
  status: boolean;
  message: string;
  data: Journal[];
};
