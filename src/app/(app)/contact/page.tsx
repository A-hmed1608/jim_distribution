import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import MapSection from "@/components/Contact/MapSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Devis | JIM DISTRIBUTION - Nord du Maroc",
  description:
    "Contactez l'équipe commerciale de JIM DISTRIBUTION pour toute demande de cotation, d'approvisionnement ou de partenariat dans le Nord du Maroc.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact & Devis"
        description="Contactez notre équipe commerciale pour toute demande de cotation ou d'approvisionnement dans la région du Nord du Maroc."
      />

      <Contact />
      <MapSection />
    </>
  );
};

export default ContactPage;
