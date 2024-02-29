import { Fragment, useContext } from 'react';
import { Box, BoxTitle, Divider } from '..';
import theme from '@src/theme/theme';
import { HomePageContext } from '@src/config/domain/context';
import { getAddressData } from './addressData';
import { useMediaQuery } from 'react-responsive';

export default function AddressDetails() {
  const homePageContext = useContext(HomePageContext);

  const { address } = homePageContext;

  const addressData = getAddressData(address);

  const isMobileDevice = useMediaQuery({ query: '(max-width: 998px)' });

  if (!address.ip) return null;

  return (
    <Box
      styleSheet={{
        height: { xs: 'auto', lg: '140px' },
        minWidth: { xs: '250px', lg: '900px' },
        background: theme.colors.white,
        position: 'absolute',
        top: '200px',
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        justifySelf: 'center',
        alignItems: { xs: 'center', lg: 'flex-start' },
        textAlign: { xs: 'center', lg: 'left' },
        borderRadius: '15px',
        paddingTop: '30px',
        paddingBottom: '30px',
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
            {index !== lastInfo && !isMobileDevice && <Divider />}
          </Fragment>
        );
      })}
    </Box>
  );
}
