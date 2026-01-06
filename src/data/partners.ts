export interface Partner {
  id: number;
  name: string;
  tagline: string;
  image: string;
  description: string;
  linkedin?: string;
  website?: string;
}

export const partners: Partner[] = [
  {
    id: 1,
    name: "Chipsoft",
    tagline: "Together toward better care.",
    image: "/partners/chipsoft.png",
    description: "ChipSoft is a leading Dutch healthcare IT company that develops software used by hospitals, mental healthcare institutions, and other care providers. Their main product, HiX, supports electronic health records and streamlines clinical and administrative processes. ChipSoft works closely with healthcare professionals to improve the quality, safety, and efficiency of care through reliable and innovative IT solutions.",
    linkedin: "https://linkedin.com/in/test",
    website: "https://chipsoft.com/",
  },
  {
    id: 2,
    name: "Harvest",
    tagline: "Cream of the Crop.",
    image: "/partners/harvest.png",
    description: "Harvest BV is a Dutch tech talent accelerator that runs a highly selective Post-Master program for software, data, and business analysts. Each year they select top graduates (“cream of the crop”) and combine real work placements at leading companies with intensive training, masterclasses, and coaching to rapidly develop technical and professional skills. Harvest helps ambitious young professionals make a strong start in IT and supports organizations in building high-quality engineering teams.",
    linkedin: "https://linkedin.com/in/test",
    website: "https://harvest.nl",
  },
  {
    id: 3,
    name: "PwC",
    tagline: "So you can.",
    image: "/partners/pwc.png",
    description: "PwC is a leading global professional services network that helps organizations address complex challenges in audit & assurance, tax, legal, advisory, and technology consulting. With deep expertise and a technology-driven approach, PwC supports clients in building trust, solving important problems, and accelerating progress in a rapidly evolving world.",
    linkedin: "https://linkedin.com/in/test",
    website: "https://pwc.nl",
  },
  {
    id: 4,
    name: "Brunel",
    tagline: "Connecting specialists to pioneering projects.",
    image: "/partners/brunel.png",
    description: "Brunel is a global specialist staffing and project solutions company that connects highly skilled professionals with challenging assignments in fields such as IT, engineering, finance, and legal. Operating in over 45 countries with thousands of specialists, Brunel supports both talent and organizations by matching expertise to projects that drive innovation and impact across industries.",
    linkedin: "https://linkedin.com/in/test",
    website: "https://brunel.net",
  },
  {
    id: 5,
    name: "BPM",
    tagline: "Driving digital transformation through process automation.",
    image: "/partners/bpm.png",
    description: "BPM Company is a European specialist in digital process automation and business process management, helping organizations optimize and automate complex workflows using the Pega platform. They provide consulting, implementation, training, and custom solutions that enable clients to become digitally future-proof and more efficient through intelligent software and process innovation.",
    linkedin: "https://linkedin.com/in/test",
    website: "https://bpmcompany.eu/",
  },
    {
    id: 6,
    name: "Capgemini",
    tagline: "Get the future you want.",
    image: "/partners/capgemini.png",
    description: "Capgemini is a global leader in consulting, technology services, and digital transformation. They help organizations solve complex business challenges and accelerate innovation through expertise in cloud, data & AI, enterprise technology, and engineering. With a diverse global team, Capgemini enables clients to leverage technology to define and realize the future they want while creating sustainable impact.",
    linkedin: "https://linkedin.com/in/test",
    website: "https://capgemini.com/",
  },
    {
    id: 7,
    name: "Ministerie van Defensie",
    tagline: "Protecting what we value.",
    image: "/partners/mindef.png",
    description: "The Ministry of Defence of the Netherlands is the government department responsible for national defence and the Dutch armed forces. It works to safeguard the freedom, peace, and security of the Netherlands and its allies, defending national territory, contributing to international stability, and supporting civil authorities in crises and emergencies.",
    linkedin: "https://linkedin.com/in/test",
    website: "https://defensie.nl/",
  },
    {
    id: 8,
    name: "Netcompany",
    tagline: "Empowering digital transformation.",
    image: "/partners/netcompany.png",
    description: "Netcompany is an international IT consultancy and technology services provider that helps public and private organizations accelerate digital transformation with end-to-end solutions. They deliver custom software, digital platforms, system integration, and full lifecycle support to modernize business processes and infrastructure across Europe.",
    linkedin: "https://linkedin.com/in/test",
    website: "https://netcompany.com",
  },
];
