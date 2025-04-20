import { CountrySpecificPage } from "@/components/country-specific-page";

const canadaCostContent = {
  title: "Understanding the Cost of Living in Canada",
  description:
    "A comprehensive guide to budgeting and managing expenses as an international student in Canada.",
  sections: [
    {
      title: "Overview of Expenses",
      content: (
        <>
          <p>
            The cost of living in Canada varies significantly depending on the
            location, with major cities like Toronto and Vancouver being
            considerably more expensive than smaller cities and towns. As an
            international student, your main expenses will include tuition fees,
            accommodation, food, transportation, health insurance, books and
            supplies, and personal expenses.
          </p>
          <p>
            On average, international students should budget between CAD 15,000
            to CAD 30,000 per year for living expenses (excluding tuition), with
            higher costs in major metropolitan areas and lower costs in smaller
            cities and rural regions.
          </p>
          <p>
            It's important to create a detailed budget before arriving in Canada
            and to monitor your expenses regularly. Many universities offer
            financial planning resources and workshops specifically for
            international students to help manage costs effectively.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Accommodation Costs",
      content: (
        <>
          <p>
            Housing is typically the largest expense after tuition. On-campus
            housing (dormitories) costs between CAD 8,000 to CAD 15,000 per
            academic year, usually including utilities and internet. This option
            offers convenience and a supportive community, especially for
            first-year students.
          </p>
          <p>
            Off-campus housing costs vary widely by location. In major cities
            like Toronto and Vancouver, expect to pay CAD 1,000 to CAD 2,500 per
            month for a one-bedroom apartment, while in smaller cities, similar
            accommodations might cost CAD 700 to CAD 1,500. Sharing an apartment
            with roommates can significantly reduce costs, often cutting your
            housing expenses by 30-50%.
          </p>
          <p>
            Additional housing expenses include utilities (electricity, water,
            gas) which average CAD 100-200 monthly, internet service (CAD 50-100
            monthly), and security deposits (typically equal to one month's
            rent) when signing a lease.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Food and Dining",
      content: (
        <>
          <p>
            Food expenses vary based on your dining habits. Most universities
            offer meal plans for on-campus students, costing between CAD 3,000
            to CAD 5,000 per academic year. These plans provide convenience but
            may be more expensive than self-catering.
          </p>
          <p>
            If you're cooking for yourself, grocery expenses typically range
            from CAD 200 to CAD 400 monthly. Shopping at discount supermarkets,
            buying in bulk, and taking advantage of student discounts can help
            reduce costs. Farmers' markets often offer fresh produce at
            competitive prices.
          </p>
          <p>
            Dining out costs vary widely, from CAD 15-25 for a casual meal to
            CAD 50+ for higher-end restaurants. Fast food meals average CAD
            10-15. Many restaurants offer student discounts, and apps like
            Groupon provide deals on dining experiences. Limiting eating out to
            special occasions can significantly reduce your food budget.
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
            Transportation costs depend on your location and lifestyle. In
            cities with good public transportation systems, student transit
            passes cost approximately CAD 80-120 monthly, offering unlimited
            access to buses, subways, and light rail.
          </p>
          <p>
            If you need a car, factor in purchase costs (CAD 5,000-15,000 for a
            used car), insurance (CAD 150-300 monthly), gas (CAD 150-250
            monthly), parking fees (highly variable), and maintenance. Many
            universities discourage or restrict car ownership for first-year
            students due to limited parking.
          </p>
          <p>
            Rideshare services like Uber and Lyft are widely available, costing
            CAD 10-30 per trip depending on distance. Biking is an economical
            option in many college towns, with bike purchases ranging from CAD
            100 for used bikes to CAD 500+ for new ones, plus costs for locks,
            helmets, and maintenance.
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
            Health insurance is mandatory for international students in Canada.
            Most provinces have public health insurance plans that cover
            international students, while others require private insurance. The
            cost varies by province, ranging from CAD 600 to CAD 1,200 per year.
          </p>
          <p>
            In provinces like British Columbia, Alberta, Manitoba, Newfoundland
            and Labrador, and Saskatchewan, international students can access
            provincial health insurance plans. In other provinces like Ontario
            and Quebec, universities typically arrange mandatory health
            insurance plans for international students.
          </p>
          <p>
            Even with insurance, you may have out-of-pocket expenses for
            services not covered by your plan, such as dental care, vision care,
            and prescription medications. Many universities have on-campus
            health centers offering free or low-cost basic medical services for
            students.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Books and Academic Supplies",
      content: (
        <>
          <p>
            Textbooks and course materials can be a significant expense,
            averaging CAD 1,000-1,500 per academic year. Costs vary by field of
            study, with science, engineering, and art courses often requiring
            more expensive materials.
          </p>
          <p>
            To reduce these costs, consider purchasing used textbooks, renting
            books, using e-books, or accessing library reserves. Many
            universities have textbook exchange programs or Facebook groups
            where students buy and sell used books. Some professors also provide
            course readings online or use open educational resources.
          </p>
          <p>
            Technology requirements vary by program, but most students need a
            laptop (CAD 800-1,500) and software for their coursework. Many
            universities offer student discounts on computers and software, and
            some have laptop loan programs or computer labs with necessary
            software available for student use.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Personal Expenses and Entertainment",
      content: (
        <>
          <p>
            Personal expenses include clothing, toiletries, phone service,
            entertainment, and social activities. Monthly cell phone plans range
            from CAD 40-90 depending on data needs. Many providers offer student
            discounts or family plans that can be shared with other students.
          </p>
          <p>
            Entertainment and social activities costs vary based on your
            interests and lifestyle. Many campus events, including concerts,
            movie screenings, and cultural performances, are free or discounted
            for students. Student organizations also offer low-cost social
            activities and events.
          </p>
          <p>
            For off-campus entertainment, movie tickets cost CAD 12-16, museum
            admissions CAD 10-25 (many offer free days for students), and
            concert tickets CAD 30-100+. Taking advantage of student discounts,
            free community events, and outdoor activities can help manage
            entertainment costs while enjoying Canadian culture.
          </p>
        </>
      ),
      image: "/placeholder.svg?height=300&width=400",
    },
  ],
};

export default function CanadaCostPage() {
  return (
    <CountrySpecificPage
      country="Canada"
      slug="canada"
      flag="https://purecatamphetamine.github.io/country-flag-icons/3x2/CA.svg"
      pageType="cost"
      content={canadaCostContent}
    />
  );
}
