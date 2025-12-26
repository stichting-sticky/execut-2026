"use client";

import Link from "next/link";
import { TinyText } from "@/components/ui/typography";
import { InstagramLogoIcon, LinkedinLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-16 bg-accent/10">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col gap-12 md:flex-row items-center justify-between">
          {/* Left: Logo and Name */}
          <div className="flex items-center gap-4">
            <div className="size-16 bg-foreground flex items-center justify-center">
              <img src="/logo_face.png" alt="Execut Logo" className="size-16" />
            </div>
            <p className="font-mono text-2xl hidden md:block">exec(ut)</p>
          </div>

          {/* Right: Social Media */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="font-mono text-sm">Socials</p>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.instagram.com/execut_conference/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <InstagramLogoIcon size={32} weight="light" />
              </Link>
              <Link
                href="https://www.linkedin.com/showcase/execut-conference/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <LinkedinLogoIcon size={32} weight="light" />
              </Link>
              <Link
                href="https://www.youtube.com/@execut-conference"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <YoutubeLogoIcon size={32} weight="light" />
              </Link>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-foreground/10 mt-10 mb-10" />

        {/* Bottom Section: Copyright and Legal */}
        <div className="text-center md:text-left space-y-2">
          <TinyText>
            Copyright 2025 Stichting Sticky. All rights reserved.
          </TinyText>
          <TinyText>
            Please take note of our{" "}
            <Link
              href="/code-of-conduct"
              className="underline hover:opacity-70 transition-opacity"
            >
              Code of Conduct
            </Link>
            ,{" "}
            <Link
              href="/privacy-policy"
              className="underline hover:opacity-70 transition-opacity"
            >
              Privacy Policy
            </Link>
            , and{" "}
            <Link
              href="/general-terms"
              className="underline hover:opacity-70 transition-opacity"
            >
              General Terms
            </Link>
            .
          </TinyText>
        </div>
      </div>
    </footer>
  );
}
