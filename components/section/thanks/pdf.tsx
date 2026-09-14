import { Heading, Text } from "@/components/typography";

import Section from "@/components/section/section";

const pdfPath = "/exec(ut) 2026 Gift  Building Kit Instruction Book.pdf";

export function ThanksPdfSection() {
    return (
        <Section
            id="guide"
            className="max-w-none! bg-tertiary/10 px-0!"
        >
            <div className="w-full space-y-6">
                <div className="mx-auto max-w-7xl px-6 md:px-0">
                    <Heading as="h2">Building guide</Heading>

                    <Text variant="callout" className="mt-0!">
                        View the full instruction booklet below or download it as a PDF.
                    </Text>
                </div>

                <div className="w-full border-y border-foreground/10 bg-black/5">
                    <iframe
                        src={pdfPath}
                        title="exec(ut) 2026 gift building instructions"
                        className="h-[85vh] w-full md:h-[95vh]"
                    />
                </div>
            </div>
        </Section>
    );
}