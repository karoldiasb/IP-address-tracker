import { useMediaQuery } from 'react-responsive';

export const useMobileSize = () => {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 998px)' });

  return isMobileDevice;
};
