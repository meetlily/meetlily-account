import getCurrentUser, { getSession } from '@/app/actions/getCurrentUser';
import { getRapidApi } from '@/app/actions/rapidApi';
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: any) {
	try {
		const currentUser = await getCurrentUser();
		const session = await getSession();
		// Check if the user is authenticated
		if (!session) {
			// User is not authenticated, return an unauthorized response
			return new NextResponse('Unauthorized', { status: 401 });
		}

		let modules;
		const body = await request.body;

		if (body && body.length > 0) {
			modules = await prisma.module.createMany({
				data: body
			});
		} else if (body && typeof body === 'object') {
			modules = await prisma.module.create({
				data: body
			});
		} else {
			return new NextResponse('Missing Body fields', { status: 500 });
		}

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

		const queryParams = new URL(request.url).searchParams;
		const params: string | null = queryParams.get('params');
		const rapid = await getRapidApi(queryParams, 'quality-porn.p.rapidapi.com');
		if (rapid) {
			return NextResponse.json(rapid.data);
		}

		// const modules = await prisma.module.findMany({
		// 	where: {
		// 		organizationId: currentUser.Organization[0].id
		// 	}
		// });
		// return NextResponse.json(modules);
	} catch (error) {
		const errorMessage = 'An error occurred while fetching your account';
		return new NextResponse(errorMessage, { status: 500 });
	}
}
