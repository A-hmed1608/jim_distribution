import CTA from "@/components/cta";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/logo-cloud";
import TrustedBy from "@/components/TrustedBy";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JIM DISTRIBUTION | Distribution Agroalimentaire & FMCG au Maroc",
  description:
    "JIM DISTRIBUTION est votre partenaire de référence pour la distribution et la représentation commerciale des marques agroalimentaires et FMCG au Maroc.",
};

export default function Home() {
  return (
    <>
      <ScrollUp/>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Logo Cloud Block */}
      <LogoCloud />

      {/* 3. Video / Présentation */}
      <Video />

      {/* 4. Call to Action (CTA 02 Block) */}
      <CTA />

      {/* 5. Trusted by companies (Logo Grid) */}
      <TrustedBy />
    </>
  );
}
