import { H2, H3, Paragraph } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const PROGRAMME_TBA = false;

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
    if (PROGRAMME_TBA) {
        return (
            <>
                <div className="bg-secondary px-6 py-12 mb-6 md:px-12 text-center font-mono">
                    <H3 className="text-background mb-2">Programme TBA</H3>
                    <Paragraph className="text-background/70">
                        The full programme will be announced soon.
                    </Paragraph>
                </div>
            </>
        );
    }

    const isTalkRow = (item: ProgrammeItem) => Boolean(item.talk?.speaker || item.workshop?.speaker);
    const isMetaRow = (item: ProgrammeItem) => Boolean(item.talk && !item.talk.speaker && !item.workshop?.speaker);

    return (
        <>
            <H2 className="text-secondary mb-4 md:px-4 px-0">{title}</H2>
            
            {/* Mobile View - Card Layout */}
            <div className="md:hidden bg-secondary px-4 py-4 space-y-4 w-full font-mono overflow-hidden">
        {items.map((item, index) => {
          const talkRow = isTalkRow(item);
          const metaRow = isMetaRow(item);

          return (
            <div
              key={index}
              className="border-b border-background/20 last:border-0 pb-4 last:pb-0 min-w-0"
            >
              {/* time + duration */}
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

              {/* TALK */}
              {item.talk && (
                talkRow ? (
                  <div className="bg-background/95 text-secondary px-4 py-3 shadow-sm min-w-0">
                    {item.talk.speaker && (
                      <div className="text-secondary/70 text-sm break-words">
                        {item.talk.speaker}
                      </div>
                    )}
                    <div className="text-secondary text-base font-semibold break-words">
                      {item.talk.title}
                    </div>
                  </div>
                ) : (
                  // meta rows like Lunch / Coffee break / Transition break
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

              {/* WORKSHOP */}
              {item.workshop && (
                <div className={cn("mt-3", !item.talk && "mt-0")}>
                  {talkRow ? (
                    <div className="bg-background/95 text-secondary px-4 py-3 shadow-sm min-w-0">
                      {item.workshop.speaker && (
                        <div className="text-secondary/70 text-sm break-words">
                          {item.workshop.speaker}
                        </div>
                      )}
                      <div className="text-secondary text-base font-semibold break-words">
                        {item.workshop.title}
                      </div>
                    </div>
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

            {/* Desktop View - Table Layout */}
            <div className="hidden md:block overflow-x-auto bg-secondary px-6 py-4 md:py-4 md:px-12 space-y-6 w-full font-mono">
                <table className="w-full table-fixed">
                    <colgroup>
		                <col className="w-[18%]" />
		                <col className="w-[41%]" />
		                <col className="w-[41%]" />
	                </colgroup>
                    <thead>
                        <tr className="border-b border-background">
                            <th className="text-left text-background/80 text-2xl font-light py-5 pr-4 md:pr-10">TIME</th>
                            <th className="text-left text-background/80 text-xl font-light py-4 pr-4 md:pr-8 ">TALKS</th>
                            <th className="text-left text-background/80 text-xl font-light py-4">WORKSHOPS</th>
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
                            {/* TIME */}
                            <td className="py-6 pr-4 md:pr-10 align-center">
                            <div className="text-background text-xl md:text-2xl font-semibold">
                                {item.time}
                            </div>
                            {item.duration && (
                                <div className="text-background/70 text-base md:text-lg">
                                {item.duration}
                                </div>
                            )}
                            </td>

                            {/* TALKS */}
                            <td className="py-6 pr-4 md:pr-10 align-center">
                            {item.talk ? (
                                talkRow ? (
                                <div className="bg-background/95 text-secondary px-4 py-3">
                                    {item.talk.speaker && (
                                    <div className="text-secondary/70 text-base md:text-lg">
                                        {item.talk.speaker}
                                    </div>
                                    )}
                                    <div className="text-secondary text-lg md:text-xl font-semibold">
                                    {item.talk.title}
                                    </div>
                                </div>
                                ) : (
                                <div className="text-background/80 text-lg md:text-xl">
                                    {item.talk.title}
                                </div>
                                )
                            ) : (
                                <div className="text-background/30"> </div>
                            )}
                            </td>

                            {/* WORKSHOPS */}
                            <td className="py-6 align-top">
                            {item.workshop ? (
                                talkRow ? (
                                <div className="bg-background/95 text-secondary px-4 py-3">
                                    {item.workshop.speaker && (
                                    <div className="text-secondary/70 text-base md:text-lg">
                                        {item.workshop.speaker}
                                    </div>
                                    )}
                                    <div className="text-secondary text-lg md:text-xl font-semibold">
                                    {item.workshop.title}
                                    </div>
                                </div>
                                ) : (
                                <div className="text-background/80 text-lg md:text-xl italic">
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
