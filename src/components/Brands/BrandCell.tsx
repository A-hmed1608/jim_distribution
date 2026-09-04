"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Brand } from "@/types/brand";

const BrandCell = ({ brand }: { brand: Brand }) => {
  const [display, setDisplay] = useState(brand);
  const [phase, setPhase] = useState<"idle" | "fadeOut" | "fadeIn">("idle");
  const prevIdRef = useRef(brand.id);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      prevIdRef.current = brand.id;
      return;
    }

    if (brand.id !== prevIdRef.current) {
      prevIdRef.current = brand.id;
      setPhase("fadeOut");
      const t1 = setTimeout(() => {
        setDisplay(brand);
        setPhase("fadeIn");
        const t2 = setTimeout(() => setPhase("idle"), 700);
        return () => clearTimeout(t2);
      }, 400);
      return () => clearTimeout(t1);
    }
  }, [brand.id]);

  const logoSrc = brand.imageLight ?? brand.image;

  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div
        className={
          phase === "fadeOut"
            ? "brand-fade-out"
            : phase === "fadeIn"
            ? "brand-fade-in"
            : ""
        }
      >
        <Image
          src={logoSrc}
          alt={brand.name}
          width={200}
          height={120}
          className="h-auto w-auto max-h-[80%] object-contain"
        />
      </div>
    </div>
  );
};

export default BrandCell;
