"use client";

import React from "react";
import Image from "next/image";
import { InteractiveTravelCard } from "@/components/ui/3d-card";

const sectors = [
  {
    subtitle: "Grandes & Moyennes Surfaces",
    title: "GMS & Hypermarchés",
    description: "Référencement, livraison cadencée et respect scrupuleux des cahiers des charges des enseignes modernes de distribution.",
    imageUrl: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=800&auto=format&fit=crop",
    actionText: "Approvisionner GMS",
    href: "/contact",
  },
  {
    subtitle: "Réseau Traditionnel",
    title: "Grossistes & Détaillants",
    description: "Couverture capillaire pour approvisionner grossistes, demi-grossistes et le réseau dense de proximité dans le Nord du Maroc.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    actionText: "Réseau Grossistes",
    href: "/contact",
  },
  {
    subtitle: "HORECA & CHR",
    title: "Hôtels, Restos & Cafés",
    description: "Solutions d'approvisionnement régulier, conditionnements professionnels adaptés et réactivité pour les métiers de bouche.",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    actionText: "Services HORECA",
    href: "/contact",
  },
  {
    subtitle: "B2B & Collectivités",
    title: "Entreprises & Institutions",
    description: "Approvisionnement en volume pour cantines, traiteurs institutionnels et grands comptes professionnels.",
    imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop",
    actionText: "Solutions B2B",
    href: "/contact",
  },
];

const checkIcon = (
  <svg width="14" height="11" viewBox="0 0 16 13" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M1 6l5 5L15 1" />
  </svg>
);

const AboutSectionOne = () => {
  return (
    <section id="qui-sommes-nous" className="py-16 md:py-24 bg-white dark:bg-[#141d23] border-b border-[#141d23]/10 dark:border-white/10">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#0059bb]/10 text-[#0059bb] dark:bg-[#adc7ff]/10 dark:text-[#adc7ff]">
            1. Présentation & Vision
          </span>
        </div>

        {/* Top Part: Qui Sommes-Nous */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#141d23] dark:text-white leading-[1.15] mb-6">
              Qui Sommes-Nous ?
              <span className="block text-2xl sm:text-3xl text-[#0059bb] dark:text-[#adc7ff] font-sans font-medium capitalize mt-2">
                Le trait d&apos;union entre les grandes marques et le marché marocain
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg leading-relaxed text-[#414754] dark:text-white/80 mb-6">
              <strong className="text-[#141d23] dark:text-white font-semibold">JIM DISTRIBUTION</strong> est une entreprise marocaine spécialisée dans la représentation commerciale, la logistique d&apos;entreposage et la distribution B2B de produits agroalimentaires et FMCG (Fast-Moving Consumer Goods).
            </p>

            <p className="font-sans text-sm sm:text-base leading-relaxed text-[#414754] dark:text-white/70 mb-8">
              Nous opérons comme un partenaire stratégique complet : nous assurons la disponibilité immédiate de vos produits sur l&apos;ensemble du <strong className="text-[#141d23] dark:text-white font-semibold">Nord du Maroc (Tanger, Tétouan, Martil, Larache, Al Hoceïma et environs)</strong> grâce à une infrastructure moderne, une flotte dédiée et une force de vente terrain expérimentée.
            </p>

            {/* Strengths bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {[
                "Expertise reconnue du marché du Nord marocain",
                "Gestion stricte de la traçabilité & DLUO",
                "Réseau multi-canal (GMS, Traditionnel, HORECA)",
                "Respect total des normes d'hygiène et chaîne du froid",
                "Flotte logistique et entrepôts aux normes",
                "Accompagnement commercial sur le terrain",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0059bb]/10 text-[#0059bb] dark:bg-[#adc7ff]/15 dark:text-[#adc7ff]">
                    {checkIcon}
                  </span>
                  <span className="font-sans text-sm font-medium text-[#141d23] dark:text-white/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#141d23]/10 dark:border-white/10">
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#0059bb] dark:text-[#adc7ff]">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-[#414754] dark:text-white/60 font-sans mt-0.5">
                  Traçabilité & Qualité
                </div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#0059bb] dark:text-[#adc7ff]">
                  Multi-Canal
                </div>
                <div className="text-xs sm:text-sm text-[#414754] dark:text-white/60 font-sans mt-0.5">
                  Couverture B2B
                </div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#0059bb] dark:text-[#adc7ff]">
                  Nord Maroc
                </div>
                <div className="text-xs sm:text-sm text-[#414754] dark:text-white/60 font-sans mt-0.5">
                  Couverture Régionale
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#141d23]/15 dark:border-white/15 bg-gradient-to-b from-[#f6faff] to-white dark:from-[#1a242c] dark:to-[#141d23] p-8 shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#0059bb]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 rounded-md bg-[#0059bb] text-white text-xs font-bold uppercase tracking-wider mb-6">
                  Notre Engagement
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#141d23] dark:text-white mb-4">
                  Distribuer la Valeur, Garantir la Confiance
                </h3>

                <p className="font-sans text-sm leading-relaxed text-[#414754] dark:text-white/80 mb-6">
                  Chez JIM DISTRIBUTION, nous ne nous contentons pas de transporter des marchandises. Nous valorisons l&apos;image des marques partenaires et maximisons leur pénétration commerciale auprès de chaque point de vente.
                </p>

                <div className="space-y-4 pt-4 border-t border-[#141d23]/10 dark:border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#0059bb] mt-2 shrink-0" />
                    <p className="text-xs sm:text-sm text-[#414754] dark:text-white/70">
                      <strong>Approche Partenaire :</strong> Alignement stratégique sur vos objectifs de vente et de croissance.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#0059bb] mt-2 shrink-0" />
                    <p className="text-xs sm:text-sm text-[#414754] dark:text-white/70">
                      <strong>Disponibilité Constante :</strong> Réactivité et zéro rupture de stock pour sécuriser vos parts de marché.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Part: Secteurs avec lesquels nous travaillons (3D Interactive Cards) */}
        <div className="pt-12 border-t border-[#141d23]/10 dark:border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0059bb] dark:text-[#adc7ff] mb-2 block">
              Nos Marchés & Secteurs d&apos;Activité
            </span>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#141d23] dark:text-white">
              Les Secteurs avec Lesquels Nous Travaillons
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#414754] dark:text-white/70 mt-3">
              Une présence équilibrée sur tous les circuits de distribution alimentaire au Maroc pour une couverture maximale.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 justify-items-center">
            {sectors.map((sec, i) => (
              <InteractiveTravelCard
                key={i}
                title={sec.title}
                subtitle={sec.subtitle}
                description={sec.description}
                imageUrl={sec.imageUrl}
                actionText={sec.actionText}
                href={sec.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
