import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jimdistribution.ma";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/_next/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
      {
        // OpenAI RAG search crawler
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
      {
        // Perplexity AI search crawler
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
      {
        // Anthropic Claude search crawler
        userAgent: "Claude-SearchBot",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
      {
        // Apple Intelligence crawler
        userAgent: "Applebot",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
