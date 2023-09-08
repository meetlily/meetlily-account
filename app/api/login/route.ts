import { getSession } from '@/app/actions/getCurrentUser';
import { setCookie } from '@/app/utils/utils';
import { NextResponse } from 'next/server';


export async function POST(
    req: Request,
    res: any
) {
    try {
        const session = await getSession(); 
        
        const user = await req.body; 
        // Check if the user is authenticated
        // if (!session) {
        //     // User is not authenticated, return an unauthorized response
        //     return new NextResponse("Unauthorized", { status: 401 });
        // }
        setCookie(res, 'session', { user }, {
            maxAge: 30 * 24 * 60 * 60, // 30 days
            path: '/',
            domain: '.meetlily.net', // Replace with your domain
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'none',
        });
        return NextResponse.json(user);
    } catch (error) {
        const errorMessage = "An error occurred while fetching listings";
        return new NextResponse(errorMessage, { status: 500 });
    }
}