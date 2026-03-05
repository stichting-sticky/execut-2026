import Section from "@/components/section/section";
import { Title, Callout } from "@/components/ui/typography";
import { EVENT } from "@/data/event";

export function ProgrammeHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-secondary/0 from-50% via-secondary/35 via-75% to-secondary/75 to-100%">
      <div className="relative z-10 pointer-events-auto">
        <Section>
          <div className="w-full max-w-xl">
            <Title>Programme</Title>
            <Callout>
                The full programme for exec(ut) {EVENT.year}, outlining the talks, workshops, and key moments of the day.
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

