import { Fragment, useContext } from 'react';
import { Box, BoxTitle, Divider } from '..';
import theme from '@src/theme/theme';
import { HomePageContext } from '@src/pages/HomePage/config/domain/context';
import { getAddressData } from './addressData';

export default function AddressDetails() {
  const homePageContext = useContext(HomePageContext);

  const { address } = homePageContext;

  const addressData = getAddressData(address);

  if (!address.ip) return null;

  return (
    <Box
      styleSheet={{
        height: '140px',
        minWidth: '700px',
        background: theme.colors.white,
        position: 'absolute',
        top: '200px',
        display: 'flex',
        justifySelf: 'center',
        borderRadius: '15px',
        paddingTop: '30px',
        paddingLeft: '10px',
        gap: '10px',
        zIndex: 999,
      }}
    >
      {addressData.map((info, index) => {
        const lastInfo = addressData.length - 1;
        return (
          <Fragment key={info.mainTitle}>
            <BoxTitle
              mainTitle={info.mainTitle}
              secondaryTitle={info.secondaryTitle ?? ''}
            />
            {index !== lastInfo && <Divider />}
          </Fragment>
        );
      })}
    </Box>
  );
}
