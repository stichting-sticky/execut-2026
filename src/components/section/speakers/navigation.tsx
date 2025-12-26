import Section from "@/components/section/section";
import { Button } from "@/components/ui/button";
import { speakers } from "@/data/speakers";
import Link from "next/link";

export function SpeakersNavigationSection() {
    return (
        <Section className="sticky md:top-28 z-10 bg-primary hidden md:block !py-0">
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
    );
}
