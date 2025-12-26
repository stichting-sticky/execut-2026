import { H2, H3, Paragraph } from "@/components/ui/typography";

interface ProgrammeItem {
    time: string;
    duration?: string;
    talk?: {
        title: string;
        speaker?: string;
    };
    workshop?: {
        title: string;
        speaker?: string;
    };
}

interface ProgrammeSectionProps {
    title: string;
    items: ProgrammeItem[];
}

export function ProgrammeScheduleSection({ title, items }: ProgrammeSectionProps) {
    return (
        <>
            <H2 className="text-secondary mb-4 md:px-4 px-0">{title}</H2>
            
            {/* Mobile View - Card Layout */}
            <div className="md:hidden bg-secondary px-4 py-4 space-y-4 w-full font-mono overflow-hidden">
                {items.map((item, index) => (
                    <div key={index} className="border-b border-background/20 last:border-0 pb-4 last:pb-0 min-w-0">
                        <div className="flex items-baseline gap-2 mb-3 flex-wrap">
                            <div className="text-background text-lg font-semibold whitespace-nowrap">{item.time}</div>
                            {item.duration && (
                                <div className="text-background/70 text-sm whitespace-nowrap">({item.duration})</div>
                            )}
                        </div>
                        
                        {item.talk && (
                            <div className="mb-3 min-w-0">
                                <div className="text-background/60 text-xs uppercase mb-1">Talk</div>
                                {item.talk.speaker && (
                                    <div className="text-background/60 text-sm break-words">{item.talk.speaker}</div>
                                )}
                                <div className="text-background text-base font-normal break-words">{item.talk.title}</div>
                            </div>
                        )}
                        
                        {item.workshop && (
                            <div className="min-w-0">
                                <div className="text-background/60 text-xs uppercase mb-1">Workshop</div>
                                {item.workshop.speaker && (
                                    <div className="text-background/60 text-sm break-words">{item.workshop.speaker}</div>
                                )}
                                <div className="text-background text-base font-normal break-words">{item.workshop.title}</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Desktop View - Table Layout */}
            <div className="hidden md:block overflow-x-auto bg-secondary px-6 py-4 md:px-12 md:py-8 space-y-6 w-full font-mono">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-background">
                            <th className="text-left text-background/80 text-xl font-light pb-4 pr-4 md:pr-8 ">TIME</th>
                            <th className="text-left text-background/80 text-xl font-light pb-4 pr-4 md:pr-8 ">TALKS</th>
                            <th className="text-left text-background/80 text-xl font-light pb-4">WORKSHOPS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index} className="border-b border-background/20 last:border-0">
                                <td className="py-4 pr-4 md:pr-8 align-top">
                                    <div className="text-background text-lg">{item.time}</div>
                                    {item.duration && (
                                        <div className="text-background/70 text-md">{item.duration}</div>
                                    )}
                                </td>
                                <td className="py-4 pr-4 md:pr-8">
                                    {item.talk ? (
                                        <div>
                                            {item.talk.speaker && (
                                                <div className="text-background/60 text-md mt-1">{item.talk.speaker}</div>
                                            )}
                                            <div className="text-background text-lg font-normal">{item.talk.title}</div>
                                        </div>
                                    ) : (
                                        <div className="text-background/30"> </div>
                                    )}
                                </td>
                                <td className="py-4">
                                    {item.workshop ? (
                                        <div>
                                            {item.workshop.speaker && (
                                                <div className="text-background/60 text-md mt-1">{item.workshop.speaker}</div>
                                            )}
                                            <div className="text-background text-lg font-normal">{item.workshop.title}</div>
                                        </div>
                                    ) : (
                                        <div className="text-background/30"> </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
