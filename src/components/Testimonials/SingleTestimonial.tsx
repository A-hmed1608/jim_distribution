import { Testimonial } from "@/types/testimonial";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, content, designation } = testimonial;

  return (
    <div className="w-full">
      <div className="border border-[#141d23]/15 dark:border-white/15 bg-white dark:bg-[#1a1c1e] p-8 transition-all duration-200 hover:border-[#0059bb]">
        <span className="mb-4 inline-block font-mono text-[10px] font-semibold text-[#0059bb] dark:text-[#adc7ff] bg-[#0059bb]/10 border border-[#0059bb]/30 px-2 py-0.5 uppercase">
          [ RETOUR PARTENAIRE ]
        </span>
        <p className="font-sans text-sm leading-relaxed text-[#414754] dark:text-white/80 mb-6 italic">
          &ldquo;{content}&rdquo;
        </p>
        <div className="border-t border-[#141d23]/10 dark:border-white/10 pt-4">
          <h3 className="font-display text-base font-bold text-[#141d23] dark:text-white uppercase tracking-tight">
            {name}
          </h3>
          <p className="font-mono text-xs text-[#0059bb] dark:text-[#adc7ff]">
            {designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
