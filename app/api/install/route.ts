import bcrypt from "bcrypt"
import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";
import administration from '@/data/administration.json' assert { type: "json" };


  
export async function GET(
    request: any,
) {
    try {
        const administrationData = administration['administration'];
        const applicationData = administration['applications'];
        const toolsData = administration['tools'];
        let merge = [...administrationData,...applicationData, ...toolsData];
        const hashedPassword = await bcrypt.hash('Ziyjkxkn4qxg9A', 12)
        const findUser = await prisma.user.findMany();

        if(findUser && findUser.length > 0 ){
            return new NextResponse("You are not allowed to do this. Installation has been ran.", { status: 500 });
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
        let userRoles = [
            {
                "name": "Administrator",
                "description": "Manage Administration",
                "userId": ""
            },
            {
                "name": "Authenticated",
                "description": "Authenticated Users",
                "userId": ""
            },
            {
                "name": "Public",
                "description": "Public Users",
                "userId": ""
            }
        ];
       
        let defaultUser = {
            "name": "Eddie Villanueva",
            "email": "edvillan15@gmail.com",
            "hashedPassword": hashedPassword
        };
        
            

            //const application = await prisma.applications.createMany({data: merge});
            const category = await prisma.category.createMany({ data: cat });
            const user = await prisma.user.createMany({ data: defaultUser });

            let data =  {
                //application: application,
                category: category,
                user: user
            }
            return NextResponse.json(data);
        
    } catch (error) {
        const errorMessage = "An error occurred while fetching listings";
        return new NextResponse(errorMessage, { status: 500 });
    }
}