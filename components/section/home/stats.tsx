import { Heading, Text } from "@/components/typography";
import { TBA } from "@/components/ui/tba";

import Section from "@/components/section/section";

type ContentState = "enabled" | "previous" | "tba" | "disabled";

interface Stats {
    attendees: number;
    speakers: number;
    partners: number;
    workshops: number;
}

export function HomeStatsSection({
    stats,
    state,
}: {
    stats: Stats | null;
    state: ContentState;
}) {
    if (state === "disabled") return null;

    if (state === "tba") {
        return (
            <Section className="relative w-full px-8 py-16">
                <TBA text="Event statistics will be announced soon." />
            </Section>
        );
    }

    if (!stats) return null;

    return (
        <Section
            className="relative w-full px-8 py-16"
            wrapperClassName="grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4"
        >
            <div className="flex max-w-[90vw] flex-col items-center justify-center">
                <Heading as="h3" className="text-5xl text-primary">
                    {stats.attendees}
                </Heading>
                <Text variant="callout" className="text-primary">
                    Attendees
                </Text>
            </div>

            <div className="flex max-w-[90vw] flex-col items-center justify-center">
                <Heading as="h3" className="text-5xl text-accent">
                    {stats.speakers}
                </Heading>
                <Text variant="callout" className="text-accent">
                    Speakers
                </Text>
            </div>

            <div className="flex max-w-[90vw] flex-col items-center justify-center">
                <Heading as="h3" className="text-5xl text-secondary">
                    {stats.partners}
                </Heading>
                <Text variant="callout" className="text-secondary">
                    Partners
                </Text>
            </div>

            <div className="flex max-w-[90vw] flex-col items-center justify-center">
                <Heading as="h3" className="text-5xl text-tertiary">
                    {stats.workshops}
                </Heading>
                <Text variant="callout" className="text-tertiary">
                    Workshops
                </Text>
            </div>
        </Section>
    );
}