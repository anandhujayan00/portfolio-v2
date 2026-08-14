import React, { useState } from 'react';
import { Input } from './Input';
import { Textarea } from './Textarea';

interface AchievementItem {
  title: string;
  description: string;
  icon: string;
}

export const AchievementsForm: React.FC<{ data: AchievementItem[]; onSave: (data: AchievementItem[]) => void }> = ({ data, onSave }) => {
  const [items, setItems] = useState<AchievementItem[]>(data);

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [name]: value };
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { title: '', description: '', icon: '' }]);
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
          <Input label="Icon" name="icon" value={item.icon} onChange={(e) => handleChange(index, e)} />
          <button type="button" onClick={() => removeItem(index)} className="text-red-500 text-sm">Remove</button>
        </div>
      ))}
      <button type="button" onClick={addItem} className="bg-green-600 text-white px-4 py-2 rounded">Add Achievement</button>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save All</button>
    </form>
  );
};
