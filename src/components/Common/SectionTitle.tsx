const SectionTitle = ({
  title,
  paragraph,
  width = "640px",
  center,
  mb = "60px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 font-display text-3xl font-bold leading-tight tracking-tight text-[#141d23] dark:text-white sm:text-4xl md:text-4xl uppercase">
          {title}
        </h2>
        <p className="font-sans text-base leading-relaxed text-[#414754] dark:text-white/80 md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
