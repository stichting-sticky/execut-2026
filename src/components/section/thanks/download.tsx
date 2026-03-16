"use client";

import Section from "@/components/section/section";
import { H2, Paragraph, Callout } from "@/components/ui/typography";
import Link from "next/link";
import { Download } from "lucide-react";

const pdfPath = "/exec(ut) 2026 Gift  Building Kit Instruction Book.pdf";

export function ThanksDownloadSection() {
  return (
    <Section id="download">
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.9fr] gap-10 items-center">
        {/* LEFT: TEXT */}
        <div className="space-y-6">
          <div className="space-y-3">
            <H2>Thank you for being part of exec(ut) 2026.</H2>
            <Callout className="!mt-0">
              We’re grateful for the energy, time, and knowledge you brought to the event.
            </Callout>
          </div>

          <Paragraph>
            To remember the day, we created a small gift that reflects the idea behind exec(ut): building something meaningful together. On this page you can find the digital instruction booklet so you can put it together at your own pace.
          </Paragraph>

          <Paragraph>
            Download the guide below or scroll down to view it directly in your browser.
          </Paragraph>
        </div>

        {/* RIGHT: REFINED DOWNLOAD CARD */}
        <div className="flex justify-start md:justify-end">
          <Link
            href={pdfPath}
            download
            className="group w-full max-w-sm bg-tertiary text-background shadow-lg px-8 py-8 md:px-10 md:py-10 transition hover:bg-tertiary/90"
          >
            <div className="flex flex-col items-start text-left">
              <Download className="w-9 h-9 mb-6 opacity-90 transition group-hover:translate-y-[1px]" />

              <div className="font-mono text-2xl leading-tight">
                Download the
                <br />
                building guide
              </div>

              <div className="mt-3 text-background/80 text-sm md:text-base">
                PDF instruction booklet
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Section>
  );
}