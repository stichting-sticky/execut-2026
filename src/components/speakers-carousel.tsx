"use client";

import * as React from "react";
import Image from "next/image";

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
import { H3, Paragraph } from "./ui/typography";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

export default function SlideScale() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  console.log("current :", current);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const getCardClasses = (index: number) => {
    const currentIndex = current - 1;
    const directDistance = Math.abs(index - currentIndex);
    const wrapDistance = speakers.length - directDistance;
    const distance = Math.min(directDistance, wrapDistance);

    if (distance === 0) {
      return "brightness-100";
    } else if (distance === 1) {
      return "brightness-70";
    } else {
      return "brightness-25";
    }
  };

  const getImageClasses = (index: number) => {
    const currentIndex = current - 1;
    const directDistance = Math.abs(index - currentIndex);
    const wrapDistance = speakers.length - directDistance;
    const distance = Math.min(directDistance, wrapDistance);

    if (distance >= 2) {
      return "[filter:blur(3px)] scale-120";
    } else if (distance === 1) {
      return "[filter:blur(1px)] scale-110";
    }
  };

  return (
    <Carousel
      setApi={setApi}
      className="w-full flex flex-col"
      opts={{ loop: true }}

    >
      <CarouselContent>
        {speakers.map((speaker, index) => (
          <CarouselItem key={speaker.id} className={cn("basis-[90%] md:basis-[25%]", {})}>
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
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <H3 className="text-background">
                      {speaker.name}
                    </H3>
                    <Paragraph className="text-muted !mt-0">
                      {speaker.specialization}
                    </Paragraph>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="w-full max-w-7xl mx-auto space-x-4 px-4 md:px-16 py-8 flex items-center justify-between">
        <Button asChild>
          <Link href="/speakers">See all speakers</Link>
        </Button>
        <div className="flex gap-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>
    </Carousel>
  );
}
