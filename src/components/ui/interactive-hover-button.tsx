import React from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function InteractiveHoverButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border border-[#0059bb] bg-[#0059bb] p-3 px-8 text-center text-sm font-bold text-white shadow-md shadow-[#0059bb]/25 transition-all duration-300 hover:bg-[#0070ea] hover:border-[#0070ea] hover:shadow-xl hover:shadow-[#0059bb]/40",
        className
      )}
      {...props}
    >
      {/* Default text with white indicator dot */}
      <div className="flex items-center justify-center gap-2.5">
        <div className="size-2.5 rounded-full bg-white transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>

      {/* Hover state: white background with site primary blue text and arrow */}
      <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-[#0059bb] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span className="font-bold">{children}</span>
        <ArrowRight className="size-4.5" />
      </div>
    </button>
  )
}
