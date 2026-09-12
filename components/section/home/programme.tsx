"use client";

import { Heading, Text } from "@/components/typography";

import Section from "@/components/section/section";

import type { EventData } from "@/lib/content";

type ContentState = "enabled" | "previous" | "tba" | "disabled";

export function HomeProgrammeSection({
    year,
    event,
    state,
}: {
    year: number;
    event: EventData | null;
    state: ContentState;
}) {
    if (state === "previous" || state === "disabled") return null;

    const isTba = state === "tba";

    const showDate = !isTba && event?.date;
    const showTime = !isTba && (event?.startTime || event?.endTime);

    return (
        <Section
            className="relative w-full px-8 py-20 md:py-20 lg:py-24"
            wrapperClassName="grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-3"
        >
            <div className="flex max-w-[90vw] flex-wrap items-baseline justify-center gap-3 text-center">
                <Heading as="h3" className="leading-none text-primary">
                    {showDate ? event.date : "Date TBA"}
                </Heading>

                <Text className="leading-none text-primary">
                    {year}
                </Text>
            </div>

            <div className="flex max-w-[90vw] flex-wrap items-baseline justify-center gap-3 text-center">
                {showTime ? (
                    <>
                        {event.startTime && (
                            <>
                                <Text className="leading-none text-accent">
                                    from
                                </Text>

                                <Heading as="h3" className="leading-none text-accent">
                                    {event.startTime}
                                </Heading>
                            </>
                        )}

                        {event.endTime && (
                            <>
                                <Text className="leading-none text-accent">
                                    till
                                </Text>

                                <Heading as="h3" className="leading-none text-accent">
                                    {event.endTime}
                                </Heading>
                            </>
                        )}
                    </>
                ) : (
                    <Heading as="h3" className="leading-none text-accent">
                        Time TBA
                    </Heading>
                )}
            </div>

            <div className="flex max-w-[90vw] flex-wrap items-baseline justify-center gap-3 text-center">
                <Heading as="h3" className="leading-none text-tertiary">
                    Lunch & Drinks
                </Heading>

                <Text className="leading-none text-tertiary">
                    Included
                </Text>
            </div>
        </Section>
    );
}