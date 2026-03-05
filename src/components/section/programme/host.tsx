"use client";

import Section from "@/components/section/section";
import Image from "next/image";
import Link from "next/link";
import { H2, H3, Supertitle, Paragraph } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { hostOfDay } from "@/data/programme";
import { GlobeIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

export function ProgrammeHostSection() {
  const host = hostOfDay;
    return (
        <Section 
            id="host" 
            className="bg-secondary/10 py-8 md:py-20"
        >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
        {/* Host Image */}
        <div className="relative aspect-square w-80 mx-auto md:mx-0">
            <Image
                src={host.image}
                alt={host.name}
                fill
                className="object-cover"
            />
        </div>

        {/* Host Info */}
        <div className="space-y-6">
          <div>
            <Supertitle>{host.host}</Supertitle>
            <H2>{host.name}</H2>
            <H3>{host.role}</H3>
          </div>

          <Paragraph className="text-lg leading-relaxed whitespace-pre-line">{host.description}</Paragraph>

          {/* Links (match SpeakerCard layout) */}
          <div className="flex gap-4 pt-4">
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
                  <GlobeIcon className="w-5 h-5" />
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