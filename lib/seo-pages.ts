import { readFileSync } from "fs";
import path from "path";

export function discoverSEOPages(): string[] {
  const pages: string[] = [];

  // Static pages
  const staticPages = [
    "home",
    "about",
    "contact",
    "services",
    "scholarships",
    "success-stories",
    "blogs",
    "events",
    "courses",
  ];

  pages.push(...staticPages);

  // Destination pages (study-in-[country])
  try {
    const destinationsPath = path.join(
      process.cwd(),
      "data",
      "destinations.json"
    );
    const destinationsData = JSON.parse(readFileSync(destinationsPath, "utf8"));

    if (destinationsData.destinations) {
      const countryPages = destinationsData.destinations.map(
        (dest: any) =>
          `study-in-${dest.country.toLowerCase().replace(/\s+/g, "-")}`
      );
      pages.push(...countryPages);
    }
  } catch (error) {
    console.error("Error reading destinations:", error);
    // Fallback destinations
    const fallbackDestinations = [
      "study-in-canada",
      "study-in-uk",
      "study-in-usa",
      "study-in-australia",
      "study-in-new-zealand",
      "study-in-ireland",
      "study-in-germany",
      "study-in-netherlands",
    ];
    pages.push(...fallbackDestinations);
  }

  return pages.filter((page, index, self) => self.indexOf(page) === index);
}

export function getPageDisplayName(pageSlug: string): string {
  if (pageSlug.startsWith("study-in-")) {
    const country = pageSlug.replace("study-in-", "").replace(/-/g, " ");
    return `Study in ${country.charAt(0).toUpperCase() + country.slice(1)}`;
  }

  return (
    pageSlug.charAt(0).toUpperCase() + pageSlug.slice(1).replace(/-/g, " ")
  );
}

export function getPageURL(pageSlug: string): string {
  if (pageSlug === "home") {
    return "/";
  }

  if (pageSlug.startsWith("study-in-")) {
    const country = pageSlug.replace("study-in-", "");
    return `/destinations/${country}`;
  }

  return `/${pageSlug}`;
}
