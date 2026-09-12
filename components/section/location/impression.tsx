"use client";

import * as React from "react";

import Image from "next/image";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";

import { Heading, Text } from "@/components/typography";

import Section from "@/components/section/section";

import { cn } from "@/lib/utils";

import type { LocationImage } from "@/lib/content";

export function LocationImpressionSection({
    images,
}: {
    images: LocationImage[];
}) {
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

    const getDistance = React.useCallback(
        (index: number) => {
            if (images.length === 0) return 0;

            const direct = Math.abs(index - current);
            const wrap = images.length - direct;

            return Math.min(direct, wrap);
        },
        [current, images.length],
    );

    const getItemClasses = (index: number) => {
        const distance = getDistance(index);

        if (distance === 0) return "brightness-100";
        if (distance === 1) return "brightness-80";

        return "brightness-50";
    };

    const getImageClasses = (index: number) => {
        const distance = getDistance(index);

        if (distance >= 2) return "[filter:blur(3px)] scale-110";
        if (distance === 1) return "[filter:blur(1px)] scale-105";

        return "scale-100";
    };

    if (images.length === 0) return null;

    return (
        <div
            id="impression"
            className="scroll-mt-24 md:scroll-mt-40"
        >
            <section className="relative w-full overflow-hidden">
                <div className="relative pb-8">
                    <Carousel
                        setApi={setApi}
                        className="flex w-full flex-col"
                        opts={{
                            loop: images.length > 1,
                            align: "center",
                        }}
                    >
                        <div className="relative w-full">
                            <CarouselContent className="ml-0">
                                {images.map((image, index) => (
                                    <CarouselItem
                                        key={`${image.src}-${index}`}
                                        className="basis-[70%] pl-2 sm:basis-[45%] md:basis-[28%] md:pl-3 lg:basis-[22%]"
                                    >
                                        <div
                                            className={cn(
                                                "overflow-hidden transition-all duration-500",
                                                getItemClasses(index),
                                            )}
                                        >
                                            <div className="relative aspect-square w-full">
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    fill
                                                    sizes="(max-width: 639px) 70vw, (max-width: 767px) 45vw, (max-width: 1023px) 28vw, 22vw"
                                                    className={cn(
                                                        "object-cover transition-all duration-500",
                                                        getImageClasses(index),
                                                    )}
                                                    priority={index === 0}
                                                />
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-40 bg-linear-to-r from-black/60 via-black/30 to-transparent md:block" />

                            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-40 bg-linear-to-l from-black/60 via-black/30 to-transparent md:block" />

                            {images.length > 1 && (
                                <div className="pointer-events-none absolute inset-0 z-30 hidden md:block">
                                    <CarouselPrevious
                                        variant="ghost"
                                        className="pointer-events-auto absolute top-0 bottom-0 left-0 h-full w-20 translate-y-0 cursor-pointer rounded-none border-0 bg-transparent text-white shadow-none hover:bg-transparent hover:text-white hover:opacity-70 disabled:opacity-30"
                                    />

                                    <CarouselNext
                                        variant="ghost"
                                        className="pointer-events-auto absolute top-0 right-0 bottom-0 h-full w-20 translate-y-0 cursor-pointer rounded-none border-0 bg-transparent text-white shadow-none hover:bg-transparent hover:text-white hover:opacity-70 disabled:opacity-30"
                                    />
                                </div>
                            )}
                        </div>

                        <Section className="py-0!">
                            <div className="w-full py-8 md:py-16">
                                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto]">
                                    {images.length > 1 && (
                                        <div className="order-1 flex justify-center md:order-2 md:hidden">
                                            <div className="flex gap-4">
                                                <CarouselPrevious />
                                                <CarouselNext />
                                            </div>
                                        </div>
                                    )}

                                    <div className="order-2 md:order-1">
                                        <Heading as="h2">
                                            Impression
                                        </Heading>

                                        <Text variant="callout">
                                            Take a closer look at the venue and experience the atmosphere that defines exec(ut).
                                        </Text>
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