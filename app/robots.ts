import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api", "/success", "/start"],
      },
    ],
    sitemap: "https://case-connect.de/sitemap.xml",
    host: "https://case-connect.de",
  };
}
