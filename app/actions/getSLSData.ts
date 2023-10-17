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
		console.error('Error retrieving public IP:', error);
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
		console.error('Error retrieving public IP:', error);
		return '';
	}
}
export async function getSLSRoomsByType(type: string): Promise<string> {
	try {
		const response = await axios.get(
			`${process.env.SLS_API_URL}/rooms?type=${type}&token=${SLS_API_KEY}`
		);
		const data = response.data;

		return data;
	} catch (error) {
		console.error('Error retrieving public IP:', error);
		return '';
	}
}
export async function getSLSMessages(): Promise<string> {
	try {
		const response = await axios.get(`${process.env.SLS_API_URL}/messages?token=${SLS_API_KEY}`);
		const data = response.data[0];

		return data;
	} catch (error) {
		console.error('Error retrieving public IP:', error);
		return '';
	}
}
export async function getSLSRoomsById(roomId: string): Promise<string> {
	try {
		const response = await axios.get(
			`${process.env.SLS_API_URL}/rooms?roomId=${roomId}&token=${SLS_API_KEY}`
		);
		const data = response.data[0];

		return data;
	} catch (error) {
		console.error('Error retrieving public IP:', error);
		return '';
	}
}
export async function getSLSMembers(): Promise<string> {
	try {
		const response = await axios.get('https://chatv.swinglifestyle.com/users?token=' + SLS_API_KEY);
		const data = response.data;
		return data;
	} catch (error) {
		console.error('Error retrieving public IP:', error);
		return '';
	}
}
export async function getSLSRooms(): Promise<string> {
	try {
		const response = await axios.get('https://chatv.swinglifestyle.com/rooms?token=' + SLS_API_KEY);
		const data = response.data;

		return data;
	} catch (error) {
		console.error('Error retrieving public IP:', error);
		return '';
	}
}
// export async function getSwingerConnections(p: object): Promise<string> {
// 	try {
// 		const response = await axios.get(
// 			`${process.env.SLS_API_URL}/rooms?type=${type}&token=${SLS_API_KEY}`
// 		);
// 		const data = response.data;

// 		return data;
// 	} catch (error) {
// 		console.error('Error retrieving connections:', error);
// 		return '';
// 	}
// }
export async function getSLSRoomsLists(): Promise<string> {
	try {
		const response = await axios.get('https://chatv.swinglifestyle.com/rooms?token=' + SLS_API_KEY);
		const data = response.data;
		return data;
	} catch (error) {
		console.error('Error retrieving public IP:', error);
		return '';
	}
}
