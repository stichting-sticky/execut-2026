"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type GridImage = {
  src: string;
  alt: string;
};

interface LocationImageGridProps {
  images: GridImage[];
  /** Hover scale factor (default: 1.05) */
  hoverScale?: 1.03 | 1.05 | 1.08 | 1.1;
  className?: string;
}

export function LocationImageGrid({
  images,
  hoverScale = 1.05,
  className,
}: LocationImageGridProps) {
  return (
    <div className={cn("grid grid-cols-3 grid-rows-2 gap-4", className)}>
      {images.map((img, index) => (
        <div
          key={`${img.src}-${index}`}
          className="relative overflow-hidden aspect-[16/10] shadow-lg"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className={cn(
              "object-cover transition-transform duration-300 ease-out",
              hoverScale === 1.03 && "hover:scale-[1.03]",
              hoverScale === 1.05 && "hover:scale-[1.05]",
              hoverScale === 1.08 && "hover:scale-[1.08]",
              hoverScale === 1.1 && "hover:scale-[1.1]"
            )}
          />
        </div>
      ))}
    </div>
  );
}
