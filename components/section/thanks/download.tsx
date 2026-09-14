"use client";

import Link from "next/link";

import { DownloadSimpleIcon } from "@phosphor-icons/react";

import { Heading, Text } from "@/components/typography";

import Section from "@/components/section/section";

const pdfPath = "/exec(ut) 2026 Gift  Building Kit Instruction Book.pdf";

export function ThanksDownloadSection() {
    return (
        <Section id="download">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.2fr_0.9fr]">
                <div className="space-y-6">
                    <div className="space-y-3">
                        <Heading as="h2">
                            Thank you for being part of exec(ut) 2026.
                        </Heading>

                        <Text variant="callout" className="mt-0!">
                            We’re grateful for the energy, time, and knowledge you brought to the event.
                        </Text>
                    </div>

                    <Text>
                        To remember the day, we created a small gift that reflects the idea behind exec(ut): building something meaningful together. On this page you can find the digital instruction booklet so you can put it together at your own pace.
                    </Text>

                    <Text>
                        Download the guide below or scroll down to view it directly in your browser.
                    </Text>
                </div>

                <div className="flex justify-start md:justify-end">
                    <Link
                        href={pdfPath}
                        download
                        className="group w-full max-w-sm bg-tertiary px-8 py-8 text-background shadow-lg transition hover:bg-tertiary/90 md:px-10 md:py-10"
                    >
                        <div className="flex flex-col items-start text-left">
                            <DownloadSimpleIcon
                                size={36}
                                weight="light"
                                className="mb-6 opacity-90 transition-transform group-hover:translate-y-0.5"
                            />

                            <Heading as="h3" className="mb-0 text-background">
                                Download the
                                <br />
                                building guide
                            </Heading>

                            <Text className="mt-3! text-sm text-background/80 md:text-base">
                                PDF instruction booklet
                            </Text>
                        </div>
                    </Link>
                </div>
            </div>
        </Section>
    );
}