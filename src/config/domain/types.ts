export interface AddressState {
  ip?: string;
  location?: string;
  timezone?: string;
  isp?: string;
  lat?: number;
  lng?: number;
}

export interface HomePageState {
  address: AddressState;
  setAddress: (address: AddressState) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}
