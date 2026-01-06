import Section from "@/components/section/section";
import { Callout, Title } from "@/components/ui/typography";
import { EVENT } from "@/data/event";

export function SpeakersHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-tertiary/0 from-50% via-tertiary/35 via-75% to-tertiary/75 to-100%">
      <div className="relative z-10 pointer-events-auto">
        <Section>
          <div className="w-full max-w-xl">
            <Title>Our Speakers</Title>
            <Callout>Meet the industry experts and thought leaders who will be sharing their insights at exec(ut) {EVENT.year}.</Callout>
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
