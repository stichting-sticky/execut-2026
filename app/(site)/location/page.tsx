import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { HashScroll } from "@/components/hash-scroll";
import { LocationAboutSection } from "@/components/section/location/about";
import { LocationHeroSection } from "@/components/section/location/hero";
import { LocationImpressionSection } from "@/components/section/location/impression";
import { LocationMapSection } from "@/components/section/location/map";
import { LocationNavigationSection } from "@/components/section/location/navigation";
import { LocationRouteSection } from "@/components/section/location/route";
import { TBA } from "@/components/ui/tba";

import { getConfig, getSiteContent } from "@/lib/content";

export function generateMetadata(): Metadata {
    const config = getConfig();

    return {
        title: "Venue",
        robots: config.pages.location.enabled
            ? undefined
            : {
                  index: false,
                  follow: false,
              },
    };
}

export default function LocationPage() {
    const config = getConfig();
    const content = getSiteContent();

    if (!config.pages.location.enabled) notFound();

    const state = config.content.location;
    const location = content.location?.data ?? null;
    const year = content.location?.year ?? config.edition.current;

    return (
        <div className="min-h-screen bg-background">
            <HashScroll />

            <LocationHeroSection
                year={year}
                state={state}
            />

            {state === "tba" && (
                <>
                    <div className="sticky z-10 hidden bg-accent py-2 md:top-28 md:block">
                        <div className="h-10 max-w-[90vw]" />
                    </div>

                    <div className="p-12">
                        <TBA text="Our venue will be announced soon." />
                    </div>
                </>
            )}

            {(state === "enabled" || state === "previous") && location && (
                <>
                    <LocationNavigationSection
                        previous={state === "previous"}
                    />

                    <LocationAboutSection
                        location={location}
                    />

                    <LocationImpressionSection
                        images={location.images}
                    />

                    {state === "enabled" && (
                        <>
                            <LocationMapSection
                                location={location}
                            />

                            <LocationRouteSection
                                location={location}
                            />
                        </>
                    )}
                </>
            )}
        </div>
    );
}