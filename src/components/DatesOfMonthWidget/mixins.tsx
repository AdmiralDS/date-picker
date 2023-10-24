import { css } from 'styled-components';
import { typography } from '@admiral-ds/react-ui';
import { DAY_CELL_PADDING } from '#src/components/DatesOfMonthWidget/constants';

const baseCellMixin = css`
  padding: ${DAY_CELL_PADDING};
  ${typography['Body/Body 2 Long']}
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
  border-radius: 50%;
  border: 1px ${(p) => p.theme.color['Special/Elevated BG']} solid;
`;

export const baseDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseCellMixin};
  ${(p) => p.$isActive && `border-color: ${p.theme.color['Primary/Primary 60 Main']};`}
`;

export const selectedDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseCellMixin};
  background-color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
  border-color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
  color: ${(p) => p.theme.color['Special/Static White']};
  ${(p) =>
    p.$isActive &&
    `background-color: ${p.theme.color['Primary/Primary 70']};
     border-color: ${p.theme.color['Primary/Primary 70']};`}
`;

export const disabledDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseCellMixin};
  color: ${(p) => p.theme.color['Neutral/Neutral 30']};
`;

export const rangeDisabledDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseCellMixin};
  color: ${(p) => p.theme.color['Neutral/Neutral 30']};
  background-color: transparent;
  border-color: transparent;
`;

export const hiddenDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseCellMixin};
  color: ${(p) => p.theme.color['Special/Elevated BG']};
`;

export const holidayDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseCellMixin};
  color: ${(p) => p.theme.color['Error/Error 60 Main']};
  ${(p) => p.$isActive && `border-color: ${p.theme.color['Primary/Primary 60 Main']};`}
`;

export const disabledHolidayDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseCellMixin};
  color: ${(p) => p.theme.color['Error/Error 30']};
`;

export const rangeDisabledHolidayDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseCellMixin};
  background-color: transparent;
  border-color: transparent;
  color: ${(p) => p.theme.color['Error/Error 30']};
`;

export const currentDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseCellMixin};
  border-color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  ${(p) => p.$isActive && `border-color: ${p.theme.color['Primary/Primary 60 Main']};`}
`;

export const currentDateHolidayDateCellMixin = css<{ $isActive?: boolean }>`
  ${currentDateCellMixin};
  ${holidayDateCellMixin};
  border-color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  ${(p) => p.$isActive && `border-color: ${p.theme.color['Primary/Primary 60 Main']};`}
`;

export const outsideMonthDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseCellMixin};
  cursor: default;
  color: ${(p) => p.theme.color['Neutral/Neutral 20']};
`;

export const rangeDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseCellMixin};
  background-color: transparent;
  border-color: transparent;

  ${(p) =>
    p.$isActive &&
    `background-color: ${p.theme.color['Special/Elevated BG']};
     border-color: ${p.theme.color['Primary/Primary 60 Main']};`}
`;

export const rangeHolidayDateCellMixin = css<{ $isActive?: boolean }>`
  color: ${(p) => p.theme.color['Error/Error 60 Main']};
  ${rangeDateCellMixin}
`;

export const baseDayNameCellMixin = css`
  ${baseCellMixin};
  cursor: default;
`;
