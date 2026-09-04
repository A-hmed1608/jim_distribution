const checkIcon = (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="square" strokeLinejoin="miter" d="M2 6l3 3 5-5" />
  </svg>
);

const OfferList = ({
  text,
  status,
}: {
  text: string;
  status: "active" | "inactive";
}) => {
  return (
    <div className="flex items-start gap-3 py-1 border-b border-[#141d23]/5 dark:border-white/5 last:border-0">
      <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border ${
        status === "active"
          ? "border-[#0059bb] bg-[#0059bb] text-white"
          : "border-[#717786]/40 bg-transparent text-transparent"
      }`}>
        {checkIcon}
      </span>
      <p className="font-sans text-xs font-medium text-[#141d23] dark:text-white/80">
        {text}
      </p>
    </div>
  );
};

export default OfferList;
