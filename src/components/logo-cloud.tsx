import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
} from "@/components/logos";
import { Marquee } from "@/components/ui/marquee";

const LogoCloud = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10 sm:py-16 md:py-20">
      <div className="w-full px-4 sm:px-6">
        <p className="text-center font-medium text-foreground/80 text-sm sm:text-base md:text-xl tracking-[-0.01em] dark:text-white/80 max-w-2xl mx-auto">
          Plus de 2 millions d&apos;entreprises et partenaires nous font confiance
        </p>

        <div className="relative mx-auto mt-6 sm:mt-10 flex max-w-5xl items-center justify-center">
          <Marquee
            className="mask-x-from-75% [--duration:22s] [&_svg]:mr-6 sm:[&_svg]:mr-10"
            pauseOnHover
          >
            <Logo01 />
            <Logo02 />
            <Logo03 />
            <Logo04 />
            <Logo05 />
            <Logo06 />
            <Logo07 />
            <Logo08 />
          </Marquee>

          {/* Fade overlays on edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-20 md:w-28 bg-gradient-to-r from-white to-transparent dark:from-[#141d23]"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-20 md:w-28 bg-gradient-to-l from-white to-transparent dark:from-[#141d23]"></div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
