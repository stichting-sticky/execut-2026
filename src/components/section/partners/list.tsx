import Section from "@/components/section/section";
import { PartnerCard } from "@/components/section/partners/partner-card";
import { partners } from "@/data/partners";

export function PartnersListSection() {
  return (
    <Section wrapperClassName="space-y-8" className="py-0 md:py-20 pb-20">
      {partners.map((partner) => (
        <PartnerCard
          key={partner.id}
          partner={partner}
        />
      ))}
    </Section>
  );
}
