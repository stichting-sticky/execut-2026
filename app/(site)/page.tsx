import { HomeAboutSection } from "@/components/section/home/about";
import { HomeAcknowledgementsSection } from "@/components/section/home/acknowledgements";
import { HomeHeroSection } from "@/components/section/home/hero";
import { HomeLocationSection } from "@/components/section/home/location";
import { HomePartnersSection } from "@/components/section/home/partners";
import HomePicturesSection from "@/components/section/home/pictures";
import { HomeProgrammeSection } from "@/components/section/home/programme";
import { HomeSpeakersSection } from "@/components/section/home/speakers";
import { HomeStatsSection } from "@/components/section/home/stats";

import { getConfig, getSiteContent } from "@/lib/content";

export default function Home() {
    const config = getConfig();
    const content = getSiteContent();

    return (
        <>
            <HomeHeroSection
                event={content.event}
                eventState={config.content.event}
            />

            <HomePicturesSection />

            <HomeStatsSection
                stats={content.event?.stats ?? null}
                state={config.content.stats}
            />

            <HomePartnersSection
                partners={content.partners.data}
                year={content.partners.year}
                state={config.content.partners}
            />

            <HomeSpeakersSection
                speakers={content.speakers.data}
                year={content.speakers.year}
                state={config.content.speakers}
            />

            <HomeProgrammeSection
                year={config.edition.current}
                event={content.event}
                state={config.content.event}
            />

            <HomeLocationSection
                location={content.location?.data ?? null}
                year={config.edition.current}
                locationYear={content.location?.year ?? null}
                state={config.content.location}
            />

            <HomeAboutSection
                committee={content.committee.data}
                year={content.committee.year}
                state={config.content.committee}
            />

            <HomeAcknowledgementsSection
                acknowledgements={config.acknowledgements}
            />
        </>
    );
}