import Link from "next/link";

import {
    EnvelopeSimpleIcon,
    MapPinIcon,
} from "@phosphor-icons/react/dist/ssr";

import { Heading, Text } from "@/components/typography";

import Section from "@/components/section/section";

export function ContactInfoSection() {
    return (
        <Section className="bg-accent/5 py-16">
            <div className="grid w-full grid-cols-1 gap-16 md:grid-cols-2">
                <div className="space-y-8">
                    <div>
                        <Text variant="supertitle">Contact</Text>
                        <Heading as="h2">Contact Information</Heading>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="flex size-12 shrink-0 items-center justify-center bg-primary">
                                <EnvelopeSimpleIcon
                                    size={24}
                                    weight="light"
                                    className="text-background"
                                />
                            </div>

                            <div>
                                <Heading as="h4" className="mb-1">
                                    General
                                </Heading>

                                <Text className="mt-0!">
                                    <Link
                                        href="mailto:conference@execut.nl"
                                        className="underline underline-offset-4 hover:no-underline"
                                    >
                                        conference@execut.nl
                                    </Link>
                                </Text>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex size-12 shrink-0 items-center justify-center bg-secondary">
                                <MapPinIcon
                                    size={24}
                                    weight="light"
                                    className="text-background"
                                />
                            </div>

                            <div>
                                <Heading as="h4" className="mb-1">
                                    Address
                                </Heading>

                                <Text className="mt-0!">
                                    Stichting Sticky
                                    <br />
                                    Princetonplein 5
                                    <br />
                                    3584 CC Utrecht, The Netherlands
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-10">
                    <div>
                        <Heading as="h3">Interested in Speaking?</Heading>

                        <Text>
                            We're always looking for passionate speakers to share their expertise. If you're interested in presenting at exec(ut), send your topic proposal to{" "}
                            <Link
                                href="mailto:speakers@execut.nl"
                                className="underline underline-offset-4 hover:no-underline"
                            >
                                speakers@execut.nl
                            </Link>
                            .
                        </Text>
                    </div>

                    <div>
                        <Heading as="h3">Partnership Opportunities</Heading>

                        <Text>
                            Help us make exec(ut) an even better experience for students. For partnership packages and opportunities, contact us at{" "}
                            <Link
                                href="mailto:partners@execut.nl"
                                className="underline underline-offset-4 hover:no-underline"
                            >
                                partners@execut.nl
                            </Link>
                            .
                        </Text>
                    </div>

                    <div>
                        <Heading as="h3">General Inquiries</Heading>

                        <Text>
                            For tickets, programme information, or any other questions, email us at{" "}
                            <Link
                                href="mailto:conference@execut.nl"
                                className="underline underline-offset-4 hover:no-underline"
                            >
                                conference@execut.nl
                            </Link>
                            .
                        </Text>
                    </div>
                </div>
            </div>
        </Section>
    );
}