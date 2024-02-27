import React from 'react';
import styled from 'styled-components';
import { StyleSheet } from '@src/theme/styleSheet';
import { parseStyleSheet } from '@skynexui/responsive_stylesheet';

interface StyledBaseComponentProps {
  $styleSheet?: StyleSheet;
  tag?: 'main' | 'div' | 'article' | 'section' | 'ul' | 'a' | string;
}

const StyledBaseComponent = styled.div<StyledBaseComponentProps>`
  ${({ $styleSheet }) => parseStyleSheet($styleSheet)}
`;

export const BaseComponent = ({ tag, ...props }: any) => {
  const Tag = tag || 'div';

  return <StyledBaseComponent as={Tag} {...props} />;
};

StyledBaseComponent.defaultProps = {
  $styleSheet: {},
};
