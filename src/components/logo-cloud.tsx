"use client";

import React from "react";
import { LogoCloud as LogoCloudSlider, Logo } from "@/components/ui/logo-cloud-4";
import { cn } from "@/lib/utils";

const logos: Logo[] = [
  {
    src: "https://cdn.21st.dev/assets/mirror/bd/bdf5f3ae72bcfda892a686c03b7932985c694e9a9828643c980601bbc9e53cb4.svg",
    alt: "Partenaire 1",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/31/319eeae853dd1af99d442b6c16b6c38dc52a66a719f8e502c65f85d26255cbd3.svg",
    alt: "Partenaire 2",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/2b/2bcdd4124223e3bf8e66bc08ce0ac32a6cc42ffe3584bbecfd377847176a188d.svg",
    alt: "Partenaire 3",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/fc/fc7b090ebcfc468d24a1dc482b2db1fcbfd99ca14568552a30ce553d6dda7fcb.svg",
    alt: "Partenaire 4",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/56/5624b7c243ac8d60e848fb5ea222ec932c1600df54a2762238b37498372fb0c8.svg",
    alt: "Partenaire 5",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/90/90f01a9537335666282ae5acc80bd4305f86d085a92d60904c3aa3ccc4414570.svg",
    alt: "Partenaire 6",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/e8/e8514b1206f79e1abdafcc1d2632393cc7cfbcbbe25426ac5143b17b184b56b8.svg",
    alt: "Partenaire 7",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/96/96517bce3574d648280ff639d01d9889f354b488b3f826db5df746d730232a0c.svg",
    alt: "Partenaire 8",
  },
];

export const LogoCloud = () => {
  return (
    <section className="relative w-full py-14 sm:py-20 overflow-hidden bg-[#f6faff] dark:bg-[#141d23] border-b border-[#141d23]/10 dark:border-white/10">
      <div
        aria-hidden="true"
        className={cn(
          "-top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] w-[120vmin] rounded-b-full",
          "bg-[radial-gradient(ellipse_at_center,rgba(0,89,187,0.08),transparent_50%)]",
          "blur-[40px]"
        )}
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="w-full text-center mb-8">
          <h2 className="mb-2">
            <span className="block font-sans font-medium text-xs sm:text-sm uppercase tracking-widest text-[#0059bb] dark:text-[#adc7ff] mb-2">
              Réseau de Confiance
            </span>
            <span className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#141d23] dark:text-white uppercase tracking-tight">
              Ils nous font confiance dans le Nord du Maroc
            </span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#414754] dark:text-white/70 max-w-xl mx-auto mt-2">
            Grandes surfaces, grossistes régionaux et marques de grande consommation partenaires de notre chaîne logistique.
          </p>
        </div>

        <LogoCloudSlider logos={logos} />
      </div>
    </section>
  );
};

export default LogoCloud;
