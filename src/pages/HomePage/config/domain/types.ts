export interface AddressState {
  ip: string;
  location: string;
  timezone: string;
  isp: string;
}

export interface HomePageState {
  address?: AddressState;
}
