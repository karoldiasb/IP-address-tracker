import { Box, Text } from '..';
import { BoxTitleProps } from './types';

export default function BoxTitle({ mainTitle, secondaryTitle }: BoxTitleProps) {
  return (
    <Box
      styleSheet={{
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '220px',
        minWidth: '190px',
        paddingRight: '20px',
        paddingLeft: '15px',
      }}
    >
      <Text
        styleSheet={{
          color: 'grey',
          textTransform: 'uppercase',
        }}
        variant="xs-medium"
      >
        {mainTitle}
      </Text>
      <Text
        styleSheet={{
          maxHeight: '68px',
          overflow: 'hidden',
        }}
      >
        {secondaryTitle}
      </Text>
    </Box>
  );
}
