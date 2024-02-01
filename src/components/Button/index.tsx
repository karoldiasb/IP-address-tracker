import theme from '@src/theme/theme';
import { Box } from '..';
import { ButtonProps } from './types';

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <Box
      tag="button"
      styleSheet={{
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
    </Box>
  );
}
