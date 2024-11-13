import { NextResponse } from 'next/server';
import { connectToDatabase, dbConfigSchema } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const config = dbConfigSchema.parse(body);
    const result = await connectToDatabase(config);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : 'Invalid configuration'
    }, { status: 400 });
  }
}