import { useState } from 'react';
import { AddressState } from '../config/domain/types';

export const useHomePageState = () => {
  const [address, setAddress] = useState<AddressState>({
    ip: undefined,
    location: undefined,
    timezone: undefined,
    isp: undefined,
  });

  const [loading, setLoading] = useState(false);

  return {
    address,
    setAddress,
    loading,
    setLoading,
  };
};
