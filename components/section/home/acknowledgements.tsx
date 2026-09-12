import { Text, Heading } from "@/components/typography";
import Section from "@/components/section/section";

export function HomeAcknowledgementsSection({
    acknowledgements,
}: {
    acknowledgements: string[];
}) {
    return (
        <Section className="py-20">
            <div className="max-w-4xl">
                <Heading as="h2">Acknowledgements</Heading>
                <Text variant="callout">
                    Aside from our speakers, host, and partners, there are a few people and organisations whom we would like to thank for their contributions to the organisation of exec(ut). These are, in no particular order:
                </Text>

                {acknowledgements.map((acknowledgement, index) => (
                    <Text key={index} className="italic">
                        {acknowledgement}
                    </Text>
                ))}
            </div>
        </Section>
    );
}