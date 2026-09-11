"use client";

import React from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { cn } from "@/lib/utils";

export type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ logos, className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-6xl xl:max-w-7xl bg-gradient-to-r from-[#0059bb]/10 via-transparent to-[#0059bb]/10 dark:from-[#0059bb]/20 dark:via-transparent dark:to-[#0059bb]/20 py-8 md:border-x border-[#0059bb]/20 dark:border-[#0059bb]/30 rounded-2xl overflow-hidden shadow-sm shadow-[#0059bb]/5",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-[#0059bb]/20 dark:border-[#0059bb]/30" />

      <InfiniteSlider gap={42} reverse speed={45} speedOnHover={15}>
        {logos.map((logo) => (
          <div
            key={`logo-${logo.alt}`}
            className="flex items-center justify-center px-4 py-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <img
              alt={logo.alt}
              className="pointer-events-none h-6 sm:h-7 select-none object-contain dark:brightness-0 dark:invert"
              height="auto"
              loading="lazy"
              src={logo.src}
              width="auto"
            />
          </div>
        ))}
      </InfiniteSlider>

      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 left-0 h-full w-[120px] sm:w-[160px] z-10"
        direction="left"
      />
      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 right-0 h-full w-[120px] sm:w-[160px] z-10"
        direction="right"
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-[#0059bb]/20 dark:border-[#0059bb]/30" />
    </div>
  );
}

export default LogoCloud;
