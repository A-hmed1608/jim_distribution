import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Enseignes Grande Distribution",
    designation: "Canal Retail & GMS",
    content: "Une organisation réactive et un respect constant des engagements de livraison. La régularité des approvisionnements est essentielle.",
    image: "",
    star: 5,
  },
  {
    id: 2,
    name: "Réseau CHR & Restauration",
    designation: "Hôtellerie & Restauration",
    content: "Une équipe professionnelle attentive aux exigences spécifiques de la restauration hors foyer. Disponibilité et écoute commerciale.",
    image: "",
    star: 5,
  },
  {
    id: 3,
    name: "Commerces & Grossistes",
    designation: "Réseau Traditionnel",
    content: "Un partenaire fiable pour la gestion des références et la continuité des approvisionnements sur l'ensemble du territoire.",
    image: "",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white dark:bg-[#141d23] border-b border-[#141d23]/10 dark:border-white/10">
      <div className="container">
        <SectionTitle
          title="ENGAGEMENT QUALITÉ & CONFIANCE B2B"
          paragraph="Confiance et rigueur partenariale au service des professionnels de la distribution agroalimentaire."
          center
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
