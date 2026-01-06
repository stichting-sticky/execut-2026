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
    linkedin: "https://test.nl",
    website: "https://test.nl",
  },
  {
    id: 2,
    name: "Lisa de Wilde",
    specialization: "Security Consultant",
    image: "/speakers/Lisa de Wilde.png",
    description: "Lisa de Wilde is a Security Consultant with a background in Computer Science (BSc) and Cyber Security (MSc).\n\nShe specializes in monitoring, detection, and incident response, and has supported dozens of organizations in handling and resolving security incidents and crises. Based on this hands-on experience, Lisa also advises organizations on how to better prevent and prepare for cyber incidents.\n\nIn 2023, she founded her own company, Cyber Radiant, to help even more organizations improve their cybersecurity. Alongside her consultancy work, Lisa is an active public speaker who shares real-world incident response experiences through podcasts, webinars, events, and radio appearances.\n\nLisa looks forward to this event and to sharing insights into what happens inside an organization when it is hit by a cyber attack.",
    linkedin: "https://test.nl",
    website: "https://test.nl",
  },
  {
    id: 3,
    name: "Camille de Valk",
    specialization: "Quantum Research Lead",
    image: "/speakers/Camille de Valk.png",
    description: "Camille is a physicist focused on applying physics to real-world problems. He currently leads research on quantum computing for graphs and optimisation at Capgemini’s Quantum Lab.\n\nAt the Quantum Lab, Camille explores the potential of neutral-atom quantum computers, with a strong focus on optimisation problems such as the Maximum Independent Set (MIS). His work helps accelerate practical applications and near-term quantum advantage.\n\nCamille began his career in econophysics research at a Dutch bank, where he learned the importance of applying academic knowledge in non-academic and corporate environments. Since then, he has developed a strong passion for making complex scientific concepts accessible.\n\nThrough metaphors, small experiments, and interactive demonstrations, Camille explains quantum computing to non-experts. He has spoken at events such as the Quantum Mobility Summit, EuroHPC Summit, and Yale University. His goal is to bring quantum computing closer to the general public.",
    linkedin: "https://test.nl",
    website: "https://test.nl",
  },
  {
    id: 4,
    name: "Tanja Vos",
    specialization: "Professor of Software Engineering",
    image: "/speakers/Tanja Vos.png",
    description: "Tanja Vos is Professor of Software Engineering at the Open Universiteit in the Netherlands and at the Universitat Politècnica de València in Spain.\n\nShe has over 25 years of experience in teaching and research, with a strong focus on advancing the field of software testing. Tanja has been involved in numerous research projects on software testing in industrial contexts and has coordinated several EU-funded projects in this area.\n\nThrough her work in Erasmus and Leonardo initiatives, she has actively contributed to strengthening collaboration between academia and industry. Her research and practical experience have led to close cooperation with companies on automated testing in real-world environments.\n\nTanja is the project lead of TESTAR.org, an open-source initiative aimed at developing intelligent tools for automated GUI-level software testing.",
    linkedin: "https://test.nl",
    website: "https://test.nl",
  },
  {
    id: 5,
    name: "",
    specialization: "",
    image: "/TBA_new.png",
    description: "",
    linkedin: "",
    website: "",
  },
  {
    id: 6,
    name: "",
    specialization: "",
    image: "/TBA_new.png",
    description: "",
    linkedin: "",
    website: "",
  },
];
