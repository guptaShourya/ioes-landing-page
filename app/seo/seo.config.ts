export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterSite?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

const seoConfig = {
  // Default SEO settings (used as fallbacks when no Azure data exists)
  defaultTitle:
    "IOES - Study Abroad Consultants | Premier Overseas Education Services",
  defaultDescription:
    "Expert guidance for your international education journey. Top-rated study abroad consultants in Delhi & Mumbai helping students achieve their dreams worldwide.",
  defaultKeywords: [
    "study abroad",
    "overseas education", 
    "education consultants",
    "study abroad consultants",
    "international education",
    "IOES",
    "Delhi",
    "Mumbai",
    "visa guidance",
    "university admission",
  ],
  defaultOgImage: "/og-default.jpg",
  defaultOgType: "website",
  siteUrl: "https://ioes.in",
  twitterSite: "@ioes_in", 
  twitterCard: "summary_large_image",
};

export default seoConfig;
