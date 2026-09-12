"use client";

import Link from "next/link";

import {
    InstagramLogoIcon,
    LinkedinLogoIcon,
    YoutubeLogoIcon,
} from "@phosphor-icons/react";

import { Text } from "@/components/typography";

export function Footer() {
    return (
        <footer className="w-full bg-accent/10 px-6 py-12 md:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center">
                            <img
                                src="/logo_large_mono_black.png"
                                alt="Execut Logo"
                                className="size-16 w-auto"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-3 md:items-end">
                        <Text className="font-mono text-sm">Socials</Text>

                        <div className="flex items-center gap-4">
                            <Link
                                href="https://www.instagram.com/execut_conference/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-opacity hover:opacity-70"
                                aria-label="Instagram"
                            >
                                <InstagramLogoIcon size={32} weight="light" />
                            </Link>

                            <Link
                                href="https://www.linkedin.com/showcase/execut-conference/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-opacity hover:opacity-70"
                                aria-label="LinkedIn"
                            >
                                <LinkedinLogoIcon size={32} weight="light" />
                            </Link>

                            <Link
                                href="https://www.youtube.com/@execut-conference"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-opacity hover:opacity-70"
                                aria-label="YouTube"
                            >
                                <YoutubeLogoIcon size={32} weight="light" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="my-10 h-px w-full bg-foreground/10" />

                <div className="space-y-2 text-center md:text-left">
                    <Text variant="tiny">
                        Copyright 2026 Stichting Sticky. All rights reserved.
                    </Text>

                    <Text variant="tiny">
                        Please take note of our{" "}
                        <Link
                            href="/code-of-conduct.pdf"
                            className="underline transition-opacity hover:opacity-70"
                        >
                            Code of Conduct
                        </Link>
                        ,{" "}
                        <Link
                            href="/privacy-policy.pdf"
                            className="underline transition-opacity hover:opacity-70"
                        >
                            Privacy Policy
                        </Link>
                        , and{" "}
                        <Link
                            href="/terms-and-conditions.pdf"
                            className="underline transition-opacity hover:opacity-70"
                        >
                            General Terms
                        </Link>
                        .
                    </Text>
                </div>
            </div>
        </footer>
    );
}