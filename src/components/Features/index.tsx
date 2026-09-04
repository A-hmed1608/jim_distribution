import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-24 bg-[#f6faff] dark:bg-[#141d23] border-b border-[#141d23]/10 dark:border-white/10">
        <div className="container">
          <SectionTitle
            title="NOS SERVICES & ENGAGEMENTS LOGISTIQUES"
            paragraph="Organisation structurée dédiée au déploiement commercial et à la distribution des produits agroalimentaires et FMCG."
            center
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
