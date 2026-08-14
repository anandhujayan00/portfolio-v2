import React, { useState } from 'react';
import { Input } from './Input';

interface SettingsData {
  branding: {
    siteName: string;
    logo: string;
    logoLarge: string;
    favicon: string;
  };
}

export const SettingsForm: React.FC<{ data: SettingsData; onSave: (data: SettingsData) => void }> = ({ data, onSave }) => {
  const [formData, setFormData] = useState<SettingsData>(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      branding: {
        ...formData.branding,
        [name]: value
      }
    });
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave(formData); }} className="space-y-4">
      <Input label="Site Name" name="siteName" value={formData.branding.siteName} onChange={handleChange} />
      <Input label="Logo URL" name="logo" value={formData.branding.logo} onChange={handleChange} />
      <Input label="Large Logo URL" name="logoLarge" value={formData.branding.logoLarge} onChange={handleChange} />
      <Input label="Favicon URL" name="favicon" value={formData.branding.favicon} onChange={handleChange} />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save Changes</button>
    </form>
  );
};
