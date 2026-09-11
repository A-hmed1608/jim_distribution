"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

export const localGeoFaqs: FAQItem[] = [
  {
    question: "Quelle est la zone géographique couverte par JIM DISTRIBUTION ?",
    answer:
      "JIM DISTRIBUTION assure une couverture logistique et commerciale exclusive et intensive dans tout le Nord du Maroc, notamment à Tanger, Tétouan, Martil, M'diq, Fnideq, Al Hoceïma et Larache.",
  },
  {
    question: "Quels types de clients sont approvisionnés par JIM DISTRIBUTION ?",
    answer:
      "Nous distribuons des produits agroalimentaires et FMCG auprès des Grandes et Moyennes Surfaces (GMS / Supermarchés), des grossistes et demi-grossistes, des supérettes de proximité ainsi que du secteur CHR (Cafés, Hôtels, Restaurants / HORECA).",
  },
  {
    question: "Comment JIM DISTRIBUTION garantit-il la chaîne du froid et la qualité des produits ?",
    answer:
      "Nos plateformes d'entreposage modernes respectent les normes d'hygiène les plus strictes avec une gestion rigoureuse des flux FIFO/FEFO et du contrôle des DLUO. Notre flotte de transport sous température dirigée garantit le respect ininterrompu de la chaîne du froid jusqu'au rayon.",
  },
  {
    question: "Quels services offrez-vous aux marques agroalimentaires nationales et internationales ?",
    answer:
      "En plus du stockage et du transport, JIM DISTRIBUTION propose une représentation commerciale complète : force de vente dédiée sur le terrain, suivi des réassorts, merchandising en rayon, négociation d'accords régionaux et valorisation de l'image de marque.",
  },
  {
    question: "Comment contacter l'équipe commerciale pour un partenariat ou une commande ?",
    answer:
      "Vous pouvez joindre notre direction commerciale par téléphone au +212 6 10 08 46 53, par email à jimdistribution@gmail.com, ou nous rendre visite à notre siège : Rue Bni Guemel Aug.Pui Local 27 Lot Aghrasse 93150.",
  },
];

export const LocalGeoFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Schema.org FAQPage for Google PAA and AI Overviews
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": localGeoFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section className="py-20 lg:py-28 bg-[#f6faff] dark:bg-[#141d23] text-[#141d23] dark:text-white border-t border-[#141d23]/10 dark:border-white/10">
      {/* Inject FAQ Schema for AI Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0059bb]/10 text-[#0059bb] dark:bg-[#adc7ff]/10 dark:text-[#adc7ff] border border-[#0059bb]/20 mb-3">
            Questions Fréquentes • GEO & FAQ
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight">
            Tout savoir sur JIM DISTRIBUTION
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#414754] dark:text-white/70 mt-3 leading-relaxed">
            Réponses directes et claires sur notre réseau de distribution agroalimentaire, nos capacités logistiques et notre couverture du Nord marocain.
          </p>
        </div>

        <div className="space-y-4">
          {localGeoFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#0059bb] bg-white dark:bg-[#1a1c1e] shadow-lg shadow-[#0059bb]/5"
                    : "border-[#141d23]/10 dark:border-white/10 bg-white/60 dark:bg-[#141d23]/60 hover:border-[#0059bb]/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold tracking-tight text-[#141d23] dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#0059bb] text-white rotate-180"
                        : "bg-[#141d23]/5 dark:bg-white/10 text-[#141d23] dark:text-white"
                    }`}
                  >
                    ↓
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#141d23]/5 dark:border-white/5">
                        <p className="font-sans text-sm sm:text-base text-[#414754] dark:text-white/80 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LocalGeoFAQ;
