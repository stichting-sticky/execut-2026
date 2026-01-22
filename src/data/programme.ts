// src/data/programme.ts

export type ProgrammeItem = {
	time: string;
	duration: string;
	talk: {
		title: string;
		speaker?: string;
	};
	workshop?: {
		title: string;
		speaker?: string;
	};
};

export type ProgrammeSection = {
	title: string;
	items: ProgrammeItem[];
};

export const programmeSections: ProgrammeSection[] = [
	{
		title: "Morning Session",
		items: [
			{
				time: "11:00",
				duration: "20min",
				talk: { title: "test" },
			},
			{
				time: "11:00",
				duration: "20min",
				talk: { title: "test" },
			},
		],
	},
];
