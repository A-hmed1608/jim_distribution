import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="14" height="11" viewBox="0 0 16 13" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="square" strokeLinejoin="miter" d="M1 6l5 5L15 1" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }: { text: string }) => (
    <p className="mb-4 flex items-center font-sans text-sm font-medium text-[#141d23] dark:text-white/80">
      <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center border border-[#0059bb]/30 bg-[#0059bb]/10 text-[#0059bb] dark:text-[#adc7ff]">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-white dark:bg-[#141d23] border-b border-[#141d23]/10 dark:border-white/10">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <SectionTitle
              title="UN ACTEUR MAJEUR DE LA DISTRIBUTION AGROALIMENTAIRE"
              paragraph="JIM DISTRIBUTION accompagne les marques et les réseaux de distribution avec rigueur, professionnalisme et structuration des processus logistiques."
              mb="32px"
            />

            <div className="mb-12 max-w-[570px] lg:mb-0">
              <div className="mx-[-12px] flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="Représentation & distribution de marques" />
                  <List text="Couverture des canaux de vente B2B" />
                  <List text="Gestion méthodique des marchandises" />
                </div>

                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="Respect des exigences du secteur" />
                  <List text="Accompagnement commercial dédié" />
                  <List text="Rigueur opérationnelle & réactivité" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto aspect-25/24 max-w-[500px] border border-[#141d23]/20 dark:border-white/20 bg-[#f6faff] dark:bg-[#1a1c1e] p-6 lg:mr-0">
              <Image
                src="/images/about/about-image.svg"
                alt="JIM DISTRIBUTION logistics"
                fill
                className="mx-auto max-w-full dark:hidden lg:mr-0 p-4 object-contain"
              />
              <Image
                src="/images/about/about-image-dark.svg"
                alt="JIM DISTRIBUTION logistics"
                fill
                className="mx-auto hidden max-w-full dark:block lg:mr-0 p-4 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
