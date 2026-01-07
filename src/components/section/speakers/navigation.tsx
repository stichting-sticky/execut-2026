import Section from "@/components/section/section";
import { Button } from "@/components/ui/button";
import { speakers } from "@/data/speakers";
import Link from "next/link";

export function SpeakersNavigationSection() {
  return (
    <Section className="sticky top-[var(--header-height)] z-10 bg-tertiary !py-0">
      <div>
        {/* Desktop navigation */}
        <div className="hidden md:flex flex-wrap gap-4 justify-start py-4">
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

        {/* Mobile placeholder bar */}
        <div className="md:hidden flex items-center justify-center h-4" />
        </div>
    </Section>
  );
}
