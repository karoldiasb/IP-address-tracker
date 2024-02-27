import { Box, Text } from '..';

export default function Footer() {
  return (
    <Box
      tag="footer"
      styleSheet={{
        height: '20px',
        justifyContent: 'center',
      }}
    >
      <Text
        styleSheet={{
          display: 'block',
        }}
        variant="sm-regular"
      >
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href="https://github.com/karoldiasb" target="_blank">
          Karoline Barreto
        </a>
        .
      </Text>
    </Box>
  );
}
