import { AddressDetails, Box, Header, Map } from '../../components';
import { HomePageContext } from './config/domain/context';
import { useHomePageState } from './hooks/useHomePageState';

export default function HomePage() {
  const state = useHomePageState();

  return (
    <HomePageContext.Provider value={state}>
      <Box
        tag="main"
        styleSheet={{
          display: 'grid',
          gridTemplateRows: '274px calc(100vh - 294px)',
        }}
      >
        <Header />
        <Map />
        <AddressDetails />
      </Box>
    </HomePageContext.Provider>
  );
}
