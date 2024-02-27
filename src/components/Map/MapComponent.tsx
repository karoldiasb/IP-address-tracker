import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import L, { LatLngExpression } from 'leaflet';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import { useContext, useEffect, useState } from 'react';
import { HomePageContext } from '@src/pages/HomePage/config/domain/context';

export default function Map() {
  const initialPosition = [24.8831, 67.1469];
  const homePageContext = useContext(HomePageContext);
  const { address } = homePageContext;
  const [position, setPosition] = useState(initialPosition);

  useEffect(() => {
    if (address.lat && address.lng) {
      setPosition([address.lat, address.lng]);
    }
  }, [address.lat, address.lng]);

  return (
    <MapContainer
      key={position[0].toString()}
      center={position as LatLngExpression}
      zoom={14}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position as LatLngExpression} />
    </MapContainer>
  );
}
