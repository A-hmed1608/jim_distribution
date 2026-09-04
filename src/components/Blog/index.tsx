import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-[#f6faff] dark:bg-[#141d23] py-16 md:py-20 lg:py-24 border-b border-[#141d23]/10 dark:border-white/10"
    >
      <div className="container">
        <SectionTitle
          title="ACTUALITÉS & PERSPECTIVES DU SECTEUR"
          paragraph="Analyses, actualités et réflexions sur les tendances de la distribution agroalimentaire et des produits FMCG."
          center
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
