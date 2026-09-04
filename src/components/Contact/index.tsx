import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-24 bg-[#f6faff] dark:bg-[#141d23]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 border border-[#141d23]/20 dark:border-white/20 bg-white dark:bg-[#1a1c1e] p-8 sm:p-12 lg:mb-0">
              <span className="mb-3 inline-block font-mono text-xs font-semibold text-[#0059bb] dark:text-[#adc7ff] uppercase">
                [ FORMULAIRE DE COTATION B2B ]
              </span>
              <h2 className="mb-3 font-display text-2xl font-bold uppercase tracking-tight text-[#141d23] dark:text-white sm:text-3xl">
                DEMANDE DE DEVIS & CONTACT COMMERCIAL
              </h2>
              <p className="mb-10 font-sans text-sm text-[#414754] dark:text-white/70">
                Remplissez le formulaire ci-dessous pour toute demande de cotation, d&apos;approvisionnement ou de partenariat commercial.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="name"
                        className="mb-2 block font-mono text-xs font-semibold uppercase text-[#141d23] dark:text-white"
                      >
                        Nom & Prénom *
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Mohamed Alami"
                        className="w-full border border-[#141d23]/20 dark:border-white/20 bg-[#f6faff] dark:bg-[#141d23] px-4 py-3 font-sans text-sm text-[#141d23] dark:text-white outline-none focus:border-[#0059bb]"
                        required
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="company"
                        className="mb-2 block font-mono text-xs font-semibold uppercase text-[#141d23] dark:text-white"
                      >
                        Société / Raison Sociale *
                      </label>
                      <input
                        type="text"
                        placeholder="Nom de votre entreprise"
                        className="w-full border border-[#141d23]/20 dark:border-white/20 bg-[#f6faff] dark:bg-[#141d23] px-4 py-3 font-sans text-sm text-[#141d23] dark:text-white outline-none focus:border-[#0059bb]"
                        required
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="mb-2 block font-mono text-xs font-semibold uppercase text-[#141d23] dark:text-white"
                      >
                        Email Professionnel *
                      </label>
                      <input
                        type="email"
                        placeholder="contact@societe.ma"
                        className="w-full border border-[#141d23]/20 dark:border-white/20 bg-[#f6faff] dark:bg-[#141d23] px-4 py-3 font-sans text-sm text-[#141d23] dark:text-white outline-none focus:border-[#0059bb]"
                        required
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="phone"
                        className="mb-2 block font-mono text-xs font-semibold uppercase text-[#141d23] dark:text-white"
                      >
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        placeholder="+212 5XX XX XX XX"
                        className="w-full border border-[#141d23]/20 dark:border-white/20 bg-[#f6faff] dark:bg-[#141d23] px-4 py-3 font-sans text-sm text-[#141d23] dark:text-white outline-none focus:border-[#0059bb]"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-6">
                      <label
                        htmlFor="activity"
                        className="mb-2 block font-mono text-xs font-semibold uppercase text-[#141d23] dark:text-white"
                      >
                        Secteur / Canal de Distribution
                      </label>
                      <select
                        className="w-full border border-[#141d23]/20 dark:border-white/20 bg-[#f6faff] dark:bg-[#141d23] px-4 py-3 font-sans text-sm text-[#141d23] dark:text-white outline-none focus:border-[#0059bb]"
                      >
                        <option value="retail">Grande Distribution / Supermarché</option>
                        <option value="chr">Hôtellerie / Restauration (CHR)</option>
                        <option value="wholesale">Grossiste / Demi-gros</option>
                        <option value="other">Autre secteur</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="mb-2 block font-mono text-xs font-semibold uppercase text-[#141d23] dark:text-white"
                      >
                        Détails de votre Demande / Devis *
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Précisez vos besoins d'approvisionnement ou votre demande de cotation..."
                        className="w-full resize-none border border-[#141d23]/20 dark:border-white/20 bg-[#f6faff] dark:bg-[#141d23] px-4 py-3 font-sans text-sm text-[#141d23] dark:text-white outline-none focus:border-[#0059bb]"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="w-full bg-[#0059bb] hover:bg-[#0070ea] px-8 py-4 font-mono text-xs font-bold tracking-wider text-white uppercase transition-colors border border-[#0059bb]"
                    >
                      DEMANDER UN DEVIS
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
