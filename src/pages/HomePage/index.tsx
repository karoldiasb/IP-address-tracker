import { BaseComponent } from '@src/theme/baseComponent';
import { AddressDetails, Box, Header, Map } from '../../components';
import { HomePageContext } from '../../config/domain/context';
import { useHomePageState } from '../../hooks/useHomePageState';

export default function HomePage() {
  const state = useHomePageState();

  return (
    <HomePageContext.Provider value={state}>
      <BaseComponent
        tag="main"
        $styleSheet={{
          display: 'grid',
          gridTemplateRows: {
            xs: '300px calc(100vh - 320px)',
            lg: '280px calc(100vh - 300px)',
          },
        }}
      >
        <Header />
        <Map />
        <AddressDetails />
      </BaseComponent>
    </HomePageContext.Provider>
  );
}
