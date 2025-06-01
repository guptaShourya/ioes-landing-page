import { NextResponse } from "next/server";
import { client } from "@/sanity/client";

export async function GET() {
  try {
    // Query to get all posts with categories and tags
    const POSTS_QUERY = `*[_type == "post" && (defined(category) || defined(tags))]{category, tags}`;

    const posts = await client.fetch<
      Array<{ category?: string; tags?: string[] }>
    >(POSTS_QUERY);

    // Extract unique categories and tags
    const categories = Array.from(
      new Set(posts.map((post) => post.category).filter(Boolean))
    );

    const tags = Array.from(
      new Set(posts.flatMap((post) => post.tags || []).filter(Boolean))
    );

    return NextResponse.json({
      categories: categories.sort(),
      tags: tags.sort(),
    });
  } catch (error) {
    console.error("Error fetching categories and tags:", error);
    return NextResponse.json(
      { error: "Failed to fetch categories and tags" },
      { status: 500 }
    );
  }
}
