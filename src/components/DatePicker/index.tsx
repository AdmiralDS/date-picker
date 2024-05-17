import styled from 'styled-components';

export const Separator = styled.div`
  flex: 0 0 auto;
  ${(p) => p.theme.typography['Body/Body 1 Long']}
  text-align: center;
  line-height: 56px;
`;
export type DatePickerProps = {
  onCange: () => void;
};
