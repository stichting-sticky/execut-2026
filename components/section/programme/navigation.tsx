import Link from "next/link";

import { Button } from "@/components/ui/button";
import Section from "@/components/section/section";

export function ProgrammeNavigationSection({
    hasHost,
}: {
    hasHost: boolean;
}) {
    const sections = [
        { id: "schedule", label: "Schedule" },
        ...(hasHost ? [{ id: "host", label: "Host" }] : []),
    ];

    return (
        <Section className="sticky top-(--header-height) z-10 bg-[color-mix(in_srgb,var(--secondary)_80%,black)] py-0! md:z-40">
            <div>
                <div className="hidden max-w-[90vw] flex-wrap justify-start gap-4 py-4 md:flex">
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