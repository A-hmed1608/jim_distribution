import BlogGrid from "@/components/blog";
import blogData from "@/components/Blog/blogData";
import { getPayloadClient } from "@/lib/payload";
import { Blog as BlogType } from "@/types/blog";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Actualités & Blog | JIM DISTRIBUTION - Distribution Agroalimentaire",
  description:
    "Suivez les actualités, analyses et tendances du marché FMCG et de la distribution agroalimentaire au Maroc par JIM DISTRIBUTION.",
};

const BlogPage = async () => {
  let posts: BlogType[] = [];

  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "posts",
      where: {
        status: {
          equals: "published",
        },
      },
      sort: "-publishedAt",
      depth: 2,
    });

    if (result.docs && result.docs.length > 0) {
      posts = result.docs.map((doc: any) => {
        let imageUrl = "/images/blog/blog-01.jpg";
        if (doc.featuredImage) {
          if (typeof doc.featuredImage === "object" && doc.featuredImage.url) {
            imageUrl = doc.featuredImage.url;
          } else if (typeof doc.featuredImage === "string") {
            imageUrl = doc.featuredImage;
          }
        }

        const tagList = Array.isArray(doc.tags)
          ? doc.tags.map((t: any) => (typeof t === "string" ? t : t.tag)).filter(Boolean)
          : [];

        let categoryName = "Actualités";
        if (doc.category && typeof doc.category === "object" && doc.category.name) {
          categoryName = doc.category.name;
        }

        const tags = tagList.length > 0 ? tagList : [categoryName];

        const date = doc.publishedAt
          ? new Date(doc.publishedAt).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })
          : "Récemment";

        return {
          id: doc.id,
          slug: doc.slug,
          title: doc.title,
          paragraph: doc.excerpt || "",
          image: imageUrl,
          author: {
            name: doc.authorName || "Équipe JIM DISTRIBUTION",
            image: "/images/blog/author-02.png",
            designation: doc.authorDesignation || "Direction Commerciale",
          },
          tags: tags,
          publishDate: date,
        };
      });
    }
  } catch (err) {
    console.error("Error fetching posts from Payload:", err);
  }

  // Fallback to existing mock data if no posts exist in CMS yet
  const displayPosts = posts.length > 0 ? posts : blogData;

  return (
    <div className="pt-28 pb-24 md:pt-36 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <BlogGrid posts={displayPosts} />
      </div>
    </div>
  );
};

export default BlogPage;
