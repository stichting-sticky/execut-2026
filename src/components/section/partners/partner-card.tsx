"use client";

import Image from "next/image";
import Link from "next/link";
import { H2, H3, Paragraph } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import type { Partner } from "@/data/partners";
import { GlobeIcon, LinkedinLogoIcon } from "@phosphor-icons/react";


interface PartnerCardProps {
    partner: Partner;
}

export function PartnerCard({ partner}: PartnerCardProps) {
    return (
        <section
            id={`partner-${partner.id}`}
            className="scroll-mt-52"
        >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start md:px-8">
                {/* Partner Image */}
                <div className="relative aspect-square w-80 mx-auto md:mx-0">
                    <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Partner Info */}
                <div className="space-y-6">
                    <div>
                        <H2>{partner.name}</H2>
                        <H3>{partner.tagline}</H3>
                    </div>

                    <Paragraph className="text-lg leading-relaxed">{partner.description}</Paragraph>

                    {/* Links */}
                    <div className="flex gap-4 pt-4">
                        {partner.linkedin && (
                            <Button variant="outline" asChild>
                                <Link
                                    href={partner.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <LinkedinLogoIcon size={16} />
                                    LinkedIn
                                </Link>
                            </Button>
                        )}
                        {partner.website && (
                            <Button variant="outline" asChild>
                                <Link
                                    href={partner.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <GlobeIcon className="w-5 h-5" />
                                    Website
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
