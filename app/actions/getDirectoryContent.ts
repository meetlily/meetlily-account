import fs from 'fs';
import path from 'path';

export async function getFilesByDirectory(directory?: string, subDirectory?: string) {
	try {
		let directoryPath = process.cwd(); // Get the current working directory
		if (directory) {
			directoryPath = directory;
			if (subDirectory) {
				directoryPath += `/${subDirectory}`;
			}
		}
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
		return fileTree;
	} catch (error) {
		return error;
	}
}
export async function getFileContent(file?: string, directory?: string) {
	try {
		let directoryPath = process.cwd(); // Get the current working directory
		if (directory) {
			directoryPath = `${directoryPath}/${directory}`;
		}
		if (file) {
			directoryPath = `${file}`;
		}
		//const fileContent = await fsPromises.readFile(directoryPath, 'utf-8');
		//return fileContent;
	} catch (error) {
		return error;
	}
}
