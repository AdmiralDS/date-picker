import { css } from 'styled-components';
import { typography } from '@admiral-ds/react-ui';
import { CELL_PADDING } from '#src/components/DefaultCell/constants.ts';

//<editor-fold desc="Base cell mixins">
const baseCellMixin = css`
  padding: ${CELL_PADDING};
  ${typography['Body/Body 2 Long']}
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
  border: 1px ${(p) => p.theme.color['Special/Elevated BG']} solid;
`;

const activeCellMixin = css<{ $isActive?: boolean }>`
  ${(p) => (p.$isActive ? `border-color: ${p.theme.color['Primary/Primary 60 Main']};` : '')}
`;

const activeRangeCellMixin = css<{ $isActive?: boolean }>`
  ${(p) =>
    p.$isActive
      ? `background-color: ${p.theme.color['Special/Elevated BG']};
         border-color: ${p.theme.color['Primary/Primary 60 Main']};`
      : ''}
`;

const selectedCellMixin = css<{ $isActive?: boolean }>`
  background-color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
  border-color: ${(p) => p.theme.color['Primary/Primary 60 Main']};
  color: ${(p) => p.theme.color['Special/Static White']};
  ${(p) =>
    p.$isActive
      ? `background-color: ${p.theme.color['Primary/Primary 70']};
         border-color: ${p.theme.color['Primary/Primary 70']};`
      : ''}
`;

const hiddenCellMixin = css`
  color: ${(p) => p.theme.color['Special/Elevated BG']};
`;

const currentCellMixin = css`
  border-color: ${(p) => p.theme.color['Neutral/Neutral 90']};
`;

const disabledCellMixin = css`
  color: ${(p) => p.theme.color['Neutral/Neutral 30']};
`;

const rangeCellMixin = css`
  background-color: transparent;
  border-color: transparent;
`;
//</editor-fold>

//<editor-fold desc="Date cell mixins">
const baseDateMixin = css`
  ${baseCellMixin};
  border-radius: 50%;
`;
export const baseDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseDateMixin};
  ${activeCellMixin};
`;

export const selectedDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseDateMixin};
  ${selectedCellMixin};
`;

/*export const selectingRangeEndDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseDateMixin};
  background-color: ${(p) => p.theme.color['Primary/Primary 70']};
  border-color: ${(p) => p.theme.color['Primary/Primary 70']};
  color: ${(p) => p.theme.color['Special/Static White']};
`;*/

export const disabledDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseDateMixin};
  ${disabledCellMixin};
`;

export const rangeDisabledDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseDateMixin};
  ${disabledCellMixin};
  ${rangeCellMixin};
`;

export const hiddenDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseDateMixin};
  ${hiddenCellMixin};
`;

export const holidayDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseDateMixin};
  color: ${(p) => p.theme.color['Error/Error 60 Main']};
  ${activeCellMixin};
`;

export const disabledHolidayDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseDateMixin};
  color: ${(p) => p.theme.color['Error/Error 30']};
`;

export const rangeDisabledHolidayDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseDateMixin};
  ${rangeCellMixin};
  color: ${(p) => p.theme.color['Error/Error 30']};
`;

export const currentDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseDateMixin};
  ${currentCellMixin};
  ${activeCellMixin};
`;

export const currentDateHolidayDateCellMixin = css<{ $isActive?: boolean }>`
  ${currentDateCellMixin};
  ${holidayDateCellMixin};
  ${currentCellMixin};
  ${activeCellMixin};
`;

/*export const outsideMonthDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseDateMixin};
  cursor: default;
  color: ${(p) => p.theme.color['Neutral/Neutral 20']};
`;*/

export const rangeDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseDateMixin};
  ${rangeCellMixin};

  ${activeRangeCellMixin};
`;

export const rangeCurrentDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseDateMixin};
  ${rangeCellMixin};
  ${currentCellMixin};

  ${activeRangeCellMixin};
`;

export const rangeHolidayDateCellMixin = css<{ $isActive?: boolean }>`
  ${rangeDateCellMixin};
  color: ${(p) => p.theme.color['Error/Error 60 Main']};
`;

export const rangeCurrentHolidayDateCellMixin = css<{ $isActive?: boolean }>`
  ${rangeCurrentDateCellMixin};
  color: ${(p) => p.theme.color['Error/Error 60 Main']};
`;
//</editor-fold>

//<editor-fold desc="Day name cell mixins">
export const baseDayNameCellMixin = css`
  ${baseCellMixin};
  cursor: default;
`;
//</editor-fold>

//<editor-fold desc="Month cell mixins">
const baseMonthMixin = css`
  ${baseCellMixin};
  border-radius: 18px;
`;

export const baseMonthCellMixin = css<{ $isActive?: boolean }>`
  ${baseMonthMixin};
  ${activeCellMixin};
`;

export const selectedMonthCellMixin = css<{ $isActive?: boolean }>`
  ${baseMonthMixin};
  ${selectedCellMixin};
`;

export const disabledMonthCellMixin = css`
  ${baseMonthMixin};
  ${disabledCellMixin};
`;

export const hiddenMonthCellMixin = css`
  ${baseMonthMixin};
  ${hiddenCellMixin};
`;

export const currentMonthCellMixin = css<{ $isActive?: boolean }>`
  ${baseMonthMixin};
  ${currentCellMixin};
  ${activeCellMixin};
`;

export const rangeMonthCellMixin = css<{ $isActive?: boolean }>`
  ${baseMonthMixin};
  ${rangeCellMixin};

  ${activeRangeCellMixin};
`;

export const rangeCurrentMonthCellMixin = css<{ $isActive?: boolean }>`
  ${baseMonthMixin};
  ${rangeCellMixin};
  ${currentCellMixin};

  ${activeRangeCellMixin};
`;

export const monthCellMixin = css<{
  $isActive?: boolean;
  $isSelected?: boolean;
  $isCurrent?: boolean;
  $disabled?: boolean;
  $hidden?: boolean;
}>`
  ${baseMonthMixin};
  ${(p) => (p.$isCurrent ? `border-color: ${p.theme.color['Neutral/Neutral 90']};` : '')}
  ${(p) =>
    p.$isSelected
      ? `border-color: ${p.theme.color['Primary/Primary 60 Main']};
         background-color: ${p.theme.color['Primary/Primary 60 Main']};`
      : ''}
  ${(p) =>
    p.$isActive
      ? p.$isSelected
        ? `border-color: ${p.theme.color['Primary/Primary 70']};
           background-color: ${p.theme.color['Primary/Primary 70']};`
        : `border-color: ${p.theme.color['Primary/Primary 60 Main']};`
      : ''}
  ${(p) =>
    p.$disabled
      ? `color: ${p.theme.color['Neutral/Neutral 30']};
         border-color: ${p.theme.color['Special/Elevated BG']};`
      : ''}
  ${(p) =>
    p.$hidden
      ? `color: ${p.theme.color['Special/Elevated BG']};
         border-color: ${p.theme.color['Special/Elevated BG']};`
      : ''}
`;
//</editor-fold>

//<editor-fold desc="Year cell mixins">
const baseYearMixin = css`
  ${baseCellMixin};
  border-radius: 18px;
`;

export const baseYearCellMixin = css<{ $isActive?: boolean }>`
  ${baseYearMixin};
  ${activeCellMixin};
`;

export const selectedYearCellMixin = css<{ $isActive?: boolean }>`
  ${baseYearMixin};
  ${selectedCellMixin};
`;

export const disabledYearCellMixin = css`
  ${baseYearMixin};
  ${disabledCellMixin};
`;

export const hiddenYearCellMixin = css`
  ${baseYearMixin};
  ${hiddenCellMixin};
`;

export const currentYearCellMixin = css<{ $isActive?: boolean }>`
  ${baseYearMixin};
  ${currentCellMixin};
  ${activeCellMixin};
`;

export const rangeYearCellMixin = css<{ $isActive?: boolean }>`
  ${baseYearMixin};
  ${rangeCellMixin};

  ${activeRangeCellMixin};
`;

export const rangeCurrentYearCellMixin = css<{ $isActive?: boolean }>`
  ${baseYearMixin};
  ${rangeCellMixin};
  ${currentCellMixin};

  ${activeRangeCellMixin};
`;
//</editor-fold>
