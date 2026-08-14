import React, { useState } from 'react';
import { Input } from './Input';

interface SocialData {
  [key: string]: string;
}

export const SocialForm: React.FC<{ data: SocialData; onSave: (data: SocialData) => void }> = ({ data, onSave }) => {
  const [formData, setFormData] = useState<SocialData>(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave(formData); }} className="space-y-4">
      {Object.keys(data).map((key) => (
        <Input key={key} label={key.charAt(0).toUpperCase() + key.slice(1)} name={key} value={formData[key]} onChange={handleChange} />
      ))}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Save Changes
      </button>
    </form>
  );
};
