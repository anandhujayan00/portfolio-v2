import React, { useState } from 'react';
import { Input } from './Input';

interface CertificateItem {
  title: string;
  organization: string;
  year: string;
  image: string;
  credentialLink: string;
}

export const CertificatesForm: React.FC<{ data: CertificateItem[]; onSave: (data: CertificateItem[]) => void }> = ({ data, onSave }) => {
  const [items, setItems] = useState<CertificateItem[]>(data);

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [name]: value };
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { title: '', organization: '', year: '', image: '', credentialLink: '' }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave(items); }} className="space-y-6">
      {items.map((item, index) => (
        <div key={index} className="p-4 border rounded-md space-y-2">
          <Input label="Title" name="title" value={item.title} onChange={(e) => handleChange(index, e)} />
          <Input label="Organization" name="organization" value={item.organization} onChange={(e) => handleChange(index, e)} />
          <Input label="Year" name="year" value={item.year} onChange={(e) => handleChange(index, e)} />
          <Input label="Image URL" name="image" value={item.image} onChange={(e) => handleChange(index, e)} />
          <Input label="Credential Link" name="credentialLink" value={item.credentialLink} onChange={(e) => handleChange(index, e)} />
          <button type="button" onClick={() => removeItem(index)} className="text-red-500 text-sm">Remove</button>
        </div>
      ))}
      <button type="button" onClick={addItem} className="bg-green-600 text-white px-4 py-2 rounded">Add Certificate</button>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save All</button>
    </form>
  );
};
