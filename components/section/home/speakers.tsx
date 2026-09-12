"use client";

import * as React from "react";

import Image from "next/image";
import Link from "next/link";

import { ArrowUpRightIcon } from "@phosphor-icons/react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TBA } from "@/components/ui/tba";
import { Heading, Text } from "@/components/typography";
import Section from "@/components/section/section";

import { cn } from "@/lib/utils";

type ContentState = "enabled" | "previous" | "tba" | "disabled";

type Speaker = {
    id: number;
    name: string;
    specialization: string;
    image: string;
    description: string;
    linkedin?: string;
    website?: string;
    talk?: string;
    talkUrl?: string;
};

export function HomeSpeakersSection({
    speakers,
    year,
    state,
}: {
    speakers: Speaker[];
    year: number;
    state: ContentState;
}) {
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

    if (state === "disabled") return null;

    const isTba = state === "tba";
    const isPrevious = state === "previous";

    const getDistance = React.useCallback(
        (index: number) => {
            if (speakers.length === 0) return 0;

            const direct = Math.abs(index - currentIndex);
            const wrap = speakers.length - direct;

            return Math.min(direct, wrap);
        },
        [currentIndex, speakers.length],
    );

    const cardTone = (index: number) => {
        const distance = getDistance(index);

        if (distance === 0) return "brightness-100";
        if (distance === 1) return "brightness-70";

        return "brightness-25";
    };

    const imageFx = (index: number) => {
        const distance = getDistance(index);

        if (distance >= 2) return "[filter:blur(3px)] scale-120";
        if (distance === 1) return "[filter:blur(1px)] scale-110";

        return "";
    };

    return (
        <section className="relative w-full bg-white">
            <div className="relative py-8 md:py-12">
                <Carousel
                    setApi={setApi}
                    className="w-full"
                    opts={{ loop: !isTba }}
                >
                    <div className="relative">
                        <CarouselContent className="-ml-2 md:-ml-3">
                            {isTba ? (
                                <CarouselItem className="basis-full pl-2 md:pl-3">
                                    <div className="w-full bg-black/90">
                                        <div className="mx-auto max-w-7xl px-4 py-16 md:px-16 md:py-20">
                                            <div className="rounded-xl border border-dashed border-white/40 px-8 py-12 text-center md:py-14">
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
                                    <CarouselItem
                                        key={speaker.id}
                                        className="basis-[82%] pl-2 sm:basis-[55%] md:basis-[23%] md:pl-3 lg:basis-[22%]"
                                    >
                                        <Link href={`/speakers#speaker-${speaker.id}`}>
                                            <Card
                                                className={cn(
                                                    "group cursor-pointer overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-xl",
                                                    cardTone(index),
                                                )}
                                            >
                                                <CardContent className="relative flex aspect-square items-center justify-center p-0">
                                                    <Image
                                                        src={speaker.image}
                                                        alt={speaker.name}
                                                        fill
                                                        sizes="(max-width: 639px) 82vw, (max-width: 767px) 55vw, (max-width: 1023px) 23vw, 22vw"
                                                        className={cn(
                                                            "object-cover transition-all duration-500",
                                                            imageFx(index),
                                                        )}
                                                    />

                                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                        <ArrowUpRightIcon
                                                            size={72}
                                                            weight="light"
                                                            className="z-10 text-background drop-shadow-lg"
                                                        />
                                                    </div>

                                                    <div className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-black/80 to-transparent p-4">
                                                        <Heading as="h4" className="text-background">
                                                            {speaker.name}
                                                        </Heading>

                                                        <Text className="mt-0! text-muted">
                                                            {speaker.specialization}
                                                        </Text>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </CarouselItem>
                                ))
                            )}
                        </CarouselContent>

                        {!isTba && speakers.length > 1 && (
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

                        {isTba && (
                            <div className="pointer-events-none absolute inset-y-0 right-0 left-0 z-30 hidden opacity-40 md:block">
                                <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-2 md:px-4">
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </div>
                            </div>
                        )}
                    </div>

                    <Section className="py-8 md:py-16">
                        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_auto]">
                            <div className="order-1 flex justify-center md:order-2 md:hidden">
                                <div
                                    className={cn(
                                        "flex gap-4",
                                        isTba && "pointer-events-none opacity-40",
                                    )}
                                >
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </div>
                            </div>

                            <div className="order-2 md:order-1">
                                <Text variant="supertitle">exec(ut) {year}</Text>

                                <Heading as="h2">
                                    {isPrevious
                                        ? "Meet last year's speakers."
                                        : "Meet our speakers."}
                                </Heading>

                                <Text variant="callout">
                                    {isPrevious
                                        ? `The speakers who brought their ideas, experience, and inspiration to exec(ut) ${year}.`
                                        : `Our lineup of speakers bringing ideas, experience, and inspiration to exec(ut) ${year}.`}
                                </Text>

                                {!isTba && (
                                    <div className="mt-6">
                                        <Button
                                            variant="tertiary"
                                            asChild
                                            className="pointer-events-auto"
                                        >
                                            <Link href="/speakers">
                                                See all speakers
                                            </Link>
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Section>
                </Carousel>
            </div>
        </section>
    );
}