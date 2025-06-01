import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import BlogClient from "./blog-client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, "slug": slug.current, publishedAt, image, excerpt, author, authorImage, timeToRead, tags, category}`;

const options = { next: { revalidate: 30 } };

export default async function BlogPage() {
  // Fetch posts from Sanity on the server
  let posts: SanityDocument[] = [];
  try {
    posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  } catch (error) {
    console.error("Error fetching posts from Sanity:", error);
    // Continue with empty posts array if Sanity fails
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <BlogClient initialPosts={posts} />
      </main>
      <Footer />
    </div>
  );
}
