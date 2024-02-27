import theme from '@src/theme/theme';
import { ButtonProps } from './types';
import { BaseComponent } from '@src/theme/baseComponent';

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <BaseComponent
      tag="button"
      $styleSheet={{
        width: '130px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: theme.colors.black[500],
        borderRadius: '15px',
        color: 'white',
      }}
      {...props}
    >
      {children}
    </BaseComponent>
  );
}
