export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'ai' | 'tools';
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: string;
}

export interface Language {
  id: number;
  name: string;
  level: string;
  details?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}