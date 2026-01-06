"use client";

import Link from "next/link";
import { H2, H4, Callout } from "@/components/ui/typography";
import Section from "../section";

import { LinkedinLogoIcon } from "@phosphor-icons/react";
const linkedin = "https://linkedin.com/in/test";

import { committee, ROLE_ORDER } from "@/data/committee";

export function HomeAboutSection() {
    return (
        <Section className="bg-primary/10 py-20">
            <H2 className="mb-6">About Us</H2>

            <div className="flex flex-col md:flex-row md:gap-32 gap-12">
                {/* Left: Text */}
                <div className="flex-2">
                    <Callout className="mb-6">
                        exec(ut) is an event organised by Stichting Sticky. It is a conference for and by students, offering a glimpse at the wondrous world of IT beyond the university. We strive to provide a diverse programme and show how exciting conferences can be. Our main way of contact is through our mail address.
                    </Callout>
                    <Callout className="!mt-0">
                        The organising committee consists of nine members, all of whom are students of computing- and information sciences at Utrecht University:
                    </Callout>
                </div>

                <div className="flex-3 grid md:grid-cols-2 gap-8 md:gap-6 max-w-[90vw]">
                {committee
                    .slice()
                    .sort((a, b) => ROLE_ORDER.indexOf(a.role) - ROLE_ORDER.indexOf(b.role))
                    .map((member) => (
                    <div key={`${member.role}-${member.name}`}>
                        <div className="flex items-center gap-2">
                        {member.linkedin && member.linkedin.trim() !== "" && (
                            <Link
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} LinkedIn`}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            >
                            <LinkedinLogoIcon size={32} weight="fill" />
                            </Link>
                        )}
                        <H4>{member.name}</H4>
                        </div>
                        <Callout className="!mt-0 !mb-0">{member.role}</Callout>
                    </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
