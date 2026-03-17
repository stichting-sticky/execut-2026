import { cn } from "@/lib/utils";
import type { PartnerTier } from "@/data/partners";

const tierGradients: Record<PartnerTier, string> = {
  introduction: "bg-gradient-to-r from-secondary/50 to-secondary",
  bronze: "bg-gradient-to-r from-[#e8a18a] to-[#dd5920]",
  silver: "bg-gradient-to-r from-[#cdcdcd] to-[#727272]",
  gold: "bg-gradient-to-r from-[#f6d679] to-[#bf8728]",
  platinum: "bg-gradient-to-r from-[#d7e1bf] to-[#afdeff]",
};

export function TierBadge({ tier, className }: { tier: PartnerTier; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex align-baseline items-center",
        "px-3 py-1",
        "text-white font-mono text-[10px] uppercase tracking-wider",
        "rounded-none",
        tierGradients[tier],

        className
      )}
    >
      {tier}
    </span>
  );
}
