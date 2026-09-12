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
import { PartnersCloud } from "@/components/ui/partners-cloud";
import { TBA } from "@/components/ui/tba";
import { Heading, Text } from "@/components/typography";
import Section from "@/components/section/section";

import { cn } from "@/lib/utils";

type ContentState = "enabled" | "previous" | "tba" | "disabled";

type Partner = {
    id?: number;
    name: string;
    tagline: string;
    image: string;
    tier: "introduction" | "bronze" | "silver" | "gold" | "platinum";
    website?: string;
    description: string;
};

export function HomePartnersSection({
    partners,
    year,
    state,
}: {
    partners: Partner[];
    year: number;
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

    const isTba = state === "tba";
    const isPrevious = state === "previous";

    return (
        <Section className="bg-linear-to-tl from-primary/0 from-50% via-primary/35 via-75% to-accent/75 to-100%">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.8fr_1fr]">
                <div className="relative">
                    <div className="relative overflow-visible">
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-background/0 via-background/0 to-transparent" />

                        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-background/0 via-background/0 to-transparent" />

                        <Carousel
                            setApi={setApi}
                            className="w-full"
                            opts={{ loop: true, align: "center" }}
                        >
                            {isTba ? (
                                <div className="py-12">
                                    <TBA text="Partners will be announced soon." />
                                </div>
                            ) : (
                                <CarouselContent className="py-6 md:hidden">
                                    {partners.map((partner, index) => {
                                        const isSelected = index === selected;

                                        return (
                                            <CarouselItem
                                                key={partner.id ?? partner.name ?? index}
                                                className={cn(
                                                    "pl-4",
                                                    "basis-[85%] sm:basis-[60%]",
                                                    "md:basis-[30%]",
                                                )}
                                            >
                                                <Link
                                                    href={`/partners#partner-${partner.id ?? partner.name}`}
                                                    className="block"
                                                    aria-label={`Partner: ${partner.name}`}
                                                >
                                                    <div
                                                        className={cn(
                                                            "transition-transform duration-300 ease-out",
                                                            isSelected
                                                                ? "scale-[2] hover:scale-[2.2]"
                                                                : "scale-[0.50] hover:scale-[0.60]",
                                                        )}
                                                    >
                                                        <div className="flex h-40 items-center justify-center p-2 sm:h-44 md:h-48">
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
                            )}

                            {!isTba && (
                                <div className="mt-6 flex justify-center md:hidden">
                                    <div className="flex gap-4">
                                        <CarouselPrevious />
                                        <CarouselNext />
                                    </div>
                                </div>
                            )}
                        </Carousel>
                    </div>

                    {!isTba && (
                        <div className="hidden md:block">
                            <PartnersCloud partners={partners} />
                        </div>
                    )}
                </div>

                <div className="max-w-xl text-left md:ml-auto md:text-right">
                    <Text variant="supertitle">
                        exec(ut) {year}
                    </Text>

                    <Heading as="h2">
                        {isPrevious
                            ? "Meet last year's partners."
                            : "Meet our partners."}
                    </Heading>

                    <Text variant="callout">
                        {isPrevious
                            ? `These companies and institutions helped make exec(ut) ${year} possible.`
                            : `Proudly supported by companies and institutions that help make exec(ut) ${year} possible.`}
                    </Text>

                    {!isTba && (
                        <div className="mt-6">
                            <Button asChild className="pointer-events-auto">
                                <Link href="/partners">See all partners</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </Section>
    );
}