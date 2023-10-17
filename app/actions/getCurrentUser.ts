import { getServerSession } from 'next-auth';

import { authOptions } from '@/pages/api/auth/[...nextauth]';

import prisma from '@/app/libs/prismadb';
import rolesData from '@/data/roles.json';
import { randomUUID } from 'crypto';

export async function getSession() {
	return await getServerSession(authOptions);
}

export async function getAccountsByUserId(id: string) {
	try {
		const data = await prisma.account.findMany({
			where: {
				userId: id as string
			}
		});
		return data;
	} catch (error) {
		throw error;
	}
}
export async function getUserProfileByUserId(id: string) {
	try {
		const data = await prisma.user.findMany({
			where: {
				id: id as string
			}
		});

		return data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
export default async function getCurrentUser() {
	try {
		const session = await getSession();
		let roles: any = rolesData;
		if (!session) {
			return null;
		}

		const currentUser = await prisma.user.findUnique({
			where: {
				email: session?.user?.email as string
			},
			include: {
				Role: true, // Include the roles of the user,
				Organization: true, // Include the Organization of the user
				Module: true, // Include the Organization of the user
				Accounts: true, // Include the Accounts of the user
				Formfield: true, // Include the Formfields of the user
				Default: true // Include the Default of the user
			}
		});

		if (!currentUser) {
			return null;
		}

		const getOrg = await prisma.organization.findMany();

		if (currentUser?.Role?.length === 0) {
			if (currentUser.email === process.env.ORGANIZATION_EMAIL) {
				const getRole = await prisma.role.findUnique({
					where: {
						name: 'Super Administrator'
					}
				});
				if (getRole) {
					const updatedUser = await prisma.user.update({
						where: { id: currentUser.id },
						data: {
							Role: {
								connect: getRole
							}
						},
						include: {
							Organization: true,
							Role: true,
							Accounts: true,
							Module: true,
							Formfield: true, // Include the Formfields of the user
							Default: true // Include the Default of the user
						}
					});
					return {
						...currentUser,
						updatedUser,
						createdAt: currentUser.createdAt.toISOString(),
						updatedAt: currentUser.updatedAt.toISOString(),
						emailVerified: currentUser.emailVerified?.toISOString() || null
					};
				}
			} else {
				const getRole = await prisma.role.findUnique({
					where: {
						name: 'Authenticated'
					}
				});

				if (getRole) {
					const updatedUser = await prisma.user.update({
						where: { id: currentUser.id },
						data: {
							Role: {
								connect: getRole
							}
						},
						include: {
							Organization: true,
							Role: true,
							Accounts: true,
							Module: true,
							Formfield: true, // Include the Formfields of the user
							Default: true // Include the Default of the user
						}
					});
					return {
						...currentUser,
						updatedUser,
						createdAt: currentUser?.createdAt.toISOString(),
						updatedAt: currentUser?.updatedAt.toISOString(),
						emailVerified: currentUser?.emailVerified?.toISOString() || null
					};
				}
			}
		}

		if (getOrg.length === 0) {
			await prisma.organization.create({
				data: {
					slug: 'meetlily',
					name: 'Meetlily Advertising',
					User: {
						connect: {
							id: currentUser.id
						}
					}
				}
			});
		} else if (currentUser.Organization.length === 0) {
			const getCOrg = await prisma.organization.findUnique({
				where: {
					slug: 'meetlily'
				}
			});
			if (getCOrg) {
				const updatedUser = await prisma.user.update({
					where: { id: currentUser.id },
					data: {
						Organization: {
							connect: {
								id: getCOrg.id
							}
						}
					},
					include: {
						Organization: true,
						Role: true,
						Accounts: true,
						Module: true,
						Formfield: true, // Include the Formfields of the user
						Default: true // Include the Default of the user
					}
				});
				return {
					...currentUser,
					updatedUser,
					createdAt: currentUser?.createdAt.toISOString(),
					updatedAt: currentUser?.updatedAt.toISOString(),
					emailVerified: currentUser?.emailVerified?.toISOString() || null
				};
			}
		}

		if (!currentUser.defaultId) {
			const createDef = await prisma.default.create({
				data: {
					id: randomUUID(),
					data: {
						organizationId: currentUser.Organization[0].id,
						roleId: currentUser.Role[0].id
					},
					User: {
						connect: {
							id: currentUser.id
						}
					}
				}
			});
			if (createDef) {
				console.log(createDef);
			}
		}

		//console.log(currentUser, 'currentUser');
		// if (currentUser && currentUser.Role.length > 0) {
		// 	currentUser.Role.map((role, i) => {
		// 		const noSpaceRole = role.name.replace(/\s/g, '');

		// 		if (roles[noSpaceRole]) {
		// 			newRole[noSpaceRole] = roles[noSpaceRole].permissions;
		// 			return newRole[noSpaceRole];
		// 		}
		// 	});
		// }
		// if (Object.keys(newRole).length > 0) {
		// 	const currentRoleUser = {
		// 		...currentUser
		// 	};
		// 	return {
		// 		...currentRoleUser,
		// 		createdAt: currentUser.createdAt.toISOString(),
		// 		updatedAt: currentUser.updatedAt.toISOString(),
		// 		emailVerified: currentUser.emailVerified?.toISOString() || null
		// 	};
		// }

		return {
			...currentUser,
			createdAt: currentUser?.createdAt.toISOString(),
			updatedAt: currentUser?.updatedAt.toISOString(),
			emailVerified: currentUser?.emailVerified?.toISOString() || null
		};
	} catch (error: any) {
		return null;
	}
}
