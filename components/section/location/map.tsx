"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/typography";
import Section from "@/components/section/section";

import type { LocationData } from "@/lib/content";

export function LocationMapSection({
    location,
}: {
    location: LocationData;
}) {
    const mapsQuery = location.venue.address;
    const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`;
    const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;

    return (
        <Section
            className="scroll-mt-24 bg-primary/10 md:scroll-mt-40"
            id="map"
        >
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1.6fr_1fr]">
                <p id="map-fallback" className="sr-only">
                    Google Maps failed to load.
                </p>

                <div className="relative aspect-16/10 overflow-hidden shadow-lg">
                    <iframe
                        title="Map showing the venue location"
                        aria-describedby="map-fallback"
                        src={embedSrc}
                        className="absolute inset-0 h-full w-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                <div className="flex h-full flex-col space-y-6 md:text-right">
                    <div className="space-y-3">
                        <Heading as="h2">Where to find the venue</Heading>

                        <Text variant="callout" className="mt-0!">
                            Find the venue on the map and plan your journey in advance.
                        </Text>
                    </div>

                    <Text>
                        {location.venue.name} is located in Utrecht and can be reached easily from the city centre.
                    </Text>

                    <div className="md:flex md:justify-end">
                        <Button asChild className="w-full md:w-auto">
                            <Link
                                href={mapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Open in Google Maps
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-auto border-t border-foreground/10 pt-6 md:text-left">
                        <Text variant="tiny" className="font-mono uppercase tracking-wide text-foreground/80">
                            Address
                        </Text>

                        <div className="font-mono text-lg leading-snug">
                            <div>{location.venue.name}</div>
                            <div>{location.venue.address}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}