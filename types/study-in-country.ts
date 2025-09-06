import { ReactNode } from "react";

// Data structure for SEO study-in-[country] pages
export interface StudyInCountryData {
  // Page identification
  slug: string; // URL slug like "study-in-usa" or custom slug from user
  country: string; // Country name
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    ctaText: string;
  };

  // Overview Section
  overview: {
    title: string;
    description: string;
    image: string;
    highlights: string[];
  };

  // Why IOES Section
  whyIoes: {
    title: string;
    description: string;
    reasons: {
      title: string;
      description: string;
      icon: string; // Icon name or path
    }[];
    ctaText: string;
    ctaDescription: string;
  };

  // Application Requirements
  applicationRequirements: {
    title: string;
    description: string;
    undergraduate: {
      title: string;
      requirements: string[];
      documents: string[];
    };
    postgraduate: {
      title: string;
      requirements: string[];
      documents: string[];
    };
  };

  // Costs and Financing
  costsAndFinancing: {
    title: string;
    description: string;
    courseCosts: {
      title: string;
      data: {
        level: string;
        field: string;
        averageFee: string;
        currency: string;
      }[];
    };
    livingExpenses: {
      title: string;
      data: {
        category: string;
        cost: string;
        currency: string;
        period: string;
      }[];
    };
    additionalInfo: string[];
  };

  // 6 Reasons IOES is #1 Consultant
  consultantReasons: {
    title: string;
    subtitle: string;
    reasons: {
      number: string;
      title: string;
      description: string;
      icon: string;
    }[];
  };

  // Student Testimonials
  testimonials: {
    title: string;
    subtitle: string;
    testimonials: {
      id: string;
      name: string;
      university: string;
      course: string;
      image: string;
      video?: string;
      text: string;
      rating: number;
    }[];
  };

  // FAQs
  faqs: {
    title: string;
    questions: {
      question: string;
      answer: string;
    }[];
  };

  // SEO Metadata
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonical?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
  };

  // Additional metadata
  lastUpdated: string;
  isActive: boolean;
}

// Default template structure
export const defaultStudyInCountryTemplate: Omit<StudyInCountryData, 'slug' | 'country'> = {
  hero: {
    title: "",
    subtitle: "",
    description: "",
    image: "",
    ctaText: "Get Free Counselling"
  },
  overview: {
    title: "",
    description: "",
    image: "",
    highlights: []
  },
  whyIoes: {
    title: "",
    description: "",
    reasons: [],
    ctaText: "Start Your Journey",
    ctaDescription: "Book a free consultation with our expert counselors"
  },
  applicationRequirements: {
    title: "Application Requirements",
    description: "",
    undergraduate: {
      title: "Undergraduate Programs",
      requirements: [],
      documents: []
    },
    postgraduate: {
      title: "Postgraduate Programs", 
      requirements: [],
      documents: []
    }
  },
  costsAndFinancing: {
    title: "Cost of Studying",
    description: "",
    courseCosts: {
      title: "Tuition Fees by Course Level",
      data: []
    },
    livingExpenses: {
      title: "Living Expenses",
      data: []
    },
    additionalInfo: []
  },
  consultantReasons: {
    title: "6 Reasons Why IOES is the #1 Study Abroad Consultant",
    subtitle: "",
    reasons: []
  },
  testimonials: {
    title: "Student Success Stories",
    subtitle: "Hear from students who achieved their dreams",
    testimonials: []
  },
  faqs: {
    title: "Frequently Asked Questions",
    questions: []
  },
  seo: {
    title: "",
    description: "",
    keywords: []
  },
  lastUpdated: new Date().toISOString(),
  isActive: true
};
