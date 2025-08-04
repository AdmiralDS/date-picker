import styled, { type DataAttributes } from 'styled-components';
import { forwardRef } from 'react';
import { InputLine, InputLineProps } from '@admiral-ds/react-ui';
import { DimensionInterface, InputDimension } from './types';

function getInputWidth(dimension: InputDimension, width?: string | number) {
  if (width) {
    return width;
  }
  switch (dimension) {
    case 's':
      return '73px';
    case 'xl':
    case 'm':
    default:
      return '83px';
  }
}

const Wrapper = styled.div<{ $dimension: InputDimension; $width?: string | number }>`
  width: ${(p) => getInputWidth(p.$dimension, p.$width)};
`;

export interface SingleInputProps extends InputLineProps, DimensionInterface, DataAttributes {}

export const SingleInput = forwardRef<HTMLInputElement, SingleInputProps>(
  ({ dimension = 'm', width, ...props }, ref) => {
    return (
      <Wrapper $width={width} $dimension={dimension}>
        <InputLine ref={ref} {...props} />
      </Wrapper>
    );
  },
);
