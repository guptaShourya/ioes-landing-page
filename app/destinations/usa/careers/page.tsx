import { CountrySpecificPage } from "@/components/country-specific-page";

const usCareerOptionsContent = {
  title: "Career Opportunities in the United States",
  description:
    "Discover dynamic career paths and employment opportunities across America's diverse and innovation-driven economy for international graduates and professionals.",
  sections: [
    {
      title: "Technology & Innovation",
      content: (
        <>
          <p>
            The U.S. is a global leader in technology, anchored by hubs like
            Silicon Valley, Seattle, Austin, and New York City. The sector
            encompasses software development, artificial intelligence,
            cybersecurity, cloud computing, and data analytics, with increasing
            demand for skills in machine learning, blockchain, and quantum
            computing.
          </p>
          <p>
            Startups and tech giants alike—Google, Apple, Microsoft, Amazon,
            Meta—offer roles for engineers, product managers, UX designers, and
            data scientists. The Optional Practical Training (OPT) extension for
            STEM graduates and the H-1B visa program are key pathways for
            international tech talent. Remote work flexibility and innovation
            culture define the sector, with rapid career progression and equity
            incentives common in startups.
          </p>
          <p>
            Emerging areas include AI ethics, green tech, and health tech,
            creating interdisciplinary opportunities. While competitive, the
            sector rewards technical excellence, problem-solving, and agile
            thinking. Many firms actively recruit global talent, valuing diverse
            perspectives and multilingual capabilities.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Healthcare & Biomedical Sciences",
      content: (
        <>
          <p>
            The U.S. healthcare system is vast and complex, creating high demand
            for medical professionals, nurses, allied health workers, and
            administrators. Hospitals, private practices, biotech firms, and
            public health institutions offer diverse roles. International
            medical graduates must meet licensing requirements set by bodies
            like the USMLE and ECFMG.
          </p>
          <p>
            The biomedical research sector thrives in cities like Boston, San
            Diego, and San Francisco, with global leaders in genomics,
            immunology, drug development, and precision medicine. NIH funding
            supports cutting-edge research across universities and research
            institutes.
          </p>
          <p>
            Visa pathways include H-1B for healthcare workers and J-1 for
            medical residency. The sector values clinical excellence, scientific
            rigor, and the ability to navigate cultural diversity in patient
            care. With an aging population and innovation-driven landscape,
            long-term career prospects remain strong.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Finance & Business Services",
      content: (
        <>
          <p>
            The U.S. financial sector, centered in New York City, Chicago, and
            San Francisco, spans investment banking, asset management,
            insurance, private equity, and fintech. Wall Street offers
            high-stakes, high-reward careers in corporate finance, M&A, and
            securities trading.
          </p>
          <p>
            MBA graduates and professionals with CFA or CPA credentials find
            opportunities in consulting, strategy, risk management, and
            financial analysis. The fintech segment is rapidly growing, with
            startups innovating in payments, digital banking, and crypto assets.
          </p>
          <p>
            Visa options include H-1B and O-1 for exceptional individuals. The
            U.S. corporate culture prizes drive, performance, and leadership
            potential. International professionals with bilingual skills and
            cross-market experience are particularly valued in global firms and
            trade-focused roles.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Engineering & Infrastructure",
      content: (
        <>
          <p>
            Engineering careers in the U.S. span civil, mechanical, electrical,
            aerospace, and software-adjacent fields. The country is investing
            heavily in infrastructure modernization, clean energy, and smart
            city technologies—creating robust demand for engineers.
          </p>
          <p>
            Cities like Houston, Detroit, and Pittsburgh remain traditional
            engineering hubs, while California and Colorado lead in sustainable
            engineering and innovation-driven design. Licensing through PE
            (Professional Engineer) status enhances career prospects.
          </p>
          <p>
            The H-1B visa remains a primary route for international engineers,
            with many roles appearing on skilled shortage lists. The sector
            rewards technical precision, project leadership, and integration of
            new technologies like BIM, IoT, and AI for industrial applications.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Creative & Media Industries",
      content: (
        <>
          <p>
            The U.S. is home to globally influential creative industries in
            film, music, publishing, gaming, advertising, and digital media.
            Hollywood, New York, and Atlanta serve as key production hubs, while
            cities like Austin, Portland, and Nashville support thriving
            creative communities.
          </p>
          <p>
            Digital content creation, UX design, game development, and
            storytelling remain in demand across platforms. International
            creatives with unique voices can pursue opportunities via O-1 visas
            for extraordinary ability or through partnerships with U.S.-based
            production houses, agencies, and studios.
          </p>
          <p>
            While freelance and project-based work is common, the sector offers
            room for global recognition and artistic impact. Success often
            requires cultural adaptability, personal branding, and a strong
            digital portfolio.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Education & Research",
      content: (
        <>
          <p>
            The U.S. higher education system is globally recognized, with
            opportunities for teaching, research, and academic leadership.
            International academics contribute significantly across STEM, social
            sciences, and the arts. Leading research institutions value
            publication track records, grant success, and interdisciplinary
            collaboration.
          </p>
          <p>
            Postdoctoral positions, adjunct faculty roles, and tenure-track
            appointments form the academic career pipeline. Non-academic
            research roles are available in think tanks, policy institutes, and
            private sector R&D labs, particularly in the pharmaceutical and tech
            sectors.
          </p>
          <p>
            Visa options include J-1 for scholars, F-1 OPT for graduates, and
            the O-1 or EB-2 NIW for researchers of national interest. The sector
            values innovation, teaching excellence, and thought leadership in
            addressing global challenges.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Sustainability & Environmental Sciences",
      content: (
        <>
          <p>
            As climate challenges grow, the U.S. green economy is expanding
            across renewable energy, environmental policy, conservation, and
            sustainable architecture. Clean energy roles are surging in solar,
            wind, EV infrastructure, and battery technology.
          </p>
          <p>
            Environmental scientists, urban planners, and climate analysts find
            roles in government agencies (like the EPA), private consulting
            firms, NGOs, and green-tech companies. The Inflation Reduction Act
            and federal climate policy initiatives are driving demand for
            sustainability professionals.
          </p>
          <p>
            Professionals with a background in systems thinking, ESG reporting,
            environmental law, and data science are well positioned.
            International experts can access the H-1B or O-1 visa based on
            specialized expertise, with increasing demand for globally informed
            environmental solutions.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
  ],
};

export default function USCareerOptionsPage() {
  return (
    <CountrySpecificPage
      country="United States"
      slug="usa"
      flag="https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
      pageType="careers"
      content={usCareerOptionsContent}
    />
  );
}
