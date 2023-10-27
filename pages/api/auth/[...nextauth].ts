import { creteEmailTemplate, sendEmail } from '@/app/libs/mailer';
import prisma from '@/app/libs/prismadb';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import bcrypt from 'bcrypt';
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import LinkedInProvider from 'next-auth/providers/linkedin';

export const authOptions: AuthOptions = {
	callbacks: {
		signIn: async ({ user, account, profile }) => {
			let isAllowedToSignIn = true;
			// let userData;
			// if(user.email){
			//     const role = await prisma.role.findUnique({
			//         where: {
			//           name: "Authenticated",
			//         },
			//         include: {
			//             User: true
			//         }
			//     });

			//     console.log(role)
			//     isAllowedToSignIn = true;
			//     userData = await prisma.user.findUnique({
			//         where: {
			//             email: user.email
			//         }
			//     })
			// }

			// if(user.email){
			//     userData = await prisma.user.findUnique({
			//         where: {
			//             email: user.email
			//         }
			//     })

			//     if(!userData){
			//         const createUser = await prisma.user.create({
			//             data: {
			//                 name: user?.name,
			//                 email: user?.email,
			//                 image: user?.image
			//             }
			//         })

			//         if(createUser){
			//             userData = await prisma.user.findUnique({
			//                 where: {
			//                     id: createUser.id
			//                 }
			//             })
			//             if(userData?.id){
			//                 const newAccount: any = {
			//                     ...account,
			//                     userId: userData?.id
			//                 }
			//                 await prisma.account.create({
			//                     data: newAccount
			//                 })
			//                 const sendEmail = await axios.post('/api/email/send',{
			//                     subject: "Meetlily Sign Up",
			//                     email: userData.email,
			//                     name: user?.name
			//                 })
			//                 console.log(sendEmail);
			//                 isAllowedToSignIn = true;
			//             }

			//         }
			//     }
			//     isAllowedToSignIn = true;
			// }

			// your logic here
			if (isAllowedToSignIn) {
				return Promise.resolve(true);
			} else {
				// Return false to display a default error message
				return Promise.resolve(false);
			}
		},
		// redirect: async ({ url, baseUrl }) => {
		// 	return url.startsWith(baseUrl) ? Promise.resolve(url) : Promise.resolve(baseUrl);
		// },
		session: async ({ session, user }) => {
			if (session) {
				// const userData = await prisma.user.findUnique({
				//     where: {
				//         email: session.user?.email
				//     },
				//     include: {
				//         Role: true,
				//         Organization: true,
				//         Module: true
				//     }
				// })
				// if(userData?.Role.length === 0){
				//     const updatedUser = await prisma.user.update({
				//         where: { id: userData.id },
				//         data: {
				//             Role: {
				//                 connect: {
				//                   name: "Authenticated",
				//                 },
				//             },
				//         },
				//     });
				// }
			}

			return Promise.resolve(session);
		},
		jwt: async ({ token, user, account, profile, isNewUser }) => {
			if (isNewUser) {
				const eTemplate = await creteEmailTemplate(user.email, 'signUp');
				// Send the email after sign up
				await sendEmail(user.email, 'Welcome to Meetlily!', eTemplate);
			}
			return Promise.resolve(token);
		}
	},
	adapter: PrismaAdapter(prisma),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
		}),
		LinkedInProvider({
			clientId: process.env.LINKEDIN_CLIENT_ID as string,
			clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string
		}),
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: { label: 'email', type: 'text' },
				password: { label: 'password', type: 'password' }
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					throw new Error('Invalid credentials');
				}

				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email
					},
					include: {
						Role: false, // Include the roles of the user,
						Organization: false, // Include the Organization of the user
						Module: false // Include the Organization of the user
					}
				});

				if (!user || !user?.hashedPassword) {
					throw new Error('Invalid credentials');
				}
				const isCorrectPassword = await bcrypt.compare(credentials.password, user.hashedPassword);
				if (!isCorrectPassword) {
					throw new Error('Invalid credentials');
				}
				return user;
			}
		})
	],
	pages: {
		signIn: '/sign-in'
	},
	session: {
		strategy: 'jwt'
	},
	secret: process.env.NEXTAUTH_SECRET
};

export default NextAuth(authOptions);

//export { GET,POST }  from '@/auth';

//export const runtime = 'edge'
