import { MetadataRoute } from "next";

const BASE = "https://wordbit.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const tools = [
    "/word-counter",
    "/case-converter",
    "/lorem-ipsum",
    "/character-counter",
    "/text-repeater",
    "/remove-duplicates",
  ];

  const pages = ["/about", "/privacy-policy", "/terms"];

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ...tools.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...pages.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
