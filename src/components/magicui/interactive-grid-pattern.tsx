import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface InteractiveGridPatternProps
  extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  squares?: [number, number]; // [horizontal, vertical]
  className?: string;
  squaresClassName?: string;
}

export function InteractiveGridPattern({
  width = 40,
  height = 40,
  squares = [24, 24],
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) {
  const [horizontal, vertical] = squares;
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);

  return (
    <svg
      width={width * horizontal}
      height={height * vertical}
      viewBox={`0 0 ${width * horizontal} ${height * vertical}`}
      className={cn(
        "absolute inset-0 h-full w-full pointer-events-auto",
        className
      )}
      {...props}
    >
      <defs>
        <linearGradient id="grid-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0059bb" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#00c853" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#ff9100" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      {Array.from({ length: horizontal * vertical }).map((_, index) => {
        const x = (index % horizontal) * width;
        const y = Math.floor(index / horizontal) * height;
        const isHovered = hoveredSquare === index;

        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={width}
            height={height}
            className={cn(
              "stroke-[#141d23]/5 dark:stroke-white/5 transition-all duration-300",
              isHovered
                ? "fill-[#0059bb]/20 dark:fill-[#0059bb]/30 stroke-[#0059bb]/40"
                : "fill-transparent",
              squaresClassName
            )}
            onMouseEnter={() => setHoveredSquare(index)}
            onMouseLeave={() => setHoveredSquare(null)}
          />
        );
      })}
    </svg>
  );
}
