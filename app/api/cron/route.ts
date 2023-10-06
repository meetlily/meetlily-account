import { getSession } from '@/app/actions/getCurrentUser';
import runAs from '@/app/libs/runAs';
import { NextResponse } from 'next/server';
// Create a child process to run the command

// Create variables to store stdout and stderr

export async function POST(req: Request, res: any) {
	try {
		const session = await getSession();
		const requestData = await req.json();
		const output = await runAs(requestData.command);
		return NextResponse.json({ message: output });
	} catch (error) {
		const errorMessage = 'An error occurred while fetching listings';
		return new NextResponse(errorMessage, { status: 500 });
	}
}
