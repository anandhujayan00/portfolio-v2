import React, { useState } from 'react';
import { Input } from './Input';
import { Textarea } from './Textarea';

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export const ExperienceForm: React.FC<{ data: ExperienceItem[]; onSave: (data: ExperienceItem[]) => void }> = ({ data, onSave }) => {
  const [items, setItems] = useState<ExperienceItem[]>(data);

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newItems = [...items];
    if (['responsibilities', 'technologies', 'achievements'].includes(name)) {
      newItems[index] = { ...newItems[index], [name]: value.split(',').map(s => s.trim()) };
    } else {
      newItems[index] = { ...newItems[index], [name]: value };
    }
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { id: `exp-${Date.now()}`, company: '', role: '', location: '', duration: '', responsibilities: [], technologies: [], achievements: [] }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave(items); }} className="space-y-6">
      {items.map((item, index) => (
        <div key={item.id} className="p-4 border rounded-md space-y-2">
          <Input label="Company" name="company" value={item.company} onChange={(e) => handleChange(index, e)} />
          <Input label="Role" name="role" value={item.role} onChange={(e) => handleChange(index, e)} />
          <Input label="Location" name="location" value={item.location} onChange={(e) => handleChange(index, e)} />
          <Input label="Duration" name="duration" value={item.duration} onChange={(e) => handleChange(index, e)} />
          <Textarea label="Responsibilities (comma separated)" name="responsibilities" value={item.responsibilities.join(', ')} onChange={(e) => handleChange(index, e)} />
          <Textarea label="Technologies (comma separated)" name="technologies" value={item.technologies.join(', ')} onChange={(e) => handleChange(index, e)} />
          <Textarea label="Achievements (comma separated)" name="achievements" value={item.achievements.join(', ')} onChange={(e) => handleChange(index, e)} />
          <button type="button" onClick={() => removeItem(index)} className="text-red-500 text-sm">Remove</button>
        </div>
      ))}
      <button type="button" onClick={addItem} className="bg-green-600 text-white px-4 py-2 rounded">Add Experience</button>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save All</button>
    </form>
  );
};
