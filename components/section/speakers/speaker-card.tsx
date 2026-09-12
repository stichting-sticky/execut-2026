"use client";

import Image from "next/image";
import Link from "next/link";

import {
    GlobeIcon,
    LinkedinLogoIcon,
    VideoIcon,
} from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/typography";

import type { Speaker } from "@/lib/content";

interface LogoCube {
    size: number;
    position: string;
    color: string;
}

interface SpeakerCardProps {
    speaker: Speaker;
    logoCubes?: LogoCube[];
}

export function SpeakerCard({
    speaker,
    logoCubes = [],
}: SpeakerCardProps) {
    return (
        <section
            id={`speaker-${speaker.id}`}
            className="scroll-mt-52"
        >
            <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_2fr] md:px-8">
                <div className="relative mx-auto aspect-square w-80 md:mx-0">
                    <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="space-y-6">
                    <div>
                        <Heading as="h2">
                            {speaker.name}
                        </Heading>

                        <Heading as="h3">
                            {speaker.specialization}
                        </Heading>
                    </div>

                    <Text className="whitespace-pre-line text-lg leading-relaxed">
                        {speaker.description}
                    </Text>

                    <div className="flex flex-wrap gap-4 pt-4">
                        {speaker.linkedin && (
                            <Button variant="outline" asChild>
                                <Link
                                    href={speaker.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <LinkedinLogoIcon size={16} />
                                    LinkedIn
                                </Link>
                            </Button>
                        )}

                        {speaker.website && (
                            <Button variant="outline" asChild>
                                <Link
                                    href={speaker.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <GlobeIcon className="h-5 w-5" />
                                    Website
                                </Link>
                            </Button>
                        )}

                        {speaker.talkUrl && (
                            <Button variant="outline" asChild>
                                <Link
                                    href={speaker.talkUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <VideoIcon className="h-5 w-5" />
                                    Watch talk
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}