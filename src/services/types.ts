interface Location {
  city: string;
  country: string;
  geonameId: number;
  lat: number;
  lng: number;
  postalCode: string;
  region: string;
  timezone: string;
}

interface Data {
  ip: string;
  isp: string;
  location: Location;
}

export interface ResponseApi {
  data: Data;
  status: number;
}
