import axios from 'axios';
const SLS_API_KEY = process.env.SLS_API_KEY;

const SLS_API_URL = process.env.SLS_API_URL;
const SLS_TURN_URL = process.env.SLS_TURN_URL;
const SLS_USERNAME = 'OPENVIDUAPP';

export async function getSLSSessions(): Promise<string> {
	try {
		const response = await axios.get(`${process.env.SLS_VIDU_URL}/openvidu/api/sessions`, {
			headers: {
				Authorization: `Basic ${Buffer.from(`${SLS_USERNAME}:${SLS_API_KEY}`).toString('base64')}`
			}
		});
		const data = response.data;
		return data;
	} catch (error) {
		console.error('Error retrieving sessions:', error);
		return '';
	}
}
export async function getSLSSessionsIDConnections(sessionId: string): Promise<string> {
	try {
		const response = await axios.get(
			`${process.env.SLS_VIDU_URL}/openvidu/api/sessions/${sessionId}/connection`,
			{
				headers: {
					Authorization: `Basic ${Buffer.from(`${SLS_USERNAME}:${SLS_API_KEY}`).toString('base64')}`
				}
			}
		);
		const data = response.data;
		return data;
	} catch (error) {
		console.error('Error retrieving session connections:', error);
		return '';
	}
}
