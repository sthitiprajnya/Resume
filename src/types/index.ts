export interface PersonalInfo {
  name: string;
  nameShort: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  github: string;
  githubUser: string;
  linkedin: string;
  location: string;
  locationShort: string;
  availability: boolean;
  currentRole: string;
  currentCompany: string;
  resumeUrl: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
}

export interface SkillCategory {
  category: string;
  color: 'cyan' | 'amber' | 'green' | 'violet';
  skills: Skill[];
}

export interface ExperienceSubsection {
  id: string;
  label: string;
  color: 'cyan' | 'amber' | 'green' | 'violet';
  bullets: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  periodShort: string;
  type: string;
  tags: string[];
  awards: string[];
  subsections: ExperienceSubsection[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'automation' | 'cloud' | 'security' | 'vapt';
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  githubUrl: string;
  featured: boolean;
  year: number;
  impact: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: number;
  color: 'cyan' | 'amber' | 'green' | 'violet';
  status: 'active' | 'expired';
  verifyUrl: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
}
