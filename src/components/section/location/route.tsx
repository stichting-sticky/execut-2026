import Section from "@/components/section/section";
import { H2, H3, Paragraph, Callout } from "@/components/ui/typography";
import { MASTER_TBA } from "@/config/tba";
import { EVENT } from "@/data/event";

export function LocationRouteSection() {
	return (
		<Section className="scroll-mt-24 md:scroll-mt-40" id="route">
			<div className="space-y-6">
				<div className="max-w-3xl space-y-3">
					<H2>Travel Advice</H2>
					<Callout className="!mt-0">
						How to get to {MASTER_TBA ? "the venue" : EVENT.venue.short}.
					</Callout>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="space-y-2">
						<H3>Public transport</H3>
						<Paragraph>
							TivoliVredenburg is located right next to Utrecht Centraal Station and is easily
							reachable by train, tram, and bus. From the station, it is a short walk of about
							5 minutes through Hoog Catharijne to the venue entrance on Vredenburgkade.
						</Paragraph>
					</div>

					<div className="space-y-2">
						<H3>Bicycle</H3>
						<Paragraph>
							Utrecht is a bike-friendly city, and TivoliVredenburg can be easily reached by bicycle.
							There are multiple bicycle parking facilities nearby, including large guarded bike
							parking at Utrecht Centraal and around Vredenburg.
						</Paragraph>
					</div>

					<div className="space-y-2">
						<H3>Car</H3>
						<Paragraph>
							We recommend using public transport where possible. If you are coming by car,
							several paid parking garages are available nearby, including parking at
							Hoog Catharijne and other garages in the city centre. From there, it is a short
							walk to the venue.
						</Paragraph>
					</div>
				</div>
			</div>
		</Section>
	);
}
