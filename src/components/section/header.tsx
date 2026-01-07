"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ListIcon, XIcon, HouseIcon, UsersThreeIcon, EnvelopeIcon, TicketIcon } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { MASTER_TBA } from "@/config/tba";
import { EVENT } from "@/data/event";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Desktop Header */}
      <header className="w-full hidden md:flex items-center justify-between bg-background sticky top-0 z-50">
        {/* Logo and Name */}

          

          <div className="flex items-center gap-4 bg-secondary px-4 md:px-16 py-8">
          <img
            src="/logo_large_color_white.png"
            alt="Large Execut Logo"
            className="
              h-8
              md:h-9
              lg:h-12
              w-auto
              max-w-[180px]
              md:max-w-[200px]
              lg:max-w-[260px]
              object-contain
            "
          />

          <div className="font-mono text-background ml-2 lg:ml-8 hidden 2xl:block">
            <p className="text-sm lg:text-base">{EVENT.date}</p>
            <p className="font-bold text-sm lg:text-base">
              {">"} {MASTER_TBA ? EVENT.venue.tba : EVENT.venue.real}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-1 text-base">
          <Button variant="link" asChild className="text-foreground text-base lg:text-lg px-2 lg:px-3 ml-6 lg:ml-12">
            <Link href="/">Home</Link>
          </Button>
          <Button variant="link" asChild className="text-foreground text-base lg:text-lg px-2 lg:px-3">
            <Link href="/partners">Partners</Link>
          </Button>
          <Button variant="link" asChild className="text-foreground text-base lg:text-lg px-2 lg:px-3">
            <Link href="/speakers">Speakers</Link>
          </Button>
          <Button variant="link" asChild className="text-foreground text-base lg:text-lg px-2 lg:px-3">
            <Link href="/location">Venue</Link>
          </Button>
          <Button variant="link" asChild className="text-foreground text-base lg:text-lg px-2 lg:px-3">
            <Link href="/programme">Programme</Link>
          </Button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 px-6 lg:px-16 py-4 lg:py-8 shrink-0">
          {MASTER_TBA ? (
            <Button variant="secondary" disabled className="opacity-60 cursor-not-allowed text-sm lg:text-base">
              {EVENT.tickets.labelSoon}
            </Button>
          ) : (
            <Button variant="secondary" asChild className="text-sm lg:text-base hidden xl:block">
              <Link href={EVENT.tickets.url} target="_blank" rel="noopener noreferrer">{EVENT.tickets.labelAvailable}</Link>
            </Button>
          )}

          <Button variant="outline" asChild className="text-sm lg:text-base">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </header>


      {/* Mobile Header */}
      <header className="w-full flex md:hidden items-center justify-between bg-secondary px-6 py-4 sticky top-0 z-50">
        {/* Logo and Name */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo_large_color_white.png"
            alt="Execut Logo"
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-background p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <XIcon size={32} weight="light" />
          ) : (
            <ListIcon size={32} weight="light" />
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-secondary z-40 md:hidden flex flex-col pt-20 transition-transform duration-300 ease-in-out ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex-1 flex flex-col px-6 py-8">
          {/* Date and Location */}
          <div className="font-mono text-background mb-8 pb-6 border-b border-background/20">
            <p>{EVENT.date}</p>
            <p className="font-bold">{">"} {MASTER_TBA ? EVENT.venue.tba : EVENT.venue.real}</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4 mb-8">
            <Link
              href="/"
              className="text-background font-mono text-2xl py-2 hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/partners"
              className="text-background font-mono text-2xl py-2 hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Partners
            </Link>
            <Link
              href="/speakers"
              className="text-background font-mono text-2xl py-2 hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Speakers
            </Link>
            <Link
              href="/location"
              className="text-background font-mono text-2xl py-2 hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Venue
            </Link>
            <Link
              href="/programme"
              className="text-background font-mono text-2xl py-2 hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Programme
            </Link>
            <Link
              href="/contact"
              className="text-background font-mono text-2xl py-2 hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>

          {/* Get Your Tickets Button */}
          <div className="mt-auto pb-8">
            <Button
              variant="default"
              className="w-full bg-background text-secondary hover:bg-background/90 text-xl py-6"
              asChild
            >
              <Link href={EVENT.tickets.url} target="_blank" rel="noopener noreferrer">{EVENT.tickets.labelAvailable}</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
