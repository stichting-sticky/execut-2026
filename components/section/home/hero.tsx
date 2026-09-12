import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/typography";

import type { EventData } from "@/lib/content";

type ContentState = "enabled" | "previous" | "tba" | "disabled";

export function HomeHeroSection({
    event,
    eventState,
}: {
    event: EventData | null;
    eventState: ContentState;
}) {
    const ticketsAvailable =
        eventState === "enabled" &&
        event?.tickets?.enabled &&
        event.tickets.url;

    const ticketsTba = eventState === "tba";

    return (
        <section className="relative z-0 flex w-full flex-col overflow-hidden bg-linear-to-br from-primary/0 from-50% via-primary/35 via-75% to-accent/75 to-100%">
            <div className="pointer-events-none z-10 flex items-start justify-start gap-16 py-32">
                <div className="ml-0 max-w-3xl px-6 md:ml-4 md:px-16">
                    <Text variant="supertitle">exec(ut)</Text>

                    <Heading as="h1">A conference for and by IT students.</Heading>

                    <Text variant="callout">
                        For those willing to look further than their own classroom. We want to work together, inspire each other, and commit ourselves to a better tomorrow. Besides a range of interesting talks exec(ut) provides great networking opportunities to those attending.
                    </Text>

                    {ticketsAvailable && (
                        <Button variant="secondary" asChild className="pointer-events-auto">
                            <Link href={event.tickets!.url!} target="_blank" rel="noopener noreferrer">
                                Get your tickets
                            </Link>
                        </Button>
                    )}

                    {ticketsTba && (
                        <Button variant="secondary" disabled className="pointer-events-auto cursor-not-allowed opacity-60">
                            Tickets to be announced
                        </Button>
                    )}
                </div>
            </div>

            <div className="pointer-events-none absolute inset-0 left-0 z-0 hidden min-h-100 w-full md:block xl:pointer-events-auto">
                <iframe
                    src="https://my.spline.design/glasscube-CmxGfmC2hMcKu65tdK70LS5N/"
                    width="100%"
                    height="700px"
                    title="exec(ut) interactive graphic"
                />
            </div>
        </section>
    );
}