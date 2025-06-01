export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  image: string;
  author: string;
  authorImage: string;
  category: string;
  tags: string[];
  publishedAt: string;
  timeToRead: string;
}
