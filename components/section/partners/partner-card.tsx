"use client";

import Image from "next/image";
import Link from "next/link";

import { GlobeIcon } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { TierBadge } from "@/components/ui/tier-badge";
import { Heading, Text } from "@/components/typography";

import type { Partner } from "@/lib/content";

interface PartnerCardProps {
    partner: Partner;
}

export function PartnerCard({
    partner,
}: PartnerCardProps) {
    return (
        <section
            id={`partner-${partner.id ?? partner.name}`}
            className="scroll-mt-52"
        >
            <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_2fr] md:px-8 md:py-8">
                <div className="relative mx-auto aspect-square w-80 md:mx-0">
                    <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        className="object-contain"
                    />
                </div>

                <div className="space-y-6">
                    <div>
                        <Heading as="h2" className="mb-0">
                            {partner.name}

                            <TierBadge
                                tier={partner.tier}
                                className="relative bottom-1.5 ml-3"
                            />
                        </Heading>

                        <Heading as="h3">
                            {partner.tagline}
                        </Heading>
                    </div>

                    <Text className="text-lg leading-relaxed">
                        {partner.description}
                    </Text>

                    {partner.website && (
                        <div className="flex gap-4 pt-4">
                            <Button variant="outline" asChild>
                                <Link
                                    href={partner.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <GlobeIcon className="h-5 w-5" />
                                    Website
                                </Link>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}