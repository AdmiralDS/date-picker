import { css } from 'styled-components';
import { typography } from '@admiral-ds/react-ui';
import { CELL_PADDING } from '#src/components/DatesOfMonthWidget/constants';

const baseCellMixin = css`
  padding: ${CELL_PADDING};
  ${typography['Body/Body 2 Long']}
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
`;

export const baseDateCellMixin = css`
  ${baseCellMixin};
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  &:hover {
    padding: 7px 0;
    border: 1px ${(p) => p.theme.color['Primary/Primary 60 Main']} solid;
    border-radius: 50%;
  }
`;

export const selectedDateCellMixin = css`
  ${baseCellMixin};
  background-color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
  color: ${(p) => p.theme.color['Special/Static White']};
  border-radius: 50%;
  &:hover {
    background-color: ${(p) => p.theme.color['Primary/Primary 70']};
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
    padding: 7px 0;
    border: 1px ${(p) => p.theme.color['Primary/Primary 60 Main']} solid;
    border-radius: 50%;
  }
`;

export const disabledHolidayDateCellMixin = css`
  ${baseCellMixin};
  color: ${(p) => p.theme.color['Error/Error 30']};
`;

export const todayDateCellMixin = css`
  ${baseCellMixin};
  padding: 7px 0;
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  border: 1px ${(p) => p.theme.color['Neutral/Neutral 90']} solid;
  border-radius: 50%;
  &:hover {
    border-color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
  }
`;

export const todayHolidayDateCellMixin = css`
  ${todayDateCellMixin};
  ${holidayDateCellMixin};
  padding: 7px 0;
`;

export const outsideMonthDateCellMixin = css`
  ${baseCellMixin};
  cursor: default;
  color: ${(p) => p.theme.color['Neutral/Neutral 20']};
`;

export const baseDayNameCellMixin = css`
  ${baseCellMixin};
  cursor: default;
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
`;
