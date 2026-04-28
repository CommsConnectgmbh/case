import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://case-connect.de";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/agb`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/versand`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/widerrufsbelehrung`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
