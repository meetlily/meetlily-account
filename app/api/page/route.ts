import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";
//import getCurrentUser, { getSession } from '@/app/actions/getCurrentUser'

export async function POST(
    request: Request
) {
    try {
        //onst currentUser = await getCurrentUser(); 
        let body = await request.json();
        //body.userId = currentUser.id;
        const page = await prisma.page.create({
            data: body
        });
         return NextResponse.json(page)
    } catch (error) {
        const errorMessage = "An error occurred while fetching page";
        return new NextResponse(errorMessage, { status: 500 });
    }
}

export async function GET(
    request: any,
) {
    try {
        const pages = await prisma.page.findMany();
        return NextResponse.json(pages);
    } catch (error) {
        const errorMessage = "An error occurred while fetching page";
        return new NextResponse(errorMessage, { status: 500 });
    }
}