"use client";

import * as React from "react";
import Image from "next/image";
import Section from "@/components/section/section";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Title, Supertitle, Callout } from "@/components/ui/typography";

const LOCATION_IMAGES = [
	{ src: "/location/1.jpg", alt: "Venue impression 1" },
	{ src: "/location/1.jpg", alt: "Venue impression 2" },
	{ src: "/location/1.jpg", alt: "Venue impression 3" },
    { src: "/location/1.jpg", alt: "Venue impression 4" },
	{ src: "/location/1.jpg", alt: "Venue impression 5" },
	{ src: "/location/1.jpg", alt: "Venue impression 6" },
];

export function LocationImpressionSection() {
	const [api, setApi] = React.useState<CarouselApi>();
	const [selected, setSelected] = React.useState(0);

	React.useEffect(() => {
		if (!api) return;

		const update = () => setSelected(api.selectedScrollSnap());
		update();

		api.on("select", update);
		api.on("reInit", update);

		return () => {
			api.off("select", update);
			api.off("reInit", update);
		};
	}, [api]);

	return (
		<div id="impression" className="scroll-mt-52">
			<section className="w-full relative">
				<div className="relative pb-8">
					<Carousel setApi={setApi} className="w-full flex flex-col" opts={{ loop: true, align: "start" }}>
  <CarouselContent className="ml-0">
    {LOCATION_IMAGES.map((img, index) => (
      <CarouselItem
        key={`${img.alt}-${index}`}
        className="pl-0 basis-[70%] sm:basis-[45%] md:basis-[28%] lg:basis-[22%]"
      >
        <div className="relative aspect-square w-full">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="(min-width:1024px) 22vw, (min-width:768px) 28vw, (min-width:640px) 45vw, 70vw"
            priority={index === 0}
          />
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>

						{/* BOTTOM: text + controls (inside carousel, like speakers) */}
						<Section className="!py-0">
							<div className="w-full max-w-7xl mx-auto px-6 md:px-0 py-8 md:py-16">
								<div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-8">
									{/* Controls FIRST on mobile, SECOND on md+ */}
									<div className="order-1 md:order-2 flex justify-center md:justify-end">
										<div
											className={cn(
												"flex gap-4",
												LOCATION_IMAGES.length <= 1 && "opacity-40 pointer-events-none"
											)}
										>
											<CarouselPrevious />
											<CarouselNext />
										</div>
									</div>

									{/* Text SECOND on mobile, FIRST on md+ */}
									<div className="order-2 md:order-1">
										<Title>Impression</Title>
										<Callout>
											A quick look at the venue and its atmosphere.
										</Callout>
									</div>
								</div>
							</div>
						</Section>
					</Carousel>
				</div>
			</section>
		</div>
	);
}
