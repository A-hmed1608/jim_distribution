"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#141d23] py-12 md:py-16">
      <div className="container">
        <div className="relative rounded-2xl border border-[#141d23]/10 dark:border-white/10 bg-gradient-to-br from-[#f6faff] to-white dark:from-[#1a2330] dark:to-[#141d23] px-6 py-12 md:px-12 md:py-16 lg:py-20 overflow-hidden">
          {/* Magic UI Interactive Grid Pattern background */}
          <div className="absolute inset-0 opacity-[0.35] dark:opacity-[0.25] pointer-events-none">
            <InteractiveGridPattern
              width={48}
              height={48}
              squares={[24, 16]}
              className="[mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
            />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            {/* Left side - Text content */}
            <div className="flex-1 max-w-xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#0059bb] dark:text-[#adc7ff] mb-4">
                Ready to get started?
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#141d23] dark:text-white mb-6">
                Call to Action
              </h2>
              <p className="font-sans text-base md:text-lg leading-relaxed text-[#414754]/80 dark:text-white/60 mb-8 max-w-lg">
                Get access to our collection of pre-built blocks and components today.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" className="rounded-lg bg-[#141d23] dark:bg-white text-white dark:text-[#141d23] hover:bg-[#141d23]/90 dark:hover:bg-white/90 font-mono text-sm font-semibold tracking-wider uppercase px-6 py-3">
                  Get Access
                </Button>
                <Button variant="outline" size="lg" className="rounded-lg border-[#141d23]/20 dark:border-white/20 bg-white dark:bg-transparent text-[#141d23] dark:text-white hover:bg-[#f6faff] dark:hover:bg-white/5 font-mono text-sm font-semibold tracking-wider uppercase px-6 py-3">
                  Schedule a Demo
                </Button>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex-1 w-full max-w-md lg:max-w-lg">
              <div className="relative aspect-[4/3] rounded-2xl bg-[#eef1f5] dark:bg-white/5 border border-[#141d23]/5 dark:border-white/5 overflow-hidden">
                <Image
                  src="/images/logo/logo_jim.png"
                  alt="Call to action visual"
                  fill
                  className="object-contain p-10"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
