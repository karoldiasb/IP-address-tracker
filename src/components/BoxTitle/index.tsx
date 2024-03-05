import theme from '@src/theme/theme';
import { Box, Text } from '..';
import { BoxTitleProps } from './types';

export default function BoxTitle({ mainTitle, secondaryTitle }: BoxTitleProps) {
  return (
    <Box
      styleSheet={{
        flexDirection: 'column',
        gap: { xs: '12px', lg: '17px' },
        minWidth: '243px',
        paddingLeft: { xs: '0', lg: '30px' },
      }}
    >
      <Text
        styleSheet={{
          color: theme.colors.neutral[300],
          textTransform: 'uppercase',
        }}
        variant="xs-extrabold"
      >
        {mainTitle}
      </Text>
      <Text
        styleSheet={{
          overflow: 'hidden',
          maxHeight: { xs: '100%', lg: '60px' },
          maxWidth: { xs: '100%', lg: '190px' },
          color: theme.colors.black[400],
        }}
      >
        {secondaryTitle}
      </Text>
    </Box>
  );
}
