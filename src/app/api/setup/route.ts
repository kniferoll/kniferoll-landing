import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_req: NextRequest) {
  console.log('Running setup...');
  try {
    await sql`CREATE TABLE IF NOT EXISTS subscribers(email VARCHAR(255) PRIMARY KEY);`;
    console.log('Table created successfully');
    return NextResponse.json({ message: 'Table created successfully' });
  } catch (error: unknown) {
    console.log('Error:', error);
    return NextResponse.json({ status: 500, error: (error as Error).message });
  }
}