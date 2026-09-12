import { Heading, Text } from "@/components/typography";

import Section from "@/components/section/section";

import type { ContentState } from "@/lib/content";

export function SpeakersHeroSection({
    year,
    state,
}: {
    year: number;
    state: ContentState;
}) {
    const isPrevious = state === "previous";

    return (
        <section className="relative w-full overflow-hidden bg-linear-to-br from-tertiary/0 from-50% via-tertiary/35 via-75% to-tertiary/75 to-100%">
            <div className="pointer-events-auto relative z-10">
                <Section>
                    <div className="w-full max-w-xl">
                        <Heading as="h1">
                            {isPrevious ? "Last Year's Speakers" : "Our Speakers"}
                        </Heading>

                        <Text variant="callout">
                            {isPrevious
                                ? `Meet the industry experts and thought leaders who shared their insights at exec(ut) ${year}.`
                                : `Meet the industry experts and thought leaders who will be sharing their insights at exec(ut) ${year}.`}
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