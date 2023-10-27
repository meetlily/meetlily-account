import axios from 'axios';

export async function getRapidApi(params: any, host: string) {
	const options = {
		method: 'GET',
		url: `https://${host}/search`,
		params: params,
		headers: {
			'X-RapidAPI-Key': process.env.RAPID_API_KEY,
			'X-RapidAPI-Host': `${host}`
		}
	};
	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}
