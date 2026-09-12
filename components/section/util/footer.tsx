"use client";

import Link from "next/link";

import {
    InstagramLogoIcon,
    LinkedinLogoIcon,
    YoutubeLogoIcon,
} from "@phosphor-icons/react";

import { Text } from "@/components/typography";

export function UtilFooter() {
    return (
        <footer className="w-full shrink-0 bg-accent/10 px-6 py-6 md:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-center justify-between">
                    <img
                        src="/logo_large_mono_black.png"
                        alt="Execut Logo"
                        className="h-12 w-auto"
                    />

                    <div className="flex items-center gap-4">
                        <span className="font-mono text-sm">Socials</span>

                        <Link
                            href="https://www.instagram.com/execut_conference/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-opacity hover:opacity-70"
                        >
                            <InstagramLogoIcon size={24} weight="light" />
                        </Link>

                        <Link
                            href="https://www.linkedin.com/showcase/execut-conference/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-opacity hover:opacity-70"
                        >
                            <LinkedinLogoIcon size={24} weight="light" />
                        </Link>

                        <Link
                            href="https://www.youtube.com/@execut-conference"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-opacity hover:opacity-70"
                        >
                            <YoutubeLogoIcon size={24} weight="light" />
                        </Link>
                    </div>
                </div>

                <div className="my-5 h-px w-full bg-foreground/10" />

                <div className="flex flex-col gap-1">
                    <Text variant="tiny">
                        Copyright 2026 Stichting Sticky. All rights reserved.
                    </Text>

                    <Text variant="tiny">
                        Please take note of our{" "}
                        <Link href="/code-of-conduct.pdf" className="underline hover:opacity-70">
                            Code of Conduct
                        </Link>
                        ,{" "}
                        <Link href="/privacy-policy.pdf" className="underline hover:opacity-70">
                            Privacy Policy
                        </Link>
                        , and{" "}
                        <Link href="/terms-and-conditions.pdf" className="underline hover:opacity-70">
                            General Terms
                        </Link>
                        .
                    </Text>
                </div>
            </div>
        </footer>
    );
}