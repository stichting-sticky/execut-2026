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
				time: "",
				duration: "",
				talk: { title: "Programme is to be decided" },
			},
		],
	},
	{
		title: "Afternoon Session",
		items: [
			{
				time: "",
				duration: "",
				talk: { title: "Programme is to be decided" },
			},
		],
	},
];
