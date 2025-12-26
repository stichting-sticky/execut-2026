import Section from "@/components/section/section";
import { Callout, Title } from "@/components/ui/typography";

export function SpeakersHeroSection() {
    return (
        <Section>
            <div className="w-full max-w-xl">
                <Title>Our Speakers</Title>
                <Callout>Meet the industry experts and thought leaders who will be sharing their insights at exec(ut) 2025.</Callout>
            </div>
        </Section>
    );
}
