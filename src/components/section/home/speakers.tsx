"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Callout, H3, Paragraph, Supertitle, Title } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import { speakers } from "@/data/speakers";
import { EVENT } from "@/data/event";
import { MASTER_TBA } from "@/config/tba";
import { TBA } from "@/components/ui/tba";
import Section from "../section";

export function HomeSpeakersSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const update = () => setCurrentIndex(api.selectedScrollSnap());
    update();

    api.on("select", update);
    api.on("reInit", update);

    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  const getDistance = React.useCallback(
    (index: number) => {
      if (speakers.length === 0) return 0;
      const direct = Math.abs(index - currentIndex);
      const wrap = speakers.length - direct;
      return Math.min(direct, wrap);
    },
    [currentIndex]
  );

  const cardTone = (index: number) => {
    const d = getDistance(index);
    if (d === 0) return "brightness-100";
    if (d === 1) return "brightness-70";
    return "brightness-25";
  };

  const imageFx = (index: number) => {
    const d = getDistance(index);
    if (d >= 2) return "[filter:blur(3px)] scale-120";
    if (d === 1) return "[filter:blur(1px)] scale-110";
    return "";
  };

  return (
    <section className="w-full relative bg-gradient-to-br from-tertiary/0 from-50% via-secondary/25 via-75% to-tertiary/75 to-100%">
      <div className="relative pb-8">
        <Carousel setApi={setApi} className="w-full flex flex-col" opts={{ loop: !MASTER_TBA }}>
          {/* Top (full-bleed carousel) */}
          <div className="relative">
            <CarouselContent className="ml-0">
              {MASTER_TBA ? (
                <CarouselItem className="basis-full">
                  <div className="w-full bg-black/90">
                    <div className="max-w-7xl mx-auto px-4 md:px-16 py-16 md:py-20">
                      <div className="border border-dashed border-white/40 rounded-xl px-8 py-12 md:py-14 text-center">
                        <div className="text-secondary-foreground">
                          <TBA
                            title="TBA"
                            text="Speakers will be announced soon."
                            titleClassName="text-white"
                            textClassName="text-white/70"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ) : (
                speakers.map((speaker, index) => (
                  <CarouselItem key={speaker.id} className="pl-0 basis-[90%] md:basis-[21%]">
                    <Link href={`/speakers#speaker-${speaker.id}`}>
                      <Card
                        className={cn(
                          "transition-all duration-500 overflow-hidden cursor-pointer hover:scale-105 hover:shadow-2xl group",
                          cardTone(index)
                        )}
                      >
                        <CardContent className="relative flex aspect-square items-center justify-center p-0">
                          <Image
                            src={speaker.image}
                            alt={speaker.name}
                            fill
                            className={cn("object-cover transition-all duration-500", imageFx(index))}
                          />

                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ArrowUpRightIcon size={72} weight="light" className="text-background drop-shadow-lg z-10" />
                          </div>

                          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4">
                            <H3 className="text-background">{speaker.name}</H3>
                            <Paragraph className="text-muted mt-0!">{speaker.specialization}</Paragraph>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))
              )}
            </CarouselContent>

            {/* Desktop overlay controls (constrained) */}
            <div className={cn("hidden md:block", MASTER_TBA && "opacity-40 pointer-events-none")}>
              <div className="absolute inset-0 pointer-events-none z-30">
                <Section
                  fullWidth
                  className="py-6 md:px-12"
                  wrapperClassName="h-full max-w-7xl px-6 md:px-0"
                >
                  <div className="h-full w-full flex justify-between items-stretch">
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

                </Section>
              </div>
            </div>
          </div>

          {/* Bottom (constrained content) */}
          <Section className="py-8 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-top gap-8">
              <div className="order-1 md:order-2 flex justify-center md:hidden">
                <div className={cn("flex gap-4", MASTER_TBA && "opacity-40 pointer-events-none")}>
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </div>

              <div className="order-2 md:order-1">
                <Supertitle>exec(ut)</Supertitle>
                <Title>Meet our speakers.</Title>
                <Callout>
                  Our lineup of speakers bringing ideas, experience, and inspiration to exec(ut) {EVENT.year}.
                </Callout>

                <div className="mt-6">
                  <Button variant="tertiary" asChild className="pointer-events-auto">
                    <Link href="/speakers">See all speakers</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Section>
        </Carousel>
      </div>
    </section>
  );
}
