import { ProgrammeHeroSection } from "@/components/section/programme/hero";
import { ProgrammeScheduleSections } from "@/components/section/programme/schedule-sections";
import { ProgrammeHostSection } from "@/components/section/programme/host";
import { ProgrammeNavigationSection } from "@/components/section/programme/navigation";

export const metadata = {
  title: "Programme",
};

export default function ProgrammePage() {
  return (
    <>
      <ProgrammeHeroSection />
      <ProgrammeNavigationSection />
      <ProgrammeScheduleSections />
      <ProgrammeHostSection />
    </>
  );
}
