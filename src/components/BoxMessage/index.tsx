import theme from '@src/theme/theme';
import { Box, Button } from '..';
import { BoxMessageProps } from './types';

export default function BoxMessage({
  title,
  message,
  onClose,
}: BoxMessageProps) {
  return (
    <Box
      styleSheet={{
        position: 'fixed',
        zIndex: 1000,
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)',
      }}
    >
      <Box
        styleSheet={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1100,
          borderRadius: '15px',
          width: '300px',
          height: '200px',
          backgroundColor: theme.colors.white,
          boxShadow:
            '0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)',
          flexDirection: 'column',
        }}
      >
        <Box
          styleSheet={{
            height: '30%',
            paddingTop: '30px',
            paddingBottom: '30px',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '30px',
          }}
        >
          {title}
        </Box>
        <Box
          styleSheet={{
            height: '45%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {message}
        </Box>
        <Button onClick={onClose}>Fechar</Button>
      </Box>
    </Box>
  );
}
BoxMessage.defaultProps = {
  title: 'Ops!',
  message: '',
};
