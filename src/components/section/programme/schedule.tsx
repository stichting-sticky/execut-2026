"use client";

import * as React from "react";
import { H2, H3, Paragraph } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon, XIcon } from "@phosphor-icons/react";
import { createPortal } from "react-dom";

const PROGRAMME_TBA = false;

interface ProgrammeEntry {
  title: string;
  speaker?: string;
  abstract?: string;
}

interface ProgrammeItem {
  time: string;
  duration?: string;
  talk?: ProgrammeEntry;
  workshop?: ProgrammeEntry;
}

interface ProgrammeSectionProps {
  title: string;
  items: ProgrammeItem[];
}

type ActivePopup =
  | {
      type: "talk" | "workshop";
      title: string;
      speaker?: string;
      abstract: string;
    }
  | null;

export function ProgrammeScheduleSection({ title, items }: ProgrammeSectionProps) {
  const [activePopup, setActivePopup] = React.useState<ActivePopup>(null);

  React.useEffect(() => {
    if (!activePopup) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [activePopup]);

  if (PROGRAMME_TBA) {
    return (
      <div className="bg-secondary px-6 py-12 mb-6 md:px-12 text-center font-mono">
        <H3 className="text-background mb-2">Programme TBA</H3>
        <Paragraph className="text-background/70">
          The full programme will be announced soon.
        </Paragraph>
      </div>
    );
  }

  const isTalkRow = (item: ProgrammeItem) => Boolean(item.talk?.speaker || item.workshop?.speaker);
  const isMetaRow = (item: ProgrammeItem) => Boolean(item.talk && !item.talk.speaker && !item.workshop?.speaker);

  const openPopup = (entry: ProgrammeEntry | undefined, type: "talk" | "workshop") => {
    if (!entry?.abstract) return;
    setActivePopup({
      type,
      title: entry.title,
      speaker: entry.speaker,
      abstract: entry.abstract,
    });
  };

  const InteractiveCard = ({
    entry,
    type,
    children,
    className,
  }: {
    entry?: ProgrammeEntry;
    type: "talk" | "workshop";
    children: React.ReactNode;
    className?: string;
  }) => {
    const clickable = !!entry?.abstract;

    if (!clickable) {
      return <div className={className}>{children}</div>;
    }

    return (
      <button
        type="button"
        onClick={() => openPopup(entry, type)}
        className={cn(
          className,
          "w-full text-left cursor-pointer transition",
          "hover:shadow-md hover:translate-y-[-1px]"
        )}
        aria-label={`Open ${type} abstract for ${entry.title}`}
      >
        {children}
      </button>
    );
  };

  const AbstractArrow = ({ entry }: { entry?: ProgrammeEntry }) => {
    if (!entry?.abstract) return null;

    return (
      <div className="absolute top-3 right-3 text-secondary/80 pointer-events-none">
        <ArrowUpRightIcon size={24} weight="bold" />
      </div>
    );
  };

  return (
    <>
      <H2 className="text-secondary mb-4 md:px-4 px-0">{title}</H2>

      {/* Mobile */}
      <div className="md:hidden bg-secondary px-4 py-4 space-y-4 w-full font-mono overflow-hidden">
        {items.map((item, index) => {
          const talkRow = isTalkRow(item);
          const metaRow = isMetaRow(item);

          return (
            <div
              key={index}
              className="border-b border-background/20 last:border-0 pb-4 last:pb-0 min-w-0"
            >
              <div className="flex items-baseline gap-2 mb-3 flex-wrap">
                <div className="text-background text-lg font-semibold whitespace-nowrap">
                  {item.time}
                </div>
                {item.duration && (
                  <div className="text-background/70 text-sm whitespace-nowrap">
                    ({item.duration})
                  </div>
                )}
              </div>

              {item.talk && (
                talkRow ? (
                  <InteractiveCard
                    entry={item.talk}
                    type="talk"
                    className="relative bg-background/95 text-secondary px-4 py-3 shadow-sm min-w-0"
                  >
                    <AbstractArrow entry={item.talk} />
                    {item.talk.speaker && (
                      <div className="text-secondary/70 text-sm break-words pr-10">
                        {item.talk.speaker}
                      </div>
                    )}
                    <div className="text-secondary text-base font-semibold break-words pr-10">
                      {item.talk.title}
                    </div>
                  </InteractiveCard>
                ) : (
                  <div
                    className={cn(
                      "min-h-[44px] flex items-center",
                      "text-background/85 text-base font-normal",
                      metaRow && "opacity-90"
                    )}
                  >
                    {item.talk.title}
                  </div>
                )
              )}

              {item.workshop && (
                <div className={cn("mt-3", !item.talk && "mt-0")}>
                  {talkRow ? (
                    <InteractiveCard
                      entry={item.workshop}
                      type="workshop"
                      className="relative bg-background/95 text-secondary px-4 py-3 shadow-sm min-w-0"
                    >
                      <AbstractArrow entry={item.workshop} />
                      {item.workshop.speaker && (
                        <div className="text-secondary/70 text-sm break-words pr-10">
                          {item.workshop.speaker}
                        </div>
                      )}
                      <div className="text-secondary text-base font-semibold break-words pr-10">
                        {item.workshop.title}
                      </div>
                    </InteractiveCard>
                  ) : (
                    <div className="min-h-[44px] flex items-center text-background/85 text-base font-normal">
                      {item.workshop.title}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Desktop */}
      <div className="hidden md:block overflow-x-auto bg-secondary px-6 py-4 md:py-4 md:px-12 space-y-6 w-full font-mono">
        <table className="w-full table-fixed">
          <colgroup>
            <col className="w-[18%]" />
            <col className="w-[41%]" />
            <col className="w-[41%]" />
          </colgroup>
          <thead>
            <tr className="border-b border-background">
              <th className="text-left text-background/80 text-2xl font-light py-5 pr-4 md:pr-10">
                TIME
              </th>
              <th className="text-left text-background/80 text-xl font-light py-4 pr-4 md:pr-8">
                TALKS
              </th>
              <th className="text-left text-background/80 text-xl font-light py-4">
                WORKSHOPS
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              const talkRow = isTalkRow(item);
              const metaRow = isMetaRow(item);

              return (
                <tr
                  key={index}
                  className={cn(
                    "border-b border-background/20 last:border-0",
                    metaRow && "opacity-90"
                  )}
                >
                  <td className="py-6 pr-4 md:pr-10 align-middle">
                    <div className="text-background text-xl md:text-2xl font-semibold">
                      {item.time}
                    </div>
                    {item.duration && (
                      <div className="text-background/70 text-base md:text-lg">
                        {item.duration}
                      </div>
                    )}
                  </td>

                  <td className="py-6 pr-4 md:pr-10 align-middle">
                    {item.talk ? (
                      talkRow ? (
                        <InteractiveCard
                          entry={item.talk}
                          type="talk"
                          className="relative bg-background/95 text-secondary px-4 py-3"
                        >
                          <AbstractArrow entry={item.talk} />
                          {item.talk.speaker && (
                            <div className="text-secondary/70 text-base md:text-lg pr-10">
                              {item.talk.speaker}
                            </div>
                          )}
                          <div className="text-secondary text-lg md:text-xl font-semibold pr-10">
                            {item.talk.title}
                          </div>
                        </InteractiveCard>
                      ) : (
                        <div className="text-background/80 text-lg md:text-xl">
                          {item.talk.title}
                        </div>
                      )
                    ) : (
                      <div className="text-background/30"> </div>
                    )}
                  </td>

                  <td className="py-6 align-top">
                    {item.workshop ? (
                      talkRow ? (
                        <InteractiveCard
                          entry={item.workshop}
                          type="workshop"
                          className="relative bg-background/95 text-secondary px-4 py-3"
                        >
                          <AbstractArrow entry={item.workshop} />
                          {item.workshop.speaker && (
                            <div className="text-secondary/70 text-base md:text-lg pr-10">
                              {item.workshop.speaker}
                            </div>
                          )}
                          <div className="text-secondary text-lg md:text-xl font-semibold pr-10">
                            {item.workshop.title}
                          </div>
                        </InteractiveCard>
                      ) : (
                        <div className="text-background/80 text-lg md:text-xl">
                          {item.workshop.title}
                        </div>
                      )
                    ) : (
                      <div className="text-background/30"> </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Popup */}
      {typeof window !== "undefined" &&
        activePopup &&
        createPortal(
          <div
            className="fixed inset-0 z-[999] bg-black/50 px-4 py-4"
            onClick={() => setActivePopup(null)}
          >
            <div
              className="flex h-full items-center justify-center"
              style={{
                paddingTop: "var(--header-height)",
              }}
            >
              <div
                className="relative flex w-full max-w-2xl max-h-[85vh] flex-col overflow-hidden bg-background shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Sticky header */}
                <div className="sticky top-0 z-10 flex shrink-0 justify-end bg-background/95 backdrop-blur px-2 py-2 border-b border-foreground/10">
                  <button
                    type="button"
                    onClick={() => setActivePopup(null)}
                    aria-label="Close popup"
                    className="flex h-12 w-12 items-center justify-center text-foreground/70 hover:text-foreground transition"
                  >
                    <XIcon size={24} weight="bold" />
                  </button>
                </div>

                {/* Scrollable content */}
                <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-6 pb-6 md:px-8 md:pb-8">
                  <div className="space-y-4 pt-4">
                    <div className="font-mono text-sm uppercase tracking-wide text-secondary/70">
                      {activePopup.type}
                    </div>

                    <H3 className="mb-0">{activePopup.title}</H3>

                    {activePopup.speaker && (
                      <Paragraph className="text-foreground/70 !mt-0">
                        {activePopup.speaker}
                      </Paragraph>
                    )}

                    <Paragraph className="whitespace-pre-line">
                      {activePopup.abstract}
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}