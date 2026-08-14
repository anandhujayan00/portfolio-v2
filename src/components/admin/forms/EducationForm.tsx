import React, { useState } from 'react';
import { Input } from './Input';
import { Textarea } from './Textarea';

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  university: string;
  specialization: string;
  startYear: string;
  endYear: string;
  status: string;
  description: string;
  icon: string;
}

export const EducationForm: React.FC<{ data: EducationItem[]; onSave: (data: EducationItem[]) => void }> = ({ data, onSave }) => {
  const [items, setItems] = useState<EducationItem[]>(data);

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [e.target.name]: e.target.value };
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { id: `edu-${Date.now()}`, degree: '', institution: '', location: '', university: '', specialization: '', startYear: '', endYear: '', status: '', description: '', icon: '' }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave(items); }} className="space-y-6">
      {items.map((item, index) => (
        <div key={item.id} className="p-4 border rounded-md space-y-2">
          <Input label="Degree" name="degree" value={item.degree} onChange={(e) => handleChange(index, e)} />
          <Input label="Institution" name="institution" value={item.institution} onChange={(e) => handleChange(index, e)} />
          <Input label="Location" name="location" value={item.location} onChange={(e) => handleChange(index, e)} />
          <Input label="University" name="university" value={item.university} onChange={(e) => handleChange(index, e)} />
          <Input label="Specialization" name="specialization" value={item.specialization} onChange={(e) => handleChange(index, e)} />
          <Input label="Start Year" name="startYear" value={item.startYear} onChange={(e) => handleChange(index, e)} />
          <Input label="End Year" name="endYear" value={item.endYear} onChange={(e) => handleChange(index, e)} />
          <Input label="Status" name="status" value={item.status} onChange={(e) => handleChange(index, e)} />
          <Textarea label="Description" name="description" value={item.description} onChange={(e) => handleChange(index, e)} />
          <Input label="Icon" name="icon" value={item.icon} onChange={(e) => handleChange(index, e)} />
          <button type="button" onClick={() => removeItem(index)} className="text-red-500 text-sm">Remove</button>
        </div>
      ))}
      <button type="button" onClick={addItem} className="bg-green-600 text-white px-4 py-2 rounded">Add Education</button>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save All</button>
    </form>
  );
};
