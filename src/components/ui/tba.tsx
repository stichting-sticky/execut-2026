import { H2, Paragraph } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export function TBA({
  title = "TBA",
  text = "Details will be announced soon.",
  className,
  titleClassName,
  textClassName,
}: {
  title?: string;
  text?: string;
  className?: string;
  titleClassName?: string;
  textClassName?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-dashed border-foreground/20 p-12 text-center",
        className
      )}
    >
      <H2 className={cn(titleClassName)}>{title}</H2>
      <Paragraph className={cn("mt-2 text-prose/60", textClassName)}>
        {text}
      </Paragraph>
    </div>
  );
}
