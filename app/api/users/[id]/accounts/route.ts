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
		const data = await prisma.account.findMany();
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
		const errorMessage = 'An error occurred while fetching users';
		return new NextResponse(errorMessage, { status: 500 });
	}
}
