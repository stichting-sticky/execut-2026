import Section from "@/components/section/section";
import { H2, Paragraph, Callout } from "@/components/ui/typography";
import { EVENT } from "@/data/event";
import { MASTER_TBA } from "@/config/tba";

export function LocationAboutSection() {
	return (
		<Section className="scroll-mt-52" id="about">
			<div className="max-w-3xl space-y-4">
				<H2>
					{MASTER_TBA ? "Venue TBA" : EVENT.venue.real}
				</H2>

				<Callout className="!mt-0">
					The location that brings exec(ut) {EVENT.year} to life, carefully chosen to create the perfect conference experience.
				</Callout>

				<Paragraph className="text-lg">
					We’ll share more details about the venue layout, accessibility, and facilities soon.
				</Paragraph>
			</div>
		</Section>
	);
}
