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
          <span className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 inline-flex items-center justify-center font-mono text-[9px] sm:text-[10px] font-bold text-white bg-[#0059bb] px-2 sm:px-3 py-0.5 sm:py-1 uppercase border border-[#0059bb]">
            [ {displayTag} ]
          </span>
          <Image src={displayImage} alt={title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
        </Link>
        <div className="p-3 sm:p-6">
          <h3>
            <Link
              href={postUrl}
              className="mb-2 sm:mb-3 block font-display text-xs sm:text-lg font-bold text-[#141d23] dark:text-white hover:text-[#0059bb] dark:hover:text-[#0059bb] transition-colors uppercase tracking-tight line-clamp-2"
            >
              {title}
            </Link>
          </h3>
          <p className="font-sans text-[11px] sm:text-xs text-[#414754] dark:text-white/70 mb-3 sm:mb-6 border-b border-[#141d23]/10 dark:border-white/10 pb-2 sm:pb-4 leading-relaxed line-clamp-2 sm:line-clamp-3">
            {paragraph}
          </p>
          <div className="flex items-center justify-between font-mono text-[10px] sm:text-xs text-[#414754] dark:text-white/60">
            <div className="truncate mr-2">
              <span className="text-[#0059bb] dark:text-[#adc7ff] font-bold truncate">{author?.name || "JIM"}</span>
            </div>
            <div className="shrink-0">
              <span>{publishDate}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
