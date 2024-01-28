import theme from '@src/theme/theme';
import { InputProps } from './types';

export default function Input({ type, placeholder }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        width: '500px',
        height: '60px',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '15px 0px 0px 15px',
        fontFamily: theme.typography.fontFamily,
        fontSize: '18px',
        paddingLeft: '20px',
        outline: 'none',
      }}
    ></input>
  );
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};
