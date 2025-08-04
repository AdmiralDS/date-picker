import styled, { css } from 'styled-components';
import { vars, textValues } from '@admiral-ds/web';
import { InputDimension } from './types';

const sSizeMixin = css`
  padding-inline-start: 12px;
  padding-inline-end: 12px;
  height: 32px;
  & * {
    line-height: 32px;
    ${textValues['Body/Body 2 Long']}
  }
`;
const mSizeMixin = css`
  height: 40px;
  & * {
    line-height: 40px;
  }
`;
const xlSizeMixin = css`
  height: 56px;
  & * {
    line-height: 56px;
  }
`;

function getSizeMixin(dimension?: InputDimension) {
  switch (dimension) {
    case 'xl':
      return xlSizeMixin;
    case 's':
      return sSizeMixin;
    case 'm':
    default:
      return mSizeMixin;
  }
}

export interface InputBoxProps extends React.InputHTMLAttributes<HTMLDivElement> {
  /** Делает высоту компонента больше или меньше обычной */
  $dimension?: InputDimension;
}

export const FocusBox = styled.div<{ $dimension?: InputDimension }>`
  cursor: text;
  display: inline-flex;
  overflow: hidden;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: stretch;

  padding: 0;
  padding-inline-start: 16px;
  padding-inline-end: 16px;

  & * {
    ${textValues['Body/Body 1 Long']}
  }
  ${(p) => getSizeMixin(p.$dimension)}

  box-sizing: border-box;
  border-radius: 4px;

  background: transparent;
  /* https://stackoverflow.com/questions/69658462/inset-box-shadow-visual-artifacts-in-google-chrome */
  transform: translate3d(0, 0, 0);
  box-shadow: 0px 0px 0px 1px ${vars.color.Neutral_Neutral40} inset;

  &:hover:not(:focus-within) {
    box-shadow: 0px 0px 0px 1px ${vars.color.Neutral_Neutral60} inset;
  }

  &:focus-within {
    box-shadow: 0px 0px 0px 2px ${vars.color.Primary_Primary60Main} inset;
  }

  transition: box-shadow 0.3s ease-in-out;
`;

export const InputBox = FocusBox;
