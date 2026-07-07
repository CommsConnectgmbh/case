import type { MetadataRoute } from "next";
import { articles } from "@/lib/ratgeber";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://case-connect.de";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/partner`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ratgeber`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...articles.map((a) => ({
      url: `${base}/ratgeber/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    { url: `${base}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/agb`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/versand`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/widerrufsbelehrung`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
