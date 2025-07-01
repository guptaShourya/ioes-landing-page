/** @type {import('next').NextConfig} */

const countryRoutes = [
  "usa",
  "uk",
  "canada",
  "australia",
  "new-zealand",
  "ireland",
];

function generateRewrites() {
  return countryRoutes.flatMap((country) => [
    {
      source: `/study-in-${country}`,
      destination: `/destinations/${country}`,
    },
    {
      source: `/study-in-${country}/:path*`,
      destination: `/destinations/${country}/:path*`,
    },
  ]);
}

function generateRedirects() {
  return countryRoutes.flatMap((country) => [
    {
      source: `/destinations/${country}`,
      destination: `/study-in-${country}`,
      permanent: true,
    },
    {
      source: `/destinations/${country}/:path*`,
      destination: `/study-in-${country}/:path*`,
      permanent: true,
    },
  ]);
}

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      // API proxy to avoid CORS issues
      {
        source: "/api/courses/:path*",
        destination: "http://127.0.0.1:8000/courses/:path*",
      },
      // Existing country routes
      ...generateRewrites(),
    ];
  },
  async redirects() {
    return generateRedirects();
  },
};

export default nextConfig;
