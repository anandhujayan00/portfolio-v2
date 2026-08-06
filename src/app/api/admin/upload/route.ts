import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const folder = formData.get('folder') as string;

    if (!file || !folder) {
      return NextResponse.json({ error: 'File and folder are required' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Security: Only allow specific folders and file types (simplified)
    const allowedFolders = ['profile', 'projects', 'certificates', 'resume', 'logos'];
    if (!allowedFolders.includes(folder)) {
      return NextResponse.json({ error: 'Invalid folder' }, { status: 400 });
    }

    const uploadDir = path.join(process.cwd(), 'public', folder);
    await fs.mkdir(uploadDir, { recursive: true });
    
    const filePath = path.join(uploadDir, file.name);
    await fs.writeFile(filePath, buffer);

    return NextResponse.json({ path: `/${folder}/${file.name}` });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
  }
}
