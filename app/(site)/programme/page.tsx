import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { ProgrammeHeroSection } from "@/components/section/programme/hero";
import { ProgrammeHostSection } from "@/components/section/programme/host";
import { ProgrammeNavigationSection } from "@/components/section/programme/navigation";
import { ProgrammeScheduleSections } from "@/components/section/programme/schedule-sections";
import { TBA } from "@/components/ui/tba";

import {
    getConfig,
    getEvent,
    getLocation,
    getSiteContent,
} from "@/lib/content";

export function generateMetadata(): Metadata {
    const config = getConfig();

    return {
        title: "Programme",
        robots: config.pages.programme.enabled
            ? undefined
            : {
                  index: false,
                  follow: false,
              },
    };
}

export default function ProgrammePage() {
    const config = getConfig();
    const content = getSiteContent();

    if (!config.pages.programme.enabled) notFound();

    const state = config.content.programme;
    const programme = content.programme.data;
    const year = content.programme.year;

    const event = state === "enabled" || state === "previous"
        ? getEvent(year)
        : null;

    const location = state === "enabled" || state === "previous"
        ? getLocation(year)
        : null;

    return (
        <>
            <ProgrammeHeroSection
                year={year}
                state={state}
            />

            {state === "tba" && (
                <>
                    <div className="sticky z-10 hidden bg-secondary py-4 md:top-28 md:block">
                        <div className="h-10 max-w-[90vw]" />
                    </div>

                    <div className="p-12">
                        <TBA text="The programme will be announced soon." />
                    </div>
                </>
            )}

            {(state === "enabled" || state === "previous") && (
                <>
                    <ProgrammeNavigationSection
                        hasHost={Boolean(programme.host)}
                    />

                    <ProgrammeScheduleSections
                        sections={programme.sections}
                        event={event}
                        venueName={location?.venue.name ?? null}
                    />

                    {programme.host && (
                        <ProgrammeHostSection
                            host={programme.host}
                        />
                    )}
                </>
            )}
        </>
    );
}