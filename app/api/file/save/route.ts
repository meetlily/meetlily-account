import getCurrentUser from '@/app/actions/getCurrentUser';
import fs, { promises as fsPromises } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

export async function POST(req: Request, res: any) {
	try {
		console.log(req.body, 'req.body');
		const coded = req.body;

		if (!coded) {
			return new NextResponse('Unauthorized', { status: 400 });
		}
		const code: any = coded;
		//const writeStream = fs.createWriteStream('saved-code.ts');

		// Use the pipeline function to pipe the ReadableStream to the file stream

		fs.writeFile('newFile.ts', code, (data) => {
			console.log(data, 'writeFile');
		});

		// Create a writable stream to save the code to a file
		//const fileStream = fs.createWriteStream('saved-code.ts');

		// Pipe the ReadableStream (code) to the fileStream
		// pump(code, fileStream, (error: any) => {
		// 	if (error) {
		// 		console.error('Error saving code:', error);
		// 		return NextResponse.json({ error: 'An error occurred while saving the code', status: 500 });
		// 	} else {
		// 		return NextResponse.json({ success: true });
		// 	}
		// });
	} catch (error) {
		console.error('Error saving code:', error);
		return NextResponse.json({ error: 'An error occurred while saving the code', status: 500 });
	}
	// try {
	// 	const { content } = req.body;
	// 	const currentUser = await getCurrentUser();
	// 	console.log(currentUser, 'currentUser');
	// 	// Check if the user is authenticated
	// 	if (!currentUser) {
	// 		// User is not authenticated, return an unauthorized response
	// 		return new NextResponse('Unauthorized', { status: 401 });
	// 	}
	// 	console.log(req.body);
	// 	const directoryPath = process.cwd(); // Get the current working directory
	// 	// Replace 'path/to/your/file.txt' with the actual path to the file where you want to save the content.
	// 	const filePath = `${directoryPath}/newFile.ts`;
	// 	// Write the content to the file.
	// 	// Save the code to a file (you can choose a different file path)
	// 	await fs.writeFile('newFile.ts', req.body, (data) => {
	// 		console.log(data, 'writeFile');
	// 	});

	// 	//await fsPromises.writeFile(filePath, content);
	// 	return NextResponse.json({ success: true });
	// } catch (error) {
	// 	console.log(error);
	// 	const errorMessage = 'An error occurred while saving data';
	// 	//return new NextResponse(errorMessage, { status: 500 });
	// 	return NextResponse.json({ error: errorMessage, status: 500 });
	// }
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
