import React, { useState } from 'react';
import { Input } from './Input';
import { Textarea } from './Textarea';

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
}

export const ProjectsForm: React.FC<{ data: ProjectItem[]; onSave: (data: ProjectItem[]) => void }> = ({ data, onSave }) => {
  const [items, setItems] = useState<ProjectItem[]>(data);

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    const newItems = [...items];
    if (name === 'technologies') {
      newItems[index] = { ...newItems[index], [name]: value.split(',').map(s => s.trim()) };
    } else if (type === 'checkbox') {
      newItems[index] = { ...newItems[index], [name]: checked };
    } else {
      newItems[index] = { ...newItems[index], [name]: value };
    }
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { title: '', description: '', image: '', technologies: [], github: '', live: '', featured: false }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave(items); }} className="space-y-6">
      {items.map((item, index) => (
        <div key={index} className="p-4 border rounded-md space-y-2">
          <Input label="Title" name="title" value={item.title} onChange={(e) => handleChange(index, e)} />
          <Textarea label="Description" name="description" value={item.description} onChange={(e) => handleChange(index, e)} />
          <Input label="Image URL" name="image" value={item.image} onChange={(e) => handleChange(index, e)} />
          <Textarea label="Technologies (comma separated)" name="technologies" value={item.technologies.join(', ')} onChange={(e) => handleChange(index, e)} />
          <Input label="GitHub URL" name="github" value={item.github} onChange={(e) => handleChange(index, e)} />
          <Input label="Live URL" name="live" value={item.live} onChange={(e) => handleChange(index, e)} />
          <label className="flex items-center space-x-2">
            <input type="checkbox" name="featured" checked={item.featured} onChange={(e) => handleChange(index, e)} />
            <span>Featured</span>
          </label>
          <button type="button" onClick={() => removeItem(index)} className="text-red-500 text-sm">Remove</button>
        </div>
      ))}
      <button type="button" onClick={addItem} className="bg-green-600 text-white px-4 py-2 rounded">Add Project</button>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save All</button>
    </form>
  );
};
