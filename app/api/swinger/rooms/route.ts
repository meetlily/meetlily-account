import getCurrentUser from '@/app/actions/getCurrentUser';
import { getSLSRooms } from '@/app/actions/getSLSData';

import { NextResponse } from 'next/server';

export async function GET(request: any, response: NextResponse) {
	try {
		//const currentUser = await axios.get('http://localhost/api/me');
		const currentUser = await getCurrentUser();
		// Check if the user is authenticated
		if (!currentUser) {
			// User is not authenticated, return an unauthorized response
			return new NextResponse('Unauthorized', { status: 401 });
		}
		const data = await getSLSRooms();
		if (currentUser && currentUser?.Role.length > 0) {
			// User is not authenticated, return an unauthorized response
			if (currentUser?.Role[0].name === 'Super Administrator') {
				if (!data) {
					return NextResponse.json([]);
				}
				return NextResponse.json(data);
			} else {
				return new NextResponse('Your do not have permission to view rooms', {
					status: 401
				});
			}
		}
		return new NextResponse(
			'Your account does not have role assigned. Please contact system admin.',
			{ status: 500 }
		);
	} catch (error) {
		const errorMessage = 'An error occurred while fetching sessions';
		return new NextResponse(errorMessage, { status: 500 });
	}
}
