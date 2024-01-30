import { infosAddressMock } from '@src/pages/mocks/infosAddressMock';
import { Fragment } from 'react';
import { Box, BoxTitle, Divider } from '..';

export default function AddressDetails() {
  return (
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
        zIndex: 1000,
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
  );
}
