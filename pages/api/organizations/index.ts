import { getServerSession } from 'next-auth';

import { authOptions } from '@/pages/api/auth/[...nextauth]';

import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';
import { randomUUID } from 'crypto';
import { NextApiRequest, NextApiResponse } from 'next';

export async function getSession() {
	return await getServerSession(authOptions);
}
export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		try {
			const currentUser = await getCurrentUser();
			const session = await getSession();
			// Check if the user is authenticated
			if (!currentUser) {
				// User is not authenticated, return an unauthorized response
				return res.status(401).json({ error: 'Unauthorized' });
			}
			let organization;
			const body = await req.body;
			if (!body.id) {
				body.id = randomUUID();
			}
			console.log(body);
			organization = await prisma.organization.create({
				data: body
			});

			res.status(200).json(organization);
		} catch (error) {
			const errorMessage = 'An error occurred while fetching your account';
			res.status(500).json({ error: errorMessage });
		}
	} else if (req.method === 'GET') {
		try {
			const session = await getSession();
			const currentUser = await getCurrentUser();
			console.log(currentUser, 'currentUser');
			// Check if the user is authenticated
			if (!session) {
				// User is not authenticated, return an unauthorized response
				return res.status(401).json({ error: 'Unauthorized' });
			}
			const fields = prisma.organization.fields;
			const keys = Object.keys(prisma.organization.fields);
			const organization = await prisma.organization.findMany({
				include: {
					Module: true
				}
			});

			if (currentUser && currentUser?.Role.length > 0) {
				// User is not authenticated, return an unauthorized response
				if (currentUser?.Role[0].name === 'Super Administrator') {
					if (!organization) {
						res.status(400).json({ error: 'Missing Organization' });
					}
					const data = {
						organization,
						fields,
						keys
						//fieldKeys: Object.keys(fields)
					};
					res.status(200).json(data);
				} else {
					res.status(401).json({ error: 'Your do not have permission to view users' });
				}
			}
			res
				.status(500)
				.json({ error: 'Your account does not have role assigned. Please contact system admin.' });
		} catch {
			res
				.status(500)
				.json({ error: 'Your account does not have role assigned. Please contact system admin.' });
		}
	} else if (req.method === 'PUT') {
		const body = await req.body;
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			// User is not authenticated, return an unauthorized response
			return res.status(401).json({ error: 'Unauthorized' });
		}
		const { id, name, slug, description, logo, industry } = body;
		const data = await prisma.organization.update({
			where: {
				id: id
			},
			data: body
		});
		res.status(200).json(data);
	} else if (req.method === 'DELETE') {
		const body = await req.body;
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			// User is not authenticated, return an unauthorized response
			return res.status(401).json({ error: 'Unauthorized' });
		}
		const { id, name, slug, description, logo, industry } = body;
		const foundSupAdmin = currentUser?.Role.find((obj) => obj.name === 'Super Administrator');
		if (foundSupAdmin) {
			const data = await prisma.organization.delete({
				where: {
					id: id
				}
			});
			res.status(200).json(data);
		}

		res.status(400).json({ error: 'Your do not have permission to delete organization' });
	} else {
		res.status(405).json({ error: 'Method not allowed' });
	}
};
