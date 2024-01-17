import Head from 'next/head';
import Box from './components/Box';

export default function Home() {
  return (
    <>
      <Head>
        <title>IP address tracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
        <Box 
          tag="main"
          styleSheet={{
            backgroundColor: {
              xs: 'red',
              md: 'blue',
              sm: 'yellow'
            }
          }}>
          componente
        </Box>

      <footer>
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Karoline Barreto</a>.
        </footer>
    </>
  );
}
