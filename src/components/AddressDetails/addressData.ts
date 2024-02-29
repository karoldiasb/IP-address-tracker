import { AddressState } from '@src/config/domain/types';

export const getAddressData = (address: AddressState) => {
  return [
    {
      mainTitle: 'IP ADDRESS',
      secondaryTitle: address.ip,
    },
    {
      mainTitle: 'Location',
      secondaryTitle: address.location,
    },
    {
      mainTitle: 'Timezone',
      secondaryTitle: address.timezone,
    },
    {
      mainTitle: 'isp',
      secondaryTitle: address.isp,
    },
  ];
};
