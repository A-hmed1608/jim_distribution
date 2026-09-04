"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import SectionTitle from "./Common/SectionTitle";

const CTA = () => {
  return (
    <section className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24">
      {/* 1. Centered Section Title at Top */}
      <div className="container px-4">
        <SectionTitle
          title="COLLABORONS ENSEMBLE"
          paragraph="Rejoignez notre réseau de partenaires et développez la présence de vos marques agroalimentaires sur tout le territoire national."
          center
          mb="36px"
        />
      </div>

      {/* 2. CTA Banner Card */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl shadow-2xl dark:border dark:border-white/10">
          <img
            alt="JIM Distribution"
            className="absolute inset-0 size-full object-cover object-center"
            src="/images/logo_jim1.jpg"
          />

          {/* Magic UI Interactive Grid Pattern */}
          <div className="absolute inset-0 z-0 opacity-30 sm:opacity-40 mix-blend-screen pointer-events-auto">
            <InteractiveGridPattern
              width={40}
              height={40}
              squares={[30, 20]}
              className="[mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"
              squaresClassName="hover:fill-white/30"
            />
          </div>

          <div className="relative z-10 isolate bg-gradient-to-r from-black/95 via-black/80 to-black/50 px-6 py-10 sm:px-10 sm:py-14 md:py-20 lg:px-16 pointer-events-none *:pointer-events-auto">
            <h2 className="font-medium text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-[-0.03em] leading-tight">
              Step Into Something Better
            </h2>
            <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base md:text-xl text-white/85 leading-relaxed">
              Get seamless access to everything you need, right from your phone.
            </p>
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                className="w-full sm:w-auto bg-white text-black ring-4 ring-white/30 hover:bg-white/90 font-semibold px-6 py-3 h-auto text-sm sm:text-base"
                size="lg"
              >
                Download Now <ArrowUpRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
