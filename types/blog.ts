export type PeiBlog = {
  id: string;
  title: string;
  tags: BlogTag[];
  url: string;
  date: string
  image: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  visible: boolean
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