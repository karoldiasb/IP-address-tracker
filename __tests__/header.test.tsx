import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';
import { Header, Input } from '../src/components';
import { InputProps } from '@src/components/Input/types';
import { HomePageContext } from '@src/config/domain/context';

const placeholderText = 'Search for any IP address or domain';

const props: InputProps = {
  placeholder: placeholderText,
};

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

describe('header should render an input field', () => {
  it(' with a placeholder', () => {
    render(<Input {...props} />);

    const placeholder = screen.getByPlaceholderText(placeholderText);

    expect(placeholder).toBeInTheDocument();
  });

  it(' with type text', () => {
    render(<Input {...props} />);

    const placeholder = screen.getByPlaceholderText(placeholderText);

    expect(placeholder).toHaveAttribute('type', 'text');
  });

  it(' that can be filled', () => {
    render(<Input {...props} />);

    const placeholder = screen.getByPlaceholderText(placeholderText);

    fireEvent.change(placeholder, { target: { value: '177.412.321.101' } });

    expect(placeholder).toHaveValue('177.412.321.101');
  });
});

it('must disable the search button when input field is not filled', () => {
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

it('must disable the search button when input field is filled incorrectly', () => {
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
