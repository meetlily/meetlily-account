import getCurrentUser from '@/app/actions/getCurrentUser';
import fs, { promises as fsPromises } from 'fs';
import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

export async function POST(req: any, res: any) {
	const { content } = req.body;

	try {
		const directoryPath = process.cwd(); // Get the current working directory
		// Replace 'path/to/your/file.txt' with the actual path to the file where you want to save the content.
		const filePath = `${directoryPath}/app/newFile.ts`;

		// Write the content to the file.
		await writeFile(filePath, content);

		res.status(200).json({ success: true });
	} catch (error) {
		console.error('Error saving file:', error);
		res.status(500).json({ success: false, error: 'File could not be saved.' });
	}
}
export async function GET(request: any, response: any) {
	try {
		//const client = await pool.connect();

		const currentUser = await getCurrentUser();
		const queryParams = new URL(request.url).searchParams;
		const pathF: string | null = queryParams.get('path');

		// Check if the user is authenticated
		if (!currentUser) {
			// User is not authenticated, return an unauthorized response
			return new NextResponse('Unauthorized', { status: 401 });
		}
		if (pathF) {
			const fileContent = await fsPromises.readFile(pathF, 'utf-8');

			return NextResponse.json({ content: fileContent });
		}
		const directoryPath = process.cwd(); // Get the current working directory

		// Function to recursively get the file tree of a directory
		const getFileTree = (dir: string) => {
			const files = fs.readdirSync(dir);
			const tree: any[] = [];

			files.forEach((file) => {
				const filePath = path.join(dir, file);
				const isDirectory = fs.statSync(filePath).isDirectory();

				tree.push({
					name: file,
					isDirectory,
					path: filePath,
					children: isDirectory ? getFileTree(filePath) : []
				});
			});

			return tree;
		};

		const fileTree = getFileTree(`${directoryPath}`);

		return NextResponse.json(fileTree);
	} catch (error) {
		const errorMessage = 'An error occurred while fetching data';
		//return new NextResponse(errorMessage, { status: 500 });
		return NextResponse.json({ error: errorMessage, status: 500 });
	}
}
