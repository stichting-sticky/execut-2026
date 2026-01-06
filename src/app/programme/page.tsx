import { ProgrammeHeroSection } from "@/components/section/programme/hero";
import { ProgrammeScheduleSections } from "@/components/section/programme/schedule-sections";

export const metadata = {
  title: "Programme",
};

export default function ProgrammePage() {
    return (
        <>
            <ProgrammeHeroSection />
            <ProgrammeScheduleSections />
        </>
    );
}
