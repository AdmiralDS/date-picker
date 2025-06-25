import styled from 'styled-components';
import { forwardRef } from 'react';
import { InputLine, InputLineProps } from '@admiral-ds/react-ui';
import { SizeProps } from './InputBox';

const Wrapper = styled.div`
  width: 84px;

  &[data-size='s'] {
    width: 74px;
  }
`;

export interface SingleInputProps extends InputLineProps, SizeProps {}

export const SingleInput = forwardRef<HTMLInputElement, SingleInputProps>((props, ref) => {
  return (
    <Wrapper>
      <InputLine ref={ref} {...props} />
    </Wrapper>
  );
});
