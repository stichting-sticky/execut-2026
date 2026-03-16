// src/data/programme.ts

export type ProgrammeEntry = {
  title: string;
  speaker?: string;
  abstract?: string;
};

export type ProgrammeItem = {
  id: string;
  time: string;
  duration: string;
  talk: ProgrammeEntry;
  workshop?: ProgrammeEntry;
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
        id: "doors-opening",
        time: "09:00",
        duration: "30min",
        talk: { title: "Doors opening & registration" },
      },
      {
        id: "coffee-reception",
        time: "09:30",
        duration: "15min",
        talk: { title: "Coffee reception" },
      },
      {
        id: "opening",
        time: "09:45",
        duration: "30min",
        talk: {
          title: "Opening 9th edition exec(ut)",
          speaker: "Crystal Reijnen",
          abstract:
            "Crystal Reijnen opens the ninth edition of exec(ut) and welcomes attendees to a day filled with talks, workshops, and opportunities to connect.",
        },
      },
      {
        id: "hanno-embregts",
        time: "10:15",
        duration: "55min",
        talk: {
          title: "What “Stairway to Heaven” Can Teach Us About Software Development",
          speaker: "Hanno Embregts",
          abstract: "One of the most iconic rock songs ever written starts with the line “There’s a lady who’s sure all that glitters is gold…” and chances are you know the rest of the lyrics by heart. Though one could argue that this ability is rather useless. It’s not like it makes you a better software developer, right? Right?!\n\nAllow me to change your mind! I know that the lyrics to “Stairway to Heaven” have sparked countless online debates over its meaning, but being a developer and a musician I think it is actually about software development. In fact, I even believe it contains a few good lessons on it and if that is the case, knowing the lyrics by heart can really benefit you.\n\nSo during this talk I will perform snippets of the song, explain why I think it is about software development and how your next software project can be better because of it. I’ll make sure to cover the identity of ‘the lady’, interpretation of requirements, reverting architectural decisions and the cost of overly ambitious guitar solos.",
        },
      },
      {
        id: "coffee-break-morning",
        time: "11:10",
        duration: "30min",
        talk: { title: "Coffee break" },
      },
      {
        id: "lisa-de-wilde",
        time: "11:40",
        duration: "40min",
        talk: {
          title: "Decisions Under Fire: the Dilemmas of a Cybercrisis",
          speaker: "Lisa de Wilde",
          abstract: "When a major cyberattack hits, choices must be made fast while the situation is still confusing and constantly changing. Information is often incomplete, experts may disagree, and every decision can create new risks.\n\nThis talk looks at the real-world challenges organisations face in these moments: how pressure affects judgement, why communication becomes difficult, and how legal, technical, and public expectations can pull teams in different directions.\n\nThrough practical examples, we explore what helps organisations stay calm, make better choices and recover more quickly. You will leave with a clearer understanding of the human, organisational and technical side of cybercrises.",
        },
      },
      {
        id: "lunch-break",
        time: "12:20",
        duration: "60min",
        talk: { title: "Lunch break" },
      },
      {
        id: "camille-chipsoft",
        time: "13:20",
        duration: "40min",
        talk: {
          title: "Quantum Computing in 2026: How to Build a Steam Engine with a Hammer",
          speaker: "Camille de Valk",
          abstract: "Is quantum computing a hype or not? And what can you meaningfully do in 2026 with the technology? It’s 2026 and the computers we have are rudimentary, but interesting tools. Join Camille de Valk in a metaphorical journey through technology:\n\nFor decades, we’ve had the blueprints (quantum algorithms) for spaceships (cracking RSA encryption). 10 years ago, we were in the quantum computing Stone Age, equipped only with a rock. Today, we are equipped with a quantum computing hammer: a rudimentary, but interesting tool. This tool cannot build a spaceship yet, but how can we best use the tool to come to other interesting applications? Maybe we lower the bar a bit and aim for a steam engine.\n\nIn this session, you will learn about the basics of quantum computing, learn how to program a quantum computer in the cloud, and learn about the work that we are doing in Capgemini’s Quantum Lab to transition from the Stone Age to the age of industrialisation. Join us and let’s accelerate applied quantum computing.",
        },
        workshop: {
          title: "AI in Healthcare",
          speaker: "ChipSoft",
          abstract: "How can artificial intelligence help doctors find the right information faster?\n\nIn this workshop, we explore how AI is being applied within Electronic Patient Records (EHRs). Topics include techniques such as semantic search, embeddings and AI copilots that help healthcare professionals quickly access relevant medical information.\n\nDuring an interactive assignment, students will design their own AI copilot architecture capable of answering clinical questions using multiple data sources and agents.",
        },
      },
      {
        id: "tanja-vos",
        time: "14:10",
        duration: "40min",
        talk: {
          title: "1+1=2, right? A Testers Dilemma in the Modern World",
          speaker: "Tanja Vos",
          abstract: "1+1=2, right?\n\nWe teach students to test with the same mindset as programming. That doesn't work.Testing is not confirmation of what we already think we know. It is investigating what we don't know. It is working in uncertainty, dealing with assumptions, and giving meaning to unexpected behavior.\n\nIn this talk, I will show why current testing education is fundamentally misaligned with practice—and why that is becoming dangerous in the age of AI systems.Using concrete examples, puzzles, and experiences from education, I will present an alternative: testing as an empirical, investigative skill.",
        },
      },
      {
        id: "coffee-break-afternoon",
        time: "14:50",
        duration: "30min",
        talk: { title: "Coffee break" },
      },
      {
        id: "willem-pino",
        time: "15:20",
        duration: "40min",
        talk: {
          title: "Building a Startup: Engineering, Sales, and Everything in Between",
          speaker: "Willem Pino",
          abstract: "From writing the first lines of code to sitting in investor meetings, startup life demands more than technical skill. Willem Pino, founding engineer at Rootline, shares what he learned building a fintech from the ground up.\n\nThis talk covers the engineering tradeoffs that matter early on, when to build yourself versus use existing tools, when to take shortcuts versus when to do things properly and how tight feedback loops accelerate both your product and your learning. It also goes beyond the code: technical sales, fundraising, and evaluating a startup offer, including how to think about equity.",
        },
      },
      {
        id: "rami-ismail",
        time: "16:10",
        duration: "50min",
        talk: {
          title: "The Rami Talk",
          speaker: "Rami Ismail",
          abstract: "Rami Ismail (Ridiculous Fishing, Nuclear Throne) talks about the challenges and opportunities of independent game development in an interactive, ask-me-anything talk.",
        },
      },
      {
        id: "closing",
        time: "17:00",
        duration: "15min",
        talk: {
          title: "Closing",
          speaker: "Crystal Reijnen",
          abstract:
            "Crystal Reijnen closes exec(ut) 2026 and reflects on the day’s talks, workshops, and shared experiences.",
        },
      },
      {
        id: "drinks",
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
  description:
    "Crystal is a digital strategy enthusiast with a passion for intercultural communication.\n\nShe works as Product Lead and Management Consultant for Anderson MacGyver, where she helps organizations utilize technology to achieve their strategic objectives. She enjoys finding the human touch in digital transformations and encourages critical thinking and curiosity.\n\nIn 2018, Crystal graduated from Utrecht University, where she completed the bachelor’s programme Information Science and master’s programme Business Informatics. Through guest lectures and thesis guidance, she remains connected to the university to this day. During her studies, she was an active member of Sticky, including a year as Commissioner of Educational Affairs on the board. This year, she will be your host during exec(ut).",
  linkedin: "https://www.linkedin.com/in/crystalreijnen/",
  website: "https://www.andersonmacgyver.com/nl/team/crystal-reijnen/",
};