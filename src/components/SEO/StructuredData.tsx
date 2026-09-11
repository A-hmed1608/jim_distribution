import React from "react";

interface StructuredDataProps {
  type?: "global" | "faq" | "article";
  data?: any;
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jimdistribution.ma";

export const StructuredData: React.FC<StructuredDataProps> = ({ type = "global", data }) => {
  if (type === "global") {
    const globalSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["Organization", "WholesaleStore", "LocalBusiness"],
          "@id": `${BASE_URL}/#organization`,
          "name": "JIM DISTRIBUTION",
          "alternateName": [
            "JIM Distribution Agroalimentaire",
            "JIM Distribution Nord Maroc",
            "JIM DISTRIBUTION SARL"
          ],
          "url": BASE_URL,
          "logo": {
            "@type": "ImageObject",
            "@id": `${BASE_URL}/#logo`,
            "url": `${BASE_URL}/images/logo/logo.svg`,
            "caption": "JIM DISTRIBUTION Logo"
          },
          "image": `${BASE_URL}/images/hero/hero-image.jpg`,
          "description": "Société leader de distribution agroalimentaire, logistique d'entreposage aux normes, transport frigorifique et représentation commerciale de marques FMCG dans le Nord du Maroc (Tanger, Tétouan, Martil, Al Hoceïma, Larache).",
          "telephone": "+212 6 10 08 46 53",
          "email": "jimdistribution@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rue Bni Guemel Aug.Pui Local 27 Lot Aghrasse",
            "addressLocality": "Tétouan / Martil",
            "postalCode": "93150",
            "addressRegion": "Tanger-Tétouan-Al Hoceïma",
            "addressCountry": "MA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 35.5889,
            "longitude": -5.3626
          },
          "areaServed": [
            { "@type": "City", "name": "Tanger" },
            { "@type": "City", "name": "Tétouan" },
            { "@type": "City", "name": "Martil" },
            { "@type": "City", "name": "M'diq" },
            { "@type": "City", "name": "Fnideq" },
            { "@type": "City", "name": "Al Hoceïma" },
            { "@type": "City", "name": "Larache" },
            { "@type": "AdministrativeArea", "name": "Tanger-Tétouan-Al Hoceïma" },
            { "@type": "AdministrativeArea", "name": "Nord du Maroc" }
          ],
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "08:00",
              "closes": "18:00"
            }
          ],
          "priceRange": "$$$",
          "currenciesAccepted": "MAD",
          "paymentAccepted": "Virement bancaire, Chèque, Espèces",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services de Distribution & Logistique",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Distribution Agroalimentaire & FMCG",
                  "description": "Approvisionnement et livraison cadencée pour GMS, grossistes, CHR et supermarchés."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Entreposage & Gestion de Stock",
                  "description": "Plateforme logistique moderne, gestion FIFO/FEFO et sécurisation de la chaîne du froid."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Représentation Commerciale de Marques",
                  "description": "Accompagnement commercial, force de vente terrain, merchandising et animation des points de vente."
                }
              }
            ]
          }
        },
        {
          "@type": "WebSite",
          "@id": `${BASE_URL}/#website`,
          "url": BASE_URL,
          "name": "JIM DISTRIBUTION",
          "description": "Plateforme officielle de JIM DISTRIBUTION - Distribution et Logistique Agroalimentaire dans le Nord du Maroc",
          "publisher": {
            "@id": `${BASE_URL}/#organization`
          },
          "inLanguage": "fr-FR"
        }
      ]
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
      />
    );
  }

  if (data) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    );
  }

  return null;
};

export default StructuredData;
