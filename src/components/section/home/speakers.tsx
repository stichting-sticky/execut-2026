"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { speakers } from "@/data/speakers";
import { Title, H3, Paragraph, Supertitle, Callout } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { MASTER_TBA } from "@/config/tba";
import { EVENT } from "@/data/event";
import { TBA } from "@/components/ui/tba";

export function HomeSpeakersSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const update = () => setCurrent(api.selectedScrollSnap() + 1);
    update();

    api.on("select", update);
    api.on("reInit", update);

    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  const getCardClasses = (index: number) => {
    const currentIndex = current - 1;
    const directDistance = Math.abs(index - currentIndex);
    const wrapDistance = speakers.length - directDistance;
    const distance = Math.min(directDistance, wrapDistance);

    if (distance === 0) return "brightness-100";
    if (distance === 1) return "brightness-70";
    return "brightness-25";
  };

  const getImageClasses = (index: number) => {
    const currentIndex = current - 1;
    const directDistance = Math.abs(index - currentIndex);
    const wrapDistance = speakers.length - directDistance;
    const distance = Math.min(directDistance, wrapDistance);

    if (distance >= 2) return "[filter:blur(3px)] scale-120";
    if (distance === 1) return "[filter:blur(1px)] scale-110";
    return "";
  };

  return (
    <section className="w-full relative bg-gradient-to-br from-tertiary/0 from-50% via-secondary/25 via-75% to-tertiary/75 to-100%">
      <div className="relative pb-8">
        <Carousel setApi={setApi} className="w-full flex flex-col" opts={{ loop: !MASTER_TBA }}>
          {/* TOP: either real slides or a single TBA slide */}
          <CarouselContent className="ml-0">
            {MASTER_TBA ? (
              <CarouselItem className="basis-full">
                <div className="w-full bg-black/90">
                  <div className="max-w-7xl mx-auto px-4 md:px-16 py-16 md:py-20">
                    <div className="border border-dashed border-white/40 rounded-xl px-8 py-12 md:py-14 text-center">
                      {/* If TBA supports className, do: <TBA className="text-white" ... /> */}
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
                <CarouselItem key={speaker.id} className="pl-0 basis-[90%] md:basis-[26%]">
                  <Link href={`/speakers#speaker-${speaker.id}`}>
                    <Card
                      className={cn(
                        "transition-all duration-500 overflow-hidden cursor-pointer hover:scale-105 hover:shadow-2xl group",
                        getCardClasses(index)
                      )}
                    >
                      <CardContent className="relative flex aspect-square items-center justify-center p-0">
                        <Image
                          src={speaker.image}
                          alt={speaker.name}
                          fill
                          className={cn("object-cover transition-all duration-500", getImageClasses(index))}
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

          {/* BOTTOM: always present, buttons stay INSIDE Carousel */}
          <div className="w-full max-w-7xl mx-auto px-6 md:px-0 py-8 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-8">
              {/* Controls FIRST on mobile, SECOND on md+ */}
              <div className="order-1 md:order-2 flex justify-center md:justify-end">
                <div className={cn("flex gap-4", MASTER_TBA && "opacity-40 pointer-events-none")}>
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </div>

              {/* Text SECOND on mobile, FIRST on md+ */}
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
          </div>
        </Carousel>
      </div>
    </section>
  );
}


