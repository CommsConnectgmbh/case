import type { MetadataRoute } from "next";
import { articles } from "@/lib/ratgeber";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://case-connect.de";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/partner`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ratgeber`, changeFrequency: "weekly", priority: 0.7 },
    ...articles.map((a) => ({
      url: `${base}/ratgeber/${a.slug}`,
      lastModified: a.dateModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    { url: `${base}/impressum`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/datenschutz`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/agb`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/versand`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/widerrufsbelehrung`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/widerruf`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/barrierefreiheit`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
