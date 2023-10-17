import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';
import { capitalizeFirstLetter } from '@/app/utils/utils';
import { randomUUID } from 'crypto';
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
		const result = await prisma.configuration.findMany();

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
		id: ide,
		data: {
			...body.data,
			id: ide
		}
	};

	if (currentUser.Organization && currentUser.Organization.length > 0) {
		const c = {
			...b,
			organizationId: currentUser.Organization[0].id
		};

		const { id, name, moduleId, organizationId, data } = c;
		const mod = await prisma.configuration.create({
			data: {
				id,
				name,
				data,
				organizationId,
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

	const { id, name, moduleId, organizationId, data } = b;
	const mod = await prisma.configuration.create({
		data: {
			id,
			name,
			data,
			organizationId,
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
export async function PUT(request: Request) {
	const body = await request.json();
	console.log(body, 'api PUT');
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		// User is not authenticated, return an unauthorized response
		return new NextResponse('Unauthorized', { status: 401 });
	}

	const b = {
		...body,
		data: {
			...body.data,
			id: body.id
		}
	};

	if (currentUser.Organization && currentUser.Organization.length > 0) {
		const c = {
			...b,
			organizationId: currentUser.Organization[0].id
		};
		const { id, moduleId, formfieldId, organizationId, data } = c;
		const mod = await prisma.formdata.update({
			where: {
				id: id
			},
			data: {
				id,
				data,
				Formfield: {
					connect: {
						id: formfieldId
					}
				},
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
						id: organizationId
					}
				}
			}
		});
		return NextResponse.json(mod);
	}

	const { id, moduleId, formfieldId, data } = b;
	const mod = await prisma.formdata.update({
		where: {
			id: id
		},
		data: {
			id,
			data,
			Formfield: {
				connect: {
					id: formfieldId
				}
			},
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
export async function DELETE(request: Request) {
	try {
		//const client = await pool.connect();

		const currentUser = await getCurrentUser();
		//const { id } = response.params;
		const body = await request.json();
		console.log(body);
		// Check if the user is authenticated
		if (!currentUser) {
			// User is not authenticated, return an unauthorized response
			return new NextResponse('Unauthorized', { status: 401 });
		}
		const { id, slug } = body;

		const result = await prisma.formdata.delete({
			where: {
				id: id
			}
		});
		return NextResponse.json(result);
	} catch (error) {
		const errorMessage = 'An error occurred while fetching data';
		//return new NextResponse(errorMessage, { status: 500 });
		return NextResponse.json({ error: error, status: 500 });
	}
}
