import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import { blogPosts, type BlogPost } from "@/data/blog-posts";
import { notFound } from "next/navigation";
import BlogPostClient from "./blog-post-client";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug: slugParam } = await params;

  // Try to fetch from Sanity first
  let sanityPost: SanityDocument | null = null;
  try {
    sanityPost = await client.fetch<SanityDocument>(
      POST_QUERY,
      { slug: slugParam },
      options
    );
  } catch (error) {
    console.warn("Sanity fetch failed:", error);
  }

  // Fallback to local blog posts
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;
  const localPost = blogPosts.find((p) => p.slug === slug);

  // If neither Sanity nor local post found, show 404
  if (!sanityPost && !localPost) {
    notFound();
  }

  // Use Sanity post if available, otherwise use local post
  const post = sanityPost || localPost;

  // Find related posts, previous and next posts from local data
  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.id !== localPost?.id &&
        (p.category === localPost?.category ||
          p.tags.some((tag) => localPost?.tags.includes(tag)))
    )
    .slice(0, 3);

  const currentIndex = blogPosts.findIndex((p) => p.id === localPost?.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  // Prepare data for client component
  const blogData = {
    post: sanityPost
      ? {
          title: sanityPost.title,
          excerpt: sanityPost.excerpt || sanityPost.description,
          content: sanityPost.body ? sanityPost.body : sanityPost.content,
          coverImage: sanityPost.mainImage
            ? urlFor(sanityPost.mainImage)?.url()
            : null,
          category: sanityPost.category || "General",
          tags: sanityPost.tags || [],
          publishedAt: sanityPost.publishedAt || sanityPost._createdAt,
          author: sanityPost.author || {
            name: "IOES Team",
            role: "Education Consultant",
            avatar: null,
          },
          slug: sanityPost.slug?.current || slug,
          readTime: sanityPost.readTime || "5 min read",
        }
      : localPost,
    relatedPosts,
    prevPost,
    nextPost,
  };

  return <BlogPostClient {...blogData} />;
}
