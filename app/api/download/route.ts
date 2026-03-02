// app/api/download/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Ganti dengan Link Raw GitHub File kamu
    const fileUrl = 'https://raw.githubusercontent.com/Khisd/NEXUO-PROJECT/refs/heads/main/NEXUO_Trader.py';

    // 1. Fetch file dari GitHub
    const response = await fetch(fileUrl);
    
    if (!response.ok) {
      return new NextResponse('File not found on GitHub', { status: 404 });
    }

    // 2. Ambil konten file
    const fileContent = await response.blob();

    // 3. Kirim balik ke browser dengan Header khusus 'attachment'
    // Ini yang membuat browser otomatis download, bukan membuka tab baru.
    return new NextResponse(fileContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/x-python',
        'Content-Disposition': 'attachment; filename="NEXUO_Automation_Tool.py"',
      },
    });

  } catch (error) {
    return new NextResponse('Error downloading file', { status: 500 });
  }
}