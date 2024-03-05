import 'leaflet/dist/leaflet.css';
import { LatLngExpression, Icon } from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { useContext, useEffect, useState } from 'react';
import { HomePageContext } from '@src/config/domain/context';
import IconLocation from '@src/assets/icon-location.svg';

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

  const icon = new Icon({
    iconUrl: IconLocation.src,
    iconSize: [47, 57],
  });

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
      <Marker position={position as LatLngExpression} icon={icon} />
    </MapContainer>
  );
}
