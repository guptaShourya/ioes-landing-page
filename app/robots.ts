import { MetadataRoute } from "next";
import seoConfig from "./seo/seo.config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/_next/"],
    },
    sitemap: `${seoConfig.siteUrl}/sitemap.xml`,
  };
}
