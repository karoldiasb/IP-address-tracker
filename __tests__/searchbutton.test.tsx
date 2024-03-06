import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { Header } from '../src/components';
import { HomePageContext } from '@src/config/domain/context';

const dataContext = {
  address: {},
  setAddress: jest.fn(),
  loading: false,
  setLoading: jest.fn(),
};

it('must enable the search button when input field is filled correctly', () => {
  render(
    <HomePageContext.Provider value={dataContext}>
      <Header />
    </HomePageContext.Provider>,
  );

  const inputField = screen.getByTestId('input-field');
  const submitButton = screen.getByTestId('button-search');

  expect(submitButton).toBeDisabled();

  fireEvent.change(inputField, { target: { value: '177.412.321.101' } });

  expect(submitButton).not.toBeDisabled();
});

describe('must disable the search button when ', () => {
  it('when input field is not filled', () => {
    render(
      <HomePageContext.Provider value={dataContext}>
        <Header />
      </HomePageContext.Provider>,
    );

    const inputField = screen.getByTestId('input-field');
    const submitButton = screen.getByTestId('button-search');

    expect(submitButton).toBeDisabled();

    fireEvent.change(inputField, { target: { value: '' } });

    expect(submitButton).toBeDisabled();
  });

  it('input field is filled incorrectly', () => {
    render(
      <HomePageContext.Provider value={dataContext}>
        <Header />
      </HomePageContext.Provider>,
    );

    const inputField = screen.getByTestId('input-field');
    const submitButton = screen.getByTestId('button-search');

    expect(submitButton).toBeDisabled();

    fireEvent.change(inputField, { target: { value: '177.412.321' } });

    expect(submitButton).toBeDisabled();
  });
});
