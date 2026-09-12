import { Heading, Text } from "@/components/typography";

import Section from "@/components/section/section";

export function ContactHeroSection() {
    return (
        <section className="relative w-full overflow-hidden bg-linear-to-br from-primary/0 from-50% via-primary/35 via-75% to-primary/75 to-100%">
            <div className="relative z-10">
                <Section>
                    <div className="w-full max-w-2xl">
                        <Heading as="h1">Get in Touch</Heading>

                        <Text variant="callout">
                            Have questions about exec(ut)? Want to become a partner or speaker? We'd love to hear from you.
                        </Text>
                    </div>
                </Section>
            </div>
        </section>
    );
}