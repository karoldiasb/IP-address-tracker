import { AddressDetails, Box, Header, Map } from '../../components';

export default function HomePage() {
  return (
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
  );
}
