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
};
