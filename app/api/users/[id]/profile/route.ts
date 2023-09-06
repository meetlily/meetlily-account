import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";
import getSession from '@/app/actions/getCurrentUser'

export async function GET(
    request: any,
) {
    try {
        const session = await getSession(); 
        
        // Check if the user is authenticated
        if (!session) {
            // User is not authenticated, return an unauthorized response
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const profile = await prisma.userProfile.findMany();
        return NextResponse.json(profile);
    } catch (error) {
        const errorMessage = "An error occurred while fetching users";
        return new NextResponse(errorMessage, { status: 500 });
    }
}