import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="border border-[#141d23]/15 dark:border-white/15 bg-white dark:bg-[#1a1c1e] p-8 h-full transition-all duration-200 hover:border-[#0059bb]">
        <div className="bg-[#0059bb]/10 text-[#0059bb] dark:text-[#adc7ff] mb-6 flex h-14 w-14 items-center justify-center border border-[#0059bb]/30">
          {icon}
        </div>
        <h3 className="mb-3 font-display text-xl font-bold tracking-tight text-[#141d23] dark:text-white uppercase">
          {title}
        </h3>
        <p className="font-sans text-sm leading-relaxed text-[#414754] dark:text-white/70">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
