import Section from "@/components/section/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const venueSections = [
  { id: "schedule", label: "Schedule" },
  { id: "host", label: "Host" },
] as const;

export function ProgrammeNavigationSection() {
  return (
    <Section className="sticky top-[var(--header-height)] z-10 md:z-40 bg-[color-mix(in_srgb,var(--secondary)_80%,black)] !py-0">
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
