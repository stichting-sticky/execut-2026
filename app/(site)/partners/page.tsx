import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { HashScroll } from "@/components/hash-scroll";
import { PartnersHeroSection } from "@/components/section/partners/hero";
import { PartnersListSection } from "@/components/section/partners/list";
import { PartnersNavigationSection } from "@/components/section/partners/navigation";
import { TBA } from "@/components/ui/tba";

import { getConfig, getSiteContent } from "@/lib/content";

export function generateMetadata(): Metadata {
    const config = getConfig();

    return {
        title: "Partners",
        robots: config.pages.partners.enabled
            ? undefined
            : {
                  index: false,
                  follow: false,
              },
    };
}

export default function PartnersPage() {
    const config = getConfig();
    const content = getSiteContent();

    if (!config.pages.partners.enabled) notFound();

    const state = config.content.partners;

    return (
        <div className="min-h-screen bg-background">
            <HashScroll />

            <PartnersHeroSection
                year={content.partners.year}
                state={state}
            />

            {state === "tba" && (
                <>
                    <div className="sticky z-10 hidden bg-primary py-4 md:top-28 md:block">
                        <div className="h-10 max-w-[90vw]" />
                    </div>

                    <div className="p-12">
                        <TBA text="Our partners will be announced soon." />
                    </div>
                </>
            )}

            {(state === "enabled" || state === "previous") && (
                <>
                    <PartnersNavigationSection partners={content.partners.data} />
                    <PartnersListSection partners={content.partners.data} />
                </>
            )}
        </div>
    );
}