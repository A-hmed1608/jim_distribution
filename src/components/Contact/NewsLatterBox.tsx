"use client";

import { Badge } from "@/components/ui/badge";

const NewsLatterBox = () => {
  return (
    <div className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm dark:bg-[#121c24]/90 dark:border-white/10 p-8 sm:p-9 shadow-sm transition-all">
      <div className="mb-4">
        <Badge
          variant="secondary"
          className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-white font-semibold text-xs px-2.5 py-1"
        >
          Département Commercial
        </Badge>
      </div>

      <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground dark:text-white">
        JIM DISTRIBUTION
      </h3>
      <p className="text-sm text-muted-foreground mb-6 pb-6 border-b border-border/40 dark:border-white/10 leading-relaxed">
        Notre équipe commerciale est à votre disposition pour étudier vos besoins et vous proposer une cotation personnalisée.
      </p>

      <div className="space-y-5">
        <div className="border-b border-border/40 dark:border-white/10 pb-4">
          <span className="text-xs font-bold text-primary dark:text-[#adc7ff] uppercase tracking-wider block mb-1.5">
            Contact Direct
          </span>
          <p className="text-sm text-foreground/90 dark:text-white/90">
            Email: <a href="mailto:jimdistribution@gmail.com" className="text-primary hover:underline font-medium">jimdistribution@gmail.com</a>
          </p>
          <p className="text-sm text-foreground/90 dark:text-white/90 mt-1">
            Tél: <a href="tel:+212610084653" className="text-primary hover:underline font-medium">+212 6 10 08 46 53</a>
          </p>
        </div>

        <div className="border-b border-border/40 dark:border-white/10 pb-4">
          <span className="text-xs font-bold text-primary dark:text-[#adc7ff] uppercase tracking-wider block mb-1.5">
            Zone d&apos;Intervention & Adresse
          </span>
          <p className="text-sm text-foreground/90 dark:text-white/90">
            Zone: <span className="text-muted-foreground font-medium">Le Nord du Maroc (Tanger, Tétouan, Martil & environs)</span>
          </p>
          <p className="text-sm text-foreground/90 dark:text-white/90 mt-1">
            Adresse: <span className="text-muted-foreground font-medium">Rue Bni Guemel Aug.Pui Local 27 Lot Aghrasse 93150</span>
          </p>
        </div>

        <div>
          <span className="text-xs font-bold text-primary dark:text-[#adc7ff] uppercase tracking-wider block mb-1.5">
            Horaires d&apos;Ouverture
          </span>
          <p className="text-sm text-foreground/90 dark:text-white/90">
            Du Lundi au Vendredi: <span className="text-muted-foreground font-medium">08h30 - 18h00</span>
          </p>
          <p className="text-sm text-foreground/90 dark:text-white/90 mt-1">
            Samedi: <span className="text-muted-foreground font-medium">08h30 - 13h00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLatterBox;
