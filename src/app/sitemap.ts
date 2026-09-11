import { MetadataRoute } from "next";
import blogData from "@/components/Blog/blogData";
import { getPayloadClient } from "@/lib/payload";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jimdistribution.ma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: new Date("2026-09-11"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date("2026-09-11"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date("2026-09-11"),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date("2026-09-11"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  let blogRoutes: MetadataRoute.Sitemap = [];

  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "posts",
      where: {
        status: {
          equals: "published",
        },
      },
      limit: 100,
    });

    if (result.docs && result.docs.length > 0) {
      blogRoutes = result.docs.map((post: any) => ({
        url: `${BASE_URL}/blog/${post.slug || post.id}`,
        lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(post.publishedAt || "2026-09-11"),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));
    }
  } catch (err) {
    console.error("Error fetching blog posts for sitemap:", err);
  }

  // Fallback to static mock blog slugs if CMS returned 0
  if (blogRoutes.length === 0) {
    blogRoutes = blogData.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug || post.id}`,
      lastModified: new Date("2026-09-11"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  }

  return [...staticRoutes, ...blogRoutes];
}
