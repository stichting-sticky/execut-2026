import { HomeHeroSection } from "@/components/section/home/hero";
import { HomeSpeakersSection } from "@/components/section/home/speakers";
import { HomeStatsSection } from "@/components/section/home/stats";
import { HomeAcknowledgementsSection } from "@/components/section/home/acknowledgements";
import { HomeAboutSection } from "@/components/section/home/about";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeStatsSection />
      <HomeSpeakersSection />
      <HomeAboutSection />
      <HomeAcknowledgementsSection />
    </>
  );
}
