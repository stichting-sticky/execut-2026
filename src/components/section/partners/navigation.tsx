import Section from "@/components/section/section";
import { Button } from "@/components/ui/button";
import { partners } from "@/data/partners";
import Link from "next/link";

export function PartnersNavigationSection() {
    return (
        <Section className="sticky md:top-28 top-20 z-10 bg-primary !py-0">
            <div>
                {/* Desktop navigation */}
                <div className="hidden md:flex flex-wrap gap-4 justify-start py-4">
                    {partners.map((partner) => (
                    <Button
                        key={partner.id}
                        variant="link"
                        asChild
                        className="text-background"
                    >
                        <Link href={`#partner-${partner.id}`}>
                        {partner.name}
                        </Link>
                    </Button>
                    ))}
                </div>

                {/* Mobile placeholder bar */}
                <div className="md:hidden h-12 bg-red-500 w-full" />
                </div>
        </Section>
    );
}
