import { CountrySpecificPage } from "@/components/country-specific-page";

const germanyCostContent = {
  title: "Understanding the Cost of Living in Germany",
  description:
    "Plan your budget effectively with our comprehensive guide to living expenses for Indian students in Germany, from tuition fees to daily costs.",
  sections: [
    {
      title: "Overview of Expenses",
      content: (
        <>
          <p>
            Studying in Germany represents excellent value for Indian students,
            particularly due to the tuition-free education at public
            universities in most states. The total cost of living for
            international students typically ranges from €700 to €1,500 per
            month depending on the city and lifestyle choices, with an average
            of around €850-950 in most university cities.
          </p>
          <p>
            Before arrival, students must demonstrate financial resources of at
            least €11,208 per year (€934 per month) to obtain a student visa,
            which aligns well with actual living costs in many locations. Many
            Indian students offset some expenses through part-time work, which
            is permitted for up to 120 full days or 240 half days per year.
          </p>
          <p>
            With its combination of high-quality education, affordable living
            costs, and excellent post-graduation opportunities, Germany
            continues to be one of the most cost-effective destinations for
            Indian students seeking international education.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Tuition Fees",
      content: (
        <>
          <p>
            One of Germany's most attractive features for international students
            is its tuition fee structure. Public universities in most German
            states offer tuition-free education for all students, regardless of
            nationality, for undergraduate programs and many master's programs.
          </p>
          <p>
            Students only pay a semester contribution (Semesterbeitrag) ranging
            from €150 to €350 per semester, which includes administrative fees,
            student services, and often a semester ticket for public
            transportation. Baden-Württemberg is an exception, charging non-EU
            students €1,500 per semester at public universities.
          </p>
          <p>
            Private universities charge tuition fees ranging from €10,000 to
            €30,000 per year, depending on the institution and program. Certain
            specialized master's programs at public universities may also charge
            tuition fees, typically between €1,500 and €5,000 per semester.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Accommodation",
      content: (
        <>
          <p>
            Accommodation represents the largest expense for international
            students in Germany. Student dormitories (Studentenwohnheim)
            operated by the Studentenwerk (student services organization) are
            the most affordable option, costing between €200 and €350 per month,
            though availability is limited and waiting lists can be long.
          </p>
          <p>
            Shared apartments (Wohngemeinschaft or WG) are popular among
            students, with costs ranging from €250 to €450 per month depending
            on the city. Private apartments (studio or one-bedroom) typically
            cost between €400 and €800 per month, with significant variation
            between cities.
          </p>
          <p>
            Utilities (electricity, heating, water) typically add €80-150 per
            month to housing costs, though they're often included in dormitory
            fees.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Food and Groceries",
      content: (
        <>
          <p>
            Food costs in Germany are relatively reasonable compared to other
            Western European countries. Students typically spend €150-250 per
            month on groceries, depending on dietary preferences and shopping
            habits.
          </p>
          <p>
            Discount supermarkets like Aldi, Lidl, and Netto offer good quality
            at lower prices, while supermarkets like Rewe and Edeka have wider
            selections at slightly higher prices. University cafeterias (Mensa)
            provide subsidized meals for students, with a complete lunch costing
            between €2.50 and €5.
          </p>
          <p>
            For Indian students, ingredients for cooking Indian food are
            available in Asian or international grocery stores in most
            university cities, though some spices and specialty items may be
            more expensive than in India.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Transportation",
      content: (
        <>
          <p>
            Germany has an excellent public transportation system that makes
            getting around cities and traveling between them convenient and
            relatively affordable. Most university students receive a semester
            ticket as part of their semester contribution, providing unlimited
            use of public transportation within their city or region.
          </p>
          <p>
            For travel beyond the semester ticket's coverage area, students can
            use regional trains, long-distance trains (Deutsche Bahn), or
            intercity buses. Deutsche Bahn offers a BahnCard for 25% or 50%
            discounts on train tickets, which is worthwhile for frequent
            travelers.
          </p>
          <p>
            Bicycling is very popular in Germany, with extensive bike lanes in
            most cities. Many students purchase second-hand bicycles (€50-150)
            for daily transportation, which can further reduce transportation
            costs.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Health Insurance",
      content: (
        <>
          <p>
            Health insurance is mandatory for all students in Germany and must
            be secured before enrolling at a university. For students under 30,
            public health insurance costs approximately €110 per month,
            providing comprehensive coverage for doctor visits, hospital stays,
            and basic dental care.
          </p>
          <p>
            Students over 30 or those pursuing doctoral studies typically need
            private health insurance, which can cost €30-150 per month depending
            on coverage and the student's health profile.
          </p>
          <p>
            Public health insurance is generally recommended for most students
            due to its comprehensive coverage and straightforward system.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
  ],
};

export default function GermanyCostPage() {
  return (
    <CountrySpecificPage
      country="Germany"
      slug="germany"
      flag="https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg"
      pageType="cost"
      content={germanyCostContent}
    />
  );
}
