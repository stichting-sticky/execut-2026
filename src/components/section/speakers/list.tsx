import Section from "@/components/section/section";
import { SpeakerCard } from "@/components/section/speakers/speaker-card";
import { speakers } from "@/data/speakers";

export function SpeakersListSection() {
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

