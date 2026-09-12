"use client";

import * as React from "react";

import { CaretDownIcon } from "@phosphor-icons/react";

import { Heading, Text } from "@/components/typography";

import { cn } from "@/lib/utils";

import type {
    ProgrammeEntry,
    ProgrammeItem,
} from "@/lib/content";

interface ProgrammeSectionProps {
    title: string;
    items: ProgrammeItem[];
}

export function ProgrammeScheduleSection({
    title,
    items,
}: ProgrammeSectionProps) {
    const [openEntry, setOpenEntry] = React.useState<string | null>(null);

    const isTalkRow = (item: ProgrammeItem) =>
        Boolean(item.talk?.speaker || item.workshop?.speaker);

    const isMetaRow = (item: ProgrammeItem) =>
        Boolean(
            item.talk &&
            !item.talk.speaker &&
            !item.workshop?.speaker,
        );

    const toggleEntry = (id: string) => {
        setOpenEntry((current) => current === id ? null : id);
    };

    return (
        <>
            <Heading as="h2" className="mb-4 px-0 text-secondary md:px-4">
                {title}
            </Heading>

            <div className="w-full space-y-4 overflow-hidden bg-secondary px-4 py-4 font-mono md:hidden">
                {items.map((item, index) => {
                    const talkRow = isTalkRow(item);
                    const metaRow = isMetaRow(item);
                    const talkId = `${title}-${index}-talk`;
                    const workshopId = `${title}-${index}-workshop`;

                    return (
                        <div
                            key={index}
                            className="min-w-0 border-b border-background/20 pb-4 last:border-0 last:pb-0"
                        >
                            <div className="mb-3 flex flex-wrap items-baseline gap-2">
                                <div className="whitespace-nowrap text-lg font-semibold text-background">
                                    {item.time}
                                </div>

                                {item.duration && (
                                    <div className="whitespace-nowrap text-sm text-background/70">
                                        ({item.duration})
                                    </div>
                                )}
                            </div>

                            {item.talk && (
                                talkRow ? (
                                    <ProgrammeEntryCard
                                        entry={item.talk}
                                        type="talk"
                                        open={openEntry === talkId}
                                        onToggle={() => toggleEntry(talkId)}
                                    />
                                ) : (
                                    <div
                                        className={cn(
                                            "flex min-h-11 items-center text-base font-normal text-background/85",
                                            metaRow && "opacity-90",
                                        )}
                                    >
                                        {item.talk.title}
                                    </div>
                                )
                            )}

                            {item.workshop && (
                                <div className={cn("mt-3", !item.talk && "mt-0")}>
                                    {talkRow ? (
                                        <ProgrammeEntryCard
                                            entry={item.workshop}
                                            type="workshop"
                                            open={openEntry === workshopId}
                                            onToggle={() => toggleEntry(workshopId)}
                                        />
                                    ) : (
                                        <div className="flex min-h-11 items-center text-base font-normal text-background/85">
                                            {item.workshop.title}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="hidden w-full overflow-x-auto bg-secondary px-6 py-4 font-mono md:block md:px-12">
                <table className="w-full table-fixed">
                    <colgroup>
                        <col className="w-[18%]" />
                        <col className="w-[41%]" />
                        <col className="w-[41%]" />
                    </colgroup>

                    <thead>
                        <tr className="border-b border-background">
                            <th className="py-5 pr-4 text-left text-2xl font-light text-background/80 md:pr-10">
                                TIME
                            </th>

                            <th className="py-4 pr-4 text-left text-xl font-light text-background/80 md:pr-8">
                                TALKS
                            </th>

                            <th className="py-4 text-left text-xl font-light text-background/80">
                                WORKSHOPS
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {items.map((item, index) => {
                            const talkRow = isTalkRow(item);
                            const metaRow = isMetaRow(item);
                            const talkId = `${title}-${index}-talk`;
                            const workshopId = `${title}-${index}-workshop`;

                            return (
                                <tr
                                    key={index}
                                    className={cn(
                                        "border-b border-background/20 last:border-0",
                                        metaRow && "opacity-90",
                                    )}
                                >
                                    <td className="py-6 pr-4 align-top md:pr-10">
                                        <div className="text-xl font-semibold text-background md:text-2xl">
                                            {item.time}
                                        </div>

                                        {item.duration && (
                                            <div className="text-base text-background/70 md:text-lg">
                                                {item.duration}
                                            </div>
                                        )}
                                    </td>

                                    <td className="py-6 pr-4 align-top md:pr-10">
                                        {item.talk ? (
                                            talkRow ? (
                                                <ProgrammeEntryCard
                                                    entry={item.talk}
                                                    type="talk"
                                                    open={openEntry === talkId}
                                                    onToggle={() => toggleEntry(talkId)}
                                                />
                                            ) : (
                                                <div className="text-lg text-background/80 md:text-xl">
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
                                                <ProgrammeEntryCard
                                                    entry={item.workshop}
                                                    type="workshop"
                                                    open={openEntry === workshopId}
                                                    onToggle={() => toggleEntry(workshopId)}
                                                />
                                            ) : (
                                                <div className="text-lg text-background/80 md:text-xl">
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
        </>
    );
}

function ProgrammeEntryCard({
    entry,
    type,
    open,
    onToggle,
}: {
    entry: ProgrammeEntry;
    type: "talk" | "workshop";
    open: boolean;
    onToggle: () => void;
}) {
    if (!entry.abstract) {
        return (
            <div className="bg-background/95 px-4 py-3 text-secondary">
                {entry.speaker && (
                    <div className="text-sm text-secondary/70 md:text-base">
                        {entry.speaker}
                    </div>
                )}

                <div className="text-base font-semibold text-secondary md:text-lg">
                    {entry.title}
                </div>
            </div>
        );
    }

    return (
        <div className="overflow-hidden bg-background/95 text-secondary">
            <button
                type="button"
                onClick={onToggle}
                className="flex w-full cursor-pointer items-start justify-between gap-4 px-4 py-3 text-left"
                aria-expanded={open}
            >
                <div className="min-w-0">
                    {entry.speaker && (
                        <div className="text-sm text-secondary/70 md:text-base">
                            {entry.speaker}
                        </div>
                    )}

                    <div className="text-base font-semibold text-secondary md:text-lg">
                        {entry.title}
                    </div>
                </div>

                <CaretDownIcon
                    size={22}
                    weight="bold"
                    className={cn(
                        "mt-1 shrink-0 transition-transform duration-300 ease-in-out",
                        open && "rotate-180",
                    )}
                />
            </button>

            <div
                className={cn(
                    "grid transition-[grid-template-rows] duration-400 ease-in-out",
                    open
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]",
                )}
            >
                <div className="min-h-0 overflow-hidden">
                    <div
                        className={cn(
                            "border-t border-secondary/10 px-4 py-4 transition-[opacity,transform] duration-300 ease-out",
                            open
                                ? "translate-y-0 opacity-100 delay-75"
                                : "-translate-y-2 opacity-0",
                        )}
                    >
                        <Text
                            variant="tiny"
                            className="mb-2 font-mono uppercase tracking-wide text-secondary/60"
                        >
                            {type}
                        </Text>

                        <Text className="whitespace-pre-line text-secondary">
                            {entry.abstract}
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    );
}