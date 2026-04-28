import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api", "/success"],
      },
    ],
    sitemap: "https://case-connect.de/sitemap.xml",
    host: "https://case-connect.de",
  };
}
