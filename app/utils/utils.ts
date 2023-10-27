//import { clsx, type ClassValue } from 'clsx';
import { customAlphabet } from 'nanoid';
//import { NextApiRequest, NextApiResponse } from 'next';

export const nanoid = customAlphabet(
	'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
	7
); // 7-character random string

export async function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
	const res = await fetch(input, init);

	if (!res.ok) {
		const json = await res.json();
		if (json.error) {
			const error = new Error(json.error) as Error & {
				status: number;
			};
			error.status = res.status;
			throw error;
		} else {
			throw new Error('An unexpected error occurred');
		}
	}

	return res.json();
}

export function formatDate(input: string | number | Date): string {
	const date = new Date(input);
	return date.toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
}

// export function writeJsonToFile(jsonData: any, path: string): string {
// 	fs.writeFileSync(path, JSON.stringify(jsonData, null, 2));
// 	return jsonData;
// }
// export function readJsonFile(path: fs.PathOrFileDescriptor | undefined) {
// 	let jsonData;
// 	if (path) {
// 		jsonData = JSON.parse(fs.readFileSync(path, 'utf-8'));
// 	}
// 	return jsonData;
// }
interface SidebarItem {
	name: string;
	group: string;
}

export function sidebarAddItems(sidebarData: any, administrationData: any) {
	const sidebar: SidebarItem[] = sidebarData;

	sidebarData.map((g: any) => {
		const items = administrationData[g.group];

		if (items) {
			let newItems: any[] = [];
			g.items.map((item: string) => {
				if (item) {
					const newItem = items.find((i: { name: string }) => i.name === item);
					if (newItem) {
						newItems.push(newItem);
						return newItem;
					}
				}
			});
			g.items = newItems;
			return g.items;
		}
		//return g;
	});
	return sidebarData;
}

export function capitalizeFirstLetter(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
export function sluggify(str: string): string {
	if (str) {
		return str.toLowerCase().replace(/ /g, '-');
	}
	return str;
}
// export async function isAdmin(user: SafeUser): Promise<boolean> {
// 	const foundSupAdmin = user?.Role.find((obj) => obj.name === 'Super Administrator');
// 	return str.charAt(0).toUpperCase() + str.slice(1);
// }
export function generateRandomString(length: number): string {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		result += characters.charAt(randomIndex);
	}

	return result;
}
