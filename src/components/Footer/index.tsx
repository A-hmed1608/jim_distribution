import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white dark:bg-[#141d23] pt-16 md:pt-20 border-t border-[#141d23]/10 dark:border-white/10">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {/* Column 1: Brand Info & Logo */}
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-6 inline-block">
                  <Image
                    src="/images/logo/logo_jim.png"
                    alt="JIM DISTRIBUTION"
                    width={220}
                    height={70}
                    className="h-auto w-auto max-h-18 object-contain"
                  />
                </Link>
                <p className="mb-6 font-sans text-sm leading-relaxed text-[#414754] dark:text-white/70">
                  Distribution agroalimentaire & produits de grande consommation (FMCG). Partenaire stratégique pour les professionnels de la distribution.
                </p>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-6 font-display text-base font-bold uppercase tracking-wider text-[#141d23] dark:text-white">
                  NAVIGATION
                </h2>
                <ul className="space-y-3 font-mono text-xs">
                  <li>
                    <Link
                      href="/"
                      className="text-[#414754] hover:text-[#0059bb] dark:text-white/70 dark:hover:text-white transition-colors"
                    >
                      ACCUEIL
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-[#414754] hover:text-[#0059bb] dark:text-white/70 dark:hover:text-white transition-colors"
                    >
                      À PROPOS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-[#414754] hover:text-[#0059bb] dark:text-white/70 dark:hover:text-white transition-colors"
                    >
                      ACTUALITÉS & BLOG
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-[#414754] hover:text-[#0059bb] dark:text-white/70 dark:hover:text-white transition-colors"
                    >
                      CONTACT & DEVIS
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: B2B Channels */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-6 font-display text-base font-bold uppercase tracking-wider text-[#141d23] dark:text-white">
                  CANAUX B2B
                </h2>
                <ul className="space-y-3 font-sans text-xs text-[#414754] dark:text-white/70">
                  <li>Grande Distribution</li>
                  <li>CHR & Restauration</li>
                  <li>Grossistes & Demi-gros</li>
                  <li>Commerce Traditionnel</li>
                </ul>
              </div>
            </div>

            {/* Column 4: Commercial Information */}
            <div className="w-full px-4 md:w-1/2 lg:w-3/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-6 font-display text-base font-bold uppercase tracking-wider text-[#141d23] dark:text-white">
                  CONTACT B2B
                </h2>
                <ul className="space-y-2 font-mono text-xs text-[#414754] dark:text-white/70">
                  <li>Zone: <span className="text-[#0059bb] dark:text-[#adc7ff]">Nord du Maroc</span></li>
                  <li>Tél: <a href="tel:+212610084653" className="text-[#0059bb] dark:text-[#adc7ff] hover:underline">+212 6 10 08 46 53</a></li>
                  <li>Email: <a href="mailto:jimdistribution@gmail.com" className="text-[#0059bb] dark:text-[#adc7ff] hover:underline">jimdistribution@gmail.com</a></li>
                  <li className="pt-1 text-[11px] leading-tight text-[#414754]/80 dark:text-white/60">
                    Rue Bni Guemel Aug.Pui Local 27 Lot Aghrasse 93150
                  </li>
                </ul>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-[#0059bb] hover:bg-[#0070ea] px-4 py-2 font-mono text-[11px] font-bold text-white uppercase border border-[#0059bb] rounded-md transition-colors"
                  >
                    DEMANDER UN DEVIS
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-[#141d23]/10 dark:bg-white/10"></div>
          <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-[#414754] dark:text-white/60">
            <p>© {new Date().getFullYear()} JIM DISTRIBUTION. Tous droits réservés.</p>
            <p>Distribution Agroalimentaire B2B — Nord du Maroc</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
