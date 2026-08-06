import personal from "../data/personal.json";
import education from "../data/education.json";
import experience from "../data/experience.json";
import skills from "../data/skills.json";
import projects from "../data/projects.json";
import certificates from "../data/certificates.json";
import achievements from "../data/achievements.json";
import contact from "../data/contact.json";
import social from "../data/social.json";
import seo from "../data/seo.json";
import settings from "../data/settings.json";
import capabilities from "../data/capabilities.json";
import stack from "../data/stack.json";

import {
  PersonalData,
  EducationItem,
  ExperienceItem,
  SkillCategory,
  Project,
  Certificate,
  Achievement,
  ContactData,
  SocialLinks,
  SEOData,
  SettingsData,
  AICapability,
  StackData,
} from "../types/content";

export const data = {
  personal: personal as PersonalData,
  education: education as EducationItem[],
  experience: experience as ExperienceItem[],
  skills: skills as SkillCategory,
  projects: projects as Project[],
  certificates: certificates as Certificate[],
  achievements: achievements as Achievement[],
  contact: contact as ContactData,
  social: social as SocialLinks,
  seo: seo as SEOData,
  settings: settings as SettingsData,
  capabilities: capabilities as AICapability,
  stack: stack as StackData,
};
