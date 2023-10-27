import { default as getCurrentUser, default as getSession } from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request: any, response: any) {
	try {
		const session = await getSession();
		const currentUser = await getCurrentUser();
		// Check if the user is authenticated
		if (!session) {
			// User is not authenticated, return an unauthorized response
			return new NextResponse('Unauthorized', { status: 401 });
		}
		const { id } = response.params;

		const data = await prisma.user.findUnique({
			where: {
				id: id
			},
			include: {
				Role: true,
				Organization: true
			}
		});
		if (currentUser && currentUser?.Role.length > 0) {
			// User is not authenticated, return an unauthorized response
			if (currentUser?.Role[0].name === 'Super Administrator') {
				if (!data) {
					return NextResponse.json([]);
				}
				return NextResponse.json(data);
			} else {
				return new NextResponse('Your do not have permission to view users', {
					status: 401
				});
			}
		}
		return new NextResponse(
			'Your account does not have role assigned. Please contact system admin.',
			{ status: 500 }
		);
	} catch (error) {
		const errorMessage = 'An error occurred while fetching user';
		return new NextResponse(errorMessage, { status: 500 });
	}
}
export async function DELETE(request: any, response: any) {
	try {
		//const client = await pool.connect();

		const currentUser = await getCurrentUser();
		const { id } = response.params;
		//const body = await request.json();

		// Check if the user is authenticated
		if (!currentUser) {
			// User is not authenticated, return an unauthorized response
			return new NextResponse('Unauthorized', { status: 401 });
		}
		//const { id, slug } = body;
		const foundSupAdmin = currentUser?.Role.find((obj) => obj.name === 'Super Administrator');
		if (foundSupAdmin) {
			const result = await prisma.user.delete({
				where: {
					id: id
				}
			});
			return NextResponse.json(result);
		}
	} catch (error) {
		const errorMessage = 'An error occurred while fetching data';
		//return new NextResponse(errorMessage, { status: 500 });
		return NextResponse.json({ error: error, status: 500 });
	}
}
export async function PUT(request: any, response: any) {
	const body = await request.json();
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		// User is not authenticated, return an unauthorized response
		return new NextResponse('Unauthorized', { status: 401 });
	}
	const { id } = response.params;
	// const b = {
	// 	...body,
	// 	id: ide
	// };

	const mod = await prisma.user.update({
		where: {
			id: id
		},
		data: body
	});
	return NextResponse.json(mod);
}
