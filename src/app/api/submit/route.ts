// app/api/submit/route.ts
import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json();
    
        const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!emailRegEx.test(email)) {
            return NextResponse.json({ message: 'Invalid email address!' });
        }

        await sql`INSERT INTO subscribers(email) VALUES(${email})`;
        return NextResponse.json({ message: 'Successfully subscribed!' });
    } catch (e) {
        console.log('Error:', e);
        return NextResponse.json({ message: 'Request cannot be processed!' });
    }
};