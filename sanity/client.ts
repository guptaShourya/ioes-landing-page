import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "k4064r2q",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Set to false for the latest data
  token: process.env.SANITY_API_TOKEN, // Optional: add token for authenticated requests
});

// Separate client for client-side usage (if needed)
export const clientSide = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "k4064r2q",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
  // Don't include token for client-side usage
});
