import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Supertitle({ className, children, ...props }: TypographyProps) {
  return (
    <p
      className={cn(
        "font-mono text-lg tracking-wider text-primary max-w-[90vw]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function Title({ className, children, ...props }: TypographyProps) {
  return (
    <h1
      className={cn(
        "font-mono scroll-m-20 text-4xl font-bold tracking-tight text-foreground max-w-[90vw]",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ className, children, ...props }: TypographyProps) {
  return (
    <h2
      className={cn(
        "font-mono scroll-m-20 text-3xl font-bold tracking-tight text-foreground max-w-[90vw]",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({ className, children, ...props }: TypographyProps) {
  return (
    <h3
      className={cn(
        "font-mono scroll-m-20 text-2xl font-semibold tracking-tight text-foreground max-w-[90vw]",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function H4({ className, children, ...props }: TypographyProps) {
  return (
    <h4
      className={cn(
        "font-mono scroll-m-20 text-xl font-semibold tracking-tight text-foreground max-w-[90vw]",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
}

export function Paragraph({ className, children, ...props }: TypographyProps) {
  return (
    <p
      className={cn("font-sans leading-7 not-first:mt-6 text-foreground max-w-[90vw]", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function Callout({ className, children, ...props }: TypographyProps) {
  return (
    <p
      className={cn("font-sans text-lg leading-7 not-first:mt-6 not-last:mb-6 text-foreground max-w-[90vw]", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function TinyText({ className, children, ...props }: TypographyProps) {
  return (
    <p
      className={cn("font-sans text-xs leading-5 text-muted-foreground max-w-[90vw]", className)}
      {...props}
    >
      {children}
    </p>
  );
}
