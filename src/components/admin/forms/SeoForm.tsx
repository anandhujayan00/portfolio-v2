import React, { useState } from 'react';
import { Input } from './Input';
import { Textarea } from './Textarea';

interface SeoData {
  title: string;
  description: string;
  keywords: string[];
  openGraphImage: string;
  canonicalUrl: string;
  author: string;
}

export const SeoForm: React.FC<{ data: SeoData; onSave: (data: SeoData) => void }> = ({ data, onSave }) => {
  const [formData, setFormData] = useState<SeoData>(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'keywords') {
      setFormData({ ...formData, [name]: value.split(',').map(s => s.trim()) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave(formData); }} className="space-y-4">
      <Input label="Title" name="title" value={formData.title} onChange={handleChange} />
      <Textarea label="Description" name="description" value={formData.description} onChange={handleChange} />
      <Input label="Keywords (comma separated)" name="keywords" value={formData.keywords.join(', ')} onChange={handleChange} />
      <Input label="Open Graph Image" name="openGraphImage" value={formData.openGraphImage} onChange={handleChange} />
      <Input label="Canonical URL" name="canonicalUrl" value={formData.canonicalUrl} onChange={handleChange} />
      <Input label="Author" name="author" value={formData.author} onChange={handleChange} />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save Changes</button>
    </form>
  );
};
