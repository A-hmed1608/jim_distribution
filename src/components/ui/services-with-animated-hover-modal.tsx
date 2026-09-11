"use client";

import { cn } from "@/lib/utils";
import gsap from "gsap";
import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface ServiceProject {
  title: string;
  category: string;
  color: string;
  src: string;
  step?: string;
  description?: string;
}

const defaultProjects: ServiceProject[] = [
  {
    step: "01",
    title: "Approvisionnement & Sourcing",
    category: "Fournisseurs & Contrôle à Quai",
    color: "#0059bb",
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    description: "Réception directe auprès des fabricants avec contrôle rigoureux des DLUO et des lots.",
  },
  {
    step: "02",
    title: "Stockage & Entreposage Moderne",
    category: "Sécurisation & Chaîne du Froid",
    color: "#0f172a",
    src: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop",
    description: "Plateformes logistiques conformes aux normes agroalimentaires avec gestion FIFO/FEFO.",
  },
  {
    step: "03",
    title: "Distribution & Livraison Rapide",
    category: "Réseau Nord du Maroc & Flotte Dédiée",
    color: "#0284c7",
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop",
    description: "Livraison cadencée pour GMS, grossistes, CHR et détaillants dans tout le Nord du Maroc.",
  },
  {
    step: "04",
    title: "Accompagnement Commercial",
    category: "Merchandising & Animation Terrain",
    color: "#047857",
    src: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&auto=format&fit=crop",
    description: "Force de vente sur le terrain pour optimiser les réassorts et dynamiser le sell-out.",
  },
];

const scaleAnimation: Variants = {
  closed: {
    scale: 0,
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] as [number, number, number, number] },
    x: "-50%",
    y: "-50%",
  },
  enter: {
    scale: 1,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
    x: "-50%",
    y: "-50%",
  },
  initial: { scale: 0, x: "-50%", y: "-50%" },
};

interface ServicesAnimatedHoverModalProps {
  title?: string;
  subtitle?: string;
  projects?: ServiceProject[];
  className?: string;
}

export function ServicesWithAnimatedHoverModal({
  title = "Nos Services & Processus",
  subtitle = "Notre chaîne de valeur intégrée couvre chaque étape : de la réception chez le fournisseur jusqu'à la mise en rayon et le suivi commercial.",
  projects = defaultProjects,
  className,
}: ServicesAnimatedHoverModalProps) {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className={cn("py-16 md:py-24 overflow-hidden bg-[#f6faff] dark:bg-[#141d23] text-[#141d23] dark:text-white transition-colors", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-[#141d23]/10 dark:border-white/10 pb-8">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0059bb]/10 text-[#0059bb] dark:bg-[#adc7ff]/10 dark:text-[#adc7ff] mb-3">
              Processus de Distribution
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
              {title}
            </h2>
          </div>
          <p className="max-w-md font-sans text-sm sm:text-base text-[#414754] dark:text-white/70 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center border-t border-[#141d23]/15 dark:border-white/15">
            {projects.map((project, index) => (
              <ProjectItem
                index={index}
                key={project.title}
                project={project}
                setModal={setModal}
              />
            ))}
          </div>

          <HoverModal modal={modal} projects={projects} />
        </div>
      </div>
    </div>
  );
}

interface ProjectItemProps {
  index: number;
  project: ServiceProject;
  setModal: (state: { active: boolean; index: number }) => void;
}

function ProjectItem({ index, project, setModal }: ProjectItemProps) {
  return (
    <div
      className="group relative flex w-full cursor-pointer flex-col md:flex-row md:items-center justify-between border-b border-[#141d23]/15 dark:border-white/15 px-4 sm:px-8 py-6 sm:py-8 md:py-10 transition-all duration-300 hover:bg-[#0059bb]/5 dark:hover:bg-white/[0.03]"
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
    >
      <div className="flex flex-col w-full md:w-auto">
        <div className="flex items-baseline gap-3.5 sm:gap-6 transition-all duration-300 md:group-hover:translate-x-3">
          {project.step && (
            <span className="font-display text-sm sm:text-lg font-bold text-[#0059bb] dark:text-[#adc7ff]">
              {project.step}
            </span>
          )}
          <h3 className="font-display text-xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#141d23] dark:text-white">
            {project.title}
          </h3>
        </div>

        {/* Visible on Mobile & Tablets (< md): Image card + description */}
        <div className="block md:hidden mt-3.5">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#141d23]/10 dark:border-white/10 shadow-sm mb-2.5">
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-3">
              <span className="text-white text-[11px] font-semibold uppercase tracking-wider">
                {project.category}
              </span>
            </div>
          </div>
          {project.description && (
            <p className="font-sans text-xs text-[#414754] dark:text-white/70 leading-relaxed">
              {project.description}
            </p>
          )}
        </div>
      </div>

      {/* Visible on Desktop (>= md) */}
      <div className="hidden md:flex items-center justify-end gap-6 transition-all duration-300 group-hover:translate-x-2">
        <p className="font-sans text-xs sm:text-sm font-medium uppercase tracking-wider text-[#414754] dark:text-white/60">
          {project.category}
        </p>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#141d23]/20 dark:border-white/20 text-[#141d23] dark:text-white group-hover:bg-[#0059bb] group-hover:text-white group-hover:border-[#0059bb] transition-all">
          →
        </span>
      </div>
    </div>
  );
}

interface HoverModalProps {
  modal: { active: boolean; index: number };
  projects: ServiceProject[];
}

function HoverModal({ modal, projects }: HoverModalProps) {
  const { active, index } = modal;
  const modalContainer = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorLabel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!modalContainer.current || !cursor.current || !cursorLabel.current) return;

    // Move Container with GSAP
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.6,
      ease: "power3.out",
    });
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.6,
      ease: "power3.out",
    });

    // Move cursor
    const xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.4,
      ease: "power3.out",
    });
    const yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.4,
      ease: "power3.out",
    });

    // Move cursor label
    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.35,
      ease: "power3.out",
    });
    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.35,
      ease: "power3.out",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      xMoveContainer(clientX);
      yMoveContainer(clientY);
      xMoveCursor(clientX);
      yMoveCursor(clientY);
      xMoveCursorLabel(clientX);
      yMoveCursorLabel(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        animate={active ? "enter" : "closed"}
        className="pointer-events-none fixed top-0 left-0 z-[9990] hidden md:flex h-72 w-96 items-center justify-center overflow-hidden rounded-2xl shadow-2xl border border-white/20"
        initial="initial"
        ref={modalContainer}
        variants={scaleAnimation}
      >
        <div
          className="absolute h-full w-full transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{ top: `${index * -100}%` }}
        >
          {projects.map((project, idx) => (
            <div
              className="relative flex h-full w-full items-center justify-center overflow-hidden"
              key={project.title + idx}
              style={{ backgroundColor: project.color }}
            >
              <Image
                alt={project.title}
                className="h-full w-full object-cover"
                height={350}
                src={project.src}
                width={500}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-5">
                <span className="text-white text-xs font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={active ? "enter" : "closed"}
        className="pointer-events-none fixed top-0 left-0 z-[9995] hidden md:flex h-20 w-20 items-center justify-center rounded-full bg-[#0059bb] font-sans font-bold text-xs uppercase tracking-wider text-white shadow-xl"
        initial="initial"
        ref={cursor}
        variants={scaleAnimation}
      />

      <motion.div
        animate={active ? "enter" : "closed"}
        className="pointer-events-none fixed top-0 left-0 z-[9996] hidden md:flex h-20 w-20 items-center justify-center rounded-full bg-transparent font-sans font-bold text-xs uppercase tracking-wider text-white"
        initial="initial"
        ref={cursorLabel}
        variants={scaleAnimation}
      >
        Détails
      </motion.div>
    </>
  );
}

export default ServicesWithAnimatedHoverModal;
