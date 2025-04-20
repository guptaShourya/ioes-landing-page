import { CountrySpecificPage } from "@/components/country-specific-page";
import {
  Home,
  GraduationCap,
  Utensils,
  Bus,
  Heart,
  Wifi,
  CreditCard,
  DollarSign,
} from "lucide-react";

const ukCostContent = {
  title: "Understanding the Cost of Living in the UK",
  description:
    "Plan your budget effectively with our comprehensive guide to living expenses for Indian students in the UK, from tuition fees to daily costs.",
  sections: [
    {
      title: "Overview of Expenses",
      content: (
        <>
          <p>
            While studying in the UK represents a significant financial
            investment, careful planning and budgeting can make it manageable.
            The total cost of living and studying in the UK for international
            students typically ranges from £22,000 to £30,000 per year outside
            London, and £25,000 to £35,000 in London, depending on the
            institution, location, and lifestyle choices.
          </p>
          <p>
            To obtain a student visa, you must demonstrate access to at least
            £1,023 per month for living expenses in London (£9,207 for a 9-month
            course), or £820 per month outside London (£7,380 for 9 months), in
            addition to tuition fees.
          </p>
          <p>
            Many Indian students offset some expenses through part-time work,
            which is permitted for up to 20 hours per week during term time and
            full-time during scheduled breaks. With its high-quality education
            system, rich cultural experiences, and global networking
            opportunities, the UK continues to offer excellent value for
            international students seeking a world-class education.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Tuition Fees",
      content: (
        <>
          <p>
            Tuition fees in the UK vary depending on the institution, level of
            study, and field of education. For international students,
            undergraduate programs typically cost between £10,000 and £26,000
            per year, with classroom-based courses at the lower end and
            laboratory or clinical courses at the higher end.
          </p>
          <p>
            Business and medical degrees can cost up to £38,000 per year at
            prestigious universities. Postgraduate taught programs (Master's)
            range from £11,000 to £32,000 per year, while research programs
            (PhD) generally cost between £15,000 and £25,000 annually.
          </p>
          <p>
            Many universities offer scholarships specifically for international
            students, which can significantly reduce these costs. The UK
            academic year generally runs from September to June, with three
            terms or two semesters.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Accommodation",
      content: (
        <>
          <p>
            Accommodation represents one of the largest expenses for
            international students in the UK. University halls of residence
            typically cost between £90 and £200 per week, with variations
            depending on whether meals are included, the type of room (shared or
            single), and location.
          </p>
          <p>
            Private student accommodations provided by companies like Unite
            Students or iQ offer similar facilities, often with more modern
            amenities, at slightly higher prices. Private rentals range from
            £70-150 per week per person for shared houses or flats outside
            London, to £150-300 per week in London.
          </p>
          <p>
            Utilities (electricity, gas, water, internet) typically cost an
            additional £40-60 per week for off-campus accommodations, though
            they're usually included in university housing fees.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Food and Groceries",
      content: (
        <>
          <p>
            Food costs in the UK vary depending on personal preferences and
            eating habits. Self-catering students typically spend £30-50 per
            week on groceries. Major supermarket chains like Tesco, Sainsbury's,
            Asda, and Morrisons offer a range of options, with discount
            supermarkets like Aldi and Lidl providing more economical choices.
          </p>
          <p>
            For those living in catered accommodation, meal plans typically cost
            £100-150 per week. Eating out ranges from affordable (£5-10 for fast
            food) to expensive (£15-30 for a meal at a mid-range restaurant).
          </p>
          <p>
            For Indian students, ingredients for cooking Indian food are readily
            available in supermarkets and specialized Asian grocery stores in
            most university cities.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Transportation",
      content: (
        <>
          <p>
            The UK has an extensive public transportation system including
            buses, trains, and in some cities, trams and underground services.
            Students can benefit from discounted fares with a 16-25 Railcard
            (which international students under 26 can purchase) offering 1/3
            off train fares, and local student travel cards in many cities.
          </p>
          <p>
            Weekly transportation costs range from £15-30 outside London, to
            £30-50 in London, depending on distance traveled and frequency of
            use. Many students live close to their university and walk or cycle
            to reduce transportation costs.
          </p>
          <p>
            For longer trips between cities, advance booking of train tickets
            can save significant amounts, while coach services like National
            Express and Megabus offer more economical options.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Healthcare",
      content: (
        <>
          <p>
            International students studying in the UK for more than six months
            pay an Immigration Health Surcharge (IHS) as part of their visa
            application, currently £470 per year of study. This gives them
            access to the National Health Service (NHS) on the same basis as UK
            residents, including free doctor (GP) visits and hospital treatment.
          </p>
          <p>
            Some services like dental treatment, eye tests, and prescriptions
            may still incur charges, though at subsidized rates. Students
            staying for less than six months should arrange private health
            insurance before arrival.
          </p>
          <p>
            Many universities have on-campus health centers providing convenient
            access to medical care for students.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=500",
    },
  ],
};

export default function UKCostPage() {
  return (
    <CountrySpecificPage
      country="United Kingdom"
      slug="uk"
      flag="https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
      pageType="cost"
      content={ukCostContent}
    />
  );
}
