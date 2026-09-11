"use client";

import React from "react";
import { motion } from "motion/react";
import { TestimonialsColumn, TestimonialItem } from "@/components/ui/testimonials-columns-1";

const testimonials: TestimonialItem[] = [
  {
    text: "La fiabilité des livraisons de JIM DISTRIBUTION dans la région de Tanger-Tétouan nous assure un taux de rupture nul sur nos références clés.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    name: "Karim El Amrani",
    role: "Directeur des Achats - Réseau Supermarchés (Tanger)",
  },
  {
    text: "Une équipe réactive et un respect exemplaire de la chaîne du froid. Nos produits frais et surgelés arrivent toujours en parfait état.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    name: "Siham Bennani",
    role: "Responsable Qualité & Approvisionnement (Tétouan)",
  },
  {
    text: "Leur accompagnement commercial et la présence active de leurs chefs de secteur ont accéléré notre pénétration du marché dans le Nord.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    name: "Rachid Tazi",
    role: "Directeur Commercial Maroc - Marque FMCG",
  },
  {
    text: "Partenaire logistique indispensable pour notre chaîne de restauration. La cadence des livraisons à Martil et M'diq est impeccable même en haute saison.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    name: "Omar Cherkaoui",
    role: "Gérant - Groupe Restauration & HORECA",
  },
  {
    text: "La gestion des commandes et le suivi des stocks en temps réel facilitent énormément nos réassorts hebdomadaires.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    name: "Yasmine Lahlou",
    role: "Responsable Logistique & Approvisionnement",
  },
  {
    text: "Un distributeur sérieux qui honore toujours ses engagements contractuels et garantit des délais de rotation très rapides.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    name: "Mohamed Berrada",
    role: "Grossiste Alimentaire Régional",
  },
  {
    text: "Grâce à leur flotte moderne et dédiée, nous avons pu étendre la distribution de notre gamme bio sur l'ensemble du Nord marocain.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    name: "Kenza Mansouri",
    role: "Brand Manager - Produits Agroalimentaires",
  },
  {
    text: "Une proximité terrain exceptionnelle. Leurs commerciaux visitent régulièrement nos points de vente pour optimiser la visibilité en rayon.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    name: "Hamza Bouzid",
    role: "Responsable Point de Vente - Tanger",
  },
  {
    text: "La clarté administrative, la rigueur de facturation et le professionnalisme des chauffeurs-livreurs font toute la différence.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    name: "Fatima-Zahra Alami",
    role: "Directrice Financière & Opérations",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const TestimonialsColumnsSection = () => {
  return (
    <section className="bg-[#f6faff] dark:bg-[#141d23] py-20 lg:py-28 relative overflow-hidden border-t border-[#141d23]/10 dark:border-white/10">
      <div className="container z-10 mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto text-center mb-14"
        >
          <div className="flex justify-center mb-3">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0059bb]/10 text-[#0059bb] dark:bg-[#adc7ff]/10 dark:text-[#adc7ff] border border-[#0059bb]/20">
              Témoignages & Avis Clients
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#141d23] dark:text-white mt-2">
            Ce que disent nos partenaires
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#414754] dark:text-white/70 mt-4 leading-relaxed">
            Découvrez les retours d&apos;expérience des grandes surfaces, grossistes, réseaux CHR et marques qui font confiance à JIM DISTRIBUTION dans le Nord du Maroc.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[700px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={16} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={20} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={18} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsColumnsSection;
