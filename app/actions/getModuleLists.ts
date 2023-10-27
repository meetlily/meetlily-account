import prisma from '@/app/libs/prismadb';
import modules from '@/data/modules.json';
import mainModules from '@/data/modules/main.json';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
export async function getSession() {
	return await getServerSession(authOptions);
}
export async function getOrganizations() {
	try {
		const data = await prisma.organization.findMany({
			include: {
				Module: true
			}
		});
		return data;
	} catch (error) {
		throw error;
	}
}
export async function getFormField() {
	try {
		const data = await prisma.formfield.findMany({
			include: {
				Module: true
			}
		});
		return data;
	} catch (error) {
		throw error;
	}
}
export async function getFormFieldByModule(module: any) {
	try {
		const data = await prisma.formfield.findMany({
			where: {
				Module: module
			},
			include: {
				Module: true
			}
		});
		return data;
	} catch (error) {
		throw error;
	}
}
export async function getUsers() {
	try {
		const data = await prisma.user.findMany({
			include: {
				Accounts: true,
				Role: true,
				Organization: true,
				Module: true
			}
		});
		return data;
	} catch (error) {
		throw error;
	}
}
export async function getFormData() {
	try {
		const data = await prisma.formdata.findMany({
			include: {
				Formfield: true,
				Module: true,
				User: true
			}
		});
		return data;
	} catch (error) {
		throw error;
	}
}
export async function getFormDataByFieldId(formfieldId: string) {
	try {
		const data = await prisma.formdata.findMany({
			where: {
				formfieldId: formfieldId
			},
			include: {
				Formfield: true,
				Module: true,
				User: true
			}
		});
		return data;
	} catch (error) {
		throw error;
	}
}
export async function getModule(id: string) {
	try {
		const data = await prisma.module.findUnique({
			where: {
				id: id as string
			},
			include: {
				Organization: true,
				Category: true,
				Configuration: true,
				Formdata: true,
				Formfield: true
			}
		});
		return data;
	} catch (error) {
		throw error;
	}
}
export async function getModuleByOrganization(organization: any) {
	try {
		const data = await prisma.module.findMany({
			where: {
				Organization: organization
			},
			include: {
				Organization: true,
				Category: true,
				Configuration: true,
				Formdata: true,
				Formfield: true
			}
		});
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
export async function getDatabaseModuleLists() {
	try {
		const data = await prisma.module.findMany({
			include: {
				Organization: true,
				Category: true,
				Configuration: true,
				Formdata: true,
				Formfield: true
			}
		});
		return data;
	} catch (error) {
		throw error;
	}
}
export async function getMainModuleLists() {
	try {
		//const data = await axios.get('./data/modules.json');
		const data = mainModules;
		return data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
