"use client";

import Image from "next/image";
import Link from "next/link";
import { H2, H3, Paragraph } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import type { Speaker } from "@/data/speakers";
import { GlobeIcon, LinkedinLogoIcon, VideoIcon } from "@phosphor-icons/react";

interface LogoCube {
    size: number;
    position: string; 
    color: string; 
}

interface SpeakerCardProps {
    speaker: Speaker;
    logoCubes?: LogoCube[];
}

export function SpeakerCard({ speaker, logoCubes = [] }: SpeakerCardProps) {
    return (
        <section
            id={`speaker-${speaker.id}`}
            className="scroll-mt-52"
        >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start md:px-8">
                {/* Speaker Image */}
                <div className="relative aspect-square w-80 mx-auto md:mx-0">
                    <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className="object-cover"
                    />
                </div>
                {/* Speaker Info */}
                <div className="space-y-6">
                    <div>
                        <H2>{speaker.name}</H2>
                        <H3>{speaker.specialization}</H3>
                    </div>

                    <Paragraph className="text-lg leading-relaxed whitespace-pre-line">{speaker.description}</Paragraph>

                    {/* Links */}
                    <div className="flex gap-4 pt-4">
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
                                    <GlobeIcon className="w-5 h-5" />
                                    Website
                                </Link>
                            </Button>
                        )}
                        {speaker.talk && (
                            <Button variant="outline" asChild>
                                <Link
                                    href={speaker.talk}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <VideoIcon className="w-5 h-5" />
                                    TEDx Talk
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
