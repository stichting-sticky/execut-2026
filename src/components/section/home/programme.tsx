import {H3, Paragraph} from "@/components/ui/typography";
import Section from "../section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HomeProgrammeSection() {
  return (
    <Section
        className="w-full py-20 md:py-20 lg:py-24 px-8 relative"
        wrapperClassName="max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8 items-center"
    >
      <div className="flex flex-wrap items-baseline justify-center gap-3 max-w-[90vw] text-center">
        <H3 className="text-primary leading-none">26 March</H3>
        <Paragraph className="text-primary leading-none">2026</Paragraph>
      </div>

      <div className="flex flex-wrap items-baseline justify-center gap-3 max-w-[90vw] text-center">
        <Paragraph className="text-accent leading-none">from</Paragraph>
        <H3 className="text-accent leading-none">09:00</H3>
        <Paragraph className="text-accent leading-none">till</Paragraph>
        <H3 className="text-accent leading-none">17:00</H3>
      </div>

      <div className="flex flex-wrap items-baseline justify-center gap-3 max-w-[90vw] text-center">
        <H3 className="text-tertiary leading-none">Lunch & Drinks</H3>
        <Paragraph className="text-tertiary leading-none">Included</Paragraph>
      </div>

      <div className="flex justify-center mt-8 md:mt-0">
        <Button variant="secondary" asChild className="pointer-events-auto">
          <Link href="/programme">See full programme</Link>
        </Button>
      </div>
    </Section>
  );
}
