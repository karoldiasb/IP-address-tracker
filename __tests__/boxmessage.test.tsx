import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';
import { BoxMessage } from '../src/components';

it('renders the modal when message is not empty', () => {
  const props = {
    message: 'Input correct IPv4 or IPv6 address.',
    onClose: jest.fn(),
  };

  render(<BoxMessage {...props} />);

  const modalElement = screen.getByTestId('modal-message');
  expect(modalElement).toBeInTheDocument();

  const errorMessageElement = screen.getByText(props.message);
  expect(errorMessageElement).toBeInTheDocument();
});

describe('not renders the modal when ', () => {
  it('message is not past', () => {
    render(<BoxMessage />);

    const modalElement = screen.queryByTestId('modal-message');
    expect(modalElement).toBeNull();
  });

  it('message is empty', () => {
    const props = {
      message: '',
    };

    render(<BoxMessage {...props} />);

    const modalElement = screen.queryByTestId('modal-message');
    expect(modalElement).toBeNull();
  });

  it('message is undefined', () => {
    const props = {
      message: undefined,
    };

    render(<BoxMessage {...props} />);

    const modalElement = screen.queryByTestId('modal-message');
    expect(modalElement).toBeNull();
  });

  it('close button is pressed', () => {
    const onClose = jest.fn();

    const props = {
      message: 'Input correct IPv4 or IPv6 address.',
      onClose,
    };

    const { rerender } = render(<BoxMessage {...props} />);

    const modalElement = screen.getByTestId('modal-message');

    expect(modalElement).toBeInTheDocument();

    const buttonElement = screen.getByText('Close');

    fireEvent.click(buttonElement);

    const newProps = {
      onClose,
    };

    rerender(<BoxMessage {...newProps} />);

    expect(modalElement).not.toBeInTheDocument();
  });
});

it('must call onClose event when clicking onClose', () => {
  const onClose = jest.fn();

  const props = {
    message: 'Input correct IPv4 or IPv6 address.',
    onClose,
  };

  render(<BoxMessage {...props} />);

  const buttonElement = screen.getByText('Close');

  fireEvent.click(buttonElement);

  expect(onClose).toHaveBeenCalledTimes(1);
});
