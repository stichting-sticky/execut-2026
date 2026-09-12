import { Heading, Text } from "@/components/typography";

import Section from "@/components/section/section";

import type { ContentState } from "@/lib/content";

export function PartnersHeroSection({
    year,
    state,
}: {
    year: number;
    state: ContentState;
}) {
    return (
        <section className="relative w-full overflow-hidden bg-linear-to-br from-primary/0 from-50% via-primary/35 via-75% to-primary/75 to-100%">
            <div className="pointer-events-auto relative z-10">
                <Section>
                    <div className="w-full max-w-xl">
                        <Heading as="h1">
                            {state === "previous"
                                ? "Last Year's Partners"
                                : "Our Partners"}
                        </Heading>

                        <Text variant="callout">
                            The organizations that {state === "previous" ? "helped" : "help"} make exec(ut) {year} possible through their support and collaboration.
                        </Text>
                    </div>
                </Section>
            </div>

            <div className="pointer-events-none absolute -inset-62.5 hidden md:block">
                <iframe
                    src="https://my.spline.design/glasscube-CmxGfmC2hMcKu65tdK70LS5N/"
                    className="h-175 w-full"
                    loading="lazy"
                    title="exec(ut) interactive graphic"
                />
            </div>
        </section>
    );
}