export type PeiBlog = {
  id: string;
  title: string;
  tag: BlogTag[];
  url: string;
  date: string
  image: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type BlogTag = {
  id: string;
  name: string;
  group: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};