import { CountrySpecificPage } from "@/components/country-specific-page";
import { generateMetadataWithAzure } from "@/app/seo/Seo";

export async function generateMetadata() {
  return await generateMetadataWithAzure({
    pageSlug: "study-in-australia/cost",
    pageKey: "destinations-australia-cost", 
    pathname: "/study-in-australia/cost",
  });
}

const australiaCostContent = {
  title: "Understanding the Cost of Living in Australia",
  description:
    "Plan your budget effectively with our comprehensive guide to living expenses for Indian students in Australia, from tuition fees to daily costs.",
  sections: [
    {
      title: "Overview of Expenses",
      content: (
        <>
          <p>
            Living in Australia as an international student involves various
            expenses, including tuition fees, accommodation, food,
            transportation, health insurance, and personal costs. On average,
            students should budget between AUD 20,000 and AUD 30,000 per year
            for living expenses, depending on their location and lifestyle.
          </p>
          <p>
            Major cities like Sydney and Melbourne tend to be more expensive,
            while regional areas offer more affordable options. Understanding
            these costs will help you plan your finances effectively and make
            the most of your time in Australia.
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
            Tuition fees in Australia vary depending on the institution, level
            of study, and field of education. For international students,
            undergraduate programs typically cost between AUD 20,000 and AUD
            45,000 per year, while postgraduate programs range from AUD 22,000
            to AUD 50,000 per year.
          </p>
          <p>
            Professional degrees like medicine, veterinary science, and
            dentistry tend to be at the higher end of this range. Engineering,
            science, and business degrees generally fall in the middle, while
            humanities and education programs are often less expensive.
          </p>
          <p>
            Many universities offer scholarships specifically for international
            students, which can significantly reduce these costs.
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
            Accommodation represents one of the largest expenses for
            international students in Australia. On-campus accommodation
            typically costs between AUD 200 and AUD 700 per week, depending on
            the location and type of room.
          </p>
          <p>
            Off-campus options include shared rentals (AUD 150-350 per week per
            person), private rentals (AUD 250-800 per week), and homestays with
            local families (AUD 235-325 per week). Accommodation in major cities
            like Sydney and Melbourne is significantly more expensive than in
            regional areas.
          </p>
          <p>
            Utilities (electricity, gas, water) typically cost an additional AUD
            50-100 per week for off-campus accommodations, though they're
            usually included in on-campus housing fees.
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
            Food costs in Australia can vary widely depending on your eating
            habits and location. Cooking at home is the most economical option,
            with weekly grocery expenses averaging AUD 80-150 for a single
            person.
          </p>
          <p>
            Eating out ranges from affordable (AUD 15-25 for a meal at a casual
            restaurant) to expensive (AUD 40+ at mid-range restaurants). Many
            campuses have affordable cafeterias and food outlets.
          </p>
          <p>
            For Indian students, ingredients for cooking Indian food are readily
            available in major cities, though they may be more expensive than in
            India.
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
            Australia's major cities have well-developed public transportation
            systems including trains, buses, trams, and ferries. Students can
            benefit from concession fares, which offer significant discounts on
            regular prices.
          </p>
          <p>
            Weekly transportation costs range from AUD 30 to AUD 60, depending
            on the city and how far you live from campus. Many cities offer
            weekly or monthly passes that reduce costs for regular commuters.
          </p>
          <p>
            Bicycling is popular in many Australian cities, with dedicated bike
            lanes and bike-sharing programs available.
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
            Overseas Student Health Cover (OSHC) is mandatory for all
            international students in Australia. This insurance covers doctor
            visits, some hospital treatments, ambulance services, and limited
            pharmaceuticals.
          </p>
          <p>
            OSHC costs approximately AUD 500-700 per year for a single student,
            with higher rates for couples or families. The exact cost depends on
            the provider and level of coverage.
          </p>
          <p>
            Most universities have on-campus health services that provide basic
            medical care at reduced costs for students in university housing.
          </p>
        </>
      ),
      image: "/programs/insurance.webp",
    },
    {
      title: "Entertainment and Personal Expenses",
      content: (
        <>
          <p>
            Entertainment and personal expenses vary greatly depending on
            individual lifestyle choices. Social activities like movies cost
            around AUD 15-25 with student discounts, while restaurant meals
            range from AUD 15-50 depending on the venue.
          </p>
          <p>
            Many cultural institutions offer free or discounted student entry,
            and universities organize numerous free or low-cost events. Personal
            expenses include clothing (AUD 50-100 per month), toiletries and
            personal care items (AUD 30-50 per month), and gym memberships (AUD
            40-80 per month).
          </p>
          <p>
            Many students budget AUD 80-150 per week for these discretionary
            expenses, adjusting based on their financial situation and
            priorities.
          </p>
        </>
      ),
      image: "/programs/entertainment.webp",
    },
  ],
};

export default function AustraliaCostPage() {
  return (
    <CountrySpecificPage
      country="Australia"
      slug="australia"
      flag="https://purecatamphetamine.github.io/country-flag-icons/3x2/AU.svg"
      pageType="cost"
      content={australiaCostContent}
    />
  );
}
