import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { type SanityDocument } from "next-sanity";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const offset = parseInt(searchParams.get("offset") || "0");
    const limit = parseInt(searchParams.get("limit") || "5");

    const POSTS_QUERY = `*[
      _type == "post"
      && defined(slug.current)
    ]|order(publishedAt desc)[${offset}...${offset + limit}]{
      _id, 
      title, 
      "slug": slug.current, 
      publishedAt, 
      image, 
      excerpt, 
      author, 
      authorImage, 
      timeToRead, 
      tags, 
      category
    }`;

    const rawPosts = await client.fetch<SanityDocument[]>(POSTS_QUERY);

    // Process the posts to convert Sanity image objects to URLs
    const posts = rawPosts.map((post) => ({
      ...post,
      image: post.image ? urlFor(post.image)?.url() : null,
      authorImage: post.authorImage ? urlFor(post.authorImage)?.url() : null,
    }));

    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
