
import { IconType } from "react-icons";
import { FiHeart, FiStar, FiCircle } from "react-icons/fi";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineFileDone, AiOutlineWindows } from "react-icons/ai";
import { BsDiagram3Fill } from "react-icons/bs";
import { FaPeopleLine } from "react-icons/fa6";
import { BiDollar } from "react-icons/bi";
import { TbPhotoPlus } from "react-icons/tb";
import getSession from '@/app/actions/getCurrentUser'
import { NextResponse } from "next/server";
import AppIcons from "@/app/components/icons/AppIcons";



const icons: { [key: string]: IconType } = {
  heart: FiHeart,
  star: FiStar,
  circle: FiCircle,
  check: AiOutlineCheckCircle,
  close: AiOutlineCloseCircle,
  flow: BsDiagram3Fill,
  crm: FaPeopleLine,
  apps: AiOutlineWindows,
  project: AiOutlineFileDone,
  dollar: BiDollar,
  image: TbPhotoPlus,
};
export async function GET(
    request: any,
    response: any
) {
  try {
        console.log(response, request)
        const session = await getSession(); 
        
        // Check if the user is authenticated
        if (!session) {
            
            // User is not authenticated, return an unauthorized response
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const { name } = response.params;
        if (typeof name === "string") {
            const IconComponent = AppIcons[name];
            return NextResponse.json({icon:<IconComponent />, iconName: name});
        } else {
            return new NextResponse("Invalid icon name", { status: 400 });
        }
  } catch (error) {
        const errorMessage = "An error occurred while fetching icon";
        return new NextResponse(errorMessage, { status: 500 });
  }
}
