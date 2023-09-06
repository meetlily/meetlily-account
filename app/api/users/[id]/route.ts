import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";
import getSession from '@/app/actions/getCurrentUser'


export async function GET(
    request: any,
    response: any,
) {

    try {
        console.log(response);
        const session = await getSession(); 
        // Check if the user is authenticated
        if (!session) {
            // User is not authenticated, return an unauthorized response
            return new NextResponse("Unauthorized", { status: 401 });
        }
        const { id } = response.params;
        
        let user = await prisma.user.findUnique({
            where: {
              id: id,
            },
        });
      

        return NextResponse.json(user);
    } catch (error) {
        const errorMessage = "An error occurred while fetching user";
        return new NextResponse(errorMessage, { status: 500 });
    }
}