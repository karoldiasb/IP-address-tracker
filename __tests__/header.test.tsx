import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { Header } from '../src/components';
import { HomePageContext } from '@src/config/domain/context';

const dataContext = {
  address: {},
  setAddress: jest.fn(),
  loading: false,
  setLoading: jest.fn(),
};

it('must have a title', () => {
  render(
    <HomePageContext.Provider value={dataContext}>
      <Header />
    </HomePageContext.Provider>,
  );

  const titleElement = screen.getByTestId('title');

  expect(titleElement).toBeInTheDocument();

  expect(titleElement).toHaveTextContent('IP Address Tracker');
});
