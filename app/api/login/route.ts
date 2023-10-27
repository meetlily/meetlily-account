import { getSession } from '@/app/actions/getCurrentUser';
import { parse, serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

import { NextResponse } from 'next/server';

interface CookieOptions {
	maxAge?: number;
	expires?: Date;
	path?: string;
	domain?: string;
	secure?: boolean;
	sameSite?: 'strict' | 'lax' | 'none';
}

function setCookie(
	res: NextApiResponse,
	name: string,
	value: string | object,
	options: CookieOptions = {}
) {
	const stringValue = typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value);

	if (options.maxAge !== undefined) {
		options.expires = new Date(Date.now() + options.maxAge);
		options.maxAge /= 1000;
	}

	res.setHeader('Set-Cookie', serialize(name, String(stringValue), options));
}

function parseCookies(req: NextApiRequest) {
	if (!req.headers.cookie) {
		return {};
	}

	return parse(req.headers.cookie);
}

export async function POST(req: Request, res: NextApiResponse) {
	try {
		const session = await getSession();

		const user = await req.body;
		// Check if the user is authenticated
		// if (!session) {
		//     // User is not authenticated, return an unauthorized response
		//     return new NextResponse("Unauthorized", { status: 401 });
		// }
		setCookie(
			res,
			'session',
			{ user },
			{
				maxAge: 30 * 24 * 60 * 60, // 30 days
				path: '/',
				domain: '.meetlily.net', // Replace with your domain
				secure: process.env.NODE_ENV === 'production',
				sameSite: 'none'
			}
		);
		return NextResponse.json(user);
	} catch (error) {
		const errorMessage = 'An error occurred while fetching listings';
		return new NextResponse(errorMessage, { status: 500 });
	}
}
