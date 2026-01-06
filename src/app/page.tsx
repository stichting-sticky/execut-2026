import { HomeHeroSection } from "@/components/section/home/hero";
import { HomeStatsSection } from "@/components/section/home/stats";
import { HomePartnersSection } from "@/components/section/home/partners";
import { HomeSpeakersSection } from "@/components/section/home/speakers";
import { HomeAcknowledgementsSection } from "@/components/section/home/acknowledgements";
import { HomeAboutSection } from "@/components/section/home/about";
import { HomeProgrammeSection } from "@/components/section/home/programme";
import { HomeLocationSection } from "@/components/section/home/location";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeStatsSection />
      <HomePartnersSection />
      <HomeSpeakersSection />
      <HomeProgrammeSection />
      <HomeLocationSection />
      <HomeAboutSection />
      <HomeAcknowledgementsSection />
    </>
  );
}
