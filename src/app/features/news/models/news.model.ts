export interface NewsModel {
  articles?: PostModel[];
}

export interface PostModel {
  author?: string;
  title?: string;
  description?: string;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
  isDialog?: boolean;
}
