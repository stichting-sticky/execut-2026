"use client";

import Link from "next/link";

import { LinkedinLogoIcon } from "@phosphor-icons/react";
import { Heading, Text } from "@/components/typography";
import Section from "@/components/section/section";

type CommitteeRole =
    | "chair"
    | "treasurer"
    | "acquisition"
    | "speakers"
    | "location"
    | "promotion"
    | "internal affairs";

interface CommitteeMember {
    name: string;
    role: CommitteeRole;
    linkedin?: string;
}

type ContentState = "enabled" | "previous" | "tba" | "disabled";

const ROLE_ORDER: CommitteeRole[] = [
    "chair",
    "treasurer",
    "acquisition",
    "speakers",
    "location",
    "promotion",
    "internal affairs",
];

export function HomeAboutSection({
    committee,
    state = "enabled",
    year,
}: {
    committee: CommitteeMember[];
    state?: ContentState;
    year?: number;
}) {
    if (state === "disabled") return null;

    if (state === "tba") {
        return (
            <Section className="bg-primary/10 py-20">
                <Heading as="h2">About Us</Heading>

                <Text variant="callout">
                    The organising committee{year ? ` for exec(ut) ${year}` : ""} will be announced soon.
                </Text>
            </Section>
        );
    }

    return (
        <Section className="bg-primary/10 py-20">
            <Heading as="h2">
                {state === "previous" ? "About Last Year's Committee" : "About Us"}
            </Heading>

            <div className="flex flex-col gap-12 md:flex-row md:gap-32">
                <div className="flex-2">
                    <Text variant="callout" className="mb-6">
                        exec(ut) is an event organised by Stichting Sticky. It is a conference for and by students, offering a glimpse at the wondrous world of IT beyond the university. We strive to provide a diverse programme and show how exciting conferences can be. Our main way of contact is through our mail address.
                    </Text>

                    <Text variant="callout" className="mt-0!">
                        The organising committee consists of nine members, all of whom are students of computing- and information sciences at Utrecht University:
                    </Text>
                </div>

                <div className="flex-3 grid max-w-[90vw] gap-8 md:grid-cols-2 md:gap-6">
                    {committee
                        .slice()
                        .sort((a, b) => ROLE_ORDER.indexOf(a.role) - ROLE_ORDER.indexOf(b.role))
                        .map((member) => (
                            <div key={`${member.role}-${member.name}`}>
                                <div className="flex items-center gap-2">
                                    {member.linkedin?.trim() ? (
                                        <Link
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${member.name} LinkedIn`}
                                            className="group flex items-center gap-2 text-muted-foreground"
                                        >
                                            <LinkedinLogoIcon
                                                size={32}
                                                weight="fill"
                                                className="transition-colors group-hover:text-primary"
                                            />

                                            <Heading as="h4" className="transition-colors group-hover:text-primary">
                                                {member.name}
                                            </Heading>
                                        </Link>
                                    ) : (
                                        <Heading as="h4">{member.name}</Heading>
                                    )}
                                </div>

                                <Text variant="callout" className="mt-0! mb-0!">
                                    {member.role}
                                </Text>
                            </div>
                        ))}
                </div>
            </div>
        </Section>
    );
}