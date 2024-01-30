import { StyleSheet } from '@src/theme/styleSheet';

export interface TextProps {
  tag?: 'p' | 'h1' | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}
