import axios from 'axios';

export async function getPublicIP(): Promise<string> {
	try {
		const response = await axios.get('https://api.ipify.org/?format=json');
		const ip = response.data.ip;
		return ip;
	} catch (error) {
		return '';
	}
}

export async function getPublicIPInfo(ip: any): Promise<string | undefined> {
	try {
		if (ip) {
			const ipInfodata = await axios.get(
				`http://api.ipstack.com/${ip}?access_key=7cc4777823e4f4629ec90ca323b8644a&format=1`
			);
			const ipData = ipInfodata.data;
			return ipData;
		}
		return '';
	} catch (error) {
		console.error('Error retrieving public IP:', error);
		return '';
	}
}
