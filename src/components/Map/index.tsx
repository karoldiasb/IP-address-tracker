import 'leaflet/dist/leaflet.css';
// import 'leaflet-defaulticon-compatibility'; //TODO: resolver carregamento
// import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'; //TODO: resolver carregamento
import dynamic from 'next/dynamic';
import { LatLngExpression } from 'leaflet';

const LazyMapContainer = dynamic(
  async () => (await import('react-leaflet')).MapContainer,
  {
    loading: () => <p>Loading map...</p>,
    ssr: false,
  },
);

const LazyTileLayer = dynamic(
  async () => (await import('react-leaflet')).TileLayer,
  {
    loading: () => <p>Loading map...</p>,
    ssr: false,
  },
);

const LazyMarker = dynamic(async () => (await import('react-leaflet')).Marker, {
  loading: () => <p>Loading map...</p>,
  ssr: false,
});

export default function Map() {
  const initialPosition: LatLngExpression = [-10.2957056, -48.3098624, 12];
  return (
    <LazyMapContainer
      center={initialPosition}
      zoom={14}
      scrollWheelZoom={false}
    >
      <LazyTileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LazyMarker position={initialPosition} />
    </LazyMapContainer>
  );
}
