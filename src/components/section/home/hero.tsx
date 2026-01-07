import { Button } from "@/components/ui/button";
import { Callout, Paragraph, Supertitle, Title } from "@/components/ui/typography";
import Link from "next/link";
import { MASTER_TBA } from "@/config/tba";
import { EVENT } from "@/data/event";

export function HomeHeroSection() {
    return (
        <section className="w-full flex flex-col relative z-0 overflow-hidden bg-gradient-to-br from-primary/0 from-50% via-primary/35 via-75% to-accent/75 to-100%">
            <div className="flex items-start justify-start py-32 z-10 gap-16 pointer-events-none">
                <div className="max-w-3xl px-6 md:px-16 ml-0 md:ml-4">
                    <Supertitle>exec(ut)</Supertitle>
                    <Title>A conference for and by IT students.</Title>
                    <Callout>
                        For those willing to look further than their own classroom. We want to work together, inspire each other, and commit ourselves to a better tomorrow. Besides a range of interesting talks exec(ut) provides great networking opportunities to those attending.
                    </Callout>
                    {MASTER_TBA ? (
                        <Button
                            variant="secondary"
                            disabled
                            className="opacity-60 cursor-not-allowed pointer-events-auto"
                        >
                            {EVENT.tickets.labelSoon}
                        </Button>
                    ) : (
                        <Button variant="secondary" asChild className="pointer-events-auto">
                            <Link href={EVENT.tickets.url} target="_blank" rel="noopener noreferrer">{EVENT.tickets.labelAvailable}</Link>
                        </Button>
                    )}
                </div>
            </div>
            <div className="w-full left-0 absolute min-h-100 inset-0 hidden md:block z-0">
                <iframe src='https://my.spline.design/glasscube-CmxGfmC2hMcKu65tdK70LS5N/' width='100%' height='700px'></iframe>
            </div>
        </section>
    );
}
