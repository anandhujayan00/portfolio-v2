import React, { useState } from 'react';
import { Input } from './Input';
import { Textarea } from './Textarea';

interface Skill {
  name: string;
  level: string;
  icon: string;
  color: string;
  description: string;
  percentage: number;
}

interface SkillsData {
  [key: string]: Skill[];
}

export const SkillsForm: React.FC<{ data: SkillsData; onSave: (data: SkillsData) => void }> = ({ data, onSave }) => {
  const [formData, setFormData] = useState<SkillsData>(data);

  const handleSkillChange = (category: string, index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const newCategorySkills = [...formData[category]];
    newCategorySkills[index] = {
      ...newCategorySkills[index],
      [name]: type === 'number' ? Number(value) : value
    };
    setFormData({ ...formData, [category]: newCategorySkills });
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave(formData); }} className="space-y-8">
      {Object.entries(formData).map(([category, skills]) => (
        <div key={category} className="space-y-4 p-4 border rounded-md">
          <h2 className="text-xl font-bold">{category}</h2>
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2 border-b pb-2">
              <Input label="Name" name="name" value={skill.name} onChange={(e) => handleSkillChange(category, index, e)} />
              <Input label="Level" name="level" value={skill.level} onChange={(e) => handleSkillChange(category, index, e)} />
              <Input label="Icon" name="icon" value={skill.icon} onChange={(e) => handleSkillChange(category, index, e)} />
              <Input label="Color" name="color" value={skill.color} onChange={(e) => handleSkillChange(category, index, e)} />
              <Textarea label="Description" name="description" value={skill.description} onChange={(e) => handleSkillChange(category, index, e)} />
              <Input label="Percentage" type="number" name="percentage" value={skill.percentage} onChange={(e) => handleSkillChange(category, index, e)} />
            </div>
          ))}
        </div>
      ))}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save All Skills</button>
    </form>
  );
};
