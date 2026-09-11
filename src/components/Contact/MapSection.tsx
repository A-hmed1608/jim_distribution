import React from "react";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";

const MapSection = () => {
  const googleMapsLink = "https://maps.app.goo.gl/3tNHVLP5pMyMWDEj6";
  const lat = 35.615873;
  const lng = -5.287325;

  return (
    <section className="relative w-full bg-background">
      {/* Section Header */}
      <div className="container mx-auto px-4 max-w-7xl pt-16 pb-8">
        <div className="text-center">
          <span className="inline-block mb-3 text-xs font-mono font-semibold tracking-[0.2em] uppercase text-[#0059bb]">
            LOCALISATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground dark:text-white">
            Où Nous Trouver
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-lg mx-auto">
            Rendez-nous visite à notre siège ou contactez-nous pour planifier un rendez-vous commercial.
          </p>
        </div>
      </div>

      {/* Map Container */}
      <div className="container mx-auto px-4 max-w-7xl pb-16">
        <div className="relative rounded-2xl overflow-hidden border border-border/60 dark:border-white/10 shadow-sm">
          {/* Google Maps Embed (100% FREE — no API key needed) */}
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDM2JzU3LjEiTiA1wrAxNycxNC4zIlc!5e0!3m2!1sfr!2sma!4v1`}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="JIM Distribution - Localisation"
            className="w-full"
          />

          {/* Floating Info Card */}
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm">
            <div className="rounded-xl border border-border/60 dark:border-white/10 bg-white/95 dark:bg-[#121c24]/95 backdrop-blur-md p-5 shadow-lg">
              <h3 className="text-base font-bold text-foreground dark:text-white flex items-center gap-2 mb-3">
                <MapPin className="size-4 text-[#0059bb]" />
                JIM Distribution
              </h3>

              <div className="space-y-2.5 text-sm text-muted-foreground">
                <div className="flex items-start gap-2.5">
                  <Navigation className="size-3.5 mt-0.5 shrink-0 text-[#0059bb]/70" />
                  <span className="text-xs">Rue Bni Guemel Aug.Pui Local 27 Lot Aghrasse 93150</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="size-3.5 mt-0.5 shrink-0 text-[#0059bb]/70" />
                  <a href="tel:+212610084653" className="hover:text-[#0059bb] transition-colors">+212 6 10 08 46 53</a>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="size-3.5 mt-0.5 shrink-0 text-[#0059bb]/70" />
                  <span>Lun – Ven : 8h30 – 18h00</span>
                </div>
              </div>

              {/* Navigation Button */}
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 w-full rounded-lg bg-[#0059bb] hover:bg-[#0070ea] text-white text-xs font-mono font-semibold uppercase tracking-wider py-2.5 px-4 transition-colors"
              >
                <Navigation className="size-3.5" />
                Itinéraire GPS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
