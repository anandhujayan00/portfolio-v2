"use client";
import { useState, useEffect, use } from 'react';
import { PersonalForm } from '@/components/admin/forms/PersonalForm';
import { SocialForm } from '@/components/admin/forms/SocialForm';
import { ContactForm } from '@/components/admin/forms/ContactForm';
import { EducationForm } from '@/components/admin/forms/EducationForm';
import { ExperienceForm } from '@/components/admin/forms/ExperienceForm';
import { SkillsForm } from '@/components/admin/forms/SkillsForm';
import { ProjectsForm } from '@/components/admin/forms/ProjectsForm';
import { CertificatesForm } from '@/components/admin/forms/CertificatesForm';
import { AchievementsForm } from '@/components/admin/forms/AchievementsForm';
import { SeoForm } from '@/components/admin/forms/SeoForm';
import { SettingsForm } from '@/components/admin/forms/SettingsForm';

export default function EditFilePage({ params }: { params: Promise<{ file: string }> }) {
  const { file } = use(params);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/admin/data/${file}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [file]);

  const handleSubmit = async (updatedData: any) => {
    const res = await fetch(`/api/admin/data/${file}`, {
      method: 'POST',
      body: JSON.stringify(updatedData),
      headers: { 'Content-Type': 'application/json' }
    });
    if (res.ok) {
        alert('Saved successfully!');
    } else {
        alert('Failed to save!');
    }
  };

  if (loading) return <div>Loading...</div>;

  const renderForm = () => {
    switch (file) {
      case 'personal':
        return <PersonalForm data={data} onSave={handleSubmit} />;
      case 'social':
        return <SocialForm data={data} onSave={handleSubmit} />;
      case 'contact':
        return <ContactForm data={data} onSave={handleSubmit} />;
      case 'education':
        return <EducationForm data={data} onSave={handleSubmit} />;
      case 'experience':
        return <ExperienceForm data={data} onSave={handleSubmit} />;
      case 'skills':
        return <SkillsForm data={data} onSave={handleSubmit} />;
      case 'projects':
        return <ProjectsForm data={data} onSave={handleSubmit} />;
      case 'certificates':
        return <CertificatesForm data={data} onSave={handleSubmit} />;
      case 'achievements':
        return <AchievementsForm data={data} onSave={handleSubmit} />;
      case 'seo':
        return <SeoForm data={data} onSave={handleSubmit} />;
      case 'settings':
        return <SettingsForm data={data} onSave={handleSubmit} />;
      default:
        return <pre className="bg-gray-100 p-4">{JSON.stringify(data, null, 2)}</pre>;
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 capitalize">Edit {file}</h1>
      <div className="bg-white p-6 rounded shadow">
        {renderForm()}
      </div>
    </div>
  );
}
