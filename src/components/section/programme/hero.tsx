import Section from "@/components/section/section";
import { Title, Callout } from "@/components/ui/typography";

export function ProgrammeHeroSection() {
    return (
        <Section>
            <Title>Programme</Title>
            <Callout className="max-w-2xl">
                On 25 March 2025 the TivoliVredenburg will host 6 consecutive speakers, each of whom will give a talk on a particular aspect of software and technology.
                <br /><br />
                Aside from these talks we will also host 3 workshops throughout the day! You can sign up for these workshops using our ticket store.
            </Callout>
        </Section>
    );
}
