import { TitleProps } from './types';
import { Text } from '..';

export default function Title({ text, ...props }: TitleProps) {
  return (
    <Text tag="h1" variant="display-bold" {...props}>
      {text}
    </Text>
  );
}
