"use client";

import * as React from "react";
import Image from "next/image";
import Section from "@/components/section/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Title, Callout } from "@/components/ui/typography";

const LOCATION_IMAGES = [
  { src: "/location/2.jpg", alt: "Venue impression 2" },
  { src: "/location/3.jpg", alt: "Venue impression 3" },
  { src: "/location/4.jpg", alt: "Venue impression 4" },
  { src: "/location/5.jpg", alt: "Venue impression 5" },
  { src: "/location/6.jpg", alt: "Venue impression 6" },
  { src: "/location/7.jpg", alt: "Venue impression 7" },
  { src: "/location/8.jpg", alt: "Venue impression 8" },
  { src: "/location/9.jpg", alt: "Venue impression 9" },
  { src: "/location/10.jpg", alt: "Venue impression 10" },
  { src: "/location/11.jpg", alt: "Venue impression 11" },
];

export function LocationImpressionSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const update = () => setCurrent(api.selectedScrollSnap());
    update();

    api.on("select", update);
    api.on("reInit", update);

    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  const getItemClasses = (index: number) => {
    const direct = Math.abs(index - current);
    const wrap = LOCATION_IMAGES.length - direct;
    const distance = Math.min(direct, wrap);

    if (distance === 0) return "brightness-100";
    if (distance === 1) return "brightness-80";
    return "brightness-50";
  };

  const getImageClasses = (index: number) => {
    const direct = Math.abs(index - current);
    const wrap = LOCATION_IMAGES.length - direct;
    const distance = Math.min(direct, wrap);

    if (distance >= 2) return "[filter:blur(3px)] scale-110";
    if (distance === 1) return "[filter:blur(1px)] scale-105";
    return "scale-100";
  };

  return (
    <div id="impression" className="scroll-mt-24 md:scroll-mt-40">
      <section className="w-full relative">
        <div className="relative pb-8">
          <Carousel
            setApi={setApi}
            className="w-full flex flex-col"
            opts={{ loop: true, align: "center" }}
          >
            {/* TOP: slides + desktop overlays */}
            <div className="relative">
              <CarouselContent className="ml-0">
                {LOCATION_IMAGES.map((img, index) => (
                  <CarouselItem
                    key={`${img.alt}-${index}`}
                    className="pl-0 basis-[70%] sm:basis-[45%] md:basis-[28%] lg:basis-[22%]"
                  >
                    <div
                      className={cn(
                        "transition-all duration-500 overflow-hidden group",
                        getItemClasses(index)
                      )}
                    >
                      <div className="relative aspect-square w-full">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className={cn(
                            "object-cover transition-all duration-500",
                            getImageClasses(index)
                          )}
                          sizes="(min-width:1024px) 22vw, (min-width:768px) 28vw, (min-width:640px) 45vw, 70vw"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Edge vignette to emphasize center slide */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-0 md:w-[200px] z-20 bg-gradient-to-r from-black/50 via-black/40 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-0 md:w-[200px] z-20 bg-gradient-to-l from-black/50 via-black/40 to-transparent" />

              {/* Desktop overlay arrows – constrained */}
              <div className="hidden md:block absolute inset-0 pointer-events-none z-30">
                            <div className="max-w-7xl mx-auto px-6 py-12 md:px-0 h-full flex justify-between items-stretch">
                                <CarouselPrevious
                                  className={cn(
                                    "pointer-events-auto cursor-pointer",
                                    "static left-auto right-auto top-auto translate-y-0",
                                    "h-full w-14",
                                    "bg-white/50 backdrop-blur-md",
                                    "border-none",
                                    "rounded-none",
                                    "text-white",
                                    "shadow-lg",
                                    "hover:bg-white/30",
                                    "transition-colors"
                                  )}
                                />
                                <CarouselNext
                                  className={cn(
                                    "pointer-events-auto cursor-pointer",
                                    "static left-auto right-auto top-auto translate-y-0",
                                    "h-full w-14",
                                    "bg-white/50 backdrop-blur-md",
                                    "border-none",
                                    "rounded-none",
                                    "text-white",
                                    "shadow-lg",
                                    "hover:bg-white/30",
                                    "transition-colors"
                                  )}
                                />
                            </div>
                          </div>
            </div>

            {/* BOTTOM: text + controls (mobile controls only, like speakers) */}
            <Section className="!py-0">
              <div className="w-full max-w-7xl mx-auto px-6 md:px-0 py-8 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-8">
                  {/* Controls FIRST on mobile, hidden on md+ */}
                  <div className="order-1 md:order-2 flex justify-center md:hidden">
                    <div
                      className={cn(
                        "flex gap-4",
                        LOCATION_IMAGES.length <= 1 && "opacity-40 pointer-events-none"
                      )}
                    >
                      <CarouselPrevious />
                      <CarouselNext />
                    </div>
                  </div>

                  {/* Text SECOND on mobile, FIRST on md+ */}
                  <div className="order-2 md:order-1">
                    <Title>Impression</Title>
                    <Callout>
                      Take a closer look at the venue and experience the atmosphere that defines exec(ut).
                    </Callout>
                  </div>
                </div>
              </div>
            </Section>
          </Carousel>
        </div>
      </section>
    </div>
  );
}
