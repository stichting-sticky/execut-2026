import { Callout, H3 } from "@/components/ui/typography";
import Section from "../section";

export function HomeStatsSection() {
    return (
        <Section className="w-full py-16 px-8 relative" wrapperClassName="max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center flex-col max-w-[90vw]">
                <H3 className="text-5xl text-primary">100+</H3>
                <Callout className="text-primary">Attendees</Callout>
            </div>
            <div className="flex items-center justify-center flex-col max-w-[90vw]">
                <H3 className="text-5xl text-accent">6</H3>
                <Callout className="text-accent">Speakers</Callout>
            </div>
            <div className="flex items-center justify-center flex-col max-w-[90vw]">
                <H3 className="text-5xl text-secondary">8</H3>
                <Callout className="text-secondary">Talks</Callout>
            </div>
        </Section>
    );
}