import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";
import getSession from '@/app/actions/getCurrentUser'

export async function GET(
    request: any,
    response: any,
) {
    try {
        const session = await getSession(); 
        
        // Check if the user is authenticated
        if (!session) {
            // User is not authenticated, return an unauthorized response
            return new NextResponse("Unauthorized", { status: 401 });
        }
        console.log(response, request)
        const account = await prisma.account.findMany();
        return NextResponse.json(account);
    } catch (error) {
        const errorMessage = "An error occurred while fetching users";
        return new NextResponse(errorMessage, { status: 500 });
    }
}