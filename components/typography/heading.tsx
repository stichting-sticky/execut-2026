import { cva, type VariantProps } from "class-variance-authority";

import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const headingVariants = cva(
    "max-w-[90vw] scroll-m-20 font-mono tracking-tight text-foreground mb-2",
    {
        variants: {
            variant: {
                h1: "text-4xl font-bold",
                h2: "text-3xl font-bold",
                h3: "text-2xl font-semibold",
                h4: "text-xl font-semibold",
                supertitle: "text-lg font-normal tracking-wider text-primary",
            },
        },
        defaultVariants: {
            variant: "h1",
        },
    },
);

const variantMap = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
} as const;

type HeadingLevel = keyof typeof variantMap;

interface HeadingProps
    extends HTMLAttributes<HTMLHeadingElement>,
        VariantProps<typeof headingVariants> {
    as?: HeadingLevel;
    children: ReactNode;
}

export function Heading({
    as = "h1",
    variant,
    className,
    children,
    ...props
}: HeadingProps) {
    const Component = variantMap[as];

    return (
        <Component
            className={cn(headingVariants({ variant: variant ?? as }), className)}
            {...props}
        >
            {children}
        </Component>
    );
}