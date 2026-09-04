import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#f6faff] dark:bg-[#141d23] border-b border-[#141d23]/10 dark:border-white/10">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] border border-[#141d23]/20 dark:border-white/20 bg-white dark:bg-[#1a1c1e] p-6 lg:m-0">
              <Image
                src="/images/about/about-image-2.svg"
                alt="Infrastructure & Logistique"
                fill
                className="dark:hidden p-4 object-contain"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="Infrastructure & Logistique"
                fill
                className="hidden dark:block p-4 object-contain"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[540px]">
              <div className="mb-8 border-l-2 border-[#0059bb] pl-6">
                <h3 className="mb-2 font-display text-xl font-bold uppercase tracking-tight text-[#141d23] dark:text-white">
                  Rigueur & Contrôle Qualité
                </h3>
                <p className="font-sans text-sm leading-relaxed text-[#414754] dark:text-white/70">
                  Le respect des standards du secteur agroalimentaire constitue le socle de nos opérations. De la réception des produits jusqu&apos;à leur livraison finale.
                </p>
              </div>

              <div className="mb-8 border-l-2 border-[#0059bb] pl-6">
                <h3 className="mb-2 font-display text-xl font-bold uppercase tracking-tight text-[#141d23] dark:text-white">
                  Organisation & Suivi des Flux
                </h3>
                <p className="font-sans text-sm leading-relaxed text-[#414754] dark:text-white/70">
                  Chaque étape d&apos;approvisionnement fait l&apos;objet d&apos;une gestion précise pour garantir la ponctualité des livraisons et la disponibilité des produits.
                </p>
              </div>

              <div className="border-l-2 border-[#0059bb] pl-6">
                <h3 className="mb-2 font-display text-xl font-bold uppercase tracking-tight text-[#141d23] dark:text-white">
                  Partenariat commercial durable
                </h3>
                <p className="font-sans text-sm leading-relaxed text-[#414754] dark:text-white/70">
                  Nous privilégions une relation de confiance et de transparence avec nos partenaires fabricants, grossistes et enseignes de distribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
