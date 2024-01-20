import { StyleSheet } from '@src/theme/styleSheet';

export interface BoxProps {
  tag?: 'main' | 'div' | 'article' | 'section' | 'ul' | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}
