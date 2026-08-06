import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const files = ['personal', 'projects', 'education', 'experience', 'skills', 'certificates', 'achievements', 'contact', 'social', 'seo', 'settings', 'capabilities', 'stack'];

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
        <nav>
          <ul>
            {files.map(file => (
              <li key={file} className="mb-2">
                <Link href={`/admin/${file}`} className="block p-2 hover:bg-gray-700 rounded capitalize">
                  {file}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-100">
        {children}
      </main>
    </div>
  );
}
