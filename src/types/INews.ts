export interface INews {
  title: string;
  url: string;
  source: string;
  image: string | null;
  category: string;
  country?: string;
  published_at: string;
}

export interface INewsParams {
  category: string | undefined;
}
