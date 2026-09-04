import Breadcrumb from "@/components/Common/Breadcrumb";
import RichText from "@/components/Blog/RichText";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import { getPayloadClient } from "@/lib/payload";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "posts",
      where: {
        slug: {
          equals: slug,
        },
        status: {
          equals: "published",
        },
      },
      limit: 1,
    });

    const post = result.docs[0];
    if (post) {
      return {
        title: post.metaTitle || `${post.title} | JIM DISTRIBUTION`,
        description: post.metaDescription || post.excerpt || "Article de JIM DISTRIBUTION",
        openGraph: {
          title: post.metaTitle || post.title,
          description: post.metaDescription || post.excerpt || "",
        },
      };
    }
  } catch (e) {
    // fallback
  }

  return {
    title: "Article Blog | JIM DISTRIBUTION",
    description: "Actualités et perspectives du secteur de la distribution agroalimentaire",
  };
}

const BlogPostPage = async ({ params }: Props) => {
  const { slug } = await params;
  const payload = await getPayloadClient();

  const result = await payload.find({
    collection: "posts",
    where: {
      slug: {
        equals: slug,
      },
      status: {
        equals: "published",
      },
    },
    limit: 1,
    depth: 2,
  });

  const post: any = result.docs[0];

  if (!post) {
    notFound();
  }

  let imageUrl = "/images/blog/blog-details-02.jpg";
  if (post.featuredImage) {
    if (typeof post.featuredImage === "object" && post.featuredImage.url) {
      imageUrl = post.featuredImage.url;
    } else if (typeof post.featuredImage === "string") {
      imageUrl = post.featuredImage;
    }
  }

  const tagList = Array.isArray(post.tags)
    ? post.tags.map((t: any) => (typeof t === "string" ? t : t.tag)).filter(Boolean)
    : [];

  let categoryName = "Actualités";
  if (post.category && typeof post.category === "object" && post.category.name) {
    categoryName = post.category.name;
  }

  const tags = tagList.length > 0 ? tagList : [categoryName];

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Récemment";

  return (
    <>
      <Breadcrumb
        pageName={post.title}
        description={post.excerpt || "Actualités et perspectives de JIM DISTRIBUTION."}
      />

      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="mb-8 font-display text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight lg:text-5xl dark:text-white">
                  {post.title}
                </h1>

                <div className="border-body-color/10 mb-10 flex flex-wrap items-center justify-between border-b pb-4 dark:border-white/10">
                  <div className="flex flex-wrap items-center">
                    <div className="mr-10 mb-5 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#0059bb]">
                          <Image
                            src="/images/blog/author-02.png"
                            alt="author"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <span className="text-body-color dark:text-white/80 mb-1 text-base font-medium">
                          Par <span className="text-[#0059bb] dark:text-[#adc7ff] font-bold">{post.authorName || "JIM DISTRIBUTION"}</span>
                        </span>
                      </div>
                    </div>

                    <div className="mb-5 flex items-center">
                      <p className="text-body-color dark:text-white/70 mr-5 flex items-center text-base font-medium">
                        <span className="mr-3">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            className="fill-current text-[#0059bb]"
                          >
                            <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
                            <path d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697Z" />
                          </svg>
                        </span>
                        {date}
                      </p>
                    </div>
                  </div>

                  <div className="mb-5">
                    <span className="bg-[#0059bb] inline-flex items-center justify-center rounded-full px-4 py-1.5 text-xs font-semibold text-white uppercase tracking-wider">
                      {categoryName}
                    </span>
                  </div>
                </div>

                <div>
                  {post.excerpt && (
                    <p className="text-body-color dark:text-white/90 mb-10 text-base leading-relaxed font-semibold sm:text-lg sm:leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}

                  <div className="mb-10 w-full overflow-hidden rounded-md border border-[#141d23]/10 dark:border-white/10">
                    <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                      <Image
                        src={imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  {/* Rich Text Content */}
                  <div className="mb-12">
                    <RichText content={post.content} />
                  </div>

                  {/* Tags and Share */}
                  <div className="items-center justify-between border-t border-[#141d23]/10 dark:border-white/10 pt-8 sm:flex">
                    <div className="mb-5">
                      <h4 className="text-body-color dark:text-white/80 mb-3 text-sm font-semibold">
                        Tags associés :
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag: string, i: number) => (
                          <TagButton key={i} text={tag} />
                        ))}
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="text-body-color dark:text-white/80 mb-3 text-sm font-semibold sm:text-right">
                        Partager cet article :
                      </h5>
                      <div className="flex items-center sm:justify-end">
                        <SharePost />
                      </div>
                    </div>
                  </div>

                  {/* Back to Blog */}
                  <div className="mt-8">
                    <Link
                      href="/blog"
                      className="inline-flex items-center text-sm font-semibold text-[#0059bb] hover:underline"
                    >
                      &larr; Retour à la liste des articles
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;
