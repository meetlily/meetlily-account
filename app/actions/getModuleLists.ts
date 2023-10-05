import modules from '@/data/modules.json';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';

export async function getSession() {
	return await getServerSession(authOptions);
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
