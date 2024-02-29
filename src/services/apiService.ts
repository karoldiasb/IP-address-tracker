import ipifyGeolocationAxios from '@src/config/ipifyGeolocationConfig';
import apiIpifyAxios from '@src/config/apiIpifyConfig';
import { ResponseApi } from './types';

export async function getAddress(ip: string) {
  const response: ResponseApi = await ipifyGeolocationAxios.get('/api/v1', {
    params: {
      apiKey: process.env.NEXT_PUBLIC_API_IPIFY_KEY,
      ipAddress: ip,
    },
  });

  if (response.status === 200) {
    return response.data;
  }
  return undefined;
}

export async function getIP() {
  const response: ResponseApi = await apiIpifyAxios.get('/?format=json', {
    params: {},
  });

  if (response.status === 200) {
    return response.data.ip;
  }
  return undefined;
}
