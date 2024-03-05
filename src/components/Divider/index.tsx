import theme from '@src/theme/theme';
import Box from '../Box';

export default function Divider() {
  const color = theme.colors.neutral[200];

  return (
    <Box
      styleSheet={{
        borderLeft: `2px solid ${color}`,
        height: '70px',
      }}
    />
  );
}
