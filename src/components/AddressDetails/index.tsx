import { Fragment, useContext } from 'react';
import { Box, BoxTitle, Divider } from '..';
import theme from '@src/theme/theme';
import { HomePageContext } from '@src/config/domain/context';
import { getAddressData } from './addressData';
import { useMobileSize } from '@src/hooks/useMobileSize';

export default function AddressDetails() {
  const homePageContext = useContext(HomePageContext);

  const { address } = homePageContext;

  const addressData = getAddressData(address);

  const isMobileDevice = useMobileSize();

  if (!address.ip) return null;

  return (
    <Box
      styleSheet={{
        height: { xs: 'auto', lg: '161px' },
        width: { xs: '329px', lg: '1110px' },
        background: theme.colors.white,
        position: 'absolute',
        top: { xs: '166px', lg: '200px' },
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        justifySelf: 'center',
        alignItems: { xs: 'center', lg: 'flex-start' },
        textAlign: { xs: 'center', lg: 'left' },
        borderRadius: '15px',
        paddingTop: '26px',
        paddingBottom: { xs: '25px', lg: '44px' },
        gap: { xs: '30px', lg: '10px' },
        marginLeft: { xs: '24px', lg: '165px' },
        marginRight: { xs: '24px', lg: '165px' },
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
