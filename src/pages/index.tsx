import Head from 'next/head';
import { Footer } from '../components';
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
