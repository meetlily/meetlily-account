import { getServerSession, DefaultUser } from "next-auth";

import { authOptions } from "@/pages/api/auth/[...nextauth]";

import prisma from "@/app/libs/prismadb";
import { OrganizationType, SafeUser, VariableType } from "../types";

export async function getSession() {
    return await getServerSession(authOptions);
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
      const data = await prisma.user.findMany({
        where: {
          id: id  as string,
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
        if (!session ) {
          return null
        }
        const currentUser = await prisma.user.findUnique({
            where: {
                email: session?.user?.email as string,
            },
            include: {
              Role: true, // Include the roles of the user,
              Organization: true, // Include the Organization of the user
              Module: true, // Include the Organization of the user
            },
        })
        if(!currentUser){
          return null;
        }

  

        if (currentUser?.Role?.length === 0 ) {
          
          if(currentUser.email === 'edvillan15@gmail.com' || currentUser.email === 'evillanueva@meetlily.org'){
            const updatedUser = await prisma.user.update({
                where: { id: currentUser.id },
                data: {
                    Role: {
                        connect: {
                          name: "Super Administrator",
                        },
                    },
                },
            });
            if(updatedUser){
              await prisma.role.create({
                  data: {
                      name: "Super Administrator" as string,
                      User: {
                        connect: {
                          id: currentUser.id
                        }
                      }
                  },
              })
            }
            return {
                ...currentUser,
                createdAt: currentUser.createdAt.toISOString(),
                updatedAt: currentUser.updatedAt.toISOString(),
                emailVerified: currentUser.emailVerified?.toISOString() || null,
            };
          } else {
            await prisma.user.update({
                where: { id: currentUser.id },
                data: {
                    Role: {
                        connect: {
                          name: "Authenticated",
                        },
                    },
                },
            });
          }
        } 
        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString(),
            emailVerified: currentUser.emailVerified?.toISOString() || null,
        };
    } catch (error: any) {
        return null;
    }
}