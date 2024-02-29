import { StyleSheet } from '@src/theme/styleSheet';
import { ThemeTypographyVariants } from '@src/theme/theme';
import React from 'react';

export interface TextProps {
  tag?: 'p' | 'h1' | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants;
}
