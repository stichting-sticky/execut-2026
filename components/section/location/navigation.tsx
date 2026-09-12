import Link from "next/link";

import { Button } from "@/components/ui/button";
import Section from "@/components/section/section";

const enabledSections = [
    { id: "about", label: "About" },
    { id: "impression", label: "Impression" },
    { id: "map", label: "Venue Location" },
    { id: "route", label: "Travel Advice" },
] as const;

const previousSections = [
    { id: "about", label: "About" },
    { id: "impression", label: "Impression" },
] as const;

export function LocationNavigationSection({
    previous = false,
}: {
    previous?: boolean;
}) {
    const sections = previous ? previousSections : enabledSections;

    return (
        <Section className="sticky top-(--header-height) z-10 bg-accent py-0! md:z-40">
            <div>
                <div className="hidden max-w-[90vw] flex-wrap justify-start gap-4 py-2 md:flex">
                    {sections.map((section) => (
                        <Button
                            key={section.id}
                            variant="link"
                            asChild
                            className="text-background"
                        >
                            <Link href={`#${section.id}`}>
                                {section.label}
                            </Link>
                        </Button>
                    ))}
                </div>

                <div className="flex h-4 items-center justify-center md:hidden" />
            </div>
        </Section>
    );
}