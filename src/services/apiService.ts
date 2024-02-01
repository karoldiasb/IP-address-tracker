import axios from '@src/config/ipifyConfig';

export async function getAddress(ip: string) {
  try {
    const response = await axios.get('/api/v1', {
      params: {
        ipAddress: ip,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
