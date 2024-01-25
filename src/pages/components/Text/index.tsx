import theme from '@src/theme/theme';
import { Box } from '..';
import { TextProps } from './types';

export default function Text({ styleSheet, children, ...props}: TextProps) {
  return (
    <Box
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...styleSheet,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}

Text.defaultProps = {
  tag: 'p',
};
