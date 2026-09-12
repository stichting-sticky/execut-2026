import { Heading, Text } from "@/components/typography";

import Section from "@/components/section/section";

export function ContactOrganiserSection() {
    return (
        <Section className="py-16">
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-[1fr_1.5fr] md:gap-16">
                <div>
                    <Text variant="supertitle">Organisation</Text>
                    <Heading as="h2">About Stichting Sticky</Heading>
                </div>

                <div className="max-w-2xl space-y-4">
                    <Text variant="callout" className="mt-0!">
                        exec(ut) is organised by Stichting Sticky, a student organisation at Utrecht University dedicated to creating meaningful tech events for students.
                    </Text>

                    <Text>
                        Our committee works throughout the year to create a conference that connects students with industry, technology, and the people working within it.
                    </Text>
                </div>
            </div>
        </Section>
    );
}