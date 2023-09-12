import axios from 'axios';
const SLS_API_KEY = process.env.SLS_API_KEY;
const SLS_VIDU_URL = process.env.SLS_VIDU_URL;
const SLS_API_URL = process.env.SLS_API_URL;
const SLS_TURN_URL = process.env.SLS_TURN_URL;
const SLS_USERNAME = 'OPENVIDUAPP';

export async function getSLSSessions(): Promise<string> {
  try {
    const response = await axios.get('https://viduk.swinglifestyle.com/openvidu/api/sessions', {
      headers: {
        Authorization: `Basic ${Buffer.from(`${SLS_USERNAME}:${SLS_API_KEY}`).toString('base64')}`
    }});
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error retrieving public IP:', error);
    return '';
  }
}

export async function getSLSMembers(): Promise<string> {
  try {
    const response = await axios.get('https://chatv.swinglifestyle.com/users?token='+SLS_API_KEY);
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error retrieving public IP:', error);
    return '';
  }
}