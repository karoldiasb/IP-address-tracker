import Image from 'next/image';
import { Box, Input, Title } from '..';
import IconArrow from '@src/assets/icon-arrow.svg';

export default function Header() {
  return (
    <Box
      styleSheet={{
        backgroundImage: `url(/pattern-bg-desktop.png)`,
        backgroundSize: '100% 274px',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '5vh',
      }}
    >
      <Title text="IP Address Tracker" styleSheet={{ color: 'white' }} />
      <Box
        styleSheet={{
          display: 'flex',
          marginTop: '10px',
        }}
      >
        <Input placeholder="Search for any IP address or domain" />
        <Box
          styleSheet={{
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
        </Box>
      </Box>
    </Box>
  );
}
