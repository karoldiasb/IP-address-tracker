import theme from '@src/theme/theme';
import { InputProps } from './types';

export default function Input({ ...props }: InputProps) {
  return (
    <input
      style={{
        width: '500px',
        height: '60px',
        backgroundColor: theme.colors.white,
        color: theme.colors.black[500],
        borderRadius: '15px 0px 0px 15px',
        fontFamily: theme.typography.fontFamily,
        fontSize: '18px',
        paddingLeft: '20px',
        outline: 'none',
      }}
      {...props}
    ></input>
  );
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};