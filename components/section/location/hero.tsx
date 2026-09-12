import { Heading, Text } from "@/components/typography";

import Section from "@/components/section/section";

import type { ContentState } from "@/lib/content";

export function LocationHeroSection({
    year,
    state,
}: {
    year: number;
    state: ContentState;
}) {
    return (
        <section className="relative w-full overflow-hidden bg-linear-to-br from-accent/0 from-50% via-accent/35 via-75% to-accent/75 to-100%">
            <div className="pointer-events-auto relative z-10">
                <Section>
                    <div className="w-full max-w-xl">
                        <Heading as="h1">
                            {state === "previous"
                                ? "Last year's venue"
                                : state === "tba"
                                  ? "Venue to be announced"
                                  : "This year's venue"}
                        </Heading>

                        <Text variant="callout">
                            {state === "previous"
                                ? `The venue that brought exec(ut) ${year} to life.`
                                : state === "tba"
                                  ? `The venue for exec(ut) ${year} will be announced soon.`
                                  : `The venue that brings exec(ut) ${year} to life, carefully chosen to create the perfect conference experience.`}
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