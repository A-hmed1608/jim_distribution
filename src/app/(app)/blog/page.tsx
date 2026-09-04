import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getPayloadClient } from "@/lib/payload";
import { Blog as BlogType } from "@/types/blog";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Actualités & Blog | JIM DISTRIBUTION - Distribution Agroalimentaire",
  description:
    "Suivez les actualités, analyses et tendances du marché FMCG et de la distribution agroalimentaire au Maroc par JIM DISTRIBUTION.",
};

const Blog = async () => {
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
    <>
      <Breadcrumb
        pageName="Actualités & Perspectives"
        description="Analyses, actualités et réflexions sur les tendances de la distribution agroalimentaire et des produits FMCG au Maroc."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {displayPosts.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mb-8"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
