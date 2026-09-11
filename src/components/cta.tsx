"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import SectionTitle from "./Common/SectionTitle";

import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative z-10 py-8 sm:py-12 md:py-14">
      {/* 1. Centered Section Title at Top */}
      <div className="container px-4">
        <SectionTitle
          title="COLLABORONS ENSEMBLE"
          paragraph="Rejoignez notre réseau de partenaires et développez la présence de vos marques agroalimentaires dans tout le Nord du Maroc."
          center
          mb="28px"
        />
      </div>

      {/* 2. CTA Banner Card - Wider and more compact height */}
      <div className="w-full px-3 sm:px-5 lg:px-8">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl dark:border dark:border-white/10">
          <img
            alt="JIM Distribution"
            className="absolute inset-0 size-full object-cover object-center"
            src="/images/logo_jim1.jpg"
          />

          {/* Magic UI Interactive Grid Pattern */}
          <div className="absolute inset-0 z-0 opacity-25 sm:opacity-35 mix-blend-screen pointer-events-auto">
            <InteractiveGridPattern
              width={40}
              height={40}
              squares={[35, 15]}
              className="[mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"
              squaresClassName="hover:fill-white/30"
            />
          </div>

          <div className="relative z-10 isolate bg-gradient-to-r from-black/95 via-black/85 to-black/60 px-6 py-8 sm:px-10 sm:py-10 md:py-12 lg:px-14 pointer-events-none *:pointer-events-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">
              <div className="max-w-3xl">
                <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#adc7ff] mb-2">
                  Partenariat Stratégique
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-tight mb-3">
                  Propulsez la Distribution de Vos Produits
                </h2>
                <p className="max-w-2xl text-xs sm:text-sm md:text-base text-white/85 leading-relaxed font-sans">
                  Bénéficiez d&apos;une infrastructure logistique éprouvée, d&apos;une couverture ciblée du Nord du Maroc et d&apos;une force de vente dédiée sur le terrain.
                </p>
              </div>

              <div className="shrink-0 flex items-center">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    className="w-full sm:w-auto bg-white text-[#0059bb] hover:bg-white/95 font-sans font-bold px-8 py-3.5 sm:py-4 h-auto text-sm sm:text-base uppercase tracking-wider rounded-xl shadow-lg transition-all hover:scale-105"
                    size="lg"
                  >
                    Devenir Partenaire <ArrowUpRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
