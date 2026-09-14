"use client";

import Link from "next/link";

import { useEffect, useLayoutEffect, useState } from "react";

import { ListIcon, XIcon } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";

import type { EventData, SiteConfig } from "@/lib/content";

type UtilHeaderProps = {
    config: SiteConfig;
    event: EventData | null;
};

type HeaderPage = {
    enabled: boolean;
    label: string;
    href: string;
};

export function UtilHeader({
    config,
    event,
}: UtilHeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const enabledPages = Object.values(config.pages).filter((page) => page.enabled);
    const eventState = config.content.event;

    const showEvent = eventState === "enabled" || eventState === "tba";
    const showTickets =
        eventState === "enabled" &&
        event?.tickets?.enabled &&
        event.tickets.url;

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    useHeaderHeight();

    return (
        <>
            <DesktopHeader pages={enabledPages} />

            <MobileHeader
                open={mobileMenuOpen}
                onToggle={() => setMobileMenuOpen((open) => !open)}
            />

            <MobileMenu
                open={mobileMenuOpen}
                pages={enabledPages}
                config={config}
                event={event}
                showEvent={showEvent}
                showTickets={Boolean(showTickets)}
                onClose={() => setMobileMenuOpen(false)}
            />
        </>
    );
}

function DesktopHeader({
    pages,
}: {
    pages: HeaderPage[];
}) {
    return (
        <header
            id="util-header-desktop"
            className="sticky top-0 z-50 hidden w-screen items-center justify-between bg-background md:flex"
        >
            <div className="flex items-center gap-4 bg-primary px-4 py-6 md:px-16 xl:py-8">
                <Logo />
            </div>

            <nav className="ml-6 flex items-center gap-1 lg:ml-12">
                {pages.map((page) => (
                    <Button
                        key={page.href}
                        variant="link"
                        asChild
                        className="px-2 text-base text-foreground lg:px-3 lg:text-lg"
                    >
                        <Link href={page.href}>{page.label}</Link>
                    </Button>
                ))}
            </nav>

            <div className="flex shrink-0 items-center gap-3 px-6 lg:px-16">
                <Button
                    variant="outline"
                    asChild
                    className="text-sm lg:text-base"
                >
                    <Link href="/contact">Contact</Link>
                </Button>
            </div>
        </header>
    );
}

function MobileHeader({
    open,
    onToggle,
}: {
    open: boolean;
    onToggle: () => void;
}) {
    return (
        <header
            id="util-header-mobile"
            className="sticky top-0 z-50 flex w-full items-center justify-between bg-primary px-6 py-4 md:hidden"
        >
            <Link href="/" className="flex items-center gap-3">
                <Logo small />
            </Link>

            <button
                type="button"
                onClick={onToggle}
                className="p-2 text-background"
                aria-label="Toggle menu"
                aria-expanded={open}
            >
                {open ? (
                    <XIcon size={32} weight="light" />
                ) : (
                    <ListIcon size={32} weight="light" />
                )}
            </button>
        </header>
    );
}

function MobileMenu({
    open,
    pages,
    config,
    event,
    showEvent,
    showTickets,
    onClose,
}: {
    open: boolean;
    pages: HeaderPage[];
    config: SiteConfig;
    event: EventData | null;
    showEvent: boolean;
    showTickets: boolean;
    onClose: () => void;
}) {
    const eventState = config.content.event;

    return (
        <div
            className={`fixed inset-0 z-40 flex flex-col bg-primary pt-20 transition-transform duration-300 ease-in-out md:hidden ${
                open ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <div className="flex flex-1 flex-col px-6 py-8">
                {showEvent && (
                    <div className="mb-8 border-b border-background/20 pb-6 font-mono text-background">
                        <p>
                            {eventState === "tba"
                                ? `exec(ut) ${config.edition.current}`
                                : event?.date}
                        </p>

                        <p className="font-bold">
                            {">"}{" "}
                            {eventState === "tba"
                                ? "To be announced"
                                : `exec(ut) ${config.edition.current}`}
                        </p>
                    </div>
                )}

                <nav className="mb-8 flex flex-col gap-4">
                    {pages.map((page) => (
                        <Link
                            key={page.href}
                            href={page.href}
                            className="py-2 font-mono text-2xl text-background transition-opacity hover:opacity-70"
                            onClick={onClose}
                        >
                            {page.label}
                        </Link>
                    ))}

                    <Link
                        href="/contact"
                        className="py-2 font-mono text-2xl text-background transition-opacity hover:opacity-70"
                        onClick={onClose}
                    >
                        Contact
                    </Link>
                </nav>

                {showTickets && event?.tickets?.url && (
                    <div className="mt-auto pb-8">
                        <Button
                            variant="default"
                            className="w-full bg-background py-6 text-xl text-primary hover:bg-background/90"
                            asChild
                        >
                            <Link
                                href={event.tickets.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Get your tickets
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}

function Logo({
    small = false,
}: {
    small?: boolean;
}) {
    return (
        <img
            src="/logo_large_color_white.png"
            alt="Execut Logo"
            className={
                small
                    ? "h-8 w-auto object-contain"
                    : "h-8 w-auto max-w-40 object-contain md:h-9 md:max-w-48 lg:h-10 lg:max-w-60 xl:h-12 xl:max-w-64"
            }
        />
    );
}

function useHeaderHeight() {
    useLayoutEffect(() => {
        const desktop = document.getElementById("util-header-desktop");
        const mobile = document.getElementById("util-header-mobile");

        const setHeaderHeight = (height: number) => {
            document.documentElement.style.setProperty(
                "--header-height",
                `${Math.ceil(height)}px`,
            );
        };

        const getVisibleHeader = () => {
            const isVisible = (element: HTMLElement | null) =>
                !!element &&
                window.getComputedStyle(element).display !== "none";

            if (isVisible(mobile)) return mobile;
            if (isVisible(desktop)) return desktop;

            return null;
        };

        const update = () => {
            const header = getVisibleHeader();

            if (!header) return;

            setHeaderHeight(header.getBoundingClientRect().height);
        };

        update();
        requestAnimationFrame(update);

        const resizeObserver = new ResizeObserver(() => {
            update();
            requestAnimationFrame(update);
        });

        if (desktop) resizeObserver.observe(desktop);
        if (mobile) resizeObserver.observe(mobile);

        window.addEventListener("resize", update);
        window.addEventListener("orientationchange", update);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("resize", update);
            window.removeEventListener("orientationchange", update);
        };
    }, []);
}