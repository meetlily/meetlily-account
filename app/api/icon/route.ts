import prisma from "@/app/libs/prismadb"
import { IconType } from "react-icons";
import { FiHeart, FiStar, FiCircle } from "react-icons/fi";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineFileDone, AiOutlineWindows } from "react-icons/ai";
import { BsDiagram3Fill } from "react-icons/bs";
import { FaPeopleLine } from "react-icons/fa6";
import { BiDollar } from "react-icons/bi";
import { TbPhotoPlus } from "react-icons/tb";
import getSession from '@/app/actions/getCurrentUser'
import { NextRequest,NextResponse } from "next/server";


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
  request: NextRequest,
  response: NextResponse
) {
  try {
    console.log(response)
      const session = await getSession(); 
      
      // Check if the user is authenticated
      if (!session) {
          // User is not authenticated, return an unauthorized response
          return new NextResponse("Unauthorized", { status: 401 });
      }
      const { headers } = request;
      console.log(headers)
      if (typeof name === "string" && name in icons) {
        const IconComponent = icons[name];
        return NextResponse.json({ icon: IconComponent });
      } else {
        return new NextResponse("Invalid icon name", { status: 400 });
      }
  } catch (error) {
      const errorMessage = "An error occurred while fetching icon";
      return new NextResponse(errorMessage, { status: 500 });
  }
}
