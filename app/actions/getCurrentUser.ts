import { getServerSession } from "next-auth";

import { authOptions } from "@/pages/api/auth/[...nextauth]";

import prisma from "@/app/libs/prismadb";
import { SafeUser } from "../types";

export async function getSession() {
    return await getServerSession(authOptions);
}
export async function getAppsByUserId(id: string, cUser: SafeUser) {
    try {
      const userApp = await prisma.userApp.findMany({
        where: {
          userId: id as string,
        },
      });
      const newcUser = {
        ...cUser,
        userApp
      }
      return newcUser;
    } catch (error) {
      console.error(error);
      throw error;
    } 
}
export async function getAccountsByUserId(id: string) {
    try {
      const data = await prisma.account.findMany({
        where: {
          userId: id as string,
        },
      });
      
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    } 
}
export async function getUserProfileByUserId(id: string) {
    try {
      const data = await prisma.userProfile.findMany({
        where: {
          userId: id  as string,
        },
      });
     
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    } 
}
export default async function getCurrentUser() {
    try {
        const session = await getSession();
        console.log(session)
        if (!session ) {
          return null
        }


        const currentUser = await prisma.user.findUnique({
            where: {
                email: session?.user?.email as string
            }
        })
        if (!currentUser) {
          return null
        }

        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString(),
            emailVerified: currentUser.emailVerified?.toISOString() || null,
        };
    } catch (error: any) {
        return null
    }
}