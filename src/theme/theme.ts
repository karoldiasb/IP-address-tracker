import { colors } from './defaults/colors';
import { typography } from './defaults/typography';

const theme = {
  typography,
  colors,
};

export type ThemeTypographyVariants = keyof typeof typography.variants;

export default theme;
