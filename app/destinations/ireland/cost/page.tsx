import { CountrySpecificPage } from "@/components/country-specific-page";
import { generateMetadataWithAzure } from "@/app/seo/Seo";

export async function generateMetadata() {
  return await generateMetadataWithAzure({
    pageSlug: "study-in-ireland/cost",
    pageKey: "destinations-ireland-cost", 
    pathname: "/study-in-ireland/cost",
  });
}

const irelandCostContent = {
  title: "Understanding the Cost of Living in Ireland",
  description:
    "Plan your budget effectively with our detailed guide to tuition, accommodation, and daily living costs for Indian students in Ireland.",
  sections: [
    {
      title: "Overview of Expenses",
      content: (
        <>
          <p>
            Ireland is a popular destination for Indian students due to its
            strong academics and English-speaking environment. The monthly cost
            of living typically ranges from €800 to €1,500 depending on the
            city, with Dublin being the most expensive.
          </p>
          <p>
            To obtain a student visa, Indian students must show financial proof
            of at least €10,000 per year (~€833/month), though actual costs may
            be higher, especially in major cities. Students can work up to 20
            hours per week during term time and 40 hours during holidays,
            helping offset living expenses.
          </p>
          <p>
            Ireland combines academic quality with work opportunities and a
            safe, welcoming environment — making it a smart choice for Indian
            students.
          </p>
        </>
      ),
      image: "/programs/budget.webp",
    },
    {
      title: "Tuition Fees",
      content: (
        <>
          <p>
            Ireland does not offer tuition-free education. Annual tuition fees
            for international students range from €9,000 to €25,000 depending on
            the level and field of study.
          </p>
          <p>
            Arts and humanities programs tend to cost €9,000–€15,000 per year,
            while business and STEM programs may range from €12,000–€25,000.
            Medicine and health-related courses can exceed €30,000 annually.
          </p>
          <p>
            Scholarships are available at both undergraduate and postgraduate
            levels, offered by universities and the Irish government (e.g.,
            Government of Ireland International Education Scholarships).
          </p>
        </>
      ),
      image: "/programs/academic.webp",
    },
    {
      title: "Accommodation",
      content: (
        <>
          <p>
            Accommodation is one of the largest expenses for students in
            Ireland. On-campus student housing typically costs between €600 and
            €1,200 per month.
          </p>
          <p>
            Off-campus options such as shared apartments cost €400–€800 per
            month depending on location. Dublin, being the capital, is
            significantly more expensive than cities like Galway or Limerick.
          </p>
          <p>
            Some students reduce costs by sharing rooms or living farther from
            city centers. Utilities and internet can add €100–€150 monthly if
            not included in rent.
          </p>
        </>
      ),
      image: "/programs/accommodation.webp",
    },
    {
      title: "Food and Groceries",
      content: (
        <>
          <p>
            Monthly grocery bills for students range between €200 and €350,
            depending on eating habits and use of university cafeterias.
          </p>
          <p>
            Supermarkets like Lidl, Aldi, Tesco, and Dunnes offer
            student-friendly pricing. Cooking at home helps reduce expenses,
            while eating out regularly can be costly (€10–€20 per meal).
          </p>
          <p>
            Indian grocery stores are available in most cities, though specific
            spices and products may be priced higher than in India.
          </p>
        </>
      ),
      image: "/programs/groceries.webp",
    },
    {
      title: "Transportation",
      content: (
        <>
          <p>
            Public transportation is well-developed in Ireland, especially in
            larger cities. Students typically spend €50–€100 per month on
            transport, depending on usage and location.
          </p>
          <p>
            Dublin offers a Student Leap Card, giving discounted fares on buses,
            trains, and trams. Biking is also popular in many cities, and
            universities often support cycling infrastructure.
          </p>
          <p>
            Walking is common for students living near campus, particularly in
            smaller university towns.
          </p>
        </>
      ),
      image: "/programs/transportation.webp",
    },
    {
      title: "Health Insurance",
      content: (
        <>
          <p>
            Health insurance is mandatory for non-EU students in Ireland.
            Private insurance plans cost between €150 and €300 per year,
            depending on coverage.
          </p>
          <p>
            Students must show proof of health insurance when applying for their
            visa and residence permit. Some universities offer guidance on
            recommended providers.
          </p>
          <p>
            Public healthcare is not automatically available to international
            students, so having comprehensive private coverage is essential.
          </p>
        </>
      ),
      image: "/programs/insurance.webp",
    },
  ],
};

export default function IrelandCostPage() {
  return (
    <CountrySpecificPage
      country="Ireland"
      slug="ireland"
      flag="https://purecatamphetamine.github.io/country-flag-icons/3x2/IE.svg"
      pageType="cost"
      content={irelandCostContent}
    />
  );
}
