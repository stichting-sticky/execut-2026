"use client";

import Section from "@/components/section/section";
import { H2, Paragraph, Callout } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MASTER_TBA } from "@/config/tba";
import { EVENT } from "@/data/event";

export function LocationMapSection() {
	// Replace with the real address when known
	const addressLines = MASTER_TBA
		? ["Venue TBA", "Utrecht, NL"]
		: [EVENT.venue.real, "Utrecht, NL"];

	// Replace this query when you know the exact venue
	const mapsQuery = MASTER_TBA ? "Utrecht" : EVENT.venue.real;

	// For embed: keep it simple. This doesn't require an API key.
	const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`;

	const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;

	return (
		<Section className="scroll-mt-52 bg-primary/10" id="map">
			<div className="space-y-6">
				<div className="max-w-3xl space-y-3">
					<H2>Map</H2>
					<Callout className="!mt-0">
						Find the venue and plan your trip.
					</Callout>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-8 items-start">
					<div className="relative overflow-hidden shadow-lg aspect-[16/10]">
						<iframe
							title="Venue map"
							src={embedSrc}
							className="absolute inset-0 w-full h-full"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>

					<div className="space-y-4">
						<div className="space-y-1">
							<div className="font-mono text-foreground/80 text-sm uppercase tracking-wide">
								Address
							</div>
							<div className="font-mono text-lg">
								{addressLines.map((line) => (
									<div key={line}>{line}</div>
								))}
							</div>
						</div>

						<Paragraph>
							TBA. Add accessibility info, entrance details, and any notes for attendees.
						</Paragraph>

						<Button asChild className="w-full md:w-auto">
							<Link href={mapsLink} target="_blank" rel="noopener noreferrer">
								Open in Google Maps
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</Section>
	);
}
