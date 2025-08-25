import { NextRequest, NextResponse } from "next/server";
import { getSEODataWithFallbacks, listSEOPages } from "@/lib/azure-seo";
import { discoverSEOPages } from "@/lib/seo-pages";

function authenticateRequest(request: NextRequest): boolean {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return false;
  }

  const token = authHeader.substring(7);
  const expectedKey = process.env.SEO_ADMIN_KEY;

  return token === expectedKey;
}

export async function GET(request: NextRequest) {
  // Check authentication
  if (!authenticateRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const pageSlug = searchParams.get("pageSlug");

    if (pageSlug) {
      // Get specific page SEO data
      const seoData = await getSEODataWithFallbacks(pageSlug);
      return NextResponse.json({ seoData }, {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      });
    } else {
      // List all pages (both discovered and saved)
      try {
        const [savedPages, discoveredPages] = await Promise.all([
          listSEOPages(),
          Promise.resolve(discoverSEOPages()),
        ]);

        // Combine and deduplicate
        const allPages = Array.from(
          new Set([...discoveredPages, ...savedPages])
        );

        return NextResponse.json({
          pages: allPages.sort(),
          discoveredPages,
          savedPages,
        }, {
          headers: {
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
          }
        });
      } catch (error) {
        console.error("Error listing pages:", error);
        return NextResponse.json({
          pages: discoverSEOPages().sort(),
          discoveredPages: discoverSEOPages(),
          savedPages: [],
        }, {
          headers: {
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
          }
        });
      }
    }
  } catch (error) {
    console.error("Error in SEO API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
