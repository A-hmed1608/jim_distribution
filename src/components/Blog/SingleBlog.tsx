import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate, slug } = blog;
  const postUrl = slug ? `/blog/${slug}` : "/blog-details";
  const displayTag = tags && tags.length > 0 ? tags[0] : "Actualités";
  const displayImage = image || "/images/blog/blog-01.jpg";

  return (
    <>
      <div className="group border border-[#141d23]/15 dark:border-white/15 bg-white dark:bg-[#1a1c1e] transition-all duration-200 hover:border-[#0059bb]">
        <Link
          href={postUrl}
          className="relative block aspect-37/22 w-full overflow-hidden border-b border-[#141d23]/10 dark:border-white/10"
        >
          <span className="absolute top-4 right-4 z-20 inline-flex items-center justify-center font-mono text-[10px] font-bold text-white bg-[#0059bb] px-3 py-1 uppercase border border-[#0059bb]">
            [ {displayTag} ]
          </span>
          <Image src={displayImage} alt={title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
        </Link>
        <div className="p-6">
          <h3>
            <Link
              href={postUrl}
              className="mb-3 block font-display text-lg font-bold text-[#141d23] dark:text-white hover:text-[#0059bb] dark:hover:text-[#0059bb] transition-colors uppercase tracking-tight"
            >
              {title}
            </Link>
          </h3>
          <p className="font-sans text-xs text-[#414754] dark:text-white/70 mb-6 border-b border-[#141d23]/10 dark:border-white/10 pb-4 leading-relaxed line-clamp-3">
            {paragraph}
          </p>
          <div className="flex items-center justify-between font-mono text-xs text-[#414754] dark:text-white/60">
            <div>
              <span className="text-[#0059bb] dark:text-[#adc7ff] font-bold">{author?.name || "JIM DISTRIBUTION"}</span>
            </div>
            <div>
              <span>{publishDate}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
