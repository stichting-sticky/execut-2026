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
    name: "Sarah Chen",
    specialization: "Cloud Architecture & DevOps",
    image: "/speakers/1.jpg",
    description: "Sarah is a pioneering cloud architect with over 15 years of experience in designing scalable distributed systems. She has led cloud migration projects for Fortune 500 companies and is a frequent speaker at major tech conferences. Her expertise spans AWS, Azure, and GCP, with a special focus on Kubernetes orchestration and infrastructure as code.",
    linkedin: "https://linkedin.com/in/sarahchen",
    website: "https://sarahchen.tech",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    specialization: "Machine Learning & AI",
    image: "/speakers/2.jpg",
    description: "Marcus is a leading AI researcher and engineer who has contributed to groundbreaking developments in neural network architectures. With a PhD from MIT, he has published over 50 papers on deep learning and natural language processing. Currently, he leads the AI division at a prominent tech company, focusing on ethical AI and model interpretability.",
    linkedin: "https://linkedin.com/in/marcusrodriguez",
    website: "https://marcusrodriguez.ai",
  },
  {
    id: 3,
    name: "Elena Popescu",
    specialization: "Cybersecurity & Blockchain",
    image: "/speakers/3.jpg",
    description: "Elena is a renowned cybersecurity expert and blockchain consultant with a track record of securing critical infrastructure for governments and enterprises. She specializes in zero-trust architecture, penetration testing, and smart contract auditing. Elena is also an advocate for privacy-preserving technologies and has advised multiple blockchain startups.",
    linkedin: "https://linkedin.com/in/elenapopescu",
    website: "https://elenapopescu.security",
  },
  {
    id: 4,
    name: "James O'Connor",
    specialization: "Full-Stack Development",
    image: "/speakers/4.jpg",
    description: "James is a full-stack developer and technical architect known for building high-performance web applications used by millions. With expertise in React, Node.js, and modern JavaScript frameworks, he has a passion for developer experience and tooling. James is also an open-source contributor and maintains several popular npm packages.",
    linkedin: "https://linkedin.com/in/jamesoconnor",
    website: "https://jamesoconnor.dev",
  },
  {
    id: 5,
    name: "Priya Sharma",
    specialization: "Data Science & Analytics",
    image: "/speakers/5.jpg",
    description: "Priya is a data scientist and analytics leader who transforms complex data into actionable business insights. With a background in statistics and computer science, she has developed predictive models and data pipelines for healthcare, finance, and e-commerce sectors. Priya is passionate about data visualization and making data science accessible to non-technical stakeholders.",
    linkedin: "https://linkedin.com/in/priyasharma",
    website: "https://priyasharma.data",
  },
];
