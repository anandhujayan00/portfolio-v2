export interface Skill {
  name: string;
  level: string;
  icon: string;
  color: string;
  description: string;
  percentage: number;
}

export interface SkillCategory {
  [key: string]: Skill[];
}

export interface AICapability {
  title: string;
  badges: string[];
}

export interface StackCategory {
  title: string;
  items: {
    name: string;
    icon: string;
  }[];
  activeLearning?: boolean;
}

export interface StackData {
  title: string;
  subtitle: string;
  categories: StackCategory[];
}

export interface PersonalData {
  fullName: string;
  jobTitle: string;
  heroHeading: string;
  tagline: string;
  shortBio: string;
  longAboutMe: string;
  yearsLearning: string;
  experienceYears: string;
  domainsCount: string;
  mbaStatus: string;
  aiStatus: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  affiliation?: string;
  location: string;
  university: string;
  specialization: string;
  startYear: string;
  endYear: string;
  status: string;
  description: string;
  icon: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface Branding {
  siteName: string;
  logo: string;
  logoLarge: string;
  favicon: string;
}

export interface SettingsData {
  branding: Branding;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
}

export interface Certificate {
  title: string;
  organization: string;
  year: string;
  image: string;
  credentialLink: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export interface ContactData {
  email: string;
  linkedin: string;
  location: string;
  subtitle: string;
  status: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  instagram: string;
  x: string;
  youtube: string;
  facebook: string;
  whatsapp: string;
  email: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  openGraphImage: string;
  canonicalUrl: string;
  author: string;
}
