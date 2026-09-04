import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos | JIM DISTRIBUTION - Distribution Agroalimentaire",
  description: "Présentation de JIM DISTRIBUTION, spécialiste de la distribution agroalimentaire et des produits FMCG.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="À Propos"
        description="Présentation de JIM DISTRIBUTION, partenaire d'excellence pour la représentation et la distribution agroalimentaire B2B."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
