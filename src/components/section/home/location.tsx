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
import { Callout, Supertitle, Title, H3 } from "@/components/ui/typography";
import { EVENT } from "@/data/event";
import { LocationImageGrid } from "@/components/ui/image-grid";
import Section from "../section";

const LOCATION_IMAGES = [
  { src: "/location/1.jpg", alt: "Venue exterior" },
  { src: "/location/12.jpg", alt: "Main hall" },
  { src: "/location/13.jpg", alt: "Networking area" },
  { src: "/location/14.jpg", alt: "test 1" },
  { src: "/location/15.jpg", alt: "test 2" },
  { src: "/location/16.jpg", alt: "" },
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
    <Section className="bg-gradient-to-tl from-tertiary/0 from-50% via-secondary/25 via-75% to-tertiary/75 to-100% py-28 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-[1.7fr_1fr] gap-12 items-center">
        {/* Mobile: carousel */}
        <div className="relative min-w-0 order-1 md:hidden">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background/0 via-background/0 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background/0 via-background/0 to-transparent" />

            <div className="flex py-4 items-center justify-center text-center">
              <H3 className="relative inline-block">
                {EVENT.venue.real}
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-50 h-[2px] bg-accent" />
              </H3>
            </div>

            <Carousel setApi={setApi} className="w-full" opts={{ loop: true, align: "center" }}>
              <CarouselContent className="py-6">
                {LOCATION_IMAGES.map((img, index) => {
                  const isSelected = index === selected;

                  return (
                    <CarouselItem
                      key={`${img.src}-${index}`}
                      className={cn("pl-4", "basis-[85%] sm:basis-[60%]")}
                    >
                      <div
                        className={cn(
                          "transition-transform duration-300 ease-out",
                          isSelected ? "scale-[1.05]" : "scale-[0.95] hover:scale-[1.02]"
                        )}
                      >
                        <div className="relative overflow-hidden shadow-lg aspect-[16/10]">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="85vw"
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

        {/* Desktop: grid */}
        <div className="relative min-w-0 order-1 hidden md:block">
          <div className="flex py-4 items-center justify-center text-center">
            <H3 className="relative inline-block">
              {EVENT.venue.real}
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-50 h-[2px] bg-accent" />
            </H3>
          </div>

          <LocationImageGrid images={LOCATION_IMAGES} hoverScale={1.08} className="mt-8" />
        </div>

        {/* Text */}
        <div className="max-w-xl order-2 md:text-right md:ml-auto">
          <Supertitle>exec(ut)</Supertitle>
          <Title>This years venue.</Title>
          <Callout>
            A carefully chosen venue, perfect for exec(ut) {EVENT.year} in every detail.
          </Callout>

          <div className="mt-6">
            <Button variant="accent" asChild className="pointer-events-auto">
              <Link href="/location">See venue</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
