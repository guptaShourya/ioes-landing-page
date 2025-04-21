import { CountrySpecificPage } from "@/components/country-specific-page";

const usaCostContent = {
  title: "Understanding the Cost of Living in the United States",
  description:
    "A comprehensive guide to budgeting and managing expenses as an international student in the USA.",
  sections: [
    {
      title: "Overview of Expenses",
      content: (
        <>
          <p>
            The cost of living in the United States varies significantly
            depending on the location, with major cities like New York, San
            Francisco, and Boston being considerably more expensive than smaller
            towns and rural areas. As an international student, your main
            expenses will include tuition fees, accommodation, food,
            transportation, health insurance, books and supplies, and personal
            expenses.
          </p>
          <p>
            On average, international students should budget between $20,000 to
            $40,000 per year for living expenses (excluding tuition), with
            higher costs in major metropolitan areas and lower costs in smaller
            cities and rural regions.
          </p>
          <p>
            It's important to create a detailed budget before arriving in the US
            and to monitor your expenses regularly. Many universities offer
            financial planning resources and workshops specifically for
            international students to help manage costs effectively.
          </p>
        </>
      ),
      image: "/programs/budget.webp",
    },
    {
      title: "Accommodation Costs",
      content: (
        <>
          <p>
            Housing is typically the largest expense after tuition. On-campus
            housing (dormitories) costs between $10,000 to $15,000 per academic
            year, usually including utilities and internet. This option offers
            convenience and a supportive community, especially for first-year
            students.
          </p>
          <p>
            Off-campus housing costs vary widely by location. In major cities,
            expect to pay $1,000 to $3,000 per month for a one-bedroom
            apartment, while in smaller towns, similar accommodations might cost
            $600 to $1,200. Sharing an apartment with roommates can
            significantly reduce costs, often cutting your housing expenses by
            30-50%.
          </p>
          <p>
            Additional housing expenses include utilities (electricity, water,
            gas) which average $100-$200 monthly, internet service ($40-$80
            monthly), and security deposits (typically equal to one month's
            rent) when signing a lease.
          </p>
        </>
      ),
      image: "/programs/accommodation.webp",
    },
    {
      title: "Food and Dining",
      content: (
        <>
          <p>
            Food expenses vary based on your dining habits. Most universities
            offer meal plans for on-campus students, costing between $3,000 to
            $6,000 per academic year. These plans provide convenience but may be
            more expensive than self-catering.
          </p>
          <p>
            If you're cooking for yourself, grocery expenses typically range
            from $200 to $400 monthly. Shopping at discount supermarkets, buying
            in bulk, and taking advantage of student discounts can help reduce
            costs. Farmers' markets often offer fresh produce at competitive
            prices.
          </p>
          <p>
            Dining out costs vary widely, from $15-$25 for a casual meal to $50+
            for higher-end restaurants. Fast food meals average $8-$12. Many
            restaurants offer student discounts, and apps like Groupon provide
            deals on dining experiences. Limiting eating out to special
            occasions can significantly reduce your food budget.
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
            Transportation costs depend on your location and lifestyle. In
            cities with good public transportation systems, student transit
            passes cost approximately $60-$120 monthly, offering unlimited
            access to buses, subways, and light rail.
          </p>
          <p>
            If you need a car, factor in purchase costs ($5,000-$15,000 for a
            used car), insurance ($100-$300 monthly), gas ($100-$200 monthly),
            parking fees (highly variable), and maintenance. Many universities
            discourage or restrict car ownership for first-year students due to
            limited parking.
          </p>
          <p>
            Rideshare services like Uber and Lyft are widely available, costing
            $10-$30 per trip depending on distance. Biking is an economical
            option in many college towns, with bike purchases ranging from $100
            for used bikes to $500+ for new ones, plus costs for locks, helmets,
            and maintenance.
          </p>
        </>
      ),
      image: "/programs/transportation.webp",
    },
    {
      title: "Health Insurance and Medical Costs",
      content: (
        <>
          <p>
            Health insurance is mandatory for international students in the US.
            University-sponsored health insurance plans typically cost
            $1,500-$2,500 per year. These plans usually cover most on-campus
            health services, emergency care, hospitalization, and prescription
            medications.
          </p>
          <p>
            Even with insurance, you may have out-of-pocket expenses such as
            co-pays for doctor visits ($20-$50), prescription medications, and
            services not covered by your plan. It's important to understand your
            insurance coverage before seeking medical care.
          </p>
          <p>
            Many universities have on-campus health centers offering free or
            low-cost basic medical services, counseling, and health education
            for students. Taking advantage of these resources can help manage
            healthcare costs effectively.
          </p>
        </>
      ),
      image: "/programs/insurance.webp",
    },
    {
      title: "Books and Academic Supplies",
      content: (
        <>
          <p>
            Textbooks and course materials can be a significant expense,
            averaging $1,000-$1,500 per academic year. Costs vary by field of
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
            laptop ($500-$1,500) and software for their coursework. Many
            universities offer student discounts on computers and software, and
            some have laptop loan programs or computer labs with necessary
            software available for student use.
          </p>
        </>
      ),
      image: "/programs/books.webp",
    },
    {
      title: "Personal Expenses and Entertainment",
      content: (
        <>
          <p>
            Personal expenses include clothing, toiletries, phone service,
            entertainment, and social activities. Monthly cell phone plans range
            from $30-$80 depending on data needs. Many providers offer student
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
            For off-campus entertainment, movie tickets cost $10-$15, museum
            admissions $10-$25 (many offer free days for students), and concert
            tickets $30-$100+. Taking advantage of student discounts, free
            community events, and outdoor activities can help manage
            entertainment costs while enjoying American culture.
          </p>
        </>
      ),
      image: "/programs/entertainment.webp",
    },
  ],
};

export default function USACostPage() {
  return (
    <CountrySpecificPage
      country="United States"
      slug="usa"
      flag="https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
      pageType="cost"
      content={usaCostContent}
    />
  );
}
