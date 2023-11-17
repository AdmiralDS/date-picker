import type { HTMLAttributes, ReactNode } from 'react';
import type { RuleSet } from 'styled-components';
import styled, { css } from 'styled-components';

import { mediumGroupBorderRadius } from '@admiral-ds/react-ui';

import {
  DATE_CELL_HEIGHT,
  DATE_CELL_WIDTH,
  MONTH_CELL_HEIGHT,
  MONTH_CELL_WIDTH,
  YEAR_CELL_HEIGHT,
  YEAR_CELL_WIDTH,
} from '#src/components/DefaultCell/constants.ts';
import {
  baseDateCellMixin,
  currentDateCellMixin,
  currentDateHolidayDateCellMixin,
  disabledDateCellMixin,
  disabledHolidayDateCellMixin,
  hiddenDateCellMixin,
  holidayDateCellMixin,
  rangeCurrentDateCellMixin,
  rangeCurrentHolidayDateCellMixin,
  rangeDateCellMixin,
  rangeDisabledDateCellMixin,
  rangeDisabledHolidayDateCellMixin,
  rangeHolidayDateCellMixin,
  selectedDateCellMixin,
  baseMonthCellMixin,
  currentMonthCellMixin,
  disabledMonthCellMixin,
  hiddenMonthCellMixin,
  selectedMonthCellMixin,
  baseYearCellMixin,
  currentYearCellMixin,
  disabledYearCellMixin,
  hiddenYearCellMixin,
  selectedYearCellMixin,
  rangeYearCellMixin,
  rangeMonthCellMixin,
  rangeCurrentMonthCellMixin,
  rangeCurrentYearCellMixin,
} from '#src/components/DefaultCell/mixins.tsx';

const CellContainer = styled.div<{ $width: number; $height: number }>`
  position: relative;
  width: ${(p) => p.$width}px;
  height: ${(p) => p.$height}px;
  & > * {
    pointer-events: none;
  }
  cursor: pointer;

  &[data-disabled-cell='true'] {
    cursor: default;
  }
  &[data-hidden-cell='true'] {
    cursor: default;
  }
`;

const rangeLayoutMixin = css<{ $isVisible: boolean; $isSelectingRange: boolean }>`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  background-color: ${(p) =>
    !p.$isVisible
      ? 'transparent'
      : p.$isSelectingRange
      ? p.theme.color['Opacity/Press']
      : p.theme.color['Opacity/Hover']};
`;

const LeftHalf = styled.div<{ $isVisible: boolean; $isSelectingRange: boolean; $isStartOfRow: boolean }>`
  ${rangeLayoutMixin};
  left: 0;
  ${(p) =>
    p.$isStartOfRow &&
    `border-top-left-radius: ${mediumGroupBorderRadius(p.theme.shape)};
     border-bottom-left-radius: ${mediumGroupBorderRadius(p.theme.shape)};`}
`;
const RightHalf = styled.div<{ $isVisible: boolean; $isSelectingRange: boolean; $isEndOfRow: boolean }>`
  ${rangeLayoutMixin};
  right: 0;
  ${(p) =>
    p.$isEndOfRow &&
    `border-top-right-radius: ${mediumGroupBorderRadius(p.theme.shape)};
     border-bottom-right-radius: ${mediumGroupBorderRadius(p.theme.shape)};`}
`;

const Cell = styled.div<{
  $cellMixin: RuleSet<object>;
  $isInRange?: boolean;
  $isRangeStart?: boolean;
  $isRangeEnd?: boolean;
  $isActive?: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  text-align: center;
  width: 100%;
  height: 100%;
  ${(p) => p.$cellMixin}
`;

export interface CellProps extends HTMLAttributes<HTMLDivElement> {
  width: number;
  height: number;
  cellMixin: RuleSet<object>;
  cellContent?: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  hidden?: boolean;

  isInRange?: boolean;
  isRangeStart?: boolean;
  isRangeEnd?: boolean;
  isInRangeSelecting?: boolean;
  isRangeSelectingStart?: boolean;
  isRangeSelectingEnd?: boolean;
  isStartOfRow?: boolean;
  isEndOfRow?: boolean;
  isActive?: boolean;
}

export const DefaultCell = ({
  width,
  height,
  cellMixin,
  cellContent,
  selected,
  disabled,
  hidden,
  isInRange,
  isRangeStart,
  isRangeEnd,
  isInRangeSelecting,
  isRangeSelectingStart,
  isRangeSelectingEnd,
  isStartOfRow,
  isEndOfRow,
  isActive,
  ...props
}: CellProps) => {
  return (
    <CellContainer
      $width={width}
      $height={height}
      data-selected-cell={selected ? true : undefined}
      data-disabled-cell={disabled ? true : undefined}
      data-hidden-cell={hidden ? true : undefined}
      {...props}
    >
      <LeftHalf
        $isVisible={
          !hidden &&
          !(isRangeStart && isRangeEnd) &&
          !(isRangeSelectingStart && isRangeSelectingEnd && !isRangeEnd) &&
          (!!isInRange || !!isRangeEnd || !!isInRangeSelecting || !!isRangeSelectingEnd)
        }
        $isSelectingRange={
          !!isInRangeSelecting || (!!isRangeSelectingEnd && !!isRangeSelectingStart !== isRangeSelectingEnd)
        }
        $isStartOfRow={!!isStartOfRow}
      />
      <RightHalf
        $isVisible={
          !hidden &&
          !(isRangeStart && isRangeEnd) &&
          !(isRangeSelectingStart && isRangeSelectingEnd && !isRangeStart) &&
          (!!isInRange || !!isRangeStart || !!isInRangeSelecting || !!isRangeSelectingStart)
        }
        $isSelectingRange={
          !!isInRangeSelecting || (!!isRangeSelectingStart && isRangeSelectingStart !== !!isRangeSelectingEnd)
        }
        $isEndOfRow={!!isEndOfRow}
      />
      <Cell
        $cellMixin={cellMixin}
        $isInRange={isInRange || isInRangeSelecting}
        $isRangeStart={isRangeStart}
        $isRangeEnd={isRangeEnd}
        $isActive={isActive}
      >
        {cellContent}
      </Cell>
    </CellContainer>
  );
};

export interface DefaultCellProps extends Omit<CellProps, 'width' | 'height' | 'cellMixin'> {
  isCurrent?: boolean;
  isHoliday?: boolean;
}

const getDefaultDateCellMixin = (
  selected?: boolean,
  disabled?: boolean,
  hidden?: boolean,
  isCurrent?: boolean,
  isHoliday?: boolean,
  //isOutsideMonth?: boolean,
  isActive?: boolean,
) => {
  if (hidden) return hiddenDateCellMixin;
  if (disabled && isHoliday) return disabledHolidayDateCellMixin;
  if (disabled) return disabledDateCellMixin;
  //if (isOutsideMonth) return outsideMonthDateCellMixin;
  if (selected) return selectedDateCellMixin;
  if (isActive) return baseDateCellMixin;
  if (isHoliday && isCurrent) return currentDateHolidayDateCellMixin;
  if (isHoliday) return holidayDateCellMixin;
  if (isCurrent) return currentDateCellMixin;
  return baseDateCellMixin;
};
const getDefaultDateRangeCellMixin = (
  selected?: boolean,
  disabled?: boolean,
  hidden?: boolean,
  isCurrent?: boolean,
  isHoliday?: boolean,
  //isOutsideMonth?: boolean,
  isInRange?: boolean,
  isRangeStart?: boolean,
  isRangeEnd?: boolean,
  isActive?: boolean,
) => {
  if (hidden) return hiddenDateCellMixin;
  if (isInRange && disabled && isHoliday) return rangeDisabledHolidayDateCellMixin;
  if (isInRange && isCurrent && isHoliday) return rangeCurrentHolidayDateCellMixin;
  //if (isRangeSelectingStart || isRangeSelectingEnd) return selectingRangeEndDateCellMixin;
  if (isInRange && disabled) return rangeDisabledDateCellMixin;
  if (isInRange && isCurrent) return rangeCurrentDateCellMixin;
  if (disabled && isHoliday) return disabledHolidayDateCellMixin;
  if (disabled) return disabledDateCellMixin;
  if (isActive) return baseDateCellMixin;
  //if (isOutsideMonth) return outsideMonthDateCellMixin;
  if (selected || isRangeStart || isRangeEnd) return selectedDateCellMixin;
  //if (isRangeStart || isRangeEnd) return rangeEndsDateCellMixin;
  if (isInRange && isHoliday) return rangeHolidayDateCellMixin;
  if (isHoliday && isCurrent) return currentDateHolidayDateCellMixin;
  if (isHoliday) return holidayDateCellMixin;
  if (isCurrent) return currentDateCellMixin;
  if (isInRange) return rangeDateCellMixin;
  return baseDateCellMixin;
};
export const DefaultDateCell = ({ isCurrent, isHoliday, ...props }: DefaultCellProps) => {
  const dateCellMixin = getDefaultDateCellMixin(
    props.selected,
    props.disabled,
    props.hidden,
    isCurrent,
    isHoliday,
    props.isActive,
  );
  return (
    <DefaultCell
      width={DATE_CELL_WIDTH}
      height={DATE_CELL_HEIGHT}
      cellMixin={dateCellMixin}
      data-cell-type="dateCell"
      {...props}
    />
  );
};
export const DefaultDateRangeCell = ({ isCurrent, isHoliday, ...props }: DefaultCellProps) => {
  const dateCellMixin = getDefaultDateRangeCellMixin(
    props.selected,
    props.disabled,
    props.hidden,
    isCurrent,
    isHoliday,
    props.isInRange || props.isInRangeSelecting,
    props.isRangeStart || props.isRangeSelectingStart,
    props.isRangeEnd || props.isRangeSelectingEnd,
    props.isActive,
  );
  return (
    <DefaultCell
      width={DATE_CELL_WIDTH}
      height={DATE_CELL_HEIGHT}
      cellMixin={dateCellMixin}
      data-cell-type="dateCell"
      {...props}
    />
  );
};

const getDefaultMonthCellMixin = (
  selected?: boolean,
  disabled?: boolean,
  hidden?: boolean,
  isCurrent?: boolean,
  isActive?: boolean,
) => {
  if (hidden) return hiddenMonthCellMixin;
  if (disabled) return disabledMonthCellMixin;
  if (selected) return selectedMonthCellMixin;
  if (isActive) return baseMonthCellMixin;
  if (isCurrent) return currentMonthCellMixin;
  return baseMonthCellMixin;
};
const getDefaultMonthRangeCellMixin = (
  selected?: boolean,
  disabled?: boolean,
  hidden?: boolean,
  isCurrent?: boolean,
  isInRange?: boolean,
  isRangeStart?: boolean,
  isRangeEnd?: boolean,
  isActive?: boolean,
) => {
  if (hidden) return hiddenMonthCellMixin;
  if (disabled) return disabledMonthCellMixin;
  if (isActive) return baseMonthCellMixin;
  if (selected || isRangeStart || isRangeEnd) return selectedMonthCellMixin;
  if (isInRange && isCurrent) return rangeCurrentMonthCellMixin;
  if (isCurrent) return currentMonthCellMixin;
  if (isInRange) return rangeMonthCellMixin;
  return baseMonthCellMixin;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const DefaultMonthCell = ({ isCurrent, isHoliday, ...props }: DefaultCellProps) => {
  const monthCellMixin = getDefaultMonthCellMixin(
    props.selected,
    props.disabled,
    props.hidden,
    isCurrent,
    props.isActive,
  );
  return (
    <DefaultCell
      width={MONTH_CELL_WIDTH}
      height={MONTH_CELL_HEIGHT}
      cellMixin={monthCellMixin}
      data-cell-type="monthCell"
      {...props}
    />
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const DefaultMonthRangeCell = ({ isCurrent, isHoliday, ...props }: DefaultCellProps) => {
  const monthCellMixin = getDefaultMonthRangeCellMixin(
    props.selected,
    props.disabled,
    props.hidden,
    isCurrent,
    props.isInRange || props.isInRangeSelecting,
    props.isRangeStart || props.isRangeSelectingStart,
    props.isRangeEnd || props.isRangeSelectingEnd,
    props.isActive,
  );
  return (
    <DefaultCell
      width={MONTH_CELL_WIDTH}
      height={MONTH_CELL_HEIGHT}
      cellMixin={monthCellMixin}
      data-cell-type="monthCell"
      {...props}
    />
  );
};

const getDefaultYearCellMixin = (
  selected?: boolean,
  disabled?: boolean,
  hidden?: boolean,
  isCurrent?: boolean,
  isActive?: boolean,
) => {
  if (hidden) return hiddenYearCellMixin;
  if (disabled) return disabledYearCellMixin;
  if (selected) return selectedYearCellMixin;
  if (isActive) return baseYearCellMixin;
  if (isCurrent) return currentYearCellMixin;
  return baseYearCellMixin;
};
const getDefaultYearRangeCellMixin = (
  selected?: boolean,
  disabled?: boolean,
  hidden?: boolean,
  isCurrent?: boolean,
  isInRange?: boolean,
  isRangeStart?: boolean,
  isRangeEnd?: boolean,
  isActive?: boolean,
) => {
  if (hidden) return hiddenYearCellMixin;
  if (disabled) return disabledYearCellMixin;
  if (isActive) return baseYearCellMixin;
  if (selected || isRangeStart || isRangeEnd) return selectedYearCellMixin;
  if (isInRange && isCurrent) return rangeCurrentYearCellMixin;
  if (isCurrent) return currentYearCellMixin;
  if (isInRange) return rangeYearCellMixin;
  return baseYearCellMixin;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const DefaultYearCell = ({ isCurrent, isHoliday, ...props }: DefaultCellProps) => {
  const yearCellMixin = getDefaultYearCellMixin(
    props.selected,
    props.disabled,
    props.hidden,
    isCurrent,
    props.isActive,
  );
  return (
    <DefaultCell
      width={YEAR_CELL_WIDTH}
      height={YEAR_CELL_HEIGHT}
      cellMixin={yearCellMixin}
      data-cell-type="yearCell"
      {...props}
    />
  );
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const DefaultYearRangeCell = ({ isCurrent, isHoliday, ...props }: DefaultCellProps) => {
  const yearCellMixin = getDefaultYearRangeCellMixin(
    props.selected,
    props.disabled,
    props.hidden,
    isCurrent,
    props.isInRange || props.isInRangeSelecting,
    props.isRangeStart || props.isRangeSelectingStart,
    props.isRangeEnd || props.isRangeSelectingEnd,
    props.isActive,
  );
  return (
    <DefaultCell
      width={YEAR_CELL_WIDTH}
      height={YEAR_CELL_HEIGHT}
      cellMixin={yearCellMixin}
      data-cell-type="yearCell"
      {...props}
    />
  );
};
