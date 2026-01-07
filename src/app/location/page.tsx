import { LocationHeroSection } from "@/components/section/location/hero";
import { LocationNavigationSection } from "@/components/section/location/navigation";
import { LocationAboutSection } from "@/components/section/location/about";
import { LocationImpressionSection } from "@/components/section/location/impression";
import { LocationRouteSection } from "@/components/section/location/route";
import { LocationMapSection } from "@/components/section/location/map";

import { MASTER_TBA } from "@/config/tba";
import { TBA } from "@/components/ui/tba";
import { HashScroll } from "@/components/hash-scroll";

export const metadata = {
  title: "Venue",
};

export default function LocationPage() {
	return (
		<div className="min-h-screen bg-background">
			<HashScroll />
			<LocationHeroSection />

			{MASTER_TBA ? (
				<>
					<div className="hidden md:block sticky md:top-28 z-10 bg-accent py-4">
						<div className="max-w-[90vw] h-[40px]" />
					</div>

					<div className="p-12">
						<TBA text="Our locations will be announced soon." />
					</div>
				</>
			) : (
				<>
					<LocationNavigationSection />
					<LocationAboutSection />
					<LocationImpressionSection />
					<LocationMapSection />
					<LocationRouteSection />
				</>
			)}
		</div>
	);
}
