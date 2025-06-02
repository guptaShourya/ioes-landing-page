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
  // Default SEO settings
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

  // Page-specific SEO configurations
  pages: {
    home: {
      title: "IOES - Premier Study Abroad Consultants in Delhi & Mumbai",
      description:
        "Transform your international education dreams into reality with IOES. Expert counseling, visa guidance, and admission support for top universities worldwide.",
      keywords: [
        "study abroad consultants Delhi",
        "overseas education Mumbai",
        "international education",
        "university admission",
      ],
      ogImage: "/og-home.jpg",
    },
    about: {
      title: "About IOES - Leading Study Abroad Consultants Since Years",
      description:
        "Learn about IOES's journey in helping thousands of students achieve their international education goals. Expert team, proven track record.",
      keywords: [
        "about IOES",
        "study abroad consultants background",
        "education consultancy experience",
      ],
      ogImage: "/og-about.jpg",
    },
    contact: {
      title: "Contact IOES - Get Expert Study Abroad Guidance Today",
      description:
        "Contact IOES for personalized study abroad consultation. Visit our Delhi & Mumbai offices or get in touch online for expert guidance.",
      keywords: [
        "contact IOES",
        "study abroad consultation",
        "education consultants Delhi Mumbai",
      ],
      ogImage: "/og-contact.jpg",
    },
    services: {
      title: "Study Abroad Services - Complete Education Solutions | IOES",
      description:
        "Comprehensive study abroad services including university selection, visa guidance, scholarship assistance, and more from IOES experts.",
      keywords: [
        "study abroad services",
        "visa guidance",
        "university selection",
        "scholarship assistance",
      ],
      ogImage: "/og-services.jpg",
    },
    scholarships: {
      title: "Study Abroad Scholarships - Find Your Perfect Match | IOES",
      description:
        "Discover scholarships for international education. Expert guidance on finding and applying for scholarships in USA, UK, Canada, Australia & more.",
      keywords: [
        "study abroad scholarships",
        "international scholarships",
        "education funding",
        "scholarship guidance",
      ],
      ogImage: "/og-scholarships.jpg",
    },
    destinations: {
      title: "Study Abroad Destinations - Choose Your Dream Country | IOES",
      description:
        "Explore top study abroad destinations including USA, UK, Canada, Australia, Ireland, and New Zealand. Expert guidance for each country.",
      keywords: [
        "study abroad destinations",
        "study in USA",
        "study in UK",
        "study in Canada",
        "study in Australia",
      ],
      ogImage: "/og-destinations.jpg",
    },
    "success-stories": {
      title: "Student Success Stories - IOES Study Abroad Alumni",
      description:
        "Read inspiring success stories of IOES students who achieved their international education dreams. Real experiences, real results.",
      keywords: [
        "student success stories",
        "IOES alumni",
        "study abroad experiences",
        "international education success",
      ],
      ogImage: "/og-success-stories.jpg",
    },
    events: {
      title: "Study Abroad Events & Seminars - Join IOES Programs",
      description:
        "Attend IOES study abroad events, university fairs, and educational seminars. Get direct access to university representatives and experts.",
      keywords: [
        "study abroad events",
        "university fairs",
        "education seminars",
        "IOES events",
      ],
      ogImage: "/og-events.jpg",
    },
    "study-abroad": {
      title:
        "Study Abroad Guide - Your Complete International Education Resource | IOES",
      description:
        "Complete guide to studying abroad. Everything you need to know about international education, from application to graduation.",
      keywords: [
        "study abroad guide",
        "international education",
        "overseas education tips",
        "study abroad process",
      ],
      ogImage: "/og-study-abroad.jpg",
    },
    blogs: {
      title: "Study Abroad Blog - Latest Education Insights & Tips | IOES",
      description:
        "Stay updated with the latest study abroad trends, tips, and insights from IOES education experts. Your guide to international education success.",
      keywords: [
        "study abroad blog",
        "education tips",
        "international education insights",
        "overseas education news",
      ],
      ogImage: "/og-blog.jpg",
    },
    // Service-specific pages
    "services-counselling": {
      title:
        "Career Counselling Services - Find Your Perfect Study Path | IOES",
      description:
        "Expert career counselling to help you choose the right course and university for your international education journey.",
      keywords: [
        "career counselling",
        "study abroad counselling",
        "course selection",
        "university guidance",
      ],
      ogImage: "/og-counselling.jpg",
    },
    "services-university-selection": {
      title:
        "University Selection Services - Choose Your Dream Institution | IOES",
      description:
        "Expert guidance in selecting the perfect university for your study abroad goals. Personalized recommendations based on your profile.",
      keywords: [
        "university selection",
        "college selection",
        "study abroad universities",
        "international universities",
      ],
      ogImage: "/og-university-selection.jpg",
    },
    "services-visa": {
      title: "Student Visa Services - Expert Visa Guidance | IOES",
      description:
        "Comprehensive student visa services with high success rates. Expert guidance for all major study destinations.",
      keywords: [
        "student visa",
        "visa guidance",
        "visa services",
        "study abroad visa",
      ],
      ogImage: "/og-visa.jpg",
    },
    "services-loan": {
      title: "Education Loan Services - Finance Your Dreams | IOES",
      description:
        "Get expert assistance with education loans for studying abroad. Competitive rates and hassle-free processing.",
      keywords: [
        "education loan",
        "study abroad loan",
        "international education financing",
        "student loan",
      ],
      ogImage: "/og-loan.jpg",
    },
    // Destination-specific pages
    "destinations-usa": {
      title: "Study in USA - Top Universities & Programs | IOES",
      description:
        "Complete guide to studying in the USA. Top universities, programs, scholarships, and admission requirements.",
      keywords: [
        "study in USA",
        "USA universities",
        "American education",
        "study abroad USA",
      ],
      ogImage: "/og-usa.jpg",
    },
    "destinations-uk": {
      title: "Study in UK - Premier British Education | IOES",
      description:
        "Explore world-class education in the UK. Top universities, courses, and guidance for Indian students.",
      keywords: [
        "study in UK",
        "UK universities",
        "British education",
        "study abroad UK",
      ],
      ogImage: "/og-uk.jpg",
    },
    "destinations-canada": {
      title: "Study in Canada - Quality Education & Immigration | IOES",
      description:
        "Study in Canada with excellent post-graduation opportunities. Top universities and immigration pathways.",
      keywords: [
        "study in Canada",
        "Canada universities",
        "Canadian education",
        "study abroad Canada",
      ],
      ogImage: "/og-canada.jpg",
    },
    "destinations-australia": {
      title: "Study in Australia - World-Class Education Down Under | IOES",
      description:
        "Experience quality education in Australia. Top universities, great lifestyle, and work opportunities.",
      keywords: [
        "study in Australia",
        "Australia universities",
        "Australian education",
        "study abroad Australia",
      ],
      ogImage: "/og-australia.jpg",
    },
    // Scholarship-specific pages
    "scholarships-usa": {
      title: "USA Scholarships - Fund Your American Dream | IOES",
      description:
        "Discover scholarships for studying in the USA. Merit-based and need-based funding opportunities for Indian students.",
      keywords: [
        "USA scholarships",
        "American scholarships",
        "study abroad funding USA",
        "USA education funding",
      ],
      ogImage: "/og-scholarships-usa.jpg",
    },
    "scholarships-uk": {
      title: "UK Scholarships - British Education Funding | IOES",
      description:
        "Find scholarships for studying in the UK. Government and university scholarships for international students.",
      keywords: [
        "UK scholarships",
        "British scholarships",
        "study abroad funding UK",
        "UK education funding",
      ],
      ogImage: "/og-scholarships-uk.jpg",
    },
  },
};

export default seoConfig;
