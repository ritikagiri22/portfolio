export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: 'agency' | 'corporate' | 'freelance';
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  problem: string;
  strategy: string;
  tools: string[];
  results: {
    metric: string;
    value: string;
  }[];
  image: string;
}

export interface Skill {
  category: string;
  items: {
    name: string;
    level: number; // 1-5
  }[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  highlights?: string[];
}

export interface Leadership {
  id: string;
  title: string;
  organization: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
