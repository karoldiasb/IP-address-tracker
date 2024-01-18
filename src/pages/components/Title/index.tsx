import { TitleProps } from './types';
import { Box } from '..';

export default function Title({ text }: TitleProps) {
  return <Box tag="h1">{text}</Box>;
}
