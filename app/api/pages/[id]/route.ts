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
        const { id } = response.params;
        
        let page = await prisma.page.findUnique({
            where: {
              id: id,
            },
        });
      

        return NextResponse.json(page);
    } catch (error) {
        const errorMessage = "An error occurred while fetching page";
        return new NextResponse(errorMessage, { status: 500 });
    }
}