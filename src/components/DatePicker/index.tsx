import styled from 'styled-components';

export const InputBox = styled.div`
  display: inline-flex;
  overflow: hidden;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-end;
  align-items: stretch;

  height: 56px;
  padding: 0;

  :first-child {
    padding-inline-start: 16px;
  }
  :last-child {
    padding-inline-end: 16px;
  }

  box-sizing: border-box;
  border-radius: 4px;
  /* Neutral/Neutral White */
  background: rgb(255, 255, 255);

  /* Neutral/Neutral 40 */
  box-shadow: 0px 0px 0px 1px rgb(155, 160, 170) inset;

  &:hover:not(:focus-within) {
    /* Neutral/Neutral 60 */
    box-shadow: 0px 0px 0px 1px rgb(100, 105, 115) inset;
  }

  &:focus-within {
    /* Primary/Primary 60 Main */
    box-shadow: 0px 0px 0px 2px rgb(0, 98, 255) inset;
  }
`;

export const InputLine = styled.input`
  border: none;
  outline: none;
  appearance: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  text-overflow: ellipsis;
  padding: 0;
  min-width: 0;
  display: block;
  flex: 1 1 auto;
  ${(p) => p.theme.typography['Body/Body 1 Long']}

  line-height: 56px;
`;

export const Separator = styled.div`
  flex: 1 0 auto;
  ${(p) => p.theme.typography['Body/Body 1 Long']}
  line-height: 56px;
`;
export type DatePickerProps = {
  onCange: () => void;
};
