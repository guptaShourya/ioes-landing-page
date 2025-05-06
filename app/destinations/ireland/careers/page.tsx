import { CountrySpecificPage } from "@/components/country-specific-page";

const irelandCareerOptionsContent = {
  title: "Career Opportunities in Ireland",
  description:
    "Discover thriving career pathways in Ireland's dynamic, innovation-driven economy — perfect for international graduates and professionals seeking opportunities in Europe's fastest-growing English-speaking nation.",
  sections: [
    {
      title: "Technology & Software Development",
      content: (
        <>
          <p>
            Ireland has established itself as Europe's tech hub, hosting
            European headquarters for global giants like Google, Facebook,
            Apple, and Microsoft. Dublin's "Silicon Docks" offers abundant
            opportunities in software engineering, cloud computing,
            cybersecurity, and AI development, while cities like Cork and Galway
            are emerging tech centers.
          </p>
          <p>
            The demand for skilled tech professionals consistently outpaces
            supply, creating favorable conditions for international talent.
            Backend and frontend developers, data scientists, UX/UI designers,
            and DevOps engineers are particularly sought after across Ireland's
            tech ecosystem.
          </p>
          <p>
            Most tech roles operate in English-speaking environments, making
            Ireland especially attractive for international professionals. The
            Critical Skills Employment Permit offers streamlined immigration
            pathways for qualified tech workers, with opportunities for
            permanent residency after just two years.
          </p>
        </>
      ),
      image: "/programs/it-4.webp",
    },
    {
      title: "Pharmaceutical & Life Sciences",
      content: (
        <>
          <p>
            Ireland is a global biopharmaceutical leader, home to 24 of the
            world's top 25 pharmaceutical companies. Major clusters in Dublin,
            Cork, and Galway provide careers in drug development, medical device
            manufacturing, biotechnology research, and clinical trials
            management.
          </p>
          <p>
            Professionals with expertise in quality assurance, regulatory
            affairs, process development, and biomanufacturing are in high
            demand. Ireland's strategic position as a post-Brexit EU member with
            strong US connections creates unique opportunities in pharmaceutical
            supply chain and compliance roles.
          </p>
          <p>
            The sector benefits from Ireland's world-class research
            infrastructure, with collaboration opportunities between industry
            and institutions like Trinity College Dublin and University College
            Dublin. Many roles qualify for Critical Skills Employment Permits,
            offering clear pathways to residency.
          </p>
        </>
      ),
      image: "/programs/medical-2.webp",
    },
    {
      title: "Financial Services & Fintech",
      content: (
        <>
          <p>
            Ireland's financial services sector has experienced remarkable
            growth, particularly since Brexit, as many firms relocated EU
            operations from London to Dublin. The International Financial
            Services Centre (IFSC) hosts global banking, insurance, asset
            management, and payment processing companies.
          </p>
          <p>
            Dublin's thriving fintech scene includes companies like Stripe,
            Mastercard, and Fidelity Investments, creating demand for
            professionals in blockchain, digital payments, regtech, and
            financial analytics. Accountants, actuaries, compliance specialists,
            and risk managers remain consistently in high demand.
          </p>
          <p>
            Ireland's common law system and English-speaking environment offer
            advantages for international finance professionals. Those with
            expertise in EU financial regulations, sustainable finance, and
            digital transformation are particularly valued across the sector.
          </p>
        </>
      ),
      image: "/programs/business-3.webp",
    },
    {
      title: "Engineering & Manufacturing",
      content: (
        <>
          <p>
            Ireland excels in high-value engineering and advanced manufacturing,
            particularly in medical devices, precision engineering, and clean
            technology. Companies like Boston Scientific, Johnson & Johnson, and
            Medtronic have significant Irish operations, while indigenous
            engineering firms continue to expand.
          </p>
          <p>
            Biomedical engineers, automation specialists, quality engineers, and
            manufacturing technologists find excellent opportunities throughout
            Ireland. The western corridor from Galway to Limerick has emerged as
            a medical technology powerhouse, while Dublin and Cork host diverse
            engineering operations.
          </p>
          <p>
            Engineers with specialized qualifications can benefit from the
            Critical Skills Employment Permit, with validation available through
            Engineers Ireland for certain disciplines. The sector values
            interdisciplinary skills, particularly at the intersection of
            engineering and data analytics.
          </p>
        </>
      ),
      image: "/programs/engineering-1.webp",
    },
    {
      title: "Digital Marketing & E-Commerce",
      content: (
        <>
          <p>
            Ireland's position as the European headquarters for major technology
            and consumer brands has created a thriving digital marketing
            ecosystem. Content strategists, SEO specialists, social media
            managers, and marketing analysts are in high demand across
            technology, retail, and service sectors.
          </p>
          <p>
            The growing e-commerce landscape offers opportunities in customer
            experience design, digital analytics, and cross-border market
            development. International professionals bring valuable perspectives
            for companies targeting global markets from their Irish bases.
          </p>
          <p>
            Dublin's creative agencies and tech companies frequently seek
            multilingual marketing professionals who can support pan-European
            campaigns. Experience with marketing automation, data-driven
            strategies, and localization are particularly valued in this
            evolving sector.
          </p>
        </>
      ),
      image: "/programs/it-4.webp",
    },
    {
      title: "Healthcare & Medical Services",
      content: (
        <>
          <p>
            Ireland's healthcare system offers stable career paths for medical
            professionals, with particular demand for doctors, nurses,
            radiographers, and allied health practitioners. The Health Service
            Executive (HSE) actively recruits internationally to address ongoing
            staffing needs across urban and rural settings.
          </p>
          <p>
            Medical registration processes are streamlined for professionals
            from many countries, though additional training or examinations may
            be required. Once registered, international healthcare professionals
            enjoy competitive salaries, structured career progression, and
            excellent work-life balance.
          </p>
          <p>
            Beyond clinical roles, Ireland's health technology sector creates
            opportunities in telemedicine, healthcare analytics, and medical
            information systems. Research positions at institutions like the
            Royal College of Surgeons in Ireland combine clinical practice with
            cutting-edge investigation.
          </p>
        </>
      ),
      image: "/programs/medical-2.webp",
    },
    {
      title: "Sustainable Energy & Green Technology",
      content: (
        <>
          <p>
            Ireland's commitment to renewable energy and sustainability has
            created a growing sector focused on wind power, smart grid
            technology, and energy efficiency solutions. The country aims to
            generate 80% of electricity from renewable sources by 2030, driving
            investment and job creation.
          </p>
          <p>
            Engineers, project managers, and policy specialists with experience
            in renewable energy development find opportunities with both
            multinational firms and Irish innovators. Coastal regions offer
            particular potential for wind and marine energy projects, while
            urban centers focus on sustainable building technologies.
          </p>
          <p>
            The sector benefits from strong government support and EU funding,
            with particular growth in energy storage, grid management, and
            carbon reduction technologies. International professionals bring
            valuable expertise from more developed green energy markets to
            Ireland's evolving landscape.
          </p>
        </>
      ),
      image: "/programs/sustainability-2.webp",
    },
  ],
};
export default function IrelandCareerOptionsPage() {
  return (
    <CountrySpecificPage
      country="Ireland"
      slug="ireland"
      flag="https://purecatamphetamine.github.io/country-flag-icons/3x2/IE.svg"
      pageType="careers"
      content={irelandCareerOptionsContent}
    />
  );
}
