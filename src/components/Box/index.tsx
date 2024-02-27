import { BaseComponent } from '@src/theme/baseComponent';
import { BoxProps } from './types';

export default function Box({ styleSheet, children, ...props }: BoxProps) {
  return (
    <BaseComponent
      $styleSheet={{
        display: 'flex',
        ...styleSheet,
      }}
      {...props}
    >
      {children}
    </BaseComponent>
  );
}
