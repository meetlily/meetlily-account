import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";
import modules from "@/data/modules.json";
import axios from "axios";

export async function getSession() {
    return await getServerSession(authOptions);
}

export async function getModuleLists() {
    try {
      //const data = await axios.get('./data/modules.json');
      const data = modules.data;
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    } 
}
