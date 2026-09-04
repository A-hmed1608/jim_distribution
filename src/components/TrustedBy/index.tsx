"use client";

import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import Image from "next/image";
import React from "react";

interface BrandItem {
  name: string;
  image: string;
  isTinted?: boolean;
}

const brands: BrandItem[] = [
  // Row 1
  {
    name: "Gullón",
    image: "/images/brands/real/gullon-removebg-preview.png",
    isTinted: true,
  },
  {
    name: "Don Simón",
    image: "/images/brands/real/Logo_de_Don_Simón.gif",
    isTinted: false,
  },
  {
    name: "Puleva",
    image: "/images/brands/real/puleva-removebg-preview.png",
    isTinted: true,
  },
  {
    name: "Grupo Calvo",
    image: "/images/brands/real/Grupo_Calvo-Logo.wine.svg",
    isTinted: false,
  },
  // Row 2
  {
    name: "Pastas Gallo",
    image: "/images/brands/real/gallo-logo-s-removebg-preview.png",
    isTinted: false,
  },
  {
    name: "Royal",
    image: "/images/brands/real/royal-2-logo-svg-vector.svg",
    isTinted: false,
  },
  {
    name: "Piacelli",
    image: "/images/brands/real/Piacelli-removebg-preview.png",
    isTinted: false,
  },
  {
    name: "Pato Real",
    image: "/images/brands/real/Pato-Real-removebg-preview.png",
    isTinted: true,
  },
  // Row 3
  {
    name: "AYALA",
    image: "/images/brands/real/AYALA-removebg-preview.png",
    isTinted: true,
  },
  {
    name: "Eliges",
    image: "/images/brands/real/eliges-removebg-preview.png",
    isTinted: false,
  },
  {
    name: "Lagarto",
    image: "/images/brands/real/lagarto-png-42.webp",
    isTinted: true,
  },
  {
    name: "Swiss Distribution",
    image: "/images/brands/real/swiss_distribution_ma_logo-removebg-preview.png",
    isTinted: false,
  },
];

export default function TrustedBy() {
  return (
    <section className="relative py-24 md:py-28 bg-[#fdfefe] dark:bg-[#11161b] overflow-hidden border-t border-b border-[#141d23]/10 dark:border-white/10">
      {/* Magic UI Interactive Grid Background with colorful glow */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none">
        <InteractiveGridPattern
          width={48}
          height={48}
          squares={[30, 20]}
          className="[mask-image:radial-gradient(ellipse_at_center,white,transparent_85%)]"
        />
      </div>

      {/* Subtle colorful ambient blur circles */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-[#0059bb]/10 blur-[100px] dark:bg-[#0059bb]/20" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-[#00c853]/10 blur-[100px] dark:bg-[#00c853]/15" />

      <div className="container relative z-10">
        {/* Header Title styled like the reference */}
        <div className="mx-auto max-w-2xl text-center mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#141d23] dark:text-white font-display">
            Marques avec lesquelles nous{" "}
            <span className="font-bold text-[#0059bb] dark:text-[#adc7ff]">
              collaborons.
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#414754]/80 dark:text-white/60 font-sans">
            Partenaire stratégique de distribution pour les leaders de l&apos;agroalimentaire &amp; FMCG.
          </p>
        </div>

        {/* 4-Column Architectural Grid with + intersection crosses matching screenshot */}
        <div className="relative mx-auto max-w-5xl border border-[#141d23]/15 dark:border-white/15 bg-white dark:bg-[#141d23] shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {brands.map((brand, index) => {
              const isDonSimon = brand.name === "Don Simón";

              return (
                <div
                  key={index}
                  className={`group relative flex h-36 sm:h-40 md:h-44 items-center justify-center p-4 sm:p-5 md:p-6 border-b border-r border-[#141d23]/15 dark:border-white/15 transition-all duration-200 hover:z-10 hover:shadow-md ${
                    brand.isTinted
                      ? "bg-[#f4f6f9] dark:bg-white/[0.03]"
                      : "bg-white dark:bg-[#141d23]"
                  }`}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      width={180}
                      height={80}
                      className={`w-auto object-contain transition-all duration-300 filter grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 ${
                        isDonSimon
                          ? "max-h-12 sm:max-h-13 md:max-h-14"
                          : "max-h-16 sm:max-h-20 md:max-h-24"
                      }`}
                      unoptimized={brand.image.endsWith(".gif")}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Plus '+' intersection markers on Desktop (between columns 1|2, 2|3, 3|4 and rows 1|2, 2|3) */}
          <div className="hidden md:block">
            {/* Row 1/2 dividers */}
            <span className="absolute top-[33.33%] left-[25%] -translate-x-1/2 -translate-y-1/2 font-mono text-base font-light text-[#141d23]/50 dark:text-white/50 select-none z-20 pointer-events-none">
              +
            </span>
            <span className="absolute top-[33.33%] left-[50%] -translate-x-1/2 -translate-y-1/2 font-mono text-base font-light text-[#141d23]/50 dark:text-white/50 select-none z-20 pointer-events-none">
              +
            </span>
            <span className="absolute top-[33.33%] left-[75%] -translate-x-1/2 -translate-y-1/2 font-mono text-base font-light text-[#141d23]/50 dark:text-white/50 select-none z-20 pointer-events-none">
              +
            </span>

            {/* Row 2/3 dividers */}
            <span className="absolute top-[66.66%] left-[25%] -translate-x-1/2 -translate-y-1/2 font-mono text-base font-light text-[#141d23]/50 dark:text-white/50 select-none z-20 pointer-events-none">
              +
            </span>
            <span className="absolute top-[66.66%] left-[50%] -translate-x-1/2 -translate-y-1/2 font-mono text-base font-light text-[#141d23]/50 dark:text-white/50 select-none z-20 pointer-events-none">
              +
            </span>
            <span className="absolute top-[66.66%] left-[75%] -translate-x-1/2 -translate-y-1/2 font-mono text-base font-light text-[#141d23]/50 dark:text-white/50 select-none z-20 pointer-events-none">
              +
            </span>
          </div>

          {/* Mobile Plus '+' intersection marker */}
          <div className="block md:hidden">
            {[1, 2, 3, 4, 5].map((row) => (
              <span
                key={row}
                style={{ top: `${(row / 6) * 100}%` }}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-base font-light text-[#141d23]/50 dark:text-white/50 select-none z-20 pointer-events-none"
              >
                +
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
