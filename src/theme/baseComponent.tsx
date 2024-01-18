import React from 'react';
import styled from 'styled-components';
import { StyleSheet } from '@src/theme/styleSheet';
import { parseStyleSheet } from '@skynexui/responsive_stylesheet';

interface StyledBaseComponentProps {
  styleSheet?: StyleSheet;
}

const StyledBaseComponent = styled.div<StyledBaseComponentProps>`
  ${({ styleSheet }) => styleSheet && parseStyleSheet(styleSheet)}
`;

export const BaseComponent = (props: any) => {
  return <StyledBaseComponent {...props} />;
};
