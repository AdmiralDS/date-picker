import styled from 'styled-components';
import { forwardRef } from 'react';
import { InputLine, InputLineProps } from '@admiral-ds/react-ui';
import { DimensionInterface, InputDimension } from './types';

function getInputWidth(dimension: InputDimension) {
  switch (dimension) {
    case 's':
      return 73;
    case 'xl':
    case 'm':
    default:
      return 83;
  }
}

const Wrapper = styled.div<{ $dimension: InputDimension }>`
  width: ${(p) => getInputWidth(p.$dimension)}px;
`;

export interface SingleInputProps extends InputLineProps, DimensionInterface {}

export const SingleInput = forwardRef<HTMLInputElement, SingleInputProps>(({ dimension = 'm', ...props }, ref) => {
  return (
    <Wrapper $dimension={dimension}>
      <InputLine ref={ref} {...props} />
    </Wrapper>
  );
});
