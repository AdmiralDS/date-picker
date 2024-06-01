import { mediumGroupBorderRadius } from '@admiral-ds/react-ui';
import styled from 'styled-components';

export const PopoverPanel = styled.div`
  border: none;
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  ${(p) => p.theme.shadow['Shadow 08']}
`;
