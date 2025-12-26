import Section from "@/components/section/section";
import { H3, Paragraph } from "@/components/ui/typography";

export function ContactOrganiserSection() {
    return (
        <Section className="py-16">
            <div className="max-w-2xl">
                <H3 className="mb-4">About the Organisation</H3>
                <Paragraph className="mb-4">
                    exec(ut) is organised by Stichting Sticky, a student organisation at Utrecht University dedicated to creating meaningful tech events for students.
                </Paragraph>
                <Paragraph>
                    Our team of nine committee members works year-round to bring you an exciting conference experience that bridges the gap between academic learning and industry practice.
                </Paragraph>
            </div>
        </Section>
    );
}
