import Head from 'next/head';
import Box from './components/Box';
import { Footer, Header, AddressDetails, Map } from './components';
import 'leaflet/dist/leaflet.css';
import HomePage from './HomePage';

export default function Home() {
  return (
    <>
      <Head>
        <title>IP address tracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomePage />
      <Footer />
    </>
  );
}
