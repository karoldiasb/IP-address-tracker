import Head from 'next/head';
import Box from './components/Box';
import { Title } from './components';
import IconArrow from '@src/assets/icon-arrow.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>IP address tracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        style={{
          position: 'relative',
          display: 'grid',
          gridTemplateRows: '274px calc(100vh - 294px)',
        }}
      >
        <div
          style={{
            flex: 0.5,
            backgroundColor: 'red',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Title text="IP Address Tracker" />
          <div style={{ display: 'flex', marginTop: '10px' }}>
            <input
              type="text"
              placeholder="Search for any IP address or domain"
              style={{
                width: '500px',
                height: '60px',
                backgroundColor: 'white',
                color: 'black',
                borderRadius: '15px 0px 0px 15px',
              }}
            ></input>
            <div
              style={{
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'black',
                borderRadius: '0px 15px 15px 0px',
              }}
            >
              <Image src={IconArrow} alt="icon arrow" />
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: 'orange', flex: 0.7 }}></div>
        <div
          style={{
            height: '160px',
            minWidth: '700px',
            background: 'white',
            position: 'absolute',
            top: '200px',
            display: 'flex',
            justifySelf: 'center',
            borderRadius: '15px',
          }}
        ></div>
      </main>

      <footer
        style={{
          height: '20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Karoline Barreto</a>.
      </footer>
    </>
  );
}
