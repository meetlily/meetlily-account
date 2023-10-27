import getCurrentUser, { getSession } from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

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

		const modules = await prisma.module.create({
			data: body
		});

		return NextResponse.json(modules);
	} catch (error) {
		const errorMessage = 'An error occurred while fetching your account';
		return new NextResponse(errorMessage, { status: 500 });
	}
}

export async function GET(request: any) {
	try {
		const currentUser = await getCurrentUser();
		const session = await getSession();
		// Check if the user is authenticated
		if (!currentUser) {
			// User is not authenticated, return an unauthorized response
			return new NextResponse('Unauthorized', { status: 401 });
		}
		const fields = prisma.module.fields;
		const keys = Object.keys(prisma.module.fields);
		const modules = await prisma.module.findMany({
			include: {
				Organization: true,
				Category: true
			}
		});

		if (currentUser && currentUser?.Role.length > 0) {
			// User is not authenticated, return an unauthorized response
			if (currentUser?.Role[0].name === 'Super Administrator') {
				if (!modules) {
					return NextResponse.json([]);
				}
				const data = {
					module: modules,
					fields,
					keys
					//fieldKeys: Object.keys(fields)
				};
				return NextResponse.json(data);
			} else {
				return new NextResponse('Your do not have permission to view modules', {
					status: 401
				});
			}
		}
		return new NextResponse(
			'Your account does not have role assigned. Please contact system admin.',
			{ status: 500 }
		);
	} catch (error) {
		const errorMessage = 'An error occurred while fetching your account';
		return new NextResponse(errorMessage, { status: 500 });
	}
}
