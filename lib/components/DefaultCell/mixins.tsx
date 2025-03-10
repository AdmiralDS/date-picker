import { css } from 'styled-components';
import { vars, textValues } from '@admiral-ds/web';
import { CELL_PADDING } from '#lib/DefaultCell/constants.ts';

//<editor-fold desc="Base cell mixins">
const baseCellMixin = css`
  padding: ${CELL_PADDING};
  ${textValues['Body/Body 2 Long']}
  color: ${vars.color.Neutral_Neutral90};
  background-color: ${vars.color.Special_ElevatedBG};
  border: 1px ${vars.color.Special_ElevatedBG} solid;
`;

const activeCellMixin = css<{ $isActive?: boolean }>`
  ${(p) => (p.$isActive ? `border-color: ${vars.color.Primary_Primary60Main};` : '')}
`;

const activeRangeCellMixin = css<{ $isActive?: boolean }>`
  ${(p) =>
    p.$isActive
      ? `background-color: ${vars.color.Special_ElevatedBG};
         border-color: ${vars.color.Primary_Primary60Main};`
      : ''}
`;

const selectedCellMixin = css<{ $isActive?: boolean }>`
  background-color: ${vars.color.Primary_Primary60Main};
  border-color: ${vars.color.Primary_Primary60Main};
  color: ${vars.color.Special_StaticWhite};
  ${(p) =>
    p.$isActive
      ? `background-color: ${vars.color.Primary_Primary70};
         border-color: ${vars.color.Primary_Primary70};`
      : ''}
`;

const hiddenCellMixin = css`
  color: ${vars.color.Special_ElevatedBG};
`;

const currentCellMixin = css`
  border-color: ${vars.color.Neutral_Neutral90};
`;

const disabledCellMixin = css`
  color: ${vars.color.Neutral_Neutral30};
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
  background-color: ${vars.color.Primary_Primary70};
  border-color: ${vars.color.Primary_Primary70};
  color: ${vars.color.Special_StaticWhite};
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
  ${activeCellMixin};
  color: ${vars.color.Error_Error60Main};
`;

export const disabledHolidayDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseDateMixin};
  color: ${vars.color.Error_Error30};
`;

export const disabledCurrentDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseDateMixin};
  ${currentCellMixin};
  border-color: ${vars.color.Neutral_Neutral30};
  ${disabledCellMixin}
`;

export const disabledCurrentHolidayDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseDateMixin};
  ${currentCellMixin};
  border-color: ${vars.color.Neutral_Neutral30};
  color: ${vars.color.Error_Error30};
`;

export const rangeDisabledHolidayDateCellMixin = css<{ $isActive?: boolean }>`
  ${baseDateMixin};
  ${rangeCellMixin};
  color: ${vars.color.Error_Error30};
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
  color: ${vars.color.Neutral_Neutral20};
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
  color: ${vars.color.Error_Error60Main};
`;

export const rangeCurrentHolidayDateCellMixin = css<{ $isActive?: boolean }>`
  ${rangeCurrentDateCellMixin};
  color: ${vars.color.Error_Error60Main};
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
  ${(p) => (p.$isCurrent ? `border-color: ${vars.color.Neutral_Neutral90};` : '')}
  ${(p) =>
    p.$isSelected
      ? `border-color: ${vars.color.Primary_Primary60Main};
         background-color: ${vars.color.Primary_Primary60Main};`
      : ''}
  ${(p) =>
    p.$isActive
      ? p.$isSelected
        ? `border-color: ${vars.color.Primary_Primary70};
           background-color: ${vars.color.Primary_Primary70};`
        : `border-color: ${vars.color.Primary_Primary60Main};`
      : ''}
  ${(p) =>
    p.$disabled
      ? `color: ${vars.color.Neutral_Neutral30};
         border-color: ${vars.color.Special_ElevatedBG};`
      : ''}
  ${(p) =>
    p.$hidden
      ? `color: ${vars.color.Special_ElevatedBG};
         border-color: ${vars.color.Special_ElevatedBG};`
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
