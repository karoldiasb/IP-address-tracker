import { Dispatch, SetStateAction } from 'react';

export interface AddressState {
  ip?: string;
  location?: string;
  timezone?: string;
  isp?: string;
}

export interface HomePageState {
  address: AddressState;
  setAddress: Dispatch<SetStateAction<AddressState | undefined>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}
