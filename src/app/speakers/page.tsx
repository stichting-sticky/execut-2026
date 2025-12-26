import { speakers } from "@/data/speakers";
import { Callout, Title } from "@/components/ui/typography";
import { SpeakerCard } from "@/components/speaker-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Section from "@/components/section/section";

export default function SpeakersPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <Section>
                <div className="w-full max-w-xl">
                    <Title>Our Speakers</Title>
                    <Callout>Meet the industry experts and thought leaders who will be sharing their insights at exec(ut) 2025.</Callout>
                </div>
            </Section>

            <Section className="sticky md:top-28 z-10 bg-primary hidden md:block !py-0">
                {/* Speaker Navigation */}
                <div className="flex flex-wrap gap-4 justify-start py-4 max-w-[90vw]">
                    {speakers.map((speaker) => (
                        <Button key={speaker.id} variant="link" asChild className="text-background">
                            <Link href={`#speaker-${speaker.id}`}>
                                {speaker.name}
                            </Link>
                        </Button>
                    ))}
                </div>
            </Section>

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
        </div>
    );
}
