import ServicesWithAnimatedHoverModal, { ServiceProject } from "@/components/ui/services-with-animated-hover-modal";

const serviceProjects: ServiceProject[] = [
  {
    step: "01",
    title: "Approvisionnement & Sourcing",
    category: "Fournisseurs & Contrôle Qualité",
    color: "#0059bb",
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    description: "Réception directe auprès des fabricants partenaires avec contrôle rigoureux des lots et DLUO.",
  },
  {
    step: "02",
    title: "Stockage & Entreposage Moderne",
    category: "Plateforme & Chaîne du Froid",
    color: "#0f172a",
    src: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop",
    description: "Entrepôts sécurisés aux normes agroalimentaires avec gestion informatisée FIFO / FEFO.",
  },
  {
    step: "03",
    title: "Distribution & Livraison Client",
    category: "Réseau Nord du Maroc & Flotte Dédiée",
    color: "#0284c7",
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop",
    description: "Livraison cadencée pour GMS, grossistes, CHR et détaillants dans tout le Nord du Maroc.",
  },
  {
    step: "04",
    title: "Accompagnement Commercial",
    category: "Merchandising & Animation Terrain",
    color: "#047857",
    src: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&auto=format&fit=crop",
    description: "Force de vente sur le terrain pour optimiser les réassorts et maximiser vos ventes.",
  },
];

const AboutSectionTwo = () => {
  return (
    <section id="nos-services-processus" className="py-16 md:py-24 bg-[#f6faff] dark:bg-[#10171d] border-b border-[#141d23]/10 dark:border-white/10">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Animated Interactive Hover Component */}
        <ServicesWithAnimatedHoverModal
          title="Nos Services & Processus"
          subtitle="Découvrez notre chaîne de valeur intégrée : de la réception de la marchandise auprès des fournisseurs jusqu'à la mise en rayon dans le Nord du Maroc avec un accompagnement commercial dédié."
          projects={serviceProjects}
          className="py-0 md:py-0 bg-transparent dark:bg-transparent"
        />

        {/* Process Banner summary CTA */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0059bb] to-[#003f88] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/80 block mb-2">
              Partenariat Gagnant-Gagnant
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-3">
              Vous cherchez à développer la présence de votre marque dans le Nord du Maroc ?
            </h3>
            <p className="text-sm text-white/80 font-sans leading-relaxed">
              Confiez votre chaîne de distribution à une équipe dédiée qui prend en charge l&apos;approvisionnement, le stockage, la livraison et le développement commercial de vos produits.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-[#0059bb] font-sans font-bold text-sm uppercase tracking-wider hover:bg-[#f6faff] hover:shadow-lg transition-all shrink-0 hover:scale-105"
          >
            Contactez Notre Équipe Commerciale
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
