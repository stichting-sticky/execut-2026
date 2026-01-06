import Section from "@/components/section/section";
import { ProgrammeScheduleSection } from "@/components/section/programme/schedule";
import { programmeSections } from "@/data/programme";

export function ProgrammeScheduleSections() {
	return (
		<Section className="py-0 md:pb-20">
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
