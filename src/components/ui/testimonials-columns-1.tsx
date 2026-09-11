"use client";
import React from "react";
import { motion } from "motion/react";

export interface TestimonialItem {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: TestimonialItem[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-8 sm:p-9 rounded-3xl border border-[#141d23]/10 dark:border-white/10 bg-white dark:bg-[#1a1c1e] shadow-lg shadow-black/5 dark:shadow-black/20 max-w-xs w-full transition-all duration-300 hover:border-[#0059bb]/50"
                  key={`${index}-${i}`}
                >
                  <p className="text-sm leading-relaxed text-[#414754] dark:text-white/80 font-sans">
                    "{text}"
                  </p>
                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-[#141d23]/5 dark:border-white/5">
                    <img
                      width={42}
                      height={42}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-[#0059bb]/25 shrink-0"
                    />
                    <div className="flex flex-col min-w-0">
                      <div className="font-semibold text-sm tracking-tight leading-snug text-[#141d23] dark:text-white truncate">
                        {name}
                      </div>
                      <div className="text-xs leading-snug text-[#414754]/80 dark:text-white/60 tracking-tight truncate">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export default TestimonialsColumn;
