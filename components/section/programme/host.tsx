"use client";

import Image from "next/image";
import Link from "next/link";

import { GlobeIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/typography";
import Section from "@/components/section/section";

import type { ProgrammeHost } from "@/lib/content";

export function ProgrammeHostSection({
    host,
}: {
    host: ProgrammeHost;
}) {
    return (
        <Section
            id="host"
            className="bg-secondary/10 py-8 md:py-20"
        >
            <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_2fr]">
                <div className="relative mx-auto aspect-square w-80 md:mx-0">
                    <Image
                        src={host.image}
                        alt={host.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="space-y-6">
                    <div>
                        <Text variant="supertitle">
                            {host.host ?? "Host of the day"}
                        </Text>

                        <Heading as="h2">{host.name}</Heading>
                        <Heading as="h3">{host.role}</Heading>
                    </div>

                    <Text className="whitespace-pre-line text-lg leading-relaxed">
                        {host.description}
                    </Text>

                    <div className="flex flex-wrap gap-4 pt-4">
                        {host.linkedin && (
                            <Button variant="outline" asChild>
                                <Link
                                    href={host.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <LinkedinLogoIcon size={16} />
                                    LinkedIn
                                </Link>
                            </Button>
                        )}

                        {host.website && (
                            <Button variant="outline" asChild>
                                <Link
                                    href={host.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <GlobeIcon className="h-5 w-5" />
                                    Website
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </Section>
    );
}