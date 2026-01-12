export interface Speaker {
  id: number;
  name: string;
  specialization: string;
  image: string;
  description: string;
  linkedin?: string;
  website?: string;
}

export const speakers: Speaker[] = [
  {
    id: 1,
    name: "Hanno Embregts",
    specialization: "Java Developer & Technology Advocate",
    image: "/speakers/Hanno Embregts.png",
    description: "Hanno Embregts is a Java Developer with a strong passion for learning, teaching, and making music.\n\nIn his day-to-day role as a Teacher and Technology Advocate at Info Support, Hanno enjoys fast-paced and versatile work. He combines Java development, software architecture, public speaking, leading Info Support’s Speaker Community, and teaching courses at the Info Support Knowledge Centre.\n\nHanno is a Java Champion, an Oracle ACE Pro, and one of the leaders of the Dutch Java User Group (NLJUG).\n\nOutside of work, Hanno enjoys making music with friends. He plays the flute and guitar and enjoys singing. Software conferences are his favorite place to be, as they allow him to combine learning, teaching, and occasionally making music.",
    linkedin: "",
    website: "https://hanno.codes/",
  },
  {
    id: 2,
    name: "Lisa de Wilde",
    specialization: "Security Consultant",
    image: "/speakers/Lisa de Wilde 3.png",
    description: "Lisa de Wilde is a Security Consultant with a background in Computer Science (BSc) and Cyber Security (MSc).\n\nShe specializes in monitoring, detection, and incident response, and has supported dozens of organizations in handling and resolving security incidents and crises. Based on this hands-on experience, Lisa also advises organizations on how to better prevent and prepare for cyber incidents.\n\nIn 2023, she founded her own company, Cyber Radiant, to help even more organizations improve their cybersecurity. Alongside her consultancy work, Lisa is an active public speaker who shares real-world incident response experiences through podcasts, webinars, events, and radio appearances.\n\nLisa looks forward to this event and to sharing insights into what happens inside an organization when it is hit by a cyber attack.",
    linkedin: "",
    website: "https://www.lisadewilde.nl/",
  },
  {
    id: 3,
    name: "Rami Ismail",
    specialization: "Independent Game Developer",
    image: "/speakers/Rami Ismail.png",
    description: "Rami Ismail is a Dutch-Egyptian independent game and tool developer with over 20 genre-defining and award-winning titles released across PC, console, web, and mobile platforms. He is best known as the co-founder of the influential indie game studio Vlambeer, where he worked on critically acclaimed and genre-shaping games such as Ridiculous Fishing and Nuclear Throne.\n\nAlongside game development, he created tools like the industry-standard dopresskit.com, helping independent developers communicate their work more effectively with press and audiences worldwide.\n\nBeyond development, Rami is widely recognized for his prolific public speaking, consultancy work, and sharp industry insights, which have played a key role in shaping opportunities for indie game communities and independent developers across the global games industry.\n\nToday, he continues to advocate for a fairer and more equitable game development ecosystem through his work at gamedev.world and globalgames.fund, and his impact and versatility have earned him numerous accolades, including the Game Developers Choice Ambassador Award, the IndieCade Gamechanger Award, and a Forbes 30 Under 30 nomination.",
    linkedin: "",
    website: "",
  },
  {
    id: 4,
    name: "Camille de Valk",
    specialization: "Quantum Research Lead",
    image: "/speakers/Camille de Valk.png",
    description: "Camille is a physicist focused on applying physics to real-world problems. He currently leads research on quantum computing for graphs and optimisation at Capgemini’s Quantum Lab.\n\nAt the Quantum Lab, Camille explores the potential of neutral-atom quantum computers, with a strong focus on optimisation problems such as the Maximum Independent Set (MIS). His work helps accelerate practical applications and near-term quantum advantage.\n\nCamille began his career in econophysics research at a Dutch bank, where he learned the importance of applying academic knowledge in non-academic and corporate environments. Since then, he has developed a strong passion for making complex scientific concepts accessible.\n\nThrough metaphors, small experiments, and interactive demonstrations, Camille explains quantum computing to non-experts. He has spoken at events such as the Quantum Mobility Summit, EuroHPC Summit, and Yale University. His goal is to bring quantum computing closer to the general public.",
    linkedin: "https://www.linkedin.com/in/camilledevalk/?originalSubdomain=nl",
    website: "",
  },
  {
    id: 5,
    name: "Tanja Vos",
    specialization: "Professor of Software Engineering",
    image: "/speakers/Tanja Vos.png",
    description: "Tanja Vos is Professor of Software Engineering at the Open Universiteit in the Netherlands and at the Universitat Politècnica de València in Spain.\n\nShe has over 25 years of experience in teaching and research, with a strong focus on advancing the field of software testing. Tanja has been involved in numerous research projects on software testing in industrial contexts and has coordinated several EU-funded projects in this area.\n\nThrough her work in Erasmus and Leonardo initiatives, she has actively contributed to strengthening collaboration between academia and industry. Her research and practical experience have led to close cooperation with companies on automated testing in real-world environments.\n\nTanja is the project lead of TESTAR.org, an open-source initiative aimed at developing intelligent tools for automated GUI-level software testing.",
    linkedin: "",
    website: "",
  },
  {
    id: 6,
    name: "Willem Pino",
    specialization: "Founding engineer at Rootline",
    image: "/speakers/Willem Pino.png",
    description: "Willem is Rootline’s first employee, building backend applications, CI/CD pipelines, and Kubernetes clusters from scratch.\n\nHe previously worked for five years at Adyen in Amsterdam and San Francisco, where he served as an on-call engineer and team lead. In that role, he supported engineers with architecture design, explained core technical foundations to global hires, and led major initiatives such as reducing release time from two days to two hours and transitioning toward a private cloud.\n\nHe studied algorithmic complexity in Utrecht.",
    linkedin: "",
    website: "",
  },
];
