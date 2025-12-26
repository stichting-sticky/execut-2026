import { Callout, H2, Paragraph } from "@/components/ui/typography";
import Section from "../section";

export function HomeAcknowledgementsSection() {
    return (
        <Section className="py-20">
            <div className="max-w-4xl">
                <H2>Acknowledgements</H2>
                <Callout>
                    Aside from our speakers, host, and parters, there are a few people and organisations whom we would like to thank for their contributions to the organisation of exec(ut). These are, in no particular order:
                </Callout>
                <Paragraph className="italic">
                    DomCode, for letting us take inspiration from their code of conduct;
                </Paragraph>
                <Paragraph className="italic">
                    The staff of Utrecht University's CS department for their support in planning and promotion;
                </Paragraph>
            </div>
        </Section>
    );
}
