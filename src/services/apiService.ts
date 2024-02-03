import axios from '@src/config/ipifyConfig';
import { ResponseApi } from './types';

export async function getAddress(ip: string) {
  try {
    const response: ResponseApi = await axios.get('/api/v1', {
      params: {
        ipAddress: ip,
      },
    });

    if (response.status === 200) {
      return response.data;
    }
    return undefined;
  } catch (error) {
    throw error;
  }
}
