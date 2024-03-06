import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../src/components';
import { InputProps } from '@src/components/Input/types';

const placeholderText = 'Search for any IP address or domain';

const props: InputProps = {
  placeholder: placeholderText,
};

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
