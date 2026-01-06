import { SpeakersHeroSection } from "@/components/section/speakers/hero";
import { SpeakersNavigationSection } from "@/components/section/speakers/navigation";
import { SpeakersListSection } from "@/components/section/speakers/list";
import { MASTER_TBA } from "@/config/tba";
import { TBA } from "@/components/ui/tba";

export default function SpeakersPage() {
    return (
        <div className="min-h-screen bg-background">
            <SpeakersHeroSection />
            {MASTER_TBA ? (
                <>
                    <div className="hidden md:block sticky md:top-28 z-10 bg-tertiary py-4">
                        <div className="max-w-[90vw] h-[40px]" />
                    </div>

                    {/* TBA content */}
                    <div className="p-12">
                        <TBA text="Speakers will be announced soon." />
                    </div>
                </>
            ) : (
                <>
                    <SpeakersNavigationSection />
                    <SpeakersListSection />
                </>
            )}
        </div>
    );
}
