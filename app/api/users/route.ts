import { default as getCurrentUser, default as getSession } from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request: any) {
	try {
		const session = await getSession();
		const currentUser = await getCurrentUser();

		// Check if the user is authenticated
		if (!session) {
			// User is not authenticated, return an unauthorized response
			return new NextResponse('Unauthorized', { status: 401 });
		}
		//const queryParams = new URL(request.url).searchParams;
		//const f: string | null = queryParams.get('fields');

		const fields = prisma.user.fields;
		const keys = Object.keys(prisma.user.fields);
		const users = await prisma.user.findMany({
			include: {
				Accounts: true,
				Organization: true,
				Role: true,
				Module: true
			}
		});

		if (currentUser && currentUser?.Role.length > 0) {
			// User is not authenticated, return an unauthorized response
			if (currentUser?.Role[0].name === 'Super Administrator') {
				if (!users) {
					return NextResponse.json([]);
				}
				const data = {
					users,
					fields,
					keys
				};
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
		const errorMessage = 'An error occurred while fetching users';
		return new NextResponse(errorMessage, { status: 500 });
	}
}
export async function POST(req: any, res: NextResponse) {
	try {
		const currentUser = await getCurrentUser();
		const session = await getSession();
		// Check if the user is authenticated
		if (!session) {
			// User is not authenticated, return an unauthorized response
			return new NextResponse('Unauthorized', { status: 401 });
		}

		const body = await req.json();

		const users = await prisma.user.create({
			data: body
		});

		return NextResponse.json(users);
	} catch (error) {
		const errorMessage = 'An error occurred while fetching your account';
		return new NextResponse(errorMessage, { status: 500 });
	}
}
