import { cva, type VariantProps } from "class-variance-authority";

import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const textVariants = cva("max-w-[90vw]", {
    variants: {
        variant: {
            paragraph: "font-sans leading-7 not-first:mt-6 text-foreground",
            callout: "font-sans text-lg leading-7 not-first:mt-6 not-last:mb-6 text-foreground",
            tiny: "font-sans text-xs leading-5 text-muted-foreground",
            supertitle: "font-mono text-lg tracking-wider text-primary",
        },
    },
    defaultVariants: {
        variant: "paragraph",
    },
});

export interface TextProps
    extends HTMLAttributes<HTMLParagraphElement>,
        VariantProps<typeof textVariants> {
    children?: ReactNode;
}

export function Text({
    className,
    variant,
    children,
    ...props
}: TextProps) {
    return (
        <p className={cn(textVariants({ variant }), className)} {...props}>
            {children}
        </p>
    );
}