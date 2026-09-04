"use client";

const NewsLatterBox = () => {
  return (
    <div className="border border-[#141d23]/20 dark:border-white/20 bg-white dark:bg-[#1a1c1e] p-8">
      <span className="mb-3 inline-block font-mono text-xs font-semibold text-[#0059bb] dark:text-[#adc7ff] uppercase">
        [ INFORMATIONS DÉPARTEMENT COMMERCIAL ]
      </span>
      <h3 className="mb-4 font-display text-xl font-bold uppercase tracking-tight text-[#141d23] dark:text-white">
        JIM DISTRIBUTION
      </h3>
      <p className="font-sans text-sm text-[#414754] dark:text-white/70 mb-8 border-b border-[#141d23]/10 dark:border-white/10 pb-6 leading-relaxed">
        Notre équipe commerciale est disponible pour étudier vos besoins et vous proposer une cotation adaptée.
      </p>

      <div className="space-y-5 font-mono text-xs">
        <div className="border-b border-[#141d23]/10 dark:border-white/10 pb-4">
          <div className="text-[#0059bb] dark:text-[#adc7ff] uppercase font-bold mb-1">
            [ CONTACT DIRECT ]
          </div>
          <p className="text-[#141d23] dark:text-white font-sans text-sm">
            Email: <span className="font-mono text-xs">[À COMPLÉTER]</span>
          </p>
          <p className="text-[#141d23] dark:text-white font-sans text-sm mt-1">
            Tél: <span className="font-mono text-xs">[À COMPLÉTER]</span>
          </p>
        </div>

        <div className="border-b border-[#141d23]/10 dark:border-white/10 pb-4">
          <div className="text-[#0059bb] dark:text-[#adc7ff] uppercase font-bold mb-1">
            [ SIÈGE & COUVERTURE ]
          </div>
          <p className="text-[#141d23] dark:text-white font-sans text-sm">
            Zone: <span className="font-mono text-xs">[ZONES À CONFIRMER]</span>
          </p>
          <p className="text-[#141d23] dark:text-white font-sans text-sm mt-1">
            Adresse: <span className="font-mono text-xs">[À COMPLÉTER]</span>
          </p>
        </div>

        <div>
          <div className="text-[#0059bb] dark:text-[#adc7ff] uppercase font-bold mb-1">
            [ HORAIRES D&apos;OUVERTURE ]
          </div>
          <p className="text-[#141d23] dark:text-white font-sans text-sm">
            Du Lundi au Vendredi: 08h30 - 18h00
          </p>
          <p className="text-[#141d23] dark:text-white font-sans text-sm mt-1">
            Samedi: 08h30 - 13h00
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLatterBox;
