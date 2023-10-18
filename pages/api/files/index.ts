import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { pipeline } from 'stream';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		try {
			const { path, fileContent } = req.body;

			if (!fileContent) {
				return res.status(400).json({ error: 'Code is missing' });
			}

			const writeStream = fs.createWriteStream(path);

			// Use the pipeline function to pipe the ReadableStream to the file stream
			pipeline(fileContent, writeStream, (error) => {
				if (error) {
					console.error('Error saving code:', error);
					res.status(500).json({ error: 'An error occurred while saving the code' });
				} else {
					res.status(200).json({ message: 'Code saved successfully' });
				}
			});
		} catch (error) {
			console.error('Error saving code:', error);
			res.status(500).json({ error: 'An error occurred while saving the code' });
		}
	} else {
		res.status(405).json({ error: 'Method not allowed' });
	}
};
