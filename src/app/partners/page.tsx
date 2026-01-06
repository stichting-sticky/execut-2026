import { PartnersHeroSection } from "@/components/section/partners/hero";
import { PartnersNavigationSection } from "@/components/section/partners/navigation";
import { PartnersListSection } from "@/components/section/partners/list";
import { MASTER_TBA } from "@/config/tba";
import { TBA } from "@/components/ui/tba";
import { HashScroll } from "@/components/hash-scroll";

export const metadata = {
  title: "Partners",
};

export default function PartnersPage() {
    return (
        <div className="min-h-screen bg-background">
            <HashScroll />
            <PartnersHeroSection />
            {MASTER_TBA ? (
                <>
                    <div className="hidden md:block sticky md:top-28 z-10 bg-primary py-4">
                        <div className="max-w-[90vw] h-[40px]" />
                    </div>
                    <div className="p-12">
                        <TBA text="Our partners will be announced soon." />
                    </div>
                </>
            ) : (
                <>
                    <PartnersNavigationSection />
                    <PartnersListSection />
                </>
            )}
        </div>
    );
}