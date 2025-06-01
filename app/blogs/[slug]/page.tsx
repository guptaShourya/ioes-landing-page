import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import { notFound } from "next/navigation";
import BlogPostClient from "./blog-post-client";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  description,
  body,
  content,
  mainImage,
  category,
  tags,
  publishedAt,
  _createdAt,
  author,
  readTime
}`;

const RELATED_POSTS_QUERY = `*[
  _type == "post" 
  && slug.current != $slug 
  && defined(slug.current)
  && (category == $category || tags[] in $tags)
]|order(publishedAt desc)[0...3]{
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  mainImage,
  excerpt
}`;

const PREV_NEXT_POSTS_QUERY = `{
  "prev": *[_type == "post" && publishedAt < $publishedAt && defined(slug.current)]|order(publishedAt desc)[0]{
    title,
    "slug": slug.current
  },
  "next": *[_type == "post" && publishedAt > $publishedAt && defined(slug.current)]|order(publishedAt asc)[0]{
    title,
    "slug": slug.current
  }
}`;

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

  // Fetch the main post from Sanity
  const sanityPost = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug: slugParam },
    options
  );

  // If no post found, show 404
  if (!sanityPost) {
    notFound();
  }

  // Fetch related posts based on category and tags
  const relatedPosts = await client.fetch<SanityDocument[]>(
    RELATED_POSTS_QUERY,
    {
      slug: slugParam,
      category: sanityPost.category,
      tags: sanityPost.tags || [],
    },
    options
  );

  // Fetch previous and next posts
  const { prev: prevPost, next: nextPost } = await client.fetch(
    PREV_NEXT_POSTS_QUERY,
    { publishedAt: sanityPost.publishedAt || sanityPost._createdAt },
    options
  );

  // Prepare data for client component
  const blogData = {
    post: {
      title: sanityPost.title,
      excerpt: sanityPost.excerpt || sanityPost.description,
      content: sanityPost.body || sanityPost.content,
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
      slug: sanityPost.slug,
      readTime: sanityPost.readTime || "5 min read",
    },
    relatedPosts: relatedPosts.map((post) => ({
      id: post._id,
      title: post.title,
      slug: post.slug,
      publishedAt: post.publishedAt,
      image: post.mainImage
        ? urlFor(post.mainImage)?.url() || "/placeholder.svg"
        : "/placeholder.svg",
      excerpt: post.excerpt || "",
      body: "",
      author: "IOES Team",
      authorImage: "/placeholder.svg",
      category: "General",
      tags: [],
      timeToRead: "5 min read",
    })),
    prevPost: prevPost
      ? {
          id: prevPost.slug,
          title: prevPost.title,
          slug: prevPost.slug,
          excerpt: "",
          body: "",
          image: "/placeholder.svg",
          author: "IOES Team",
          authorImage: "/placeholder.svg",
          category: "General",
          tags: [],
          publishedAt: "",
          timeToRead: "5 min read",
        }
      : null,
    nextPost: nextPost
      ? {
          id: nextPost.slug,
          title: nextPost.title,
          slug: nextPost.slug,
          excerpt: "",
          body: "",
          image: "/placeholder.svg",
          author: "IOES Team",
          authorImage: "/placeholder.svg",
          category: "General",
          tags: [],
          publishedAt: "",
          timeToRead: "5 min read",
        }
      : null,
  };

  return <BlogPostClient {...blogData} />;
}
