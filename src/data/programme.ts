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
    title: "",
    items: [
      {
        time: "09:00",
        duration: "30min",
        talk: { title: "Doors opening & registration" },
      },
      {
        time: "09:30",
        duration: "15min",
        talk: { title: "Coffee reception" },
      },
      {
        time: "09:45",
        duration: "30min",
        talk: { title: "Opening 9th edition exec(ut)", speaker: "Crystal Reijnen" },
      },
      {
        time: "10:15",
        duration: "55min",
        talk: { title: "What “Stairway to Heaven” Can Teach Us About Software Development", speaker: "Hanno Embregts" },
      },
      {
        time: "11:10",
        duration: "30min",
        talk: { title: "Coffee break" },
      },
      {
        time: "11:40",
        duration: "40min",
        talk: { title: "Decisions Under Fire: the Dilemmas of a Cybercrisis", speaker: "Lisa de Wilde" },
      },
      {
        time: "12:20",
        duration: "60min",
        talk: { title: "Lunch break" },
      },
      {
        time: "13:20",
        duration: "40min",
        talk: { title: "Quantum Computing in 2026: How to Build a Steam Engine with a Hammer", speaker: "Camille de Valk" },
        workshop: { title: "Workshop TBA", speaker: "ChipSoft" },
      },
      {
        time: "14:10",
        duration: "40min",
        talk: { title: "1+1=2, right? A Testers Dilemma in the Modern World", speaker: "Tanja Vos" },
      },
      {
        time: "14:50",
        duration: "30min",
        talk: { title: "Coffee break" },
      },
      {
        time: "15:20",
        duration: "40min",
        talk: { title: "Building a Startup: Engineering, Aales, and Everything in Between", speaker: "Willem Pino" },
      },
      {
        time: "16:10",
        duration: "50min",
        talk: { title: "The Rami Talk", speaker: "Rami Ismail" },
      },
      {
        time: "17:00",
        duration: "15min",
        talk: { title: "Closing", speaker: "Crystal Reijnen" },
      },
      {
        time: "17:15",
        duration: "105min",
        talk: { title: "Drinks" },
      },
    ],
  },
];

/** Host of the day (shown on Programme page) */
export type ProgrammeHost = {
  id: string;
  name: string;
  role: string;
  host: string;
  image: string;
  description: string;
  linkedin?: string;
  website?: string;
};

export const hostOfDay: ProgrammeHost = {
  id: "host-2026",
  name: "Crystal Reijnen",
  role: "Product Lead & Management Consultant at Anderson MacGyver",
  host: "Host of exec(ut) 2026",
  image: "/speakers/crystal.jpg",
  description: "Crystal is a digital strategy enthusiast with a passion for intercultural communication.\n\nShe works as Product Lead and Management Consultant for Anderson MacGyver, where she helps organizations utilize technology to achieve their strategic objectives. She enjoys finding the human touch in digital transformations and encourages critical thinking and curiosity\n\nIn 2018, Crystal graduated Utrecht University where she completed the bachelor’s program Information Science and master’s program Business Informatics. Through providing guest lectures and thesis guidance she remains connected to the university to this day. During her studies, she was an active member of Sticky, including a year as Commissioner of Educational Affairs in the board. This year, she will be your host during exec(ut).",
  linkedin: "www.linkedin.com/in/crystalreijnen",
  website: "https://www.andersonmacgyver.com/nl/team/crystal-reijnen/",
};

