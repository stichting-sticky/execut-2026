import Section from "@/components/section/section";
import { Title, Callout } from "@/components/ui/typography";

export function ContactHeroSection() {
    return (
        <Section className="py-20">
            <Title>Get in Touch</Title>
            <Callout className="max-w-2xl">
                Have questions about exec(ut)? Want to become a sponsor or speaker? We'd love to hear from you.
            </Callout>
        </Section>
    );
}
