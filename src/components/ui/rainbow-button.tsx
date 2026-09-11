import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const rainbowButtonVariants = cva(
  cn(
    "relative cursor-pointer group transition-all duration-300 animate-rainbow",
    "inline-flex items-center justify-center gap-2.5 shrink-0",
    "rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
    "text-sm font-semibold whitespace-nowrap",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0"
  ),
  {
    variants: {
      variant: {
        default: cn(
          "border-0 [border:calc(0.125rem)_solid_transparent]",
          // Light Mode: Primary brand background with rainbow animated border
          "bg-[linear-gradient(#0059bb,#0059bb),linear-gradient(#0059bb_50%,rgba(0,89,187,0.6)_80%,rgba(0,89,187,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]",
          "bg-[length:200%] text-white",
          "[background-clip:padding-box,border-box,border-box] [background-origin:border-box]",
          // Glowing rainbow aura beneath the button
          "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-2/5 before:w-4/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] before:bg-[length:200%] before:[filter:blur(0.85rem)] before:opacity-75 before:transition-opacity group-hover:before:opacity-100",
          // Dark Mode: Deep dark background with glowing rainbow animated border
          "dark:bg-[linear-gradient(#141d23,#141d23),linear-gradient(#141d23_50%,rgba(20,29,35,0.6)_80%,rgba(20,29,35,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]",
          "dark:text-white"
        ),
        outline: cn(
          "border border-input [border:calc(0.125rem)_solid_transparent]",
          "bg-[linear-gradient(#ffffff,#ffffff),linear-gradient(#ffffff_50%,rgba(255,255,255,0.6)_80%,rgba(255,255,255,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]",
          "bg-[length:200%] text-foreground",
          "[background-clip:padding-box,border-box,border-box] [background-origin:border-box]",
          "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-2/5 before:w-4/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] before:bg-[length:200%] before:[filter:blur(0.85rem)] before:opacity-70",
          "dark:bg-[linear-gradient(#141d23,#141d23),linear-gradient(#141d23_50%,rgba(20,29,35,0.6)_80%,rgba(20,29,35,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]",
          "dark:text-white"
        ),
      },
      size: {
        default: "h-11 px-7 py-3 text-sm",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof rainbowButtonVariants> {}

const RainbowButton = React.forwardRef<HTMLButtonElement, RainbowButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        data-slot="button"
        className={cn(rainbowButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

RainbowButton.displayName = "RainbowButton"

export { RainbowButton, rainbowButtonVariants }
