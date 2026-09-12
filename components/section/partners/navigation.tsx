import Link from "next/link";

import { Button } from "@/components/ui/button";
import Section from "@/components/section/section";

import type { Partner } from "@/lib/content";

export function PartnersNavigationSection({
    partners,
}: {
    partners: Partner[];
}) {
    return (
        <Section className="sticky top-(--header-height) z-10 bg-primary py-0!">
            <div>
                <div className="hidden flex-wrap justify-start gap-4 py-2 md:flex">
                    {partners.map((partner) => (
                        <Button
                            key={partner.id ?? partner.name}
                            variant="link"
                            asChild
                            className="text-background"
                        >
                            <Link href={`#partner-${partner.id ?? partner.name}`}>
                                {partner.name}
                            </Link>
                        </Button>
                    ))}
                </div>

                <div className="flex h-4 items-center justify-center md:hidden" />
            </div>
        </Section>
    );
}