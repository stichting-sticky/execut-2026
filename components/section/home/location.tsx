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

import { Button } from "@/components/ui/button";
import { LocationImageGrid } from "@/components/ui/image-grid";
import { Heading, Text } from "@/components/typography";
import Section from "@/components/section/section";

import { cn } from "@/lib/utils";

type ContentState = "enabled" | "previous" | "tba" | "disabled";

type LocationImage = {
    src: string;
    alt: string;
};

type LocationData = {
    venue: {
        name: string;
        address: string;
        website?: string;
    };
    images: LocationImage[];
};

export function HomeLocationSection({
    location,
    year,
    locationYear,
    state,
}: {
    location: LocationData | null;
    year: number;
    locationYear: number | null;
    state: ContentState;
}) {
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

    if (state === "disabled") return null;

    if (state === "tba" || !location) {
        return (
            <Section className="bg-linear-to-tl from-tertiary/0 from-50% via-secondary/25 via-75% to-tertiary/75 to-100% py-28 md:py-32">
                <div className="flex min-h-64 items-center justify-center text-center">
                    <div>
                        <Text variant="supertitle">exec(ut) {year}</Text>

                        <Heading as="h2">Location to be announced.</Heading>

                        <Text variant="callout" className="mt-4">
                            The venue for exec(ut) {year} has not been announced yet.
                        </Text>
                    </div>
                </div>
            </Section>
        );
    }

    return (
        <Section className="bg-linear-to-tl from-tertiary/0 from-50% via-secondary/25 via-75% to-tertiary/75 to-100% py-28 md:py-32">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.7fr_1fr]">
                <div className="relative order-1 min-w-0 md:hidden">
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-background/0 via-background/0 to-transparent" />

                        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-background/0 via-background/0 to-transparent" />

                        <div className="flex items-center justify-center py-4 text-center">
                            <Heading as="h4" className="relative inline-block">
                                {location.venue.name}

                                <span className="absolute -bottom-3 left-1/2 h-0.5 w-50 -translate-x-1/2 bg-accent" />
                            </Heading>
                        </div>

                        <Carousel
                            setApi={setApi}
                            className="w-full"
                            opts={{ loop: true, align: "center" }}
                        >
                            <CarouselContent className="py-6">
                                {location.images.map((img, index) => {
                                    const isSelected = index === selected;

                                    return (
                                        <CarouselItem
                                            key={`${img.src}-${index}`}
                                            className="basis-[85%] pl-4 sm:basis-[60%]"
                                        >
                                            <div
                                                className={cn(
                                                    "transition-transform duration-300 ease-out",
                                                    isSelected
                                                        ? "scale-[1.05]"
                                                        : "scale-[0.95] hover:scale-[1.02]",
                                                )}
                                            >
                                                <div className="relative aspect-16/10 overflow-hidden shadow-lg">
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

                <div className="relative order-1 hidden min-w-0 md:block">
                    <div className="flex items-center justify-center py-4 text-center">
                        <Heading as="h4" className="relative inline-block">
                            {location.venue.name}

                            <span className="absolute -bottom-3 left-1/2 h-0.5 w-50 -translate-x-1/2 bg-accent" />
                        </Heading>
                    </div>

                    <LocationImageGrid
                        images={location.images}
                        hoverScale={1.08}
                        className="mt-8"
                    />
                </div>

                <div className="order-2 max-w-xl md:ml-auto md:text-right">
                    <Text variant="supertitle">
                        exec(ut) {locationYear}
                    </Text>

                    <Heading as="h2">
                        {state === "previous"
                            ? "Last year's venue."
                            : "This year's venue."}
                    </Heading>

                    <Text variant="callout">
                        A carefully chosen venue, perfect for exec(ut) {locationYear} in every detail.
                    </Text>

                    <div className="mt-6">
                        <Button variant="accent" asChild className="pointer-events-auto">
                            <Link href="/venue">See venue</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
}