import Link from "next/link";

const Breadcrumb = ({
  pageName,
  description,
}: {
  pageName: string;
  description: string;
}) => {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-[#f6faff] dark:bg-[#141d23] pt-32 lg:pt-[160px] pb-10 border-b border-[#141d23]/10 dark:border-white/10">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-6 max-w-[570px] md:mb-0 lg:mb-0">
                <h1 className="mb-3 font-display text-3xl font-bold uppercase tracking-tight text-[#141d23] dark:text-white sm:text-4xl">
                  {pageName}
                </h1>
                <p className="font-sans text-sm leading-relaxed text-[#414754] dark:text-white/80">
                  {description}
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-4/12 lg:w-5/12">
              <div className="text-start md:text-end">
                <ul className="inline-flex items-center gap-2 font-mono text-xs uppercase">
                  <li>
                    <Link
                      href="/"
                      className="text-[#414754] hover:text-[#0059bb] dark:text-white/70 dark:hover:text-white"
                    >
                      ACCUEIL
                    </Link>
                  </li>
                  <li className="text-[#141d23]/40 dark:text-white/40">/</li>
                  <li className="text-[#0059bb] dark:text-[#adc7ff] font-semibold">
                    {pageName}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
