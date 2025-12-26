import { SpeakersHeroSection } from "@/components/section/speakers/hero";
import { SpeakersNavigationSection } from "@/components/section/speakers/navigation";
import { SpeakersListSection } from "@/components/section/speakers/list";

export default function SpeakersPage() {
    return (
        <div className="min-h-screen bg-background">
            <SpeakersHeroSection />
            <SpeakersNavigationSection />
            <SpeakersListSection />
        </div>
    );
}
