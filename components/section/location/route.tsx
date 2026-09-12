import { Heading, Text } from "@/components/typography";

import Section from "@/components/section/section";

import type { LocationData } from "@/lib/content";

export function LocationRouteSection({
    location,
}: {
    location: LocationData;
}) {
    return (
        <Section
            className="scroll-mt-24 md:scroll-mt-40"
            id="route"
        >
            <div className="space-y-6">
                <div className="max-w-3xl space-y-3">
                    <Heading as="h2">Travel Advice</Heading>

                    <Text variant="callout" className="mt-0!">
                        How to get to {location.venue.name}.
                    </Text>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="space-y-2">
                        <Heading as="h3">Public transport</Heading>

                        <Text>
                            The venue is located in Utrecht city centre and can be reached easily using public transport. Check your route in advance for the quickest connection.
                        </Text>
                    </div>

                    <div className="space-y-2">
                        <Heading as="h3">Bicycle</Heading>

                        <Text>
                            Utrecht is well suited for travelling by bicycle, with multiple bicycle parking facilities available throughout the city centre.
                        </Text>
                    </div>

                    <div className="space-y-2">
                        <Heading as="h3">Car</Heading>

                        <Text>
                            We recommend using public transport where possible. If you are travelling by car, several paid parking facilities are available in and around Utrecht city centre.
                        </Text>
                    </div>
                </div>
            </div>
        </Section>
    );
}