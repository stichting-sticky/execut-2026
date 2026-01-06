import Section from "@/components/section/section";
import { Callout, Title } from "@/components/ui/typography";
import { EVENT } from "@/data/event";

export function LocationHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-accent/0 from-50% via-accent/35 via-75% to-accent/75 to-100%">
      <div className="relative z-10 pointer-events-auto">
        <Section>
          <div className="w-full max-w-xl">
            <Title>This years venue</Title>
            <Callout>
              The venue that brings exec(ut) {EVENT.year} to life, carefully chosen to create the perfect conference experience.
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
