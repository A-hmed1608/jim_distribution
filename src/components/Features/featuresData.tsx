import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="square" strokeLinejoin="miter" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Distribution Capillaire FMCG",
    paragraph: "Couverture et approvisionnement des réseaux de distribution et points de vente partenaires.",
  },
  {
    id: 2,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="square" strokeLinejoin="miter" d="M3 21h18M3 10h18M3 6h18M3 14h18M3 18h18M7 3v18M17 3v18" />
      </svg>
    ),
    title: "Organisation Logistique & Stockage",
    paragraph: "Gestion méthodique de l'entreposage et conservation optimisée des marchandises.",
  },
  {
    id: 3,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="square" strokeLinejoin="miter" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Gestion & Représentation de Marques",
    paragraph: "Accompagnement commercial pour la représentation et le développement des marques agroalimentaires.",
  },
  {
    id: 4,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="square" strokeLinejoin="miter" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Planification & Suivi des Flux",
    paragraph: "Planification et rigueur dans l'exécution des livraisons et le suivi des commandes.",
  },
  {
    id: 5,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="square" strokeLinejoin="miter" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="square" strokeLinejoin="miter" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Couverture Régionale Réseau B2B",
    paragraph: "Proximité et réactivité pour répondre aux exigences d'approvisionnement des professionnels.",
  },
  {
    id: 6,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="square" strokeLinejoin="miter" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Engagement & Contrôle Qualité",
    paragraph: "Respect strict des normes du secteur agroalimentaire et engagement de service continu.",
  },
];
export default featuresData;
