export type Journal = {
  id: number;
  title: string;
  slug: string;
  image: string;
  publisher_name: string;
};

export type JournalsApiResponse = {
  status: boolean;
  message: string;
  data: Journal[];
};
