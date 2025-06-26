import styled from 'styled-components';
import { vars } from '@admiral-ds/web';
import { InputDimension } from './types';

function getInputSeparatorWidth(dimension: InputDimension) {
  switch (dimension) {
    case 's':
      return 22;
    case 'xl':
    case 'm':
    default:
      return 19;
  }
}

export interface InputSeparatorProps extends React.InputHTMLAttributes<HTMLDivElement> {
  /** Делает высоту компонента больше или меньше обычной */
  $dimension: InputDimension;
}

export const InputSeparator = styled.div<{ $dimension: InputDimension }>`
  box-sizing: border-box;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${vars.color.Neutral_Neutral30};

  width: ${(p) => getInputSeparatorWidth(p.$dimension)}px;
`;
