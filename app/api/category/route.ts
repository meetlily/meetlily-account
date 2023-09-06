import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";
import getSession from '@/app/actions/getCurrentUser'

export async function POST(
    request: any,
) {
    try {
        const session = await getSession(); 
        const body = await request.json(); 
        // Check if the user is authenticated
        if (!session) {
            // User is not authenticated, return an unauthorized response
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const category = await prisma.category.createMany({data:body});
        return NextResponse.json(category);
    } catch (error) {
        const errorMessage = "An error occurred while fetching listings";
        return new NextResponse(errorMessage, { status: 500 });
    }
}

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
        let cat = [
            {
                "name": "Administration",
                "description": "Administration",
                "slug": "administration",
                "icon": "administration",
                "id": "fb94112a-f10b-48ff-aa24-0583d366f898"
            },
            {
                "name": "Applications",
                "description": "Applications",
                "slug": "applications",
                "icon": "apps",
                "id": "19000002-c458-487b-b7a7-261753499465"
            },
            {
                "name": "Tools",
                "description": "Tools and Utilities",
                "slug": "tools",
                "icon": "gears",
                "id": "d3415084-ed6b-403c-bf67-8131bd0dad4c"
            }
        ];
        const category = await prisma.category.findMany();
        if(category.length === 0){
            await prisma.category.createMany({ data: cat });
            const catData = await prisma.category.findMany();
            return NextResponse.json(catData);
        }

        
        return NextResponse.json(category);
    } catch (error) {
        const errorMessage = "An error occurred while fetching listings";
        return new NextResponse(errorMessage, { status: 500 });
    }
}