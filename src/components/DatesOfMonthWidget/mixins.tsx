import { css } from 'styled-components';
import { typography } from '@admiral-ds/react-ui';
import { DAY_CELL_PADDING } from '#src/components/DatesOfMonthWidget/constants';

const baseCellMixin = css`
  padding: ${DAY_CELL_PADDING};
  ${typography['Body/Body 2 Long']}
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
  border-radius: 50%;
  border: 1px ${(p) => p.theme.color['Special/Elevated BG']} solid;
`;

export const baseDateCellMixin = css`
  ${baseCellMixin};
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  &:hover {
    border-color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
  }
`;

export const selectedDateCellMixin = css`
  ${baseCellMixin};
  background-color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
  border-color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
  color: ${(p) => p.theme.color['Special/Static White']};
  &:hover {
    background-color: ${(p) => p.theme.color['Primary/Primary 70']};
    border-color: ${(p) => p.theme.color['Primary/Primary 70']};
  }
`;

export const disabledDateCellMixin = css`
  ${baseCellMixin};
  color: ${(p) => p.theme.color['Neutral/Neutral 30']};
`;

export const hiddenDateCellMixin = css`
  ${baseCellMixin};
  color: ${(p) => p.theme.color['Special/Elevated BG']};
`;

export const holidayDateCellMixin = css`
  ${baseCellMixin};
  color: ${(p) => p.theme.color['Error/Error 60 Main']};
  &:hover {
    border-color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
  }
`;

export const disabledHolidayDateCellMixin = css`
  ${baseCellMixin};
  color: ${(p) => p.theme.color['Error/Error 30']};
`;

export const currentDateCellMixin = css`
  ${baseCellMixin};
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  border-color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  &:hover {
    border-color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
  }
`;

export const currentDateHolidayDateCellMixin = css`
  ${currentDateCellMixin};
  ${holidayDateCellMixin};
  border-color: ${(p) => p.theme.color['Neutral/Neutral 90']};
`;

export const outsideMonthDateCellMixin = css`
  ${baseCellMixin};
  cursor: default;
  color: ${(p) => p.theme.color['Neutral/Neutral 20']};
`;

export const rangeDateCellMixin = css`
  ${baseCellMixin};
  background-color: transparent;
  border-color: transparent;

  &:hover {
    background-color: ${(p) => p.theme.color['Special/Elevated BG']};
    border-color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
  }
`;

export const rangeHolidayDateCellMixin = css`
  color: ${(p) => p.theme.color['Error/Error 60 Main']};
  ${rangeDateCellMixin}
`;

export const baseDayNameCellMixin = css`
  ${baseCellMixin};
  cursor: default;
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
`;
