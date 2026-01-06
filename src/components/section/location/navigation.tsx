import Section from "@/components/section/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const venueSections = [
  { id: "about", label: "About" },
  { id: "impression", label: "Impression" },
  { id: "route", label: "Route" },
  { id: "map", label: "Map" },
] as const;

export function LocationNavigationSection() {
  return (
    <Section className="sticky md:top-28 z-10 bg-accent hidden md:block !py-0">
      <div className="flex flex-wrap gap-4 justify-start py-4 max-w-[90vw]">
        {venueSections.map((s) => (
          <Button key={s.id} variant="link" asChild className="text-background">
            <Link href={`#${s.id}`}>{s.label}</Link>
          </Button>
        ))}
      </div>
    </Section>
  );
}
