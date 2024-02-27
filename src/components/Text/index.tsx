import theme from '@src/theme/theme';
import { TextProps } from './types';
import { BaseComponent } from '@src/theme/baseComponent';

export default function Text({
  styleSheet,
  variant,
  children,
  ...props
}: TextProps) {
  const textVariant = theme.typography.variants[variant ?? 'md-bold'];
  return (
    <BaseComponent
      $styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...styleSheet,
      }}
      {...props}
    >
      {children}
    </BaseComponent>
  );
}

Text.defaultProps = {
  tag: 'p',
  variant: 'md-bold',
};
