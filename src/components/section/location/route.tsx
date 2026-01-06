import Section from "@/components/section/section";
import { H2, H3, Paragraph, Callout } from "@/components/ui/typography";
import { MASTER_TBA } from "@/config/tba";
import { EVENT } from "@/data/event";

export function LocationRouteSection() {
	return (
		<Section className="scroll-mt-52" id="route">
			<div className="space-y-6">
				<div className="max-w-3xl space-y-3">
					<H2>Route</H2>
					<Callout className="!mt-0">
						How to get to {MASTER_TBA ? "the venue" : EVENT.venue.real}.
					</Callout>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="space-y-2">
						<H3>Public transport</H3>
						<Paragraph>
							TBA. Add guidance from the main station, tram/bus stops, walking times, etc.
						</Paragraph>
					</div>

					<div className="space-y-2">
						<H3>Bicycle</H3>
						<Paragraph>
							TBA. Where to park your bike, whether there are guarded racks, and any tips.
						</Paragraph>
					</div>

					<div className="space-y-2">
						<H3>Car</H3>
						<Paragraph>
							TBA. Recommended parking garages, expected costs, and accessibility notes.
						</Paragraph>
					</div>
				</div>
			</div>
		</Section>
	);
}
