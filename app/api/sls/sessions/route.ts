import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";
import getSession from '@/app/actions/getCurrentUser'
import axios from "axios";

const SLS_API_KEY = process.env.SLS_API_KEY;
const SLS_VIDU_URL = process.env.SLS_VIDU_URL;
const SLS_API_URL = process.env.SLS_API_URL;
const SLS_TURN_URL = process.env.SLS_TURN_URL;

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

        const users = await prisma.user.findMany();
        return NextResponse.json(users);
    } catch (error) {
        const errorMessage = "An error occurred while fetching users";
        return new NextResponse(errorMessage, { status: 500 });
    }
}