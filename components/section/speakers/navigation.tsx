import Link from "next/link";

import { Button } from "@/components/ui/button";
import Section from "@/components/section/section";

import type { Speaker } from "@/lib/content";

export function SpeakersNavigationSection({
    speakers,
}: {
    speakers: Speaker[];
}) {
    return (
        <Section className="sticky top-(--header-height) z-10 bg-tertiary py-0!">
            <div>
                <div className="hidden flex-wrap justify-start gap-4 py-2 md:flex">
                    {speakers.map((speaker) => (
                        <Button
                            key={speaker.id}
                            variant="link"
                            asChild
                            className="text-background"
                        >
                            <Link href={`#speaker-${speaker.id}`}>
                                {speaker.name}
                            </Link>
                        </Button>
                    ))}
                </div>

                <div className="flex h-4 items-center justify-center md:hidden" />
            </div>
        </Section>
    );
}