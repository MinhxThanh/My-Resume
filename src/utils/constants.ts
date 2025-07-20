import { Experience, Project, Skill } from '../types';

export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'languages', label: 'Languages' },
  { id: 'interests', label: 'Interests' },
  { id: 'contact', label: 'Contact' },
];

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/mr-minhthanh',
  github: 'https://github.com/MinhxThanh',
  facebook: 'https://www.facebook.com/Mr.MinhxThanh/',
  email: 'thanh@onename.net',
  phone: '+84 364 347 813',
  website: 'https://myresume.site',
  tiktok: 'https://tiktok.com/@sky.wav',
  kaggle: 'https://kaggle.com/xrouge',
  dev21st: 'https://21st.dev/minhxthanh',
  blog: 'https://w404.net'
};

export const SUMMARY = "Full Stack Developer and AI Specialist with over 3 years of experience building scalable web applications and AI‑driven solutions. Skilled in optimizing performance, enhancing UX, and deploying LLM‑driven applications on cloud platforms.";

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: 'w404.net',
    position: 'Administrator & Content Creator',
    duration: '06/2024 – Present',
    location: 'Ho Chi Minh City, Vietnam',
    description: [
      'Led development and optimization of w404.net, growing traffic from 5,000 to 15,000+ monthly visits in six months through AI‑driven tech content',
      'Architected the platform using Next.js, Spring Boot, and MySQL; deployed on DigitalOcean with 99.9% uptime',
      'Reduced load times by 30% and improved UX scores by 15% through performance enhancements'
    ],
    technologies: ['Next.js', 'Spring Boot', 'MySQL', 'DigitalOcean', 'UI/UX Design']
  },
  {
    id: 2,
    company: 'Self-Employed',
    position: 'Freelance Full Stack Developer & AI Consultant',
    duration: '06/2022 – Present',
    location: 'Remote',
    description: [
      'Developed AI‑integrated web applications (chatbots, recommendation systems), increasing client engagement by 30% within three months',
      'Consulted on AI adoption, helping clients deploy solutions on GCP and DigitalOcean with 99.9% uptime',
      'Conducted workshops on Stable Diffusion and GitHub Copilot for development teams'
    ],
    technologies: ['React', 'Node.js', 'Python', 'OpenAI', 'GCP', 'DigitalOcean', 'Docker']
  },
  {
    id: 3,
    company: '21st.dev',
    position: 'Creator (Author)',
    duration: '03/2024 – Present',
    location: 'Remote',
    description: [
      'Authored and published 40+ interactive UI component demos—such as Simple UI, Triangles Falling, Gradient Menu, and Parallax Scrolling Effect—on personal 21st.dev profile',
      'Contributed to the developer community by creating reusable, production-ready UI components and design patterns',
      'Demonstrated expertise in modern web technologies through innovative and visually appealing component designs'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'CSS Animations', 'UI/UX Design']
  },
  {
    id: 4,
    company: 'Nghiện AI Facebook Group',
    position: 'Co-founder & Original Admin',
    duration: '11/2024 – Present',
    location: 'Vietnam',
    description: [
      'Co‑founded and led "Nghiện AI," scaling the community to 200,000+ members',
      'Planned and executed knowledge‑sharing events, webinars, and live Q&A sessions',
      'Managed a team of moderators to ensure a collaborative and inclusive environment'
    ],
    technologies: ['Community Management', 'Event Planning', 'AI Education', 'Content Strategy']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'w404.net',
    description: 'Developed a full‑stack site with a Next.js front‑end and Spring Boot REST API connected to MySQL. Deployed both app and database on a Linux Droplet in DigitalOcean, running Next.js under PM2 and fronted by Nginx with HTTPS, sustaining 99.9% uptime. Integrated MailerSend for transactional emails (sign‑in, reset password), achieving a 98% deliverability rate.',
    image: 'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Spring Boot', 'MySQL', 'DigitalOcean', 'PM2', 'Nginx', 'MailerSend'],
    liveUrl: 'https://w404.net',
    featured: true
  },
  {
    id: 2,
    title: 'Chat Box (AI Browser Extension)',
    description: 'Created an open‑source Chrome extension that integrates AI chat, advanced web search, and document interaction in a convenient sidebar. Built with React, Webpack, Tailwind CSS & Shadcn UI; supports multiple AI providers (OpenAI, Claude, Groq) and local LLMs via Ollama. Implemented custom prompts, contextual text selection, YouTube summarization, and document chat features, boosting user productivity.',
    image: 'https://images.pexels.com/photos/5935791/pexels-photo-5935791.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Webpack', 'Tailwind CSS', 'Shadcn UI', 'OpenAI', 'Claude', 'Groq', 'Ollama'],
    githubUrl: 'https://github.com/MinhxThanh/Chat-Box',
    featured: true
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'Angular', level: 85, category: 'frontend' },
  { name: 'Next.js', level: 88, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'HTML5/CSS3', level: 88, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Bootstrap', level: 85, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Spring Boot', level: 80, category: 'backend' },
  { name: 'Java', level: 78, category: 'backend' },
  { name: 'Python', level: 82, category: 'backend' },
  { name: 'MySQL', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  { name: 'SQL Server', level: 75, category: 'backend' },
  
  // AI/ML
  { name: 'ChatGPT', level: 88, category: 'ai' },
  { name: 'Anthropic (Claude)', level: 85, category: 'ai' },
  { name: 'Stable Diffusion', level: 80, category: 'ai' },
  { name: 'Krea AI', level: 75, category: 'ai' },
  { name: 'Leonardo AI', level: 75, category: 'ai' },
  { name: 'Flux', level: 72, category: 'ai' },
  
  // Tools
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Docker', level: 80, category: 'tools' },
  { name: 'Google Cloud Platform', level: 78, category: 'tools' },
  { name: 'DigitalOcean', level: 82, category: 'tools' },
  { name: 'Azure', level: 75, category: 'tools' },
  { name: 'GitHub Copilot', level: 85, category: 'tools' },
  { name: 'Cursor', level: 80, category: 'tools' },
  { name: 'Firecrawl/Jina', level: 75, category: 'tools' },
];

export const CERTIFICATIONS = [
  {
    id: 1,
    name: 'Google Cloud Associate Cloud Engineer',
    issuer: 'Google Cloud',
    year: '2023'
  },
  {
    id: 2,
    name: 'Oracle Certified Professional: Java SE Programmer',
    issuer: 'Oracle',
    year: '2022'
  }
];

export const LANGUAGES = [
  {
    id: 1,
    name: 'Vietnamese',
    level: 'Native'
  },
  {
    id: 2,
    name: 'English',
    level: 'Professional working proficiency',
    details: 'Reading/Writing: Advanced, Speaking: Intermediate'
  }
];

export const INTERESTS = [
  'Advancing local AI models for text and image generation',
  'Exploring practical applications of LLMs in backend systems',
  'Studying advanced software architecture patterns for scalable applications',
  'Listen music and read novel'
];