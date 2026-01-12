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
import { partners } from "@/data/partners";
import { Button } from "@/components/ui/button";
import { Callout, Supertitle, Title } from "@/components/ui/typography";
import { MASTER_TBA } from "@/config/tba";
import { TBA } from "@/components/ui/tba";
import { EVENT } from "@/data/event";
import { PartnersCloud } from "@/components/ui/partners-cloud";
import Section from "../section";

export function HomePartnersSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [selected, setSelected] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  // Keep selected index in state
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
    <Section className="bg-gradient-to-tl from-primary/0 from-50% via-primary/35 via-75% to-accent/75 to-100%">
        <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr] gap-12 items-center">
          {/* Carousel */}
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            <div className="relative overflow-visible">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background/0 via-background/0 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background/0 via-background/0 to-transparent" />

              <Carousel setApi={setApi} className="w-full" opts={{ loop: true, align: "center" }}>
                {MASTER_TBA ? (
                  <div className="py-12">
                    <TBA text="Partners will be announced soon." />
                  </div>
                ) : (
                  <>
                    <CarouselContent className="py-6 md:hidden">
                      {partners.map((partner, index) => {
                        const isSelected = index === selected;

                        return (
                          <CarouselItem
                            key={partner.id ?? partner.name ?? index}
                            className={cn(
                              "pl-4", 
                              "basis-[85%] sm:basis-[60%]",
                              "md:basis-[30%]"
                            )}
                          >
                            <Link
                              href={`/partners#partner-${partner.id}`}
                              className="block"
                              aria-label={`Partner: ${partner.name}`}
                            >
                              <div
                                className={cn(
                                  "transition-transform duration-300 ease-out",
                                  isSelected
                                    ? "scale-[2] hover:scale-[2.2]"
                                    : "scale-[0.50] hover:scale-[0.60]"
                                )}
                              >
                                <div className="h-40 sm:h-44 md:h-48 flex items-center justify-center p-2">
                                  <Image
                                    src={partner.image}
                                    alt={partner.name}
                                    width={300}
                                    height={300}
                                    className="max-h-full w-auto max-w-full object-contain"
                                    priority={false}
                                  />
                                </div>
                              </div>
                            </Link>
                          </CarouselItem>
                        );
                      })}
                    </CarouselContent>

                    {/* Controls */}
                    <div className="mt-6 flex justify-center md:hidden">
                      <div
                        className="flex gap-4"
                      >
                        <CarouselPrevious />
                        <CarouselNext />
                      </div>
                    </div>
                  </>
                )}
              </Carousel>
            </div>

            {/* Desktop: Cloud */}
        <div className="hidden md:block">
          <PartnersCloud partners={partners} />
        </div>
          </div>

          {/* Text */}
          <div className="max-w-xl md:ml-auto text-left md:text-right">
            <Supertitle>exec(ut)</Supertitle>
            <Title>Meet our partners.</Title>
            <Callout>Proudly supported by companies and institutions that help make exec(ut) {EVENT.year} possible.</Callout>

            <div className="mt-6">
              <Button asChild className="pointer-events-auto">
                <Link href="/partners">See all partners</Link>
              </Button>
            </div>
          </div>
        </div>
    </Section>
  );
}
