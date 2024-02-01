import { useState } from 'react';
import { AddressState } from '../config/domain/types';

export const useHomePageState = () => {
  const [address, setAddress] = useState<AddressState>();

  return {
    address,
    setAddress,
  };
};
