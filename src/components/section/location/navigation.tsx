import Section from "@/components/section/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const venueSections = [
  { id: "about", label: "About" },
  { id: "impression", label: "Impression" },
  { id: "map", label: "Map" },
  { id: "route", label: "Travel Advice" },
] as const;

export function LocationNavigationSection() {
  return (
    <Section className="sticky md:top-28 top-20 z-10 bg-accent !py-0">
      <div>
        {/* Desktop navigation */}
        <div className="hidden md:flex flex-wrap gap-4 justify-start py-4 max-w-[90vw]">
          {venueSections.map((s) => (
            <Button key={s.id} variant="link" asChild className="text-background">
              <Link href={`#${s.id}`}>{s.label}</Link>
            </Button>
          ))}
        </div>

        {/* Mobile placeholder bar (same idea as Partners) */}
        <div className="md:hidden flex items-center justify-center h-4" />
      </div>
    </Section>
  );
}
