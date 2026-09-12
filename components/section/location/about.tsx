import { Heading, Text } from "@/components/typography";

import Section from "@/components/section/section";

import type { LocationData } from "@/lib/content";

export function LocationAboutSection({
    location,
}: {
    location: LocationData;
}) {
    return (
        <Section id="about">
            <div className="w-full space-y-14 md:space-y-24">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
                    <div className="flex flex-col justify-between">
                        <Heading as="h2" className="max-w-xl text-4xl leading-tight text-accent lg:text-5xl">
                            {location.venue.name}
                        </Heading>
                        <Text variant="callout" className="mt-0! max-w-xl">
                            {location.description}
                        </Text>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {location.details.map((detail) => (
                        <div key={detail.label} className="max-w-xs text-center">
                            <Text
                                variant="tiny"
                                className="mb-1 font-mono uppercase tracking-wider text-foreground/45"
                            >
                                {detail.label}
                            </Text>

                            <Text className="mt-0! text-sm leading-6 text-foreground/70 md:text-base">
                                {detail.value}
                            </Text>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}