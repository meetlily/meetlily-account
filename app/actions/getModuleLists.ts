import prisma from '@/app/libs/prismadb';
import modules from '@/data/modules.json';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
export async function getSession() {
	return await getServerSession(authOptions);
}
export async function getFormField() {
	try {
		const data = await prisma.formfield.findMany();
		return data;
	} catch (error) {
		throw error;
	}
}
export async function getFormData() {
	try {
		const data = await prisma.formdata.findMany();
		return data;
	} catch (error) {
		throw error;
	}
}
export async function getModule() {
	try {
		const data = await prisma.module.findMany();
		return data;
	} catch (error) {
		throw error;
	}
}
export async function getModuleLists() {
	try {
		//const data = await axios.get('./data/modules.json');
		const data = modules.data;
		return data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
