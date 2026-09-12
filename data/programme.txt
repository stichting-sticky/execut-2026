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
				time: "09:00",
				duration: "30 min",
				talk: { title: "Registration & Welcome Coffee" },
			},
			{
				time: "09:45",
				duration: "30 min",
				talk: { title: "Opening Keynote", speaker: "Speaker TBD" },
			},
			{
				time: "10:15",
				duration: "55 min",
				talk: { title: "Talk TBA", speaker: "Speaker TBD" },
			},
			{
				time: "11:10",
				duration: "30 min",
				talk: { title: "Coffee Break" },
			},
			{
				time: "11:40",
				duration: "40 min",
				talk: { title: "Talk TBA", speaker: "Speaker TBD" },
				workshop: { title: "Workshop TBA", speaker: "Workshop Leader TBD" },
			},
		],
	},
	{
		title: "Afternoon Session",
		items: [
			{
				time: "12:20",
				duration: "60 min",
				talk: { title: "Lunch Break" },
			},
			{
				time: "13:20",
				duration: "50 min",
				talk: { title: "Talk TBA", speaker: "Speaker TBD" },
                workshop: { title: "Workshop TBA", speaker: "Workshop Leader TBD" },
			},
			{
				time: "14:10",
				duration: "40 min",
				talk: { title: "Talk TBA", speaker: "Speaker TBD" },
                workshop: { title: "Workshop TBA", speaker: "Workshop Leader TBD" },
			},
			{
				time: "14:50",
				duration: "30 min",
				talk: { title: "Coffee Break" },

			},
			{
				time: "15:20",
				duration: "50 min",
				talk: { title: "Talk TBA", speaker: "Speaker TBD" },
			},
			{
				time: "16:10",
				duration: "50 min",
				talk: { title: "Talk TBA", speaker: "Speaker TBD" },
			},
			{
				time: "17:00",
				duration: "15 min",
				talk: { title: "Closing" },
			},
            {
                time: "17:15",
                duration: "2 hours",
                talk: { title: "Drinks" },
            },
		],
	},
];
