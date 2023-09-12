import { NextResponse } from "next/server";
import getSession from '@/app/actions/getCurrentUser'
import { getSLSSessions, getSLSMembers } from "@/app/actions/getSLSData";


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

        const data =  await getSLSSessions();
        return NextResponse.json(data);
    } catch (error) {
        const errorMessage = "An error occurred while fetching users";
        return new NextResponse(errorMessage, { status: 500 });
    }
}