"use client";

import Section from "@/components/section/section";
import { H2, Callout } from "@/components/ui/typography";

const pdfPath = "/exec(ut) 2026 Gift  Building Kit Instruction Book.pdf";

export function ThanksPdfSection() {
  return (
    <Section id="guide" className="!max-w-none !px-0 bg-tertiary/10">
      <div className="w-full space-y-6">
        <div className="max-w-7xl mx-auto px-6 md:px-0">
          <H2>Building guide</H2>
          <Callout className="!mt-0">
            View the full instruction booklet below or download it as a PDF.
          </Callout>
        </div>

        <div className="w-full border-y border-foreground/10 bg-black/5">
          <iframe
            src={pdfPath}
            title="exec(ut) 2026 gift building instructions"
            className="w-full h-[85vh] md:h-[95vh]"
          />
        </div>
      </div>
    </Section>
  );
}