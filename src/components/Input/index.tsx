import theme from '@src/theme/theme';
import { InputProps } from './types';
import { BaseComponent } from '@src/theme/baseComponent';

export default function Input({ ...props }: InputProps) {
  return (
    <BaseComponent
      tag="input"
      $styleSheet={{
        width: { xs: '200px', lg: '500px' },
        height: '60px',
        backgroundColor: theme.colors.white,
        color: theme.colors.black[500],
        borderRadius: '15px 0px 0px 15px',
        paddingLeft: '20px',
        outline: 'none',
        ...theme.typography.variants['sm-regular'],
      }}
      {...props}
    ></BaseComponent>
  );
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};
