import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { HashScroll } from "@/components/hash-scroll";
import { SpeakersHeroSection } from "@/components/section/speakers/hero";
import { SpeakersListSection } from "@/components/section/speakers/list";
import { SpeakersNavigationSection } from "@/components/section/speakers/navigation";
import { TBA } from "@/components/ui/tba";

import { getConfig, getSiteContent } from "@/lib/content";

export function generateMetadata(): Metadata {
    const config = getConfig();

    return {
        title: "Speakers",
        robots: config.pages.speakers.enabled
            ? undefined
            : {
                index: false,
                follow: false,
            },
    };
}

export default function SpeakersPage() {
    const config = getConfig();
    const content = getSiteContent();

    if (!config.pages.speakers.enabled) notFound();

    const state = config.content.speakers;

    return (
        <div className="min-h-screen bg-background">
            <HashScroll />

            <SpeakersHeroSection year={content.speakers.year} state={state} />

            {state === "tba" && (
                <>
                    <div className="sticky z-10 hidden bg-tertiary py-4 md:top-28 md:block">
                        <div className="h-10 max-w-[90vw]" />
                    </div>

                    <div className="p-12">
                        <TBA text="Speakers will be announced soon." />
                    </div>
                </>
            )}

            {(state === "enabled" || state === "previous") && (
                <>
                    <SpeakersNavigationSection speakers={content.speakers.data} />
                    <SpeakersListSection speakers={content.speakers.data} />
                </>
            )}
        </div>
    );
}