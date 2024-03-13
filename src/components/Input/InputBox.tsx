import type { ComponentProps } from 'react';
import styled from 'styled-components';

export type InputBoxProps = ComponentProps<'div'> & {
  'data-size'?: 'xl' | 'm' | 's';
};

export const FocusBox = styled.div`
  display: inline-flex;
  overflow: hidden;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: stretch;

  height: 40px;
  padding: 0;
  :first-child {
    padding-inline-start: 16px;
  }
  :last-child {
    padding-inline-end: 16px;
  }
  & * {
    ${(p) => p.theme.typography['Body/Body 1 Long']}
    line-height: 40px;
  }
  &[data-size='xl'] {
    height: 56px;
    & * {
      line-height: 56px;
    }
  }
  &[data-size='s'] {
    height: 32px;
    :first-child {
      padding-inline-start: 12px;
    }
    :last-child {
      padding-inline-end: 12px;
    }
    & * {
      ${(p) => p.theme.typography['Body/Body 2 Long']}
      line-height: 32px;
    }
  }

  box-sizing: border-box;
  border-radius: 4px;

  background: transparent;

  box-shadow: 0px 0px 0px 1px ${(p) => p.theme.color['Neutral/Neutral 40']} inset;

  &:hover:not(:focus-within) {
    box-shadow: 0px 0px 0px 1px ${(p) => p.theme.color['Neutral/Neutral 60']} inset;
  }

  &:focus-within {
    box-shadow: 0px 0px 0px 2px ${(p) => p.theme.color['Primary/Primary 60 Main']} inset;
  }

  transition: box-shadow 0.3s ease-in-out;
`;

export const InputBox = ({ ...props }: InputBoxProps) => {
  return <FocusBox {...props}></FocusBox>;
};
