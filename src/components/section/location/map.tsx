"use client";

import Section from "@/components/section/section";
import { H2, Paragraph, Callout } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MASTER_TBA } from "@/config/tba";
import { EVENT } from "@/data/event";

export function LocationMapSection() {
	const addressLines = MASTER_TBA
		? ["Venue TBA", "Utrecht, NL"]
		: [EVENT.venue.real, "Utrecht, NL"];

	const mapsQuery = MASTER_TBA ? "Utrecht" : EVENT.venue.real;

	const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`;
	const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;

	return (
		<Section className="scroll-mt-24 md:scroll-mt-40 bg-primary/10" id="map">
			{/* ONE layout: map left, all text right */}
			<div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-8 items-start">
				{/* LEFT: MAP */}
				<p id="map-fallback" className="sr-only">
				Oopsie, Google Maps failed to load.
				</p>
				<div className="relative overflow-hidden shadow-lg aspect-[16/10]">
					<iframe
					title="Map showing the venue location"
					aria-describedby="map-fallback"
					src={embedSrc}
					className="absolute inset-0 w-full h-full"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					/>
				</div>

				{/* RIGHT: ALL TEXT */}
				<div className="flex flex-col h-full space-y-6 md:text-right">
					{/* Top: title + callout */}
					<div className="space-y-3">
						<H2>Where to find the venue</H2>
						<Callout className="!mt-0">Find the venue on the map and plan your journey in advance.</Callout>
					</div>

					{/* Middle: accessibility / notes */}
					<Paragraph>
						Tivoli Vredenburg is accessible for visitors with mobility requirements. The most accessible entrance is on Vredenburgkade (into the central lobby). The venue is large, so feel free to ask staff for assistance.
					</Paragraph>

					{/* Button under paragraph */}
					<div className="md:flex md:justify-end">
						<Button asChild className="w-full md:w-auto">
						<Link href={mapsLink} target="_blank" rel="noopener noreferrer">
							Open in Google Maps
						</Link>
						</Button>
					</div>

					{/* Bottom: address (pushed down) */}
					<div className="mt-auto pt-6 border-t border-foreground/10 md:text-left">
						<div className="font-mono text-foreground/80 text-sm uppercase tracking-wide">
						Address
						</div>
						<div className="font-mono text-lg leading-snug">
							<div>Tivoli Vredenburg</div>
							<div>Vredenburgkade 11, 3511 WC Utrecht, NL</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}
