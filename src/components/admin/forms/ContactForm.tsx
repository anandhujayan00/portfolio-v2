import React, { useState } from 'react';
import { Input } from './Input';

interface ContactData {
  email: string;
  linkedin: string;
  location: string;
  subtitle: string;
  status: string;
}

export const ContactForm: React.FC<{ data: ContactData; onSave: (data: ContactData) => void }> = ({ data, onSave }) => {
  const [formData, setFormData] = useState<ContactData>(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave(formData); }} className="space-y-4">
      <Input label="Email" name="email" value={formData.email} onChange={handleChange} />
      <Input label="LinkedIn" name="linkedin" value={formData.linkedin} onChange={handleChange} />
      <Input label="Location" name="location" value={formData.location} onChange={handleChange} />
      <Input label="Subtitle" name="subtitle" value={formData.subtitle} onChange={handleChange} />
      <Input label="Status" name="status" value={formData.status} onChange={handleChange} />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Save Changes
      </button>
    </form>
  );
};
