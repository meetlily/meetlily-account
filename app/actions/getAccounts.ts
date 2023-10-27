import prisma from '@/app/libs/prismadb';

export async function getAccounts() {
	try {
		const data = await prisma.account.findMany();
		return data;
	} catch (error) {
		throw error;
	}
}
