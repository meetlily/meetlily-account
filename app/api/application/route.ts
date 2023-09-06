import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";
import getSession from '@/app/actions/getCurrentUser'
import administration from '@/data/administration.json';

export async function GET(
    request: Request,
) {
    try {
        const session = await getSession(); 
        const administrationData = administration['administration'];
        const applicationData = administration['applications'];
        const toolsData = administration['tools'];
        let merge = [...administrationData,...applicationData, ...toolsData];
        // Check if the user is authenticated
        if (!session) {
            // User is not authenticated, return an unauthorized response
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const apps = await prisma.applications.findMany();

        if(apps && apps.length === 0){
            //await prisma.applications.createMany({data: merge});
        }

        return NextResponse.json(apps);
    } catch (error) {
        const errorMessage = "An error occurred while fetching applications";
        return new NextResponse(errorMessage, { status: 500 });
    }
}