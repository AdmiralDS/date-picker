import { css } from 'styled-components';
import { typography } from '@admiral-ds/react-ui';
import { YEAR_CELL_PADDING } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';

const baseCellMixin = css`
  padding: ${YEAR_CELL_PADDING};
  ${typography['Body/Body 2 Long']}
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
`;

export const baseYearCellMixin = css`
  ${baseCellMixin};
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  &:hover {
    padding: 7px 0;
    border: 1px ${(p) => p.theme.color['Primary/Primary 60 Main']} solid;
    border-radius: 18px;
  }
`;

export const selectedYearCellMixin = css`
  ${baseCellMixin};
  background-color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
  color: ${(p) => p.theme.color['Special/Static White']};
  border-radius: 18px;
  &:hover {
    background-color: ${(p) => p.theme.color['Primary/Primary 70']};
  }
`;

export const disabledYearCellMixin = css`
  ${baseCellMixin};
  color: ${(p) => p.theme.color['Neutral/Neutral 30']};
`;

export const hiddenYearCellMixin = css`
  ${baseCellMixin};
  color: ${(p) => p.theme.color['Special/Elevated BG']};
`;

export const holidayYearCellMixin = css`
  ${baseCellMixin};
  color: ${(p) => p.theme.color['Error/Error 60 Main']};
  &:hover {
    padding: 7px 0;
    border: 1px ${(p) => p.theme.color['Primary/Primary 60 Main']} solid;
    border-radius: 18px;
  }
`;

export const disabledHolidayYearCellMixin = css`
  ${baseCellMixin};
  color: ${(p) => p.theme.color['Error/Error 30']};
`;

export const currentYearCellMixin = css`
  ${baseCellMixin};
  padding: 7px 0;
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  border: 1px ${(p) => p.theme.color['Neutral/Neutral 90']} solid;
  border-radius: 18px;
  &:hover {
    border-color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
  }
`;

export const currentHolidayYearCellMixin = css`
  ${currentYearCellMixin};
  ${holidayYearCellMixin};
  padding: 7px 0;
`;

export const outsideYearsYearCellMixin = css`
  ${baseCellMixin};
  cursor: default;
  color: ${(p) => p.theme.color['Neutral/Neutral 20']};
`;
