import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#f6faff] py-16 dark:bg-[#141d23] md:py-28">
      <div className="flex flex-col items-center justify-center px-6">
        <p className="text-center font-medium text-[#141d23]/80 dark:text-white/80 text-xl tracking-[-0.01em]">
          Plus de 2,2 millions d&apos;entreprises dans le monde nous font déjà confiance
        </p>

        <div className="mt-10 flex max-w-5xl items-center justify-center">
          <Marquee
            pauseOnHover
            className="mask-x-from-75% [--duration:20s]"
          >
            {brandsData.map((brand) => (
              <div
                key={brand.id}
                className="flex h-16 items-center justify-center px-6"
              >
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={140}
                  height={60}
                  className="h-16 w-auto object-contain"
                  unoptimized={brand.image.endsWith(".gif")}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Gradient fades on left and right edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#f6faff] to-transparent dark:from-[#141d23]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#f6faff] to-transparent dark:from-[#141d23]"></div>
    </section>
  );
};

export default Brands;
