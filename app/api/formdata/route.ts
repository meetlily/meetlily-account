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
			const allowedFields = prisma.formdata.fields;
			return NextResponse.json(allowedFields);
		}
		const result = await prisma.formdata.findMany();

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

		const { id, moduleId, formfieldId, organizationId, data } = c;
		const mod = await prisma.formdata.create({
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

	const { id, moduleId, formfieldId, organizationId, data } = b;
	const mod = await prisma.formdata.create({
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
