import bcrypt from "bcrypt"
import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";
export async function POST(
    request: Request
) {
    const body = await request.json();
    const {
        email,
        name,
        password
    } = body;
    const hashedPassword = await bcrypt.hash(password, 12)
    let defaultRole = 'Authenticated';
    let defaultOrgId = '266dcae8-4cc6-4edf-a3e9-ad0edb23a2ad';
    if(email === 'edvillan15@gmail.com'){
        defaultRole = 'Super Administrator';
    }
    
    const role =  await prisma.role.create({
        data: {
            name: defaultRole,
            Organization: {
                connect: {
                  id: defaultOrgId,
                },
            },
        }
    });
     
    const user = await prisma.user.create({
        data: {
            email,
            name,
            hashedPassword,
            Role: {
                connect: {
                  id: role.id,
                },
            },
        }
    });
     return NextResponse.json(user)
}