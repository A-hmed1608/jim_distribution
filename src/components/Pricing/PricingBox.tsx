import Link from "next/link";

const PricingBox = (props: {
  badge?: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  const { badge, title, subtitle, children } = props;

  return (
    <div className="w-full">
      <div className="relative z-10 bg-white dark:bg-[#1a1c1e] p-8 border border-[#141d23]/20 dark:border-white/20 transition-all duration-200 hover:border-[#0059bb]">
        {badge && (
          <span className="mb-4 inline-block font-mono text-[11px] font-semibold text-[#0059bb] dark:text-[#adc7ff] bg-[#0059bb]/10 border border-[#0059bb]/30 px-2.5 py-1 uppercase">
            {badge}
          </span>
        )}
        <h3 className="mb-3 font-display text-2xl font-bold text-[#141d23] dark:text-white uppercase tracking-tight">
          {title}
        </h3>
        <p className="font-sans text-sm text-[#414754] dark:text-white/70 mb-6">
          {subtitle}
        </p>

        <div className="mb-8 border-t border-[#141d23]/10 dark:border-white/10 pt-6">
          <Link
            href="/contact"
            className="flex w-full items-center justify-center bg-[#0059bb] hover:bg-[#0070ea] px-6 py-3.5 font-mono text-xs font-bold tracking-wider text-white uppercase transition-colors border border-[#0059bb]"
          >
            DEMANDER UN DEVIS
          </Link>
        </div>

        <div className="space-y-3 font-sans text-sm">{children}</div>
      </div>
    </div>
  );
};

export default PricingBox;
