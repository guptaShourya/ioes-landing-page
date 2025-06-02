import { usePathname } from "next/navigation";

export function useSEO() {
  const pathname = usePathname();

  // Helper function to determine page key from pathname
  const getPageKey = (path: string): string | undefined => {
    if (path === "/") return "home";

    const segments = path.split("/").filter(Boolean);
    if (segments.length === 0) return "home";

    // Handle nested routes
    if (segments[0] === "services" && segments[1]) {
      return `services-${segments[1]}`;
    }

    if (segments[0] === "scholarships" && segments[1]) {
      return `scholarships-${segments[1]}`;
    }

    if (segments[0] === "destinations" && segments[1]) {
      return `destinations-${segments[1]}`;
    }

    return segments[0];
  };

  // Helper function to generate breadcrumb structured data
  const generateBreadcrumbStructuredData = (path: string) => {
    const segments = path.split("/").filter(Boolean);
    if (segments.length === 0) return null;

    const breadcrumbItems = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://ioes.in",
      },
    ];

    let currentPath = "";
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      breadcrumbItems.push({
        "@type": "ListItem",
        position: index + 2,
        name:
          segment.charAt(0).toUpperCase() + segment.slice(1).replace("-", " "),
        item: `https://ioes.in${currentPath}`,
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    };
  };

  return {
    pathname,
    pageKey: getPageKey(pathname),
    generateBreadcrumbStructuredData: () =>
      generateBreadcrumbStructuredData(pathname),
  };
}
