import { StudyInCountryData } from "@/types/study-in-country";

export const studyInCanadaData: StudyInCountryData = {
  slug: "study-in-canada-opportunities",
  country: "Canada",
  
  hero: {
    title: "Study in Canada - Discover Excellence in Education",
    subtitle: "Your Pathway to Success",
    description: "Experience world-class education in one of the most welcoming countries. With top-ranked universities, affordable tuition, and generous post-study work opportunities, Canada is your ideal study destination.",
    image: "/placeholder.svg?height=400&width=600",
    ctaText: "Get Free Counselling"
  },

  overview: {
    title: "Why Choose Canada for Your Studies?",
    description: "Canada combines academic excellence with a high quality of life, making it a top choice for international students. With a reputation for innovation, diversity, and safety, Canadian institutions offer globally recognized degrees and extensive research opportunities.",
    image: "/placeholder.svg?height=400&width=500",
    highlights: [
      "Home to 3 universities in the global top 50",
      "More affordable than USA and UK",
      "3-year post-graduation work permit available",
      "Pathway to permanent residency",
      "Safe and multicultural environment",
      "Co-op programs for work experience"
    ]
  },

  whyIoes: {
    title: "Why Trust IOES for Your Canadian Education Journey?",
    description: "With partnerships across Canada's top universities and a deep understanding of immigration pathways, IOES has successfully guided thousands of students to their Canadian dreams.",
    reasons: [
      {
        title: "Canadian Partnerships",
        description: "Strong relationships with 150+ Canadian institutions from coast to coast",
        icon: "university"
      },
      {
        title: "Immigration Expertise",
        description: "Complete guidance on study permits, PGWP, and permanent residency pathways",
        icon: "visa"
      },
      {
        title: "Scholarship Access",
        description: "Connect with merit-based and need-based scholarships worth millions",
        icon: "scholarship"
      },
      {
        title: "Post-Arrival Support",
        description: "Comprehensive settlement services including SIN, bank accounts, and housing",
        icon: "support"
      }
    ],
    ctaText: "Begin Your Canadian Journey",
    ctaDescription: "Connect with our Canada specialists for personalized guidance"
  },

  applicationRequirements: {
    title: "Application Requirements for Canadian Universities",
    description: "Canadian universities value academic excellence and holistic development. Our team ensures your application showcases your full potential.",
    undergraduate: {
      title: "Undergraduate Programs",
      requirements: [
        "High school completion with minimum 70-85% depending on program",
        "English proficiency: IELTS 6.5 (no band below 6.0) or TOEFL 86-100",
        "Some programs require prerequisite subjects (Math, Sciences)",
        "Statement of Intent or Personal Statement",
        "Letters of recommendation (1-2 required)",
        "Extracurricular activities and volunteer work preferred"
      ],
      documents: [
        "Official high school transcripts and certificates",
        "English proficiency test scores",
        "Statement of Intent/Personal Statement",
        "Letters of recommendation",
        "Financial documents (CAD 25,000-30,000 per year)",
        "Passport copy",
        "Portfolio (for Arts/Design programs)",
        "Resume highlighting achievements"
      ]
    },
    postgraduate: {
      title: "Postgraduate Programs",
      requirements: [
        "Bachelor's degree with minimum 70-80% (3.0+ GPA) in relevant field",
        "English proficiency: IELTS 6.5-7.0 or TOEFL 90-110",
        "GRE/GMAT may be required for specific programs",
        "Relevant work experience (preferred for professional programs)",
        "Research experience for thesis-based programs",
        "Strong Statement of Purpose and Research Proposal"
      ],
      documents: [
        "Official university transcripts and degree certificates",
        "English proficiency test scores",
        "GRE/GMAT scores (if required)",
        "Statement of Purpose",
        "Letters of recommendation (2-3)",
        "CV with work/research experience",
        "Research proposal (for thesis programs)",
        "Financial documents (CAD 30,000-40,000 per year)"
      ]
    }
  },

  costOfStudying: {
    title: "Cost of Studying in Canada",
    description: "Canada offers excellent value for money compared to other popular study destinations, with world-class education at reasonable costs.",
    courseCosts: {
      title: "Annual Tuition Fees by Program",
      data: [
        {
          level: "Undergraduate",
          field: "Arts & Humanities",
          averageFee: "CAD 20,000 - 30,000",
          currency: "CAD"
        },
        {
          level: "Undergraduate",
          field: "Business & Management",
          averageFee: "CAD 25,000 - 40,000",
          currency: "CAD"
        },
        {
          level: "Undergraduate",
          field: "Engineering & Sciences",
          averageFee: "CAD 30,000 - 50,000",
          currency: "CAD"
        },
        {
          level: "Master's",
          field: "Most Programs",
          averageFee: "CAD 25,000 - 45,000",
          currency: "CAD"
        },
        {
          level: "MBA",
          field: "Top Business Schools",
          averageFee: "CAD 50,000 - 120,000",
          currency: "CAD"
        },
        {
          level: "PhD",
          field: "Research Programs",
          averageFee: "CAD 10,000 - 25,000",
          currency: "CAD"
        }
      ]
    },
    livingExpenses: {
      title: "Monthly Living Expenses",
      data: [
        {
          category: "Accommodation (On-campus)",
          cost: "CAD 600 - 1,200",
          currency: "CAD",
          period: "per month"
        },
        {
          category: "Accommodation (Off-campus)",
          cost: "CAD 500 - 1,500",
          currency: "CAD",
          period: "per month"
        },
        {
          category: "Food & Groceries",
          cost: "CAD 250 - 400",
          currency: "CAD",
          period: "per month"
        },
        {
          category: "Transportation",
          cost: "CAD 80 - 150",
          currency: "CAD",
          period: "per month"
        },
        {
          category: "Health Insurance",
          cost: "CAD 50 - 100",
          currency: "CAD",
          period: "per month"
        },
        {
          category: "Personal Expenses",
          cost: "CAD 200 - 350",
          currency: "CAD",
          period: "per month"
        }
      ]
    },
    additionalInfo: [
      "Total annual living expenses: CAD 12,000 - 18,000 depending on city",
      "Toronto and Vancouver are more expensive than other cities",
      "Smaller cities like Halifax, Winnipeg offer affordable living",
      "Students can work 20 hours/week during studies, full-time during breaks",
      "Co-op programs provide paid work experience"
    ]
  },

  consultantReasons: {
    title: "6 Reasons Why IOES is the #1 Study in Canada Consultant",
    subtitle: "Your Canadian dream becomes reality with our proven expertise and comprehensive support",
    reasons: [
      {
        number: "01",
        title: "Coast-to-Coast University Network",
        description: "Partnerships with universities across all Canadian provinces, from UBC in Vancouver to Memorial University in Newfoundland.",
        icon: "partnership"
      },
      {
        number: "02",
        title: "Study Permit Success Rate 96%",
        description: "Exceptional study permit approval rate with expert documentation guidance and interview preparation.",
        icon: "visa-success"
      },
      {
        number: "03",
        title: "Scholarship & Funding Guidance",
        description: "Access to provincial scholarships, university awards, and funding opportunities worth over CAD 30 million annually.",
        icon: "scholarship-max"
      },
      {
        number: "04",
        title: "Immigration Pathway Planning",
        description: "Complete roadmap from study permit to permanent residency through PNP, CEC, and other immigration programs.",
        icon: "matching"
      },
      {
        number: "05",
        title: "Co-op & Internship Placement",
        description: "Guidance for securing co-op placements and internships that enhance your Canadian work experience.",
        icon: "application"
      },
      {
        number: "06",
        title: "Comprehensive Settlement Support",
        description: "End-to-end support including airport pickup, accommodation, SIN application, and cultural orientation.",
        icon: "post-arrival"
      }
    ]
  },

  testimonials: {
    title: "Canadian Success Stories",
    subtitle: "Students who built their future in the Great White North with IOES",
    testimonials: [
      {
        id: "canada-testimonial-1",
        name: "Manish Kumar",
        university: "University of Toronto",
        course: "Masters in Data Science",
        image: "/placeholder-user.jpg",
        text: "IOES helped me get into UofT with a CAD 15,000 scholarship. Now I'm working at a top tech company in Toronto after my PGWP. The immigration guidance was invaluable!",
        rating: 5
      },
      {
        id: "canada-testimonial-2",
        name: "Deepika Rao",
        university: "University of British Columbia",
        course: "PhD in Environmental Engineering",
        image: "/placeholder-user.jpg",
        text: "My fully-funded PhD at UBC wouldn't have been possible without IOES. Their research guidance and professor connections opened doors I never knew existed.",
        rating: 5
      },
      {
        id: "canada-testimonial-3",
        name: "Vikram Singh",
        university: "McMaster University",
        course: "MBA",
        image: "/placeholder-user.jpg",
        text: "From application to landing my first job in Canada, IOES was with me every step. Their network and support made my transition seamless.",
        rating: 5
      }
    ]
  },

  faqs: {
    title: "Frequently Asked Questions - Study in Canada",
    questions: [
      {
        question: "What are the intake seasons for Canadian universities?",
        answer: "Canadian universities typically have three intakes: Fall (September - major intake), Winter (January), and Summer (May - limited programs). Fall intake has the most program options and scholarship opportunities."
      },
      {
        question: "Can I work while studying in Canada?",
        answer: "Yes, international students with a valid study permit can work 20 hours per week during academic sessions and full-time during scheduled breaks. No separate work permit required."
      },
      {
        question: "What is a Post-Graduation Work Permit (PGWP)?",
        answer: "PGWP allows international graduates to work in Canada for up to 3 years after completing their studies from eligible institutions. The permit length depends on your program duration."
      },
      {
        question: "How can studying in Canada help with permanent residency?",
        answer: "Canada offers several pathways to permanent residency for international graduates through programs like Canadian Experience Class (CEC), Provincial Nominee Programs (PNP), and Federal Skilled Worker Program."
      },
      {
        question: "What is the cost difference between provinces?",
        answer: "Quebec generally has lower tuition fees for international students. Atlantic provinces offer affordable living costs. Ontario and British Columbia tend to be more expensive but offer more opportunities."
      },
      {
        question: "Do I need French language skills to study in Canada?",
        answer: "French is not required for most programs outside Quebec. However, learning French can be beneficial for job opportunities and immigration points, especially if you plan to live in Quebec or Ottawa."
      },
      {
        question: "What are co-op programs and how do they work?",
        answer: "Co-operative education programs integrate academic study with paid work experience. Students alternate between study terms and work terms, gaining valuable industry experience while earning money."
      },
      {
        question: "How does IOES help with Canadian university applications?",
        answer: "IOES provides end-to-end support including university selection, application preparation, scholarship guidance, study permit assistance, and pre-departure orientation for Canadian studies."
      }
    ]
  },

  seo: {
    title: "Study in Canada | Top Universities & Immigration Support | IOES",
    description: "Study in Canada with IOES - Get admission to top Canadian universities with scholarships & immigration support. Expert guidance for study permits & permanent residency pathways.",
    keywords: [
      "study in canada",
      "canada universities",
      "study abroad canada",
      "canada study permit",
      "canada scholarships",
      "canadian universities",
      "study in canada for indian students",
      "canada education consultants",
      "masters in canada",
      "bachelors in canada",
      "phd in canada",
      "pgwp canada",
      "canada immigration",
      "study permit canada"
    ],
    canonical: "/study-in/canada",
    ogTitle: "Study in Canada - World-Class Education & Immigration | IOES",
    ogDescription: "Discover your Canadian dream with IOES. Expert guidance for Canadian university admissions, study permits, and permanent residency pathways. Start your journey today!",
    ogImage: "/placeholder.svg?height=630&width=1200"
  },

  lastUpdated: "2024-12-19T10:00:00Z",
  isActive: true
};
