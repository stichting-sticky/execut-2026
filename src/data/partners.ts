export type PartnerTier = "introduction" | "bronze" | "silver" | "gold" | "platinum";

export interface Partner {
	id: number;
	name: string;
	tagline: string;
	image: string;
	description: string;
	tier?: PartnerTier;
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
    tier: "gold",
    linkedin: "",
    website: "https://chipsoft.com/",
  },
  {
    id: 2,
    name: "Harvest",
    tagline: "Cream of the Crop.",
    image: "/partners/harvest.png",
    description: "Harvest BV is a Dutch tech talent accelerator that runs a highly selective Post-Master program for software, data, and business analysts. Each year they select top graduates (“cream of the crop”) and combine real work placements at leading companies with intensive training, masterclasses, and coaching to rapidly develop technical and professional skills. Harvest helps ambitious young professionals make a strong start in IT and supports organizations in building high-quality engineering teams.",
    tier: "silver",
    linkedin: "",
    website: "https://harvest.nl",
  },
  {
    id: 3,
    name: "Brunel",
    tagline: "Connecting specialists to pioneering projects.",
    image: "/partners/brunel.png",
    description: "Brunel is a global specialist staffing and project solutions company that connects highly skilled professionals with challenging assignments in fields such as IT, engineering, finance, and legal. Operating in over 45 countries with thousands of specialists, Brunel supports both talent and organizations by matching expertise to projects that drive innovation and impact across industries.",
    tier: "silver",
    linkedin: "",
    website: "https://brunel.net",
  },
  {
    id: 4,
    name: "BPM",
    tagline: "Driving digital transformation through process automation.",
    image: "/partners/bpm.png",
    description: "BPM Company is a European specialist in digital process automation and business process management, helping organizations optimize and automate complex workflows using the Pega platform. They provide consulting, implementation, training, and custom solutions that enable clients to become digitally future-proof and more efficient through intelligent software and process innovation.",
    tier: "silver",
    linkedin: "",
    website: "https://bpmcompany.eu/",
  },
    {
    id: 5,
    name: "Capgemini",
    tagline: "Get the future you want.",
    image: "/partners/capgemini.png",
    description: "We are a diverse global collective of more than 370.000 strategic and technological experts who are passionate about finding new ways technology can help our clients, our people and our communities get the future they want. With more than 50 years of industry leadership, we help today’s leading companies transform and manage their businesses through technology to shape the future of their industries and drive tangible business impact. We are the strategic technology partner for the leaders of today and tomorrow and are supporting our clients at every step of their transformation. We are driven by one shared purpose: unleashing human energy through technology for an inclusive and sustainable future. We are working toward net-zero emissions by taking responsible and sustainable action by focusing on tech-driven innovation. We have been recognized as one of the World’s Most Ethical Companies by Ethisphere 10 years in a row.",
    tier: "silver",
    linkedin: "",
    website: "https://capgemini.com/",
  },
    {
    id: 6,
    name: "Ministerie van Defensie",
    tagline: "Protecting what we value.",
    image: "/partners/mindef.png",
    description: "The Ministry of Defence of the Netherlands is the government department responsible for national defence and the Dutch armed forces. It works to safeguard the freedom, peace, and security of the Netherlands and its allies, defending national territory, contributing to international stability, and supporting civil authorities in crises and emergencies.",
    tier: "silver",
    linkedin: "",
    website: "https://defensie.nl/",
  },
    {
    id: 7,
    name: "Netcompany",
    tagline: "Empowering digital transformation.",
    image: "/partners/netcompany.png",
    description: "Netcompany is an international IT consultancy and technology services provider that helps public and private organizations accelerate digital transformation with end-to-end solutions. They deliver custom software, digital platforms, system integration, and full lifecycle support to modernize business processes and infrastructure across Europe.",
    tier: "silver",
    linkedin: "",
    website: "https://netcompany.com",
  },
    {
    id: 8,
    name: "Yer",
    tagline: "Ambition meets opportunity.",
    image: "/partners/yer.png",
    description: "Yer is an international recruitment and talent development agency that connects ambitious professionals with leading organizations in fields such as IT, engineering, supply chain, and finance. Combining deep market knowledge with a strong personal approach, Yer supports both companies and candidates in realizing long-term growth by matching talent to opportunities where they can truly make an impact.",
    tier: "silver",
    linkedin: "",
    website: "https://yer.nl",
  },
    {
    id: 9,
    name: "JetBrains",
    tagline: "Making software development more productive and enjoyable.",
    image: "/partners/jetbrains.png",
    description: "JetBrains creates intelligent software development tools and collaboration solutions trusted by over 11 million users worldwide. Since 2000, they have built a portfolio of more than 30 products, including leading IDEs such as IntelliJ IDEA, PyCharm, and GoLand, as well as team tools like YouTrack, TeamCity, and Datalore. JetBrains is also the creator of Kotlin, the officially preferred language for Android development. Their mission is to make professional software development more productive and enjoyable by helping developers automate routine tasks, focus on meaningful challenges, and build high-quality software throughout every stage of the development process.",
    tier: "silver",
    linkedin: "",
    website: "https://jetbrains.com",
  },
  {
    id: 10,
    name: "Uw Computerstudent",
    tagline: "Stronger together in a digital world.",
    image: "/partners/ucs.png",
    description: "Uw Computerstudent is one of the leading providers of personal IT support in the Netherlands, powered by a nationwide network of talented tech students. We bridge the gap between complex technology and the end user by offering both on-site and remote support for individuals and small businesses. From troubleshooting software issues and optimizing PC performance to securing networks and providing personalized digital training, our students deliver professional solutions with a patient and human approach. As an ICTWaarborg-certified company, we don’t just solve problems, we empower people to take control of their digital world.",
    tier: "introduction",
    linkedin: "",
    website: "https://uwcomputerstudent.nl",
  },
];
