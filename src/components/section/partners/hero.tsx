import Section from "@/components/section/section";
import { Callout, Title } from "@/components/ui/typography";

export function PartnersHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-primary/0 from-50% via-primary/35 via-75% to-primary/75 to-100%">
      <div className="relative z-10 pointer-events-auto">
        <Section>
          <div className="w-full max-w-xl">
            <Title>Our Partners</Title>
            <Callout>
              Meet our partners that help make exec(ut) 2026 possible. blablablablabla
            </Callout>
          </div>
        </Section>
      </div>
      <div className="absolute inset-[-250] hidden md:block pointer-events-none">
        <iframe
          src="https://my.spline.design/glasscube-CmxGfmC2hMcKu65tdK70LS5N/"
          className="w-full h-[700px]"
          loading="lazy"
        />
      </div>
    </section>
  );
}
