import type { ComponentProps } from 'react';
import styled from 'styled-components';
import { vars } from '@admiral-ds/web';
import { SizeProps } from './InputBox';

export type InputSeparatorProps = ComponentProps<'div'> & SizeProps;

export const InputSeparator = styled.div`
  box-sizing: border-box;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${vars.color.Neutral_Neutral30};
  width: 22px;
  &[data-size='s'] {
    width: 19px;
  }
`;
