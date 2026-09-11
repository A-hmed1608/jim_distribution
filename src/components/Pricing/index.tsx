"use client";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-24 bg-[#f6faff] dark:bg-[#141d23] border-b border-[#141d23]/10 dark:border-white/10">
      <div className="container">
        <SectionTitle
          title="SOLUTIONS DE PARTENARIAT B2B"
          paragraph="Des formules d'accompagnement et de distribution adaptées aux besoins spécifiques de chaque canal de distribution."
          center
          width="750px"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            badge="CANAL RETAIL"
            title="Grande Distribution"
            subtitle="Solutions de distribution pour les enseignes et réseaux de supermarchés."
          >
            <OfferList text="Approvisionnement direct & régulier" status="active" />
            <OfferList text="Suivi commercial et gestion des flux" status="active" />
            <OfferList text="Gestion rigoureuse des commandes" status="active" />
            <OfferList text="Planification des volumes de livraison" status="active" />
            <OfferList text="Support logistique dédié B2B" status="active" />
          </PricingBox>

          <PricingBox
            badge="CANAL CHR"
            title="Hôtellerie & Restauration"
            subtitle="Services d'approvisionnement pour la restauration, cafés et collectivités."
          >
            <OfferList text="Gammes adaptées aux professionnels CHR" status="active" />
            <OfferList text="Flexibilité et réactivité de livraison" status="active" />
            <OfferList text="Interlocuteur commercial privilégié" status="active" />
            <OfferList text="Respect des exigences agroalimentaires" status="active" />
            <OfferList text="Accompagnement personnalisé" status="active" />
          </PricingBox>

          <PricingBox
            badge="CANAL TRADITIONNEL"
            title="Grossistes & Commerces"
            subtitle="Partenariat commercial pour les grossistes et le réseau traditionnel."
          >
            <OfferList text="Offres adaptées gros & demi-gros" status="active" />
            <OfferList text="Conditions commerciales partenariales" status="active" />
            <OfferList text="Planification des approvisionnements" status="active" />
            <OfferList text="Disponibilité continue des références" status="active" />
            <OfferList text="Relation partenariale sur le long terme" status="active" />
          </PricingBox>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
