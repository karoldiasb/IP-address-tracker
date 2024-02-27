import { Box, Text } from '..';
import { BoxTitleProps } from './types';

export default function BoxTitle({ mainTitle, secondaryTitle }: BoxTitleProps) {
  return (
    <Box
      styleSheet={{
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '180px',
        paddingRight: '20px',
        paddingLeft: '15px',
      }}
    >
      <Text
        styleSheet={{
          color: 'grey',
          fontSize: '10px',
          fontWeight: 500,
          textTransform: 'uppercase',
        }}
      >
        {mainTitle}
      </Text>
      <Text
        styleSheet={{
          fontSize: '18px',
          fontWeight: 700,
          maxHeight: '68px',
          overflow: 'hidden',
        }}
      >
        {secondaryTitle}
      </Text>
    </Box>
  );
}
