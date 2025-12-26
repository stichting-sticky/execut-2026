import { cn } from "@/lib/utils";

type SectionProps = React.PropsWithChildren<{
  fullWidth?: boolean;
  className?: string;
  wrapperClassName?: string;
  id?: string;
}>;

export default function Section({
  children,
  fullWidth = false,
  className,
  id,
  wrapperClassName,
}: SectionProps) {
  return (
    <section id={id} className={cn("flex flex-col h-full z-1 relative py-20 md:px-12", className)}>
      <div
        className={cn(
          "z-1 section-wrapper flex-1 h-full mx-auto flex flex-col items-start justify-start relative px-6 md:px-0",
          fullWidth ? "w-full" : "w-full max-w-7xl",
          wrapperClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
