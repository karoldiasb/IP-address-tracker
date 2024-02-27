import { BaseComponent } from '@src/theme/baseComponent';
import { Box, Text } from '..';

export default function Footer() {
  return (
    <BaseComponent
      tag="footer"
      $styleSheet={{
        display: 'flex',
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
        <BaseComponent
          tag="a"
          href="https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0"
          target="_blank"
        >
          Frontend Mentor
        </BaseComponent>
        . Coded by{' '}
        <BaseComponent
          tag="a"
          href="https://github.com/karoldiasb"
          target="_blank"
        >
          Karoline Barreto
        </BaseComponent>
        .
      </Text>
    </BaseComponent>
  );
}
