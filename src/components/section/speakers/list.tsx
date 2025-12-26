import Section from "@/components/section/section";
import { SpeakerCard } from "@/components/speaker-card";
import { speakers } from "@/data/speakers";

export function SpeakersListSection() {
    return (
        <Section wrapperClassName="space-y-24">
            <SpeakerCard
                speaker={speakers[0]}
                logoCubes={[
                    { size: 16, position: "-left-6 -top-5", color: "bg-accent" }
                ]}
            />
            <SpeakerCard
                speaker={speakers[1]}
                logoCubes={[
                    { size: 20, position: "-right-4 -top-6", color: "bg-foreground" },
                    { size: 16, position: "-left-3 -bottom-4", color: "bg-primary" }
                ]}
            />
            <SpeakerCard
                speaker={speakers[2]}
                logoCubes={[
                    { size: 28, position: "-right-7 -bottom-8", color: "bg-secondary" }
                ]}
            />
            <SpeakerCard
                speaker={speakers[3]}
                logoCubes={[
                    { size: 20, position: "-left-5 -top-4", color: "bg-accent" },
                ]}
            />
            <SpeakerCard
                speaker={speakers[4]}
                logoCubes={[
                    { size: 12, position: "right-22 -bottom-8", color: "bg-primary" },
                    { size: 24, position: "-right-5 -bottom-6", color: "bg-secondary" }
                ]}
            />
        </Section>
    );
}
