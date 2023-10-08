import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';
import { capitalizeFirstLetter } from '@/app/utils/utils';
import { NextResponse } from 'next/server';
async function createTable(tableName: string) {
	await prisma.$executeRawUnsafe(`CREATE TABLE ${tableName} (id SERIAL PRIMARY KEY);`);
}

export async function GET(request: any, response: any) {
	try {
		//const client = await pool.connect();

		const currentUser = await getCurrentUser();
		const { slug } = response.params;
		let u = capitalizeFirstLetter(slug);
		// Check if the user is authenticated
		if (!currentUser) {
			// User is not authenticated, return an unauthorized response
			return new NextResponse('Unauthorized', { status: 401 });
		}
		const result = await prisma.$queryRawUnsafe(`
            SELECT * FROM "${u}"
        `);

		return NextResponse.json(result);
	} catch (error) {
		const errorMessage = 'An error occurred while fetching data';
		//return new NextResponse(errorMessage, { status: 500 });
		return NextResponse.json({ error: errorMessage, status: 500 });
	}
}
