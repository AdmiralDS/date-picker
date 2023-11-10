import { css } from 'styled-components';
import { typography } from '@admiral-ds/react-ui';
import { CELL_PADDING } from '#src/components/calendarConstants.ts';

const baseCellMixin = css`
  padding: ${CELL_PADDING};
  ${typography['Body/Body 2 Long']}
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  border-radius: 18px;
  border: 1px ${(p) => p.theme.color['Special/Elevated BG']} solid;
`;

export const baseYearCellMixin = css<{ $isActive?: boolean }>`
  ${baseCellMixin};
  ${(p) => (p.$isActive ? `border-color: ${p.theme.color['Primary/Primary 60 Main']};` : '')}
`;

export const selectedYearCellMixin = css<{ $isActive?: boolean }>`
  ${baseCellMixin};
  background-color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
  border-color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
  color: ${(p) => p.theme.color['Special/Static White']};
  ${(p) =>
    p.$isActive
      ? `border-color: ${p.theme.color['Primary/Primary 70']};
         background-color: ${p.theme.color['Primary/Primary 70']};`
      : ''}
`;

export const disabledYearCellMixin = css`
  ${baseCellMixin};
  color: ${(p) => p.theme.color['Neutral/Neutral 30']};
`;

export const hiddenYearCellMixin = css`
  ${baseCellMixin};
  color: ${(p) => p.theme.color['Special/Elevated BG']};
`;

export const currentYearCellMixin = css<{ $isActive?: boolean }>`
  ${baseCellMixin};
  border-color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  ${(p) => (p.$isActive ? `border-color: ${p.theme.color['Primary/Primary 60 Main']};` : '')}
`;
