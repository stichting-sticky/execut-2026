import Section from "@/components/section/section";
import { Title, Paragraph, Callout } from "@/components/ui/typography";
import { ProgrammeScheduleSection } from "@/components/section/programme/schedule";
import { programmeSections } from "@/data/programme";
import { EVENT } from "@/data/event";

export function ProgrammeScheduleSections() {
	return (
		<Section className="py-0 md:p-20" id="schedule">
			<div className="py-12 md:pb-20 flex items-stretch justify-center md:justify-stretch">
				<div className="h-full min-h-[120px] md:min-h-[220px] flex items-center justify-center bg-secondary/5 backdrop-blur-sm px-6 py-8 md:px-10 md:py-10">
					<Callout className="relative inline-block text-left leading-tight">
						On {EVENT.date} at {EVENT.venue.short} we will host 6 consecutive speakers, each of whom will give a talk on a particular aspect of software and technology.
						<br/><br/>
						Aside from these talks we will also host 2 workshops throughout the day! You can sign up for these workshops using our ticket store.
					</Callout>
				</div>
			</div>
			<Title>Schedule</Title>
			<div className="space-y-8 w-full">
				{programmeSections.map((section) => (
					<ProgrammeScheduleSection
						key={section.title}
						title={section.title}
						items={section.items}
					/>
				))}
			</div>
		</Section>
	);
}


