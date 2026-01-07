import Section from "@/components/section/section";
import { H2, Paragraph } from "@/components/ui/typography";
import { EVENT } from "@/data/event";
import { MASTER_TBA } from "@/config/tba";

export function LocationAboutSection() {
  return (
    <Section className="" id="about">
      {/* 50/50 block */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 place-items-center md:place-items-stretch">
        {/* Left: card MUST fill its 50% column on desktop */}
        <div className="flex items-stretch justify-center md:justify-stretch">
          <div className="w-full max-w-md md:max-w-none">
            <div className="h-full min-h-[120px] md:min-h-[220px] flex items-center justify-center bg-primary/5 backdrop-blur-sm px-6 py-8 md:px-10 md:py-10">
              <H2 className="relative inline-block text-center leading-tight">
                {MASTER_TBA ? "Venue TBA" : EVENT.venue.real}
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 md:w-40 h-[2px] bg-accent" />
              </H2>
            </div>
          </div>
        </div>

        {/* Right: text fills its 50% column */}
        <div className="flex items-center">
          <div className="w-full max-w-xl md:max-w-none text-left">
            <Paragraph className="text-lg">
              Tivoli Vredenburg sits in the heart of Utrecht and is one of the city’s most iconic cultural venues.
              Its mix of modern architecture and flexible spaces makes it an ideal setting for talks, workshops,
              and networking throughout the day.
            </Paragraph>
          </div>
        </div>
      </div>

      {/* Stats: force true 3 equal columns so middle is centered */}
      <div className="mt-12 md:mt-16 w-full grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="w-full">
          <div className="font-mono text-sm uppercase text-foreground/60">Location</div>
          <div className="text-lg">Utrecht city centre</div>
        </div>

        <div className="w-full">
          <div className="font-mono text-sm uppercase text-foreground/60">Accessibility</div>
          <div className="text-lg">Easily reachable by public transport and bike</div>
        </div>

        <div className="w-full">
          <div className="font-mono text-sm uppercase text-foreground/60">Spaces</div>
          <div className="text-lg">Talks, workshops & networking</div>
        </div>
      </div>
    </Section>
  );
}
