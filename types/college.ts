export type EnglishRequirement = {
  test: string;
  min?: number;
  max?: number;
  bandBreakdown?: string;
};

export type Intake = {
  campus: string;
  fees: string;
  duration: string;
  startMonth: string;
  startYear: number;
  attendance: "Full-time" | "Part-time" | "Online" | "Hybrid" | string;
};

export type Program = {
  name: string;
  degree: string;
  level: string;
  subject: string;
  duration: string;
  fee: string;
  nextIntake?: string;
  intakes?: Intake[];
};

export type RankingItem = {
  rank: string;
  value: string | number;
  year?: number;
};

export type Scholarship = {
  name: string;
  amount?: string;
  eligibility?: string;
  link?: string;
};

export type CollegeContact = {
  address?: string;
  phone?: string;
  email?: string;
  mapUrl?: string;
};

export type CollegeStatistics = {
  rating?: number;
  reviewCount?: string;
  studentCount?: string;
  programCount?: string;
  establishedDisplay?: string;
  worldRanking?: string;
};

export type WhyChooseItem = {
  icon: string;
  title: string;
  description: string;
};

export type ImportantDates = {
  applicationOpen?: string;
  applicationDeadline?: string;
  semesterStart?: string;
  [key: string]: string | undefined;
};

export type PlacementData = {
  placementRate?: string;
  averagePackage?: string;
  highestPackage?: string;
  placementDescription?: string;
  averageDescription?: string;
  highestDescription?: string;
  topRecruiters?: string[];
  industryDistribution?: {
    sector: string;
    percentage: number;
  }[];
};

export type SimilarCollege = {
  name: string;
  location: string;
  rating?: number;
  fees?: string;
  link?: string;
  ranking?: string;
  logo?: string;
  highlights?: string[];
};

export type FAQ = {
  question: string;
  answer: string;
};

export type College = {
  slug: string;
  name: string;
  logo?: string;
  bannerImage?: string;
  website?: string;
  city: string;
  state?: string;
  country: string;
  established?: number;
  type?: string;
  rankings?: RankingItem[];
  overview?: string;
  highlights?: string[];
  subjects?: string[];
  programs?: Program[];
  englishRequirements?: EnglishRequirement[];
  admissions?: {
    applicationFee?: string;
    steps?: { title: string; description?: string }[];
  };
  scholarships?: Scholarship[];
  gallery?: string[];
  contact?: CollegeContact;
  statistics?: CollegeStatistics;
  whyChoose?: WhyChooseItem[];
  importantDates?: ImportantDates;
  placement?: PlacementData;
  similarColleges?: SimilarCollege[];
  faqs?: FAQ[];
};
