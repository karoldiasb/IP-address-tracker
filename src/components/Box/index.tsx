import { BaseComponent } from '@src/theme/baseComponent';
import { BoxProps } from './types';

export default function Box({ tag, styleSheet, children, ...props }: BoxProps) {
  const Tag = tag || 'div';

  return (
    <BaseComponent as={Tag} $styleSheet={styleSheet} {...props}>
      {children}
    </BaseComponent>
  );
}
