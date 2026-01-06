"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Callout, Supertitle, Title, H4 } from "@/components/ui/typography";
import { EVENT } from "@/data/event";

// Replace with your location photo data
const LOCATION_IMAGES = [
  { src: "/location/1.jpg", alt: "Venue exterior" },
  { src: "/location/1.jpg", alt: "Main hall" },
  { src: "/location/1.jpg", alt: "Networking area" },
  { src: "/location/1.jpg", alt: "test 1" },
  { src: "/location/1.jpg", alt: "test 2" },
];

export function HomeLocationSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const update = () => setSelected(api.selectedScrollSnap());
    update();

    api.on("select", update);
    api.on("reInit", update);

    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <section className="w-full flex flex-col bg-gradient-to-tl from-tertiary/0 from-50% via-secondary/25 via-75% to-tertiary/75 to-100%">
      <div className="max-w-7xl mx-auto px-6 md:px-0 py-28 md:py-32">
        {/* Carousel LEFT, text RIGHT on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-[1.7fr_1fr] gap-12 items-center">
          {/* LEFT: carousel (desktop) */}
          <div className="relative min-w-0 order-1">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background/0 via-background/0 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background/0 via-background/0 to-transparent" />

              <H4 className="mb-3 text-sm uppercase tracking-wide text-foreground/60 text-center">
                Tivoli Vredenburg, Utrecht
              </H4>

              <Carousel setApi={setApi} className="w-full" opts={{ loop: true, align: "center" }}>
                <CarouselContent className="py-6">
                  {LOCATION_IMAGES.map((img, index) => {
                    const isSelected = index === selected;

                    return (
                      <CarouselItem
                        key={`${img.src}-${index}`}
                        className={cn("pl-4", "basis-[85%] sm:basis-[60%] md:basis-[40%]")}
                      >
                        <div
                          className={cn(
                            "transition-transform duration-300 ease-out",
                            isSelected ? "scale-[1.05] md:scale-[1.12]" : "scale-[0.95] hover:scale-[1.02]"
                          )}
                        >
                          <div className="relative overflow-hidden shadow-lg aspect-[16/10]">
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              sizes="(min-width: 768px) 40vw, 85vw"
                              className="object-cover"
                              priority={index === 0}
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>

                <div className="mt-6 flex justify-center">
                  <div className="flex gap-4">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </div>
              </Carousel>
            </div>
          </div>

          {/* RIGHT: text (desktop), BELOW on mobile */}
          <div className="max-w-xl order-2 md:text-right md:ml-auto">
            <Supertitle>exec(ut)</Supertitle>
            <Title>This years location.</Title>
            <Callout>
              A carefully chosen venue, perfect for exec(ut) {EVENT.year} in every detail.
            </Callout>

            <div className="mt-6">
              <Button variant="accent" asChild className="pointer-events-auto">
                <Link href="/location">See location</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
