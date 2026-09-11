"use client";

import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const defaultFaqItems: FAQItem[] = [
  {
    id: "item-1",
    question: "Quelle est la zone géographique couverte par JIM DISTRIBUTION ?",
    answer:
      "JIM DISTRIBUTION assure une couverture logistique et commerciale intensive dans tout le Nord du Maroc, notamment à Tanger, Tétouan, Martil, M'diq, Fnideq, Al Hoceïma et Larache.",
  },
  {
    id: "item-2",
    question: "Quels types de commerces et clients approvisionnez-vous ?",
    answer:
      "Nous distribuons nos gammes auprès des Grandes et Moyennes Surfaces (GMS / Supermarchés), des grossistes et demi-grossistes, des supérettes de proximité ainsi que des professionnels du secteur CHR (Cafés, Hôtels, Restaurants / HORECA).",
  },
  {
    id: "item-3",
    question: "Comment garantissez-vous la chaîne du froid et la qualité des produits ?",
    answer:
      "Nos plateformes d'entreposage modernes respectent les normes d'hygiène et de sécurité agroalimentaire les plus strictes avec une gestion rigoureuse FIFO/FEFO. Notre flotte frigorifique sous température dirigée garantit le respect ininterrompu de la chaîne du froid jusqu'à la livraison.",
  },
  {
    id: "item-4",
    question: "Quels services offrez-vous aux marques nationales et internationales ?",
    answer:
      "Au-delà du stockage et du transport, nous assurons une véritable représentation commerciale : force de vente dédiée sur le terrain, suivi des réassorts, merchandising en rayon, négociation d'accords régionaux et valorisation de votre image de marque.",
  },
  {
    id: "item-5",
    question: "Comment contacter l'équipe commerciale pour une cotation ou un partenariat ?",
    answer:
      "Vous pouvez joindre notre direction commerciale par téléphone au +212 6 10 08 46 53, par email à jimdistribution@gmail.com, ou via notre formulaire de contact en ligne pour recevoir une proposition adaptée sous 24h.",
  },
];

interface FAQsProps {
  items?: FAQItem[];
  className?: string;
}

export function FAQs({ items = defaultFaqItems, className }: FAQsProps) {
  // Schema.org FAQPage for SEO & GEO (AI Search Engines)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section className={cn("py-16 md:py-24 bg-[#f6faff] dark:bg-[#141d23] border-t border-[#141d23]/10 dark:border-white/10", className)}>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-5 md:gap-12 items-start">
          <div className="md:col-span-2">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0059bb]/10 text-[#0059bb] dark:bg-[#adc7ff]/10 dark:text-[#adc7ff] border border-[#0059bb]/20 mb-3">
              Questions Fréquentes • FAQ
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#141d23] dark:text-white">
              Tout savoir sur nos services
            </h2>
            <p className="font-sans text-muted-foreground mt-4 text-sm sm:text-base leading-relaxed">
              Découvrez des réponses rapides et précises sur notre réseau de distribution, notre chaîne logistique et notre couverture dans le Nord du Maroc.
            </p>
            <div className="mt-8 hidden md:block p-5 rounded-2xl bg-white dark:bg-[#1a1c1e] border border-[#141d23]/10 dark:border-white/10 shadow-sm">
              <p className="text-xs font-medium text-[#414754] dark:text-white/70">
                Vous avez une demande spécifique ?
              </p>
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center text-sm font-bold text-[#0059bb] dark:text-[#adc7ff] hover:underline"
              >
                Contacter notre équipe commerciale &rarr;
              </Link>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="bg-white dark:bg-[#1a1c1e] rounded-2xl border border-[#141d23]/10 dark:border-white/10 px-6 sm:px-8 py-2 shadow-sm shadow-[#0059bb]/5">
              <Accordion type="single" collapsible className="w-full">
                {items.map((item) => (
                  <AccordionItem key={item.id} value={item.id} className="last:border-b-0">
                    <AccordionTrigger className="cursor-pointer text-left py-5 text-base sm:text-lg font-bold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm sm:text-base leading-relaxed text-[#414754] dark:text-white/80">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <div className="md:hidden mt-2 p-5 rounded-2xl bg-white dark:bg-[#1a1c1e] border border-[#141d23]/10 dark:border-white/10 text-center">
            <p className="text-xs text-[#414754] dark:text-white/70">
              Vous avez une demande spécifique ?
            </p>
            <Link
              href="/contact"
              className="mt-1 inline-flex items-center text-sm font-bold text-[#0059bb] dark:text-[#adc7ff] hover:underline"
            >
              Contacter notre équipe commerciale &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
