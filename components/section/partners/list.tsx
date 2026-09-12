import { PartnerCard } from "@/components/section/partners/partner-card";
import Section from "@/components/section/section";

import type { Partner } from "@/lib/content";

export function PartnersListSection({
    partners,
}: {
    partners: Partner[];
}) {
    return (
        <Section
            wrapperClassName="space-y-8"
            className="pb-20 py-0 md:py-20"
        >
            {partners.map((partner) => (
                <PartnerCard
                    key={partner.id ?? partner.name}
                    partner={partner}
                />
            ))}
        </Section>
    );
}