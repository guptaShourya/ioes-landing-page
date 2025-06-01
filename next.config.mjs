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
    return generateRewrites();
  },
  async redirects() {
    return generateRedirects();
  },
};

export default nextConfig;
