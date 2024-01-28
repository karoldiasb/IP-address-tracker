import Head from 'next/head';
import Box from './components/Box';
import { Footer, Header, BoxTitle, Divider } from './components';
import { infosAddressMock } from './mocks/infosAddressMock';
import { Fragment } from 'react';

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
          display: 'grid',
          gridTemplateRows: '274px calc(100vh - 294px)',
        }}
      >
        <Header />
        <Box styleSheet={{ backgroundColor: 'orange', flex: 0.7 }}></Box>
        <Box
          styleSheet={{
            height: '140px',
            minWidth: '700px',
            background: 'white',
            position: 'absolute',
            top: '200px',
            display: 'flex',
            justifySelf: 'center',
            borderRadius: '15px',
            paddingTop: '30px',
            paddingLeft: '10px',
            gap: '10px',
          }}
        >
          {infosAddressMock.map((info, index) => {
            const lastInfo = infosAddressMock.length - 1;
            return (
              <Fragment key={info.mainTitle}>
                <BoxTitle
                  mainTitle={info.mainTitle}
                  secondaryTitle={info.secondaryTitle}
                />
                {index !== lastInfo && <Divider />}
              </Fragment>
            );
          })}
        </Box>
      </Box>

      <Footer />
    </>
  );
}
