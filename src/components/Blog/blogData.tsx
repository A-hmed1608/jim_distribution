import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Enjeux de la distribution agroalimentaire et gestion des flux FMCG",
    paragraph:
      "Analyse des tendances et bonnes pratiques dans la distribution de produits de grande consommation.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Équipe Rédaction",
      image: "/images/blog/author-03.png",
      designation: "Analyste FMCG",
    },
    tags: ["LOGISTIQUE FMCG"],
    publishDate: "2026",
  },
  {
    id: 2,
    title: "Optimisation de l'approvisionnement B2B en réseau Retail",
    paragraph:
      "Comment structurer l'approvisionnement des grandes enseignes pour garantir la disponibilité constante en rayon.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Département Commercial",
      image: "/images/blog/author-02.png",
      designation: "Responsable Distribution",
    },
    tags: ["AGROALIMENTAIRE"],
    publishDate: "2026",
  },
  {
    id: 3,
    title: "Partenariats de distribution et représentation de marques",
    paragraph:
      "Les facteurs clés de succès pour le déploiement commercial et la représentation des marques de grande consommation.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Direction Stratégie",
      image: "/images/blog/author-03.png",
      designation: "Expert Logistique",
    },
    tags: ["DISTRIBUTION B2B"],
    publishDate: "2026",
  },
];
export default blogData;
