"use client";

import React, { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    activity: "Grande Distribution / Supermarché",
    message: "",
  });

  const [alertStatus, setAlertStatus] = useState<{
    type: "error" | "success" | null;
    message: string;
    details?: string;
  }>({
    type: null,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // Clear alert when user types
    if (alertStatus.type) {
      setAlertStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.name.trim() ||
      !formData.company.trim() ||
      !formData.email.trim()
    ) {
      setAlertStatus({
        type: "error",
        message: "Champs obligatoires manquants",
        details:
          "Veuillez remplir tous les champs obligatoires (*) avant d'envoyer votre demande.",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setAlertStatus({
        type: "error",
        message: "Adresse email invalide",
        details: "Veuillez saisir une adresse email professionnelle valide.",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setAlertStatus({
        type: "success",
        message: "Demande envoyée avec succès !",
        details:
          "Merci pour votre confiance. Notre équipe commerciale analysera vos besoins et vous recontactera sous 24h.",
      });

      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        activity: "Grande Distribution / Supermarché",
        message: "",
      });
    }, 800);
  };

  // Auto-dismiss alert after 10 seconds
  React.useEffect(() => {
    if (alertStatus.type) {
      const timer = setTimeout(() => {
        setAlertStatus({ type: null, message: "" });
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [alertStatus]);

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Alert Popup Overlay — appears like window.alert() but styled */}
        {alertStatus.type && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setAlertStatus({ type: null, message: "" })}
          >
            <div
              className="animate-in zoom-in-95 fade-in-50 duration-200 mx-4 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {alertStatus.type === "error" ? (
                <div className="rounded-xl border border-red-200 bg-white px-6 py-5 shadow-2xl dark:bg-[#162029] dark:border-red-900/60">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="size-5 shrink-0 text-red-600 dark:text-red-400 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-red-600 dark:text-red-400">
                        {alertStatus.message}
                      </p>
                      <p className="mt-1 text-sm text-red-600/80 dark:text-red-300">
                        {alertStatus.details || "Veuillez remplir tous les champs requis."}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setAlertStatus({ type: null, message: "" })}
                      className="text-red-400 hover:text-red-600 dark:hover:text-red-200 text-sm font-bold cursor-pointer"
                      aria-label="Fermer"
                    >
                      ✕
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAlertStatus({ type: null, message: "" })}
                    className="mt-4 w-full rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-mono font-semibold uppercase tracking-wider py-2.5 transition-colors cursor-pointer"
                  >
                    OK
                  </button>
                </div>
              ) : (
                <div className="rounded-xl border border-emerald-200 bg-white px-6 py-5 shadow-2xl dark:bg-[#162029] dark:border-emerald-900/60">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-emerald-700 dark:text-emerald-300">
                        {alertStatus.message}
                      </p>
                      {alertStatus.details && (
                        <p className="mt-1 text-sm text-emerald-600/80 dark:text-emerald-400">
                          {alertStatus.details}
                        </p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => setAlertStatus({ type: null, message: "" })}
                      className="text-emerald-400 hover:text-emerald-600 text-sm font-bold cursor-pointer"
                      aria-label="Fermer"
                    >
                      ✕
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAlertStatus({ type: null, message: "" })}
                    className="mt-4 w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-semibold uppercase tracking-wider py-2.5 transition-colors cursor-pointer"
                  >
                    OK
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="-mx-4 flex flex-wrap items-start">
          {/* Main Form Card */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 lg:mb-0 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm dark:bg-[#121c24]/90 dark:border-white/10 p-8 sm:p-10 shadow-sm transition-all">
              <h2 className="mb-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground dark:text-white">
                DEMANDE DE DEVIS & CONTACT COMMERCIAL
              </h2>
              <p className="mb-8 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Remplissez le formulaire ci-dessous pour toute demande de cotation, d&apos;approvisionnement ou de partenariat commercial.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 md:w-1/2">
                    <div className="mb-5">
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/80 dark:text-white/80"
                      >
                        Nom & Prénom *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ex: Mohamed Alami"
                        className="w-full rounded-xl border border-border/70 dark:border-white/15 bg-background dark:bg-[#18232c] px-4 py-3 text-sm text-foreground dark:text-white placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="w-full px-3 md:w-1/2">
                    <div className="mb-5">
                      <label
                        htmlFor="company"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/80 dark:text-white/80"
                      >
                        Société / Raison Sociale *
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nom de votre entreprise"
                        className="w-full rounded-xl border border-border/70 dark:border-white/15 bg-background dark:bg-[#18232c] px-4 py-3 text-sm text-foreground dark:text-white placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="w-full px-3 md:w-1/2">
                    <div className="mb-5">
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/80 dark:text-white/80"
                      >
                        Email Professionnel *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="contact@societe.ma"
                        className="w-full rounded-xl border border-border/70 dark:border-white/15 bg-background dark:bg-[#18232c] px-4 py-3 text-sm text-foreground dark:text-white placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="w-full px-3 md:w-1/2">
                    <div className="mb-5">
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/80 dark:text-white/80"
                      >
                        Téléphone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+212 5XX XX XX XX"
                        className="w-full rounded-xl border border-border/70 dark:border-white/15 bg-background dark:bg-[#18232c] px-4 py-3 text-sm text-foreground dark:text-white placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label
                        htmlFor="activity"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/80 dark:text-white/80"
                      >
                        Secteur / Canal de Distribution
                      </label>
                      <div className="relative">
                        <select
                          id="activity"
                          name="activity"
                          value={formData.activity}
                          onChange={handleChange}
                          className="w-full appearance-none rounded-xl border border-border/70 dark:border-white/15 bg-background dark:bg-[#18232c] px-4 py-3 text-sm text-foreground dark:text-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer pr-10"
                        >
                          <option value="Grande Distribution / Supermarché">
                            Grande Distribution / Supermarché
                          </option>
                          <option value="Hôtellerie / Restauration (CHR)">
                            Hôtellerie / Restauration (CHR)
                          </option>
                          <option value="Grossiste / Demi-gros">
                            Grossiste / Demi-gros
                          </option>
                          <option value="Autre secteur">Autre secteur</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full px-3">
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/80 dark:text-white/80"
                      >
                        Détails de votre Demande / Devis
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Précisez vos besoins d'approvisionnement ou votre demande de cotation..."
                        className="w-full rounded-xl border border-border/70 dark:border-white/15 bg-background dark:bg-[#18232c] px-4 py-3 text-sm text-foreground dark:text-white placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button Section with MagicUI InteractiveHoverButton */}
                  <div className="w-full px-3 flex items-center justify-start">
                    <InteractiveHoverButton
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Envoi en cours..." : "Demander un devis"}
                    </InteractiveHoverButton>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar Contact Info Card */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
