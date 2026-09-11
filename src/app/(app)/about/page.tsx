import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos & Nos Services | JIM DISTRIBUTION - Nord du Maroc",
  description:
    "Découvrez JIM DISTRIBUTION : leader de la distribution agroalimentaire dans le Nord du Maroc (Tanger, Tétouan, Martil, Al Hoceïma). Notre processus d'approvisionnement, stockage, livraison et accompagnement commercial.",
  openGraph: {
    title: "À Propos de JIM DISTRIBUTION - Partenaire B2B Agroalimentaire au Nord du Maroc",
    description:
      "Expertise de distribution FMCG, couverture multi-canaux (GMS, grossistes, HORECA) et gestion logistique dans le Nord du Maroc.",
  },
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="À Propos & Nos Services"
        description="Présentation de JIM DISTRIBUTION, nos secteurs d'intervention et notre cycle complet de distribution de bout en bout."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
