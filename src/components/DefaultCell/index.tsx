import type { HTMLAttributes, ReactNode } from 'react';
import { memo } from 'react';
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
  dateValue: string;

  isInRange?: boolean;
  isRangeStart?: boolean;
  isRangeEnd?: boolean;
  isInRangeSelecting?: boolean;
  isRangeSelectingStart?: boolean;
  isRangeSelectingEnd?: boolean;
  isStartOfRow?: boolean;
  isEndOfRow?: boolean;
  isActive?: boolean;
  isCurrent?: boolean;
  isHoliday?: boolean;
}

export const DefaultCell = ({
  dateValue,
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
  isCurrent,
  isHoliday,
  ...props
}: CellProps) => {
  return (
    <CellContainer
      $width={width}
      $height={height}
      data-value={dateValue}
      data-selected-cell={selected ? true : undefined}
      data-disabled-cell={disabled ? true : undefined}
      data-hidden-cell={hidden ? true : undefined}
      data-is-current-date={isCurrent ? isCurrent : undefined}
      data-is-active-date={isActive ? isActive : undefined}
      data-is-holyday-date={isHoliday ? isHoliday : undefined}
      //onMouseEnter={() => onCellMouseEnter?.(date, disabled)}
      //onClick={() => onCellClick?.(date, disabled)}
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

export interface DefaultCellProps extends Omit<CellProps, 'width' | 'height' | 'cellMixin'> {}

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
  console.log('render DateCell');

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
export const MemoDefaultDateCell = memo(DefaultDateCell);

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
  console.log('render Cell');
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
export const MemoDefaultDateRangeCell = memo(DefaultDateRangeCell);

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

const getMonthCellDataAttributes = (isCurrent?: boolean, isActive?: boolean): Record<string, any> => {
  return {
    'data-is-current-month': isCurrent ? isCurrent : undefined,
    'data-is-active-month': isActive ? isActive : undefined,
  };
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
      {...getMonthCellDataAttributes(isCurrent, props.isActive)}
      {...props}
    />
  );
};
export const MemoDefaultMonthCell = memo(DefaultMonthCell);

const getMonthRangeCellDataAttributes = (
  isCurrent?: boolean,
  isActive?: boolean,
  isInRange?: boolean,
  isRangeStart?: boolean,
  isRangeEnd?: boolean,
  isInRangeSelecting?: boolean,
  isRangeSelectingStart?: boolean,
  isRangeSelectingEnd?: boolean,
  isStartOfRow?: boolean,
  isEndOfRow?: boolean,
) => {
  return {
    'data-is-current-day-cell': isCurrent ? isCurrent : undefined,
    'data-is-active-cell': isActive ? isActive : undefined,
    'data-is-in-range-cell': isInRange ? isInRange : undefined,
    'data-is-range-start-cell': isRangeStart ? isRangeStart : undefined,
    'data-is-range-end-cell': isRangeEnd ? isRangeEnd : undefined,
    'data-is-in-range-selecting-cell': isInRangeSelecting ? isInRangeSelecting : undefined,
    'data-is-range-selecting-start-cell': isRangeSelectingStart ? isRangeSelectingStart : undefined,
    'data-is-range-selecting-end-cell': isRangeSelectingEnd ? isRangeSelectingEnd : undefined,
    'data-is-start-of-week-cell': isStartOfRow ? isStartOfRow : undefined,
    'data-is-end-of-week-cell': isEndOfRow ? isEndOfRow : undefined,
  };
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
      {...getMonthRangeCellDataAttributes(
        isCurrent,
        props.isActive,
        props.isInRange,
        props.isRangeStart,
        props.isRangeEnd,
        props.isInRangeSelecting,
        props.isRangeSelectingStart,
        props.isRangeSelectingEnd,
        props.isStartOfRow,
        props.isEndOfRow,
      )}
      {...props}
    />
  );
};
export const MemoDefaultMonthRangeCell = memo(DefaultMonthRangeCell);

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

const getYearCellDataAttributes = (isCurrent?: boolean, isActive?: boolean): Record<string, any> => {
  return {
    'data-is-current-year': isCurrent ? isCurrent : undefined,
    'data-is-active-year': isActive ? isActive : undefined,
  };
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
      {...getYearCellDataAttributes(!!isCurrent, props.isActive)}
      {...props}
    />
  );
};
export const MemoDefaultYearCell = memo(DefaultYearCell);

const getYearRangeCellDataAttributes = (
  isCurrent?: boolean,
  isActive?: boolean,
  isInRange?: boolean,
  isRangeStart?: boolean,
  isRangeEnd?: boolean,
  isInRangeSelecting?: boolean,
  isRangeSelectingStart?: boolean,
  isRangeSelectingEnd?: boolean,
  isStartOfRow?: boolean,
  isEndOfRow?: boolean,
) => {
  return {
    'data-is-current-day-cell': isCurrent ? isCurrent : undefined,
    'data-is-active-cell': isActive ? isActive : undefined,
    'data-is-in-range-cell': isInRange ? isInRange : undefined,
    'data-is-range-start-cell': isRangeStart ? isRangeStart : undefined,
    'data-is-range-end-cell': isRangeEnd ? isRangeEnd : undefined,
    'data-is-in-range-selecting-cell': isInRangeSelecting ? isInRangeSelecting : undefined,
    'data-is-range-selecting-start-cell': isRangeSelectingStart ? isRangeSelectingStart : undefined,
    'data-is-range-selecting-end-cell': isRangeSelectingEnd ? isRangeSelectingEnd : undefined,
    'data-is-start-of-week-cell': isStartOfRow ? isStartOfRow : undefined,
    'data-is-end-of-week-cell': isEndOfRow ? isEndOfRow : undefined,
  };
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
      {...getYearRangeCellDataAttributes(
        !!isCurrent,
        props.isActive,
        props.isInRange,
        props.isRangeStart,
        props.isRangeEnd,
        props.isInRangeSelecting,
        props.isRangeSelectingStart,
        props.isRangeSelectingEnd,
        props.isStartOfRow,
        props.isEndOfRow,
      )}
      {...props}
    />
  );
};
export const MemoDefaultYearRangeCell = memo(DefaultYearRangeCell);
