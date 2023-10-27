import getSession from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	try {
		const session = await getSession();
		const body = await request.json();
		// Check if the user is authenticated
		if (!session) {
			// User is not authenticated, return an unauthorized response
			return new NextResponse('Unauthorized', { status: 401 });
		}
		const queryParams = new URL(request.url).searchParams;
		const f: string | null = queryParams.get('fields');
		if (f) {
			const allowedFields = prisma.role.fields;
			return NextResponse.json(allowedFields);
		}
		if (typeof body === 'object') {
			const role = await prisma.role.create({ data: body });
			return NextResponse.json(role);
		} else {
			const role = await prisma.role.createMany({ data: body });
			return NextResponse.json(role);
		}
	} catch (error) {
		const errorMessage = 'An error occurred while fetching listings';
		return new NextResponse(errorMessage, { status: 500 });
	}
}

export async function GET(request: any) {
	try {
		const session = await getSession();

		// Check if the user is authenticated
		if (!session) {
			// User is not authenticated, return an unauthorized response
			return new NextResponse('Unauthorized', { status: 401 });
		}

		const role = await prisma.role.findMany({
			include: {
				User: true,
				Organization: true
			}
		});

		return NextResponse.json(role);
	} catch (error) {
		const errorMessage = 'An error occurred while fetching listings';
		return new NextResponse(errorMessage, { status: 500 });
	}
}
