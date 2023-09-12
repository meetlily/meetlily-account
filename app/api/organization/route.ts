import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";
import getCurrentUser, { getSession } from '@/app/actions/getCurrentUser'
import { getPublicIP, getPublicIPInfo } from "../../actions/getPublicIP";

export async function POST(
    request: any,
) {
    try {
        const currentUser = await getCurrentUser(); 
        const session = await getSession(); 
        // Check if the user is authenticated
        if (!session) {
            // User is not authenticated, return an unauthorized response
            return new NextResponse("Unauthorized", { status: 401 });
        }
        let organization;
        const body = await request.body; 
        if(body&&body.length > 0){
            organization = await prisma.organization.createMany({
                data: body
            });
        } else if(body&&typeof body === 'object') {
            organization = await prisma.organization.create({
                data: body
            });
        } else {
            return new NextResponse("Missing Body fields", { status: 500 });
        }

        
        return NextResponse.json(organization);
    } catch (error) {
        const errorMessage = "An error occurred while fetching your account";
        return new NextResponse(errorMessage, { status: 500 });
    }
}

export async function GET(
    request: any,
) {
    try {
        const currentUser = await getCurrentUser(); 
        const session = await getSession(); 
        // Check if the user is authenticated
        if (!session) {
            // User is not authenticated, return an unauthorized response
            return new NextResponse("Unauthorized", { status: 401 });
        }
        const organization = await prisma.organization.findMany();

        return NextResponse.json(organization);
    } catch (error) {
        const errorMessage = "An error occurred while fetching your account";
        return new NextResponse(errorMessage, { status: 500 });
    }
}