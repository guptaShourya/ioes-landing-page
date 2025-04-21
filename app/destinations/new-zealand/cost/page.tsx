import { CountrySpecificPage } from "@/components/country-specific-page";

const newZealandCostContent = {
  title: "Understanding the Cost of Living in New Zealand",
  description:
    "Plan your budget effectively with our comprehensive guide to living expenses for Indian students in New Zealand, from tuition fees to daily costs.",
  sections: [
    {
      title: "Overview of Expenses",
      content: (
        <>
          <p>
            While studying in New Zealand represents a significant financial
            investment, careful planning and budgeting can make it manageable.
            The total cost of living and studying in New Zealand for
            international students typically ranges from NZD 25,000 to NZD
            40,000 per year, depending on the institution, location, and
            lifestyle choices.
          </p>
          <p>
            To obtain a student visa, you must demonstrate access to at least
            NZD 15,000 per year for living expenses, in addition to tuition
            fees. Many Indian students offset some expenses through part-time
            work, which is permitted for up to 20 hours per week during term
            time and full-time during scheduled breaks.
          </p>
          <p>
            With its high-quality education system, excellent standard of
            living, and post-study work opportunities, New Zealand continues to
            offer good value for international students seeking a world-class
            education in a safe, welcoming environment.
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
            Tuition fees in New Zealand vary depending on the institution, level
            of study, and field of education. For international students,
            undergraduate programs typically cost between NZD 22,000 and NZD
            32,000 per year, with business and arts programs at the lower end
            and medicine, engineering, and veterinary science at the higher end.
          </p>
          <p>
            Postgraduate programs range from NZD 25,000 to NZD 40,000 per year,
            with specialized professional degrees costing more. PhD students pay
            the same fees as domestic students (approximately NZD 6,500-9,000
            per year) if they study full-time.
          </p>
          <p>
            Most universities offer scholarships specifically for international
            students, which can significantly reduce these costs. The New
            Zealand academic year generally runs from February to November, with
            two semesters and optional summer courses.
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
            international students in New Zealand. University halls of residence
            typically cost between NZD 200 and NZD 400 per week, with variations
            depending on whether meals are included and the type of room (shared
            or single).
          </p>
          <p>
            Private rentals range from NZD 150-250 per week per person for
            shared accommodations to NZD 300-500 per week for studio or
            one-bedroom apartments. Homestays with local families cost
            approximately NZD 250-300 per week, usually including meals, and
            provide cultural immersion opportunities.
          </p>
          <p>
            Utilities (electricity, internet, water) typically cost an
            additional NZD 30-50 per week for off-campus accommodations, though
            they're usually included in university housing and homestay fees.
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
            Food costs in New Zealand vary depending on personal preferences and
            eating habits. Self-catering students typically spend NZD 80-120 per
            week on groceries. Major supermarket chains like Countdown, New
            World, and Pak'nSave offer a range of options, with Pak'nSave
            generally being the most economical.
          </p>
          <p>
            For those living in catered accommodation, meal plans typically cost
            NZD 150-200 per week. Eating out ranges from affordable (NZD 15-20
            for a meal at a casual restaurant) to expensive (NZD 30+ at
            mid-range restaurants).
          </p>
          <p>
            For Indian students, ingredients for cooking Indian food are
            available in international grocery stores in major cities, though
            some spices and specialty items may be more expensive than in India.
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
            New Zealand cities have public transportation systems including
            buses and trains, with Auckland and Wellington also having ferry
            services. Students can benefit from concession fares, which offer
            significant discounts on regular prices.
          </p>
          <p>
            Monthly transportation costs range from NZD 100 to NZD 150,
            depending on the city and how far you live from campus. Many cities
            offer stored value cards or apps that provide discounted fares for
            regular users.
          </p>
          <p>
            Bicycling is popular in many New Zealand cities, with dedicated bike
            lanes in urban areas. For longer trips between cities, intercity
            buses, trains, and domestic flights offer various options.
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
            Health insurance is mandatory for international students in New
            Zealand. Most universities have a preferred insurance provider, with
            policies costing approximately NZD 500-700 per year. These policies
            typically cover doctor visits, hospital treatment, prescription
            medications, and some dental and optical services.
          </p>
          <p>
            While the public healthcare system provides free emergency care for
            everyone, non-emergency services for international students require
            insurance coverage or direct payment.
          </p>
          <p>
            Most universities have health and counseling services that provide
            basic medical care and mental health support at reduced costs for
            students.
          </p>
        </>
      ),
      image: "/programs/insurance.webp",
    },
  ],
};

export default function NewZealandCostPage() {
  return (
    <CountrySpecificPage
      country="New Zealand"
      slug="new-zealand"
      flag="https://purecatamphetamine.github.io/country-flag-icons/3x2/NZ.svg"
      pageType="cost"
      content={newZealandCostContent}
    />
  );
}
