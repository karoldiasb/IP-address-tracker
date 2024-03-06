import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';
import { BoxTitle } from '../src/components';
import { BoxTitleProps } from '@src/components/BoxTitle/types';

const addressData: BoxTitleProps[] = [
  {
    mainTitle: 'IP ADDRESS',
    secondaryTitle: '192.168.1.1',
  },
  {
    mainTitle: 'Location',
    secondaryTitle: 'New York, USA',
  },
  {
    mainTitle: 'Timezone',
    secondaryTitle: 'UTC-05:00',
  },
  {
    mainTitle: 'ISP',
    secondaryTitle: 'Internet Provider',
  },
];

it('should correctly renders main and secondary titles', () => {
  addressData.forEach(({ mainTitle, secondaryTitle }) => {
    render(<BoxTitle mainTitle={mainTitle} secondaryTitle={secondaryTitle} />);

    const mainTitleElement = screen.getByText(mainTitle);
    const secondaryTitleElement = screen.getByText(secondaryTitle);

    expect(mainTitleElement).toBeInTheDocument();
    expect(secondaryTitleElement).toBeInTheDocument();
  });
});
