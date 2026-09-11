"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InteractiveTravelCardProps {
  title: string;
  subtitle: string;
  description?: string;
  imageUrl: string;
  actionText?: string;
  href?: string;
  onActionClick?: () => void;
  className?: string;
}

export const InteractiveTravelCard = React.forwardRef<
  HTMLDivElement,
  InteractiveTravelCardProps
>(
  (
    {
      title,
      subtitle,
      description,
      imageUrl,
      actionText = "En savoir plus",
      href = "/contact",
      onActionClick,
      className,
    },
    ref
  ) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const rotateX = useTransform(springY, [-0.5, 0.5], ["10.5deg", "-10.5deg"]);
    const rotateY = useTransform(springX, [-0.5, 0.5], ["-10.5deg", "10.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const { width, height, left, top } = rect;
      const mouseXVal = e.clientX - left;
      const mouseYVal = e.clientY - top;
      const xPct = mouseXVal / width - 0.5;
      const yPct = mouseYVal / height - 0.5;
      mouseX.set(xPct);
      mouseY.set(yPct);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    return (
      <div style={{ perspective: "1000px" }} className="w-full flex justify-center">
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className={cn(
            "relative h-[21.5rem] w-full max-w-[300px] rounded-2xl bg-transparent shadow-xl border border-white/10 overflow-visible transition-shadow duration-300 hover:shadow-[#0059bb]/20",
            className
          )}
        >
          <div
            style={{
              transform: "translateZ(40px)",
              transformStyle: "preserve-3d",
            }}
            className="absolute inset-2 grid h-[calc(100%-1rem)] w-[calc(100%-1rem)] grid-rows-[1fr_auto] rounded-xl shadow-lg overflow-hidden"
          >
            {/* Background Image */}
            <img
              src={imageUrl}
              alt={`${title}, ${subtitle}`}
              className="absolute inset-0 h-full w-full rounded-xl object-cover"
            />

            {/* Darkening overlay for text contrast */}
            <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-b from-black/60 via-black/25 to-black/90" />

            {/* Card Content */}
            <div className="relative flex flex-col justify-between rounded-xl p-4 text-white h-full z-10">
              {/* Header section with badge & arrow */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <motion.span
                    style={{ transform: "translateZ(30px)" }}
                    className="inline-block px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#0059bb]/85 backdrop-blur-md text-white border border-white/20 mb-1.5"
                  >
                    {subtitle}
                  </motion.span>
                  <motion.h2
                    style={{ transform: "translateZ(45px)" }}
                    className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-white leading-tight"
                  >
                    {title}
                  </motion.h2>
                </div>
                <motion.a
                  href={href}
                  whileHover={{ scale: 1.1, rotate: "2.5deg" }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`En savoir plus sur ${title}`}
                  style={{ transform: "translateZ(50px)" }}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-md ring-1 ring-inset ring-white/30 transition-colors hover:bg-white/35"
                >
                  <ArrowUpRight className="h-3.5 w-3.5 text-white" />
                </motion.a>
              </div>

              {/* Description & Button */}
              <div className="space-y-2.5">
                {description && (
                  <motion.p
                    style={{ transform: "translateZ(35px)" }}
                    className="font-sans text-[11px] sm:text-xs text-white/85 leading-relaxed line-clamp-2"
                  >
                    {description}
                  </motion.p>
                )}

                <motion.a
                  href={href}
                  onClick={onActionClick}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ transform: "translateZ(40px)" }}
                  className={cn(
                    "block w-full rounded-lg py-2 text-center font-sans font-bold text-[11px] uppercase tracking-wider text-white transition-all cursor-pointer",
                    "bg-white/15 backdrop-blur-md ring-1 ring-inset ring-white/30 hover:bg-[#0059bb] hover:ring-[#0059bb]"
                  )}
                >
                  {actionText}
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
);

InteractiveTravelCard.displayName = "InteractiveTravelCard";
export default InteractiveTravelCard;
