export interface SiteConfig {
  name: string;
  handle: string;
  title: string;
  subTitle: string;
  description: string;
  bio: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
  location: string;
  availableForWork: boolean;
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    iconName?: string;
    description?: string;
    isCore?: boolean;
  }[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: 'Security Tool' | 'Reconnaissance' | 'VAPT Framework' | 'Cryptography' | 'Web Security';
  githubUrl: string;
  demoUrl?: string;
  stars?: number;
  featured: boolean;
  highlights?: string[];
  icon: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  description: string;
  bulletPoints: string[];
  technologies: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  image?: string;
  description?: string;
  badgeColor?: string;
}

export interface Writeup {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  content: string;
  featured?: boolean;
}
