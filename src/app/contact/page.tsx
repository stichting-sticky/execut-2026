import Section from "@/components/section/section";
import { Title, Callout, H3, Paragraph } from "@/components/ui/typography";
import { EnvelopeSimpleIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react/dist/ssr";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <Section className="py-20">
                <Title>Get in Touch</Title>
                <Callout className="max-w-2xl">
                    Have questions about exec(ut)? Want to become a sponsor or speaker? We'd love to hear from you.
                </Callout>
            </Section>

            {/* Contact Information */}
            <Section className="py-16 bg-accent/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
                    {/* Left: Contact Details */}
                    <div className="space-y-12">
                        <div>
                            <H3 className="mb-6">Contact Information</H3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="size-12 bg-primary flex items-center justify-center shrink-0">
                                        <EnvelopeSimpleIcon size={24} weight="light" className="text-background" />
                                    </div>
                                    <div>
                                        <Paragraph className="font-semibold !mt-0">Email</Paragraph>
                                        <Paragraph className="!mt-1">
                                            <a href="mailto:info@execut.nl" className="hover:underline">
                                                info@execut.nl
                                            </a>
                                        </Paragraph>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="size-12 bg-secondary flex items-center justify-center shrink-0">
                                        <MapPinIcon size={24} weight="light" className="text-background" />
                                    </div>
                                    <div>
                                        <Paragraph className="font-semibold !mt-0">Location</Paragraph>
                                        <Paragraph className="!mt-1">
                                            Tivoli Vredenburg<br />
                                            Vredenburgkade 11<br />
                                            3511 WC Utrecht, Netherlands
                                        </Paragraph>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="size-12 bg-accent flex items-center justify-center shrink-0">
                                        <PhoneIcon size={24} weight="light" className="text-background" />
                                    </div>
                                    <div>
                                        <Paragraph className="font-semibold !mt-0">Event Date</Paragraph>
                                        <Paragraph className="!mt-1">
                                            March 25, 2025
                                        </Paragraph>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Quick Info */}
                    <div className="space-y-8">
                        <div>
                            <H3 className="mb-4">Interested in Speaking?</H3>
                            <Paragraph>
                                We're always looking for passionate speakers to share their expertise. If you're interested in presenting at exec(ut), please reach out to us with your topic proposal.
                            </Paragraph>
                        </div>

                        <div>
                            <H3 className="mb-4">Sponsorship Opportunities</H3>
                            <Paragraph>
                                Help us make exec(ut) an even better experience for students. Contact us to learn more about sponsorship packages and partnership opportunities.
                            </Paragraph>
                        </div>

                        <div>
                            <H3 className="mb-4">General Inquiries</H3>
                            <Paragraph>
                                For tickets, schedule information, or any other questions, feel free to send us an email. We typically respond within 24-48 hours.
                            </Paragraph>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Organiser Info */}
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
        </div>
    );
}
