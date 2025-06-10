import { Experience, Project, Skill } from '../types';

export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/mr-minhthanh',
  github: 'https://github.com/MinhxThanh',
  facebook: 'https://www.facebook.com/Mr.MinhxThanh/',
  email: 'thanh@onename.net',
  phone: '+84 364 347 813',
  website: 'https://w404.net',
};

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: 'w404.net',
    position: 'Administrator & Content Creator',
    duration: '06/2024 – Present',
    location: 'Ho Chi Minh City, Vietnam',
    description: [
      'Led development and optimization of w404.net, growing traffic from 1,000 to 10,000+ monthly visits in 6 months through AI and tech content',
      'Architected platform using Next.js, Spring Boot, and MySQL; deployed on DigitalOcean with 99.9% uptime',
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
      'Developed AI-integrated web applications (e.g., chatbots, recommendation systems), increasing client engagement by 30% within 3 months',
      'Consulted on AI adoption, helping clients deploy solutions on GCP and DigitalOcean with 99.9% uptime',
      'Conducted workshops on Stable Diffusion and GitHub Copilot for development teams'
    ],
    technologies: ['React', 'Node.js', 'Python', 'OpenAI', 'GCP', 'DigitalOcean', 'Docker']
  },
  {
    id: 3,
    company: 'Nghiện AI Facebook Group',
    position: 'Co-founder & Original Admin',
    duration: '01/2021 – Present',
    location: 'Vietnam',
    description: [
      'Co-founded and led "Nghiện AI," scaling the community to 160,000+ members',
      'Plan and execute knowledge-sharing events, webinars, and live Q&A sessions',
      'Managed a team of moderators to ensure a collaborative and inclusive environment'
    ],
    technologies: ['Community Management', 'Event Planning', 'AI Education', 'Content Strategy']
  },
  {
    id: 4,
    company: '21st.dev',
    position: 'Creator (Author)',
    duration: '03/2024 – Present',
    location: 'Remote',
    description: [
      'Authored and published 20+ interactive UI component demos—such as Simple UI, Triangles Falling, Gradient Menu, and Parallax Scrolling Effect—on personal 21st.dev profile',
      'Contributed to the developer community by creating reusable, production-ready UI components and design patterns',
      'Demonstrated expertise in modern web technologies through innovative and visually appealing component designs'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'CSS Animations', 'UI/UX Design']
  },
  {
    id: 5,
    company: '@sky.wav',
    position: 'TikTok Creator',
    duration: '12/2024 – Present',
    location: 'Remote',
    description: [
      'Produce original short-form videos on AI, coding tips, and tech demos, attracting and engaging an audience of 7,000+ followers on TikTok',
      'Analyze performance metrics (views, likes, shares) to refine content strategy and boost reach',
      'Collaborate with fellow creators and respond to community feedback to foster an active, growing subscriber base'
    ],
    technologies: ['Content Creation', 'Video Editing', 'Social Media Marketing', 'TikTok Algorithm', 'Analytics', 'Community Management']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Chat-Box Browser Extension',
    description: 'Manifest V3 browser extension with React, Shadcn UI, and Tailwind CSS. Integrates multiple LLMs (OpenAI, Claude, Ollama) with secure local storage, web scraping, semantic search, and YouTube context detection.',
    image: 'https://images.pexels.com/photos/5935791/pexels-photo-5935791.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'OpenAI', 'Claude', 'Ollama'],
    githubUrl: 'https://github.com/MinhxThanh/Chat-Box',
    featured: true
  },
  {
    id: 2,
    title: 'w404.net Platform',
    description: 'Built and maintained platform with Next.js, Spring Boot, and MySQL. Optimized for performance and UX, growing to 10,000+ monthly visits with 25% increased user retention.',
    image: 'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Spring Boot', 'MySQL', 'DigitalOcean', 'Performance Optimization'],
    liveUrl: 'https://w404.net',
    featured: true
  },
  {
    id: 3,
    title: 'AI-Integrated Web Applications',
    description: 'Portfolio of AI-driven web applications including chatbots and recommendation systems, helping clients achieve 30% increased engagement.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Python', 'OpenAI', 'Machine Learning', 'Cloud Deployment'],
    featured: false
  },
  {
    id: 4,
    title: 'AI Community Workshops',
    description: 'Educational workshops and training sessions on Stable Diffusion, GitHub Copilot, and AI tools for development teams and community members.',
    image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Stable Diffusion', 'GitHub Copilot', 'AI Education', 'Training Materials'],
    featured: false
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
  
  // Backend
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Spring Boot', level: 80, category: 'backend' },
  { name: 'Java', level: 78, category: 'backend' },
  { name: 'Python', level: 82, category: 'backend' },
  { name: 'MySQL', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  
  // AI/ML
  { name: 'OpenAI (ChatGPT)', level: 88, category: 'ai' },
  { name: 'Anthropic (Claude)', level: 85, category: 'ai' },
  { name: 'Stable Diffusion', level: 80, category: 'ai' },
  { name: 'Krea AI', level: 75, category: 'ai' },
  { name: 'Leonardo AI', level: 75, category: 'ai' },
  { name: 'Flux', level: 72, category: 'ai' },
  { name: 'Ollama', level: 90, category: 'ai' },
  
  // Tools
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Docker', level: 80, category: 'tools' },
  { name: 'Google Cloud Platform', level: 78, category: 'tools' },
  { name: 'DigitalOcean', level: 82, category: 'tools' },
  { name: 'Azure', level: 75, category: 'tools' },
  { name: 'GitHub Copilot', level: 85, category: 'tools' },
  { name: 'Cursor', level: 80, category: 'tools' },
  { name: 'Windsurf', level: 90, category: 'tools' },
  
];