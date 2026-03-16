"use client";

import Section from "@/components/section/section";
import { Paragraph } from "@/components/ui/typography";

export function ThanksDisclaimerSection() {
  return (
    <Section id="disclaimer">
      <div className="text-left">
        <Paragraph className="text-sm text-foreground/60">
          LEGO® is a trademark of the LEGO Group of companies which does not sponsor, authorize, or endorse this product. This building kit does contain genuine LEGO® bricks. This building kit was created independently as a small thank-you gift for contributors to exec(ut) 2026 and is not an official LEGO product.
        </Paragraph>
      </div>
    </Section>
  );
}