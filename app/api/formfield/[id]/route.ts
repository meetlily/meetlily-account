import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
async function createTable(tableName: string) {
	await prisma.$executeRawUnsafe(`CREATE TABLE ${tableName} (id SERIAL PRIMARY KEY);`);
}

export async function GET(request: any, response: any) {
	try {
		//const client = await pool.connect();

		const currentUser = await getCurrentUser();
		const { id } = response.params;
		// Check if the user is authenticated
		if (!currentUser) {
			// User is not authenticated, return an unauthorized response
			return new NextResponse('Unauthorized', { status: 401 });
		}
		const result = await prisma.formfield.findUnique({
			where: {
				id: id
			}
		});

		return NextResponse.json(result);
	} catch (error) {
		const errorMessage = 'An error occurred while fetching data';
		//return new NextResponse(errorMessage, { status: 500 });
		return NextResponse.json({ error: errorMessage, status: 500 });
	}
}
export async function PUT(request: Request) {
	const body = await request.json();
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		// User is not authenticated, return an unauthorized response
		return new NextResponse('Unauthorized', { status: 401 });
	}
	const { fields, fieldId } = body;
	const result = await prisma.formfield.update({
		data: {
			fields,
			User: {
				connect: {
					id: currentUser.id
				}
			}
		},
		where: {
			id: fieldId
		}
	});
	return NextResponse.json(result);
}
export async function DELETE(request: Request) {
	const body = await request.json();
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		// User is not authenticated, return an unauthorized response
		return new NextResponse('Unauthorized', { status: 401 });
	}
	const { fieldId } = body;
	const result = await prisma.formfield.delete({
		where: {
			id: fieldId
		}
	});
	return NextResponse.json(result);
}
