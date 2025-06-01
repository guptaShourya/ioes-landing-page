import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import BlogClient from "./blog-client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, "slug": slug.current, publishedAt, image, excerpt, author, authorImage, timeToRead, tags, category}`;

const options = { next: { revalidate: 30 } };

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function BlogPage() {
  // Fetch posts from Sanity on the server
  let posts: SanityDocument[] = [];
  try {
    const rawPosts = await client.fetch<SanityDocument[]>(
      POSTS_QUERY,
      {},
      options
    );

    // Process the posts to convert Sanity image objects to URLs
    posts = rawPosts.map((post) => ({
      ...post,
      image: post.image ? urlFor(post.image)?.url() : null,
      authorImage: post.authorImage ? urlFor(post.authorImage)?.url() : null,
    }));
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
