import { Heading, Text } from "@/components/typography";
import Section from "@/components/section/section";

import { ProgrammeScheduleSection } from "@/components/section/programme/schedule";

import type {
    EventData,
    ProgrammeSection,
} from "@/lib/content";

export function ProgrammeScheduleSections({
    sections,
    event,
    venueName,
}: {
    sections: ProgrammeSection[];
    event: EventData | null;
    venueName: string | null;
}) {
    return (
        <Section
            className="py-12 md:p-20"
            id="schedule"
        >
            <Heading as="h2">Schedule</Heading>

            <div className="w-full space-y-8">
                {sections.map((section) => (
                    <ProgrammeScheduleSection
                        key={section.title}
                        title={section.title}
                        items={section.items}
                    />
                ))}
            </div>
        </Section>
    );
}