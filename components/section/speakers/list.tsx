import { SpeakerCard } from "@/components/section/speakers/speaker-card";
import Section from "@/components/section/section";

import type { Speaker } from "@/lib/content";

export function SpeakersListSection({
    speakers,
}: {
    speakers: Speaker[];
}) {
    return (
        <Section wrapperClassName="space-y-24">
            {speakers.map((speaker) => (
                <SpeakerCard
                    key={speaker.id}
                    speaker={speaker}
                />
            ))}
        </Section>
    );
}