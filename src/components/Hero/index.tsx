import Link from "next/link";

const Hero = () => {
  return (
    <section id="home">
      <div
        className="hero min-h-[85vh]"
        style={{
          backgroundImage: "url(/images/hero/hero-warehouse.jpg)",
        }}
      >
        <div className="hero-overlay bg-[#141d23]/70"></div>
        <div className="hero-content text-center py-20">
          <div className="max-w-[900px]">

            {/* Main Headline */}
            <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl tracking-tight uppercase">
              DISTRIBUTION AGROALIMENTAIRE & PRODUITS DE GRANDE CONSOMMATION
            </h1>

            {/* Subtitle */}
            <p className="mb-10 font-sans text-base leading-relaxed text-white/80 sm:text-lg md:text-xl max-w-[820px] mx-auto">
              JIM DISTRIBUTION est votre partenaire stratégique pour la
              distribution et la représentation commerciale de marques
              agroalimentaires et FMCG dans le <strong className="text-white font-semibold">Nord du Maroc</strong>. Rigueur opérationnelle, gestion
              structurée des flux et engagement qualité.
            </p>

            {/* CTAs */}
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <Link
                href="/contact"
                className="btn btn-primary btn-lg rounded-none border-[#0059bb] bg-[#0059bb] hover:bg-[#0070ea] hover:border-[#0070ea] font-mono text-sm font-bold tracking-wider uppercase"
              >
                DEMANDER UN DEVIS
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="btn btn-outline btn-lg rounded-none border-white/40 text-white hover:bg-white hover:text-[#141d23] hover:border-white font-mono text-sm font-semibold tracking-wider uppercase"
              >
                NOUS CONTACTER
              </Link>
            </div>

            {/* Stats Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-white/15 bg-white/5 backdrop-blur-md mx-auto max-w-[820px]">
              <div className="p-5 border-b sm:border-b-0 sm:border-r border-white/15">
                <div className="font-sans text-[11px] font-semibold text-[#adc7ff] uppercase mb-1 tracking-wider">
                  Réseau Clients
                </div>
                <div className="font-display text-xl font-bold text-white">
                  GMS &amp; Proximité
                </div>
                <div className="font-sans text-xs text-white/60">
                  Points de vente &amp; grossistes
                </div>
              </div>

              <div className="p-5 border-b sm:border-b-0 sm:border-r border-white/15">
                <div className="font-sans text-[11px] font-semibold text-[#adc7ff] uppercase mb-1 tracking-wider">
                  Infrastructure
                </div>
                <div className="font-display text-xl font-bold text-white">
                  Plateforme Moderne
                </div>
                <div className="font-sans text-xs text-white/60">
                  Stockage &amp; Chaîne du froid
                </div>
              </div>

              <div className="p-5">
                <div className="font-sans text-[11px] font-semibold text-[#adc7ff] uppercase mb-1 tracking-wider">
                  Couverture
                </div>
                <div className="font-display text-xl font-bold text-white">
                  Nord du Maroc
                </div>
                <div className="font-sans text-xs text-white/60">
                  Tanger, Tétouan &amp; Région
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
