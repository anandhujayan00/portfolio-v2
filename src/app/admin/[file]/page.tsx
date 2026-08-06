"use client";
import { useState, useEffect, use } from 'react';

export default function EditFilePage({ params }: { params: Promise<{ file: string }> }) {
  const { file } = use(params);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/admin/data/${file}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [file]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>, key: string, folder: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', folder);

    const res = await fetch('/api/admin/upload', {
      method: 'POST',
      body: formData,
    });
    const result = await res.json();
    setData((prev: any) => ({ ...prev, [key]: result.path }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`/api/admin/data/${file}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });
    alert('Saved successfully!');
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 capitalize">Edit {file}</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
        <div className="mb-4">
          <label className="block mb-2 font-bold">Upload Asset</label>
          <input type="file" onChange={(e) => handleUpload(e, 'image', file === 'projects' ? 'projects' : 'logos')} />
        </div>
        <textarea
          className="w-full h-96 p-2 border rounded"
          value={data ? JSON.stringify(data, null, 2) : ''}
          onChange={(e) => setData(JSON.parse(e.target.value))}
        />
        <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
}
