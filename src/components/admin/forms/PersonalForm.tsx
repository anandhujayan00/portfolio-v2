import React, { useState } from 'react';
import { Input } from './Input';
import { Textarea } from './Textarea';

interface PersonalData {
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
  resumeUrl: string;
  // Labels might need to be kept as is, but maybe not editable?
  [key: string]: string;
}

export const PersonalForm: React.FC<{ data: PersonalData; onSave: (data: PersonalData) => void }> = ({ data, onSave }) => {
  const [formData, setFormData] = useState<PersonalData>(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave(formData); }} className="space-y-4">
      <Input label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} />
      <Input label="Job Title" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
      <Input label="Hero Heading" name="heroHeading" value={formData.heroHeading} onChange={handleChange} />
      <Input label="Tagline" name="tagline" value={formData.tagline} onChange={handleChange} />
      <Textarea label="Short Bio" name="shortBio" value={formData.shortBio} onChange={handleChange} />
      <Textarea label="Long About Me" name="longAboutMe" value={formData.longAboutMe} onChange={handleChange} rows={10} />
      <Input label="Years Learning" name="yearsLearning" value={formData.yearsLearning} onChange={handleChange} />
      <Input label="Experience Years" name="experienceYears" value={formData.experienceYears} onChange={handleChange} />
      <Input label="Domains Count" name="domainsCount" value={formData.domainsCount} onChange={handleChange} />
      <Input label="MBA Status" name="mbaStatus" value={formData.mbaStatus} onChange={handleChange} />
      <Input label="AI Status" name="aiStatus" value={formData.aiStatus} onChange={handleChange} />
      <Input label="Resume URL" name="resumeUrl" value={formData.resumeUrl} onChange={handleChange} />
      
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Save Changes
      </button>
    </form>
  );
};
