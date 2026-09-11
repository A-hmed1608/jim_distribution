import Image from "next/image";

const sectors = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#0059bb] dark:text-[#adc7ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009 9.35c.692 0 1.345-.233 1.874-.627A3.001 3.001 0 0013.5 9.35c.692 0 1.345-.233 1.874-.627A3.001 3.001 0 0018 9.35m-16.5 0A3.001 3.001 0 013 7.875v-.825a3 3 0 013-3h12a3 3 0 013 3v.825a3.001 3.001 0 01-1.5 2.624" />
      </svg>
    ),
    badge: "Grandes & Moyennes Surfaces",
    title: "GMS & Hypermarchés",
    description: "Référencement, livraison cadencée et respect scrupuleux des cahiers des charges des enseignes modernes de distribution.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#0059bb] dark:text-[#adc7ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.676V14.25m0 0h2.25" />
      </svg>
    ),
    badge: "Réseau Traditionnel",
    title: "Grossistes & Détaillants",
    description: "Couverture capillaire pour irriguer les grossistes, demi-grossistes et le réseau dense de proximité à travers le Maroc.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#0059bb] dark:text-[#adc7ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.333M4.5 21V10.333" />
      </svg>
    ),
    badge: "HORECA & CHR",
    title: "Hôtels, Restaurants & Cafés",
    description: "Solutions d'approvisionnement régulier, conditionnements professionnels adaptés et réactivité pour les métiers de bouche.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#0059bb] dark:text-[#adc7ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    ),
    badge: "B2B & Collectivités",
    title: "Entreprises & Institutionnels",
    description: "Approvisionnement en volume pour cantines, traiteurs institutionnels et grands comptes professionnels.",
  },
];

const checkIcon = (
  <svg width="14" height="11" viewBox="0 0 16 13" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M1 6l5 5L15 1" />
  </svg>
);

const AboutSectionOne = () => {
  return (
    <section id="qui-sommes-nous" className="py-16 md:py-24 bg-white dark:bg-[#141d23] border-b border-[#141d23]/10 dark:border-white/10">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#0059bb]/10 text-[#0059bb] dark:bg-[#adc7ff]/10 dark:text-[#adc7ff]">
            1. Présentation & Vision
          </span>
        </div>

        {/* Top Part: Qui Sommes-Nous */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#141d23] dark:text-white leading-[1.15] mb-6">
              Qui Sommes-Nous ?
              <span className="block text-2xl sm:text-3xl text-[#0059bb] dark:text-[#adc7ff] font-sans font-medium capitalize mt-2">
                Le trait d&apos;union entre les grandes marques et le marché marocain
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg leading-relaxed text-[#414754] dark:text-white/80 mb-6">
              <strong className="text-[#141d23] dark:text-white font-semibold">JIM DISTRIBUTION</strong> est une entreprise marocaine spécialisée dans la représentation commerciale, la logistique d&apos;entreposage et la distribution B2B de produits agroalimentaires et FMCG (Fast-Moving Consumer Goods).
            </p>

            <p className="font-sans text-sm sm:text-base leading-relaxed text-[#414754] dark:text-white/70 mb-8">
              Nous opérons comme un partenaire stratégique complet : nous assurons la disponibilité immédiate de vos produits sur l&apos;ensemble du <strong className="text-[#141d23] dark:text-white font-semibold">Nord du Maroc (Tanger, Tétouan, Martil, Larache, Al Hoceïma et environs)</strong> grâce à une infrastructure moderne, une flotte dédiée et une force de vente terrain expérimentée.
            </p>

            {/* Strengths bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {[
                "Expertise reconnue du marché du Nord marocain",
                "Gestion stricte de la traçabilité & DLUO",
                "Réseau multi-canal (GMS, Traditionnel, HORECA)",
                "Respect total des normes d'hygiène et chaîne du froid",
                "Flotte logistique et entrepôts aux normes",
                "Accompagnement commercial sur le terrain",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0059bb]/10 text-[#0059bb] dark:bg-[#adc7ff]/15 dark:text-[#adc7ff]">
                    {checkIcon}
                  </span>
                  <span className="font-sans text-sm font-medium text-[#141d23] dark:text-white/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#141d23]/10 dark:border-white/10">
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#0059bb] dark:text-[#adc7ff]">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-[#414754] dark:text-white/60 font-sans mt-0.5">
                  Traçabilité & Qualité
                </div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#0059bb] dark:text-[#adc7ff]">
                  Multi-Canal
                </div>
                <div className="text-xs sm:text-sm text-[#414754] dark:text-white/60 font-sans mt-0.5">
                  Couverture B2B
                </div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#0059bb] dark:text-[#adc7ff]">
                  Nord Maroc
                </div>
                <div className="text-xs sm:text-sm text-[#414754] dark:text-white/60 font-sans mt-0.5">
                  Couverture Régionale
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#141d23]/15 dark:border-white/15 bg-gradient-to-b from-[#f6faff] to-white dark:from-[#1a242c] dark:to-[#141d23] p-8 shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#0059bb]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 rounded-md bg-[#0059bb] text-white text-xs font-bold uppercase tracking-wider mb-6">
                  Notre Engagement
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#141d23] dark:text-white mb-4">
                  Distribuer la Valeur, Garantir la Confiance
                </h3>

                <p className="font-sans text-sm leading-relaxed text-[#414754] dark:text-white/80 mb-6">
                  Chez JIM DISTRIBUTION, nous ne nous contentons pas de transporter des marchandises. Nous valorisons l&apos;image des marques partenaires et maximisons leur pénétration commerciale auprès de chaque point de vente.
                </p>

                <div className="space-y-4 pt-4 border-t border-[#141d23]/10 dark:border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#0059bb] mt-2 shrink-0" />
                    <p className="text-xs sm:text-sm text-[#414754] dark:text-white/70">
                      <strong>Approche Partenaire :</strong> Alignement stratégique sur vos objectifs de vente et de croissance.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#0059bb] mt-2 shrink-0" />
                    <p className="text-xs sm:text-sm text-[#414754] dark:text-white/70">
                      <strong>Disponibilité Constante :</strong> Réactivité et zéro rupture de stock pour sécuriser vos parts de marché.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Part: Secteurs avec lesquels nous travaillons */}
        <div className="pt-12 border-t border-[#141d23]/10 dark:border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0059bb] dark:text-[#adc7ff] mb-2 block">
              Nos Marchés & Secteurs d&apos;Activité
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#141d23] dark:text-white">
              Les Secteurs avec Lesquels Nous Travaillons
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#414754] dark:text-white/70 mt-3">
              Une présence équilibrée sur tous les circuits de distribution alimentaire au Maroc pour une couverture maximale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sec, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-xl border border-[#141d23]/10 dark:border-white/10 bg-[#f6faff] dark:bg-[#1a242c] hover:border-[#0059bb]/50 dark:hover:border-[#adc7ff]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#0059bb]/10 dark:bg-[#0059bb]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {sec.icon}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0059bb] dark:text-[#adc7ff] block mb-1">
                    {sec.badge}
                  </span>
                  <h4 className="font-display text-lg font-bold text-[#141d23] dark:text-white uppercase mb-2.5">
                    {sec.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#414754] dark:text-white/70 leading-relaxed">
                    {sec.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
