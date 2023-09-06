import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";
import getCurrentUser, { getSession } from '@/app/actions/getCurrentUser'

export async function GET(
    request: any,
) {
    try {
        const session = await getSession(); 
        const currentUser = await getCurrentUser(); 
        // Check if the user is authenticated
        if (!session) {
            // User is not authenticated, return an unauthorized response
            return new NextResponse("Unauthorized", { status: 401 });
        }
        return NextResponse.json(currentUser);
    } catch (error) {
        const errorMessage = "An error occurred while fetching users";
        return new NextResponse(errorMessage, { status: 500 });
    }
}