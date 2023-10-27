import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';
import { randomUUID } from 'crypto';
import { NextResponse } from 'next/server';
async function createTable(tableName: string) {
	await prisma.$executeRawUnsafe(`CREATE TABLE ${tableName} (id SERIAL PRIMARY KEY);`);
}

export async function GET(request: any, response: any) {
	try {
		//const client = await pool.connect();

		const currentUser = await getCurrentUser();

		// Check if the user is authenticated
		if (!currentUser) {
			// User is not authenticated, return an unauthorized response
			return new NextResponse('Unauthorized', { status: 401 });
		}
		const queryParams = new URL(request.url).searchParams;
		const f: string | null = queryParams.get('fields');
		if (f) {
			const allowedFields = prisma.formfield.fields;
			return NextResponse.json(allowedFields);
		}
		const result = await prisma.formfield.findMany({
			where: {
				Organization: currentUser.Organization[0]
			}
		});

		return NextResponse.json(result);
	} catch (error) {
		const errorMessage = 'An error occurred while fetching data';
		//return new NextResponse(errorMessage, { status: 500 });
		return NextResponse.json({ error: errorMessage, status: 500 });
	}
}

export async function POST(request: Request) {
	const body = await request.json();
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		// User is not authenticated, return an unauthorized response
		return new NextResponse('Unauthorized', { status: 401 });
	}

	const ide = randomUUID();
	const b = {
		...body,
		id: ide
	};
	const { id, label, name, moduleId, fields } = b;

	if (currentUser.Organization && currentUser.Organization.length > 0) {
		const mod = await prisma.formfield.create({
			data: {
				id,
				name,
				label,
				fields,
				User: {
					connect: {
						id: currentUser.id
					}
				},
				Module: {
					connect: {
						id: moduleId
					}
				},
				Organization: {
					connect: {
						id: currentUser.Organization[0].id
					}
				}
			}
		});
		return NextResponse.json(mod);
	}
	const mod = await prisma.formfield.create({
		data: {
			id,
			name,
			label,
			fields,
			User: {
				connect: {
					id: currentUser.id
				}
			},
			Module: {
				connect: {
					id: moduleId
				}
			}
		}
	});
	return NextResponse.json(mod);
}
