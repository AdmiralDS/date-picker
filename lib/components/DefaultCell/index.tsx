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
} from '#lib/DefaultCell/constants.ts';
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
  disabledCurrentDateCellMixin,
  disabledCurrentHolidayDateCellMixin,
} from '#lib/DefaultCell/mixins.tsx';

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
  background-color: ${(p) => (p.$isVisible ? p.theme.color['Opacity/Focus'] : 'transparent')};
`;

const LeftHalf = styled.div<{
  $isVisible: boolean;
  $isSelectingRange: boolean;
  $isStartOfRow: boolean;
}>`
  ${rangeLayoutMixin};
  left: 0;
  ${(p) =>
    p.$isStartOfRow &&
    `border-top-left-radius: ${mediumGroupBorderRadius(p.theme.shape)};
     border-bottom-left-radius: ${mediumGroupBorderRadius(p.theme.shape)};`}
`;
const RightHalf = styled.div<{
  $isVisible: boolean;
  $isSelectingRange: boolean;
  $isEndOfRow: boolean;
}>`
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

export interface DateAttributes {
  /** Дата недоступна для выбора */
  disabled?: boolean;
  /** Дата скрыта */
  hidden?: boolean;
  /** Дата является выходным или праздничным днем */
  isHoliday?: boolean;
}

export interface CellProps extends HTMLAttributes<HTMLDivElement>, DateAttributes {
  /** Ширина ячейки */
  width: number;
  /** Высота ячейки */
  height: number;

  /** Дата в формате string для аттрибута data-date */
  formattedDate?: string;

  /** timestamp для data-value */
  dateValue: string | number;
  /** Данные для отображения в ячейке (дата, месяц или год в необходимом формате) */
  cellContent?: ReactNode;
  cellMixin: RuleSet<object>;
  /** Дата является выбранной */
  selected?: boolean;
  /** Дата, на которой в данный момент ховер */
  isActive?: boolean;
  /** Сегодняшняя дата */
  isCurrent?: boolean;
  /** Дата вне месяца для отображения */
  isOutsideMonth?: boolean;

  /** Дата находится в выбранном диапазоне (selectedDateRange) */
  isInRange?: boolean;
  /** Дата является началом выбранного ранее диапазона */
  isRangeStart?: boolean;
  /** Дата является концом выбранного ранее диапазона */
  isRangeEnd?: boolean;
  /** Дата находится в текущем выбираемом диапазоне
   * (определен только один конец выбираемого отрезка) */
  isInRangeSelecting?: boolean;
  /** Дата является началом выбираемого сейчас диапазона */
  isRangeSelectingStart?: boolean;
  /** Дата является концом выбираемого сейчас диапазона */
  isRangeSelectingEnd?: boolean;
  /** Дата является первой в отображении ряда (недели/месяца/диапазона лет) */
  isStartOfRow?: boolean;
  /** Дата является последней в отображении ряда (недели/месяца/диапазона лет) */
  isEndOfRow?: boolean;
}

const leftHalfIsVisible = (
  hidden: boolean,
  isInRange: boolean,
  isRangeStart: boolean,
  isRangeEnd: boolean,
  isInRangeSelecting: boolean,
  isRangeSelectingStart: boolean,
  isRangeSelectingEnd: boolean,
) => {
  //is not visible
  if (hidden) return false;
  if (isRangeStart && isRangeEnd && isRangeSelectingStart && isRangeSelectingEnd) return false;
  if (isRangeSelectingStart && isRangeSelectingEnd && !isRangeEnd) return false;
  if (isRangeStart && isRangeSelectingStart) return false;

  //is visible
  if (isInRange || isInRangeSelecting) return true;
  if (isRangeStart && isRangeEnd && isRangeSelectingEnd && !isRangeSelectingStart) return true;
  return isRangeSelectingEnd || isRangeEnd;
};

const rightHalfIsVisible = (
  hidden: boolean,
  isInRange: boolean,
  isRangeStart: boolean,
  isRangeEnd: boolean,
  isInRangeSelecting: boolean,
  isRangeSelectingStart: boolean,
  isRangeSelectingEnd: boolean,
) => {
  //is not visible
  if (hidden) return false;
  if (isRangeStart && isRangeEnd && isRangeSelectingStart && isRangeSelectingEnd) return false;
  if (isRangeSelectingStart && isRangeSelectingEnd && !isRangeStart) return false;
  if (isRangeEnd && isRangeSelectingEnd) return false;

  //is visible
  if (isInRange || isInRangeSelecting) return true;
  if (isRangeStart && isRangeEnd && isRangeSelectingStart && !isRangeSelectingEnd) return true;
  return isRangeSelectingStart || isRangeStart;
};

export const DefaultCell = ({
  dateValue,
  formattedDate,
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
  isOutsideMonth,
  ...props
}: CellProps) => {
  const leftIsVisible = leftHalfIsVisible(
    !!hidden,
    !!isInRange,
    !!isRangeStart,
    !!isRangeEnd,
    !!isInRangeSelecting,
    !!isRangeSelectingStart,
    !!isRangeSelectingEnd,
  );
  const rightIsVisible = rightHalfIsVisible(
    !!hidden,
    !!isInRange,
    !!isRangeStart,
    !!isRangeEnd,
    !!isInRangeSelecting,
    !!isRangeSelectingStart,
    !!isRangeSelectingEnd,
  );
  if (hidden) {
    props.onClick = (e) => e.stopPropagation();
  }
  return (
    <CellContainer
      $width={width}
      $height={height}
      data-value={dateValue}
      data-date={formattedDate}
      data-selected-cell={selected ? true : undefined}
      data-disabled-cell={disabled ? true : undefined}
      data-hidden-cell={hidden ? true : undefined}
      data-is-current-date={isCurrent ? isCurrent : undefined}
      data-is-active-date={isActive ? isActive : undefined}
      data-is-holiday-date={isHoliday ? isHoliday : undefined}
      data-is-outside-month-date={isOutsideMonth ? isOutsideMonth : undefined}
      {...props}
    >
      <LeftHalf
        $isVisible={leftIsVisible}
        $isSelectingRange={
          !!isInRangeSelecting || (!!isRangeSelectingEnd && !!isRangeSelectingStart !== isRangeSelectingEnd)
        }
        $isStartOfRow={!!isStartOfRow}
      />
      <RightHalf
        $isVisible={rightIsVisible}
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
  isActive?: boolean,
) => {
  if (hidden) return hiddenDateCellMixin;
  if (disabled && isHoliday && isCurrent) return disabledCurrentHolidayDateCellMixin;
  if (disabled && isHoliday) return disabledHolidayDateCellMixin;
  if (disabled && isCurrent) return disabledCurrentDateCellMixin;
  if (disabled) return disabledDateCellMixin;
  if (selected) return selectedDateCellMixin;
  if (isActive && isHoliday) return holidayDateCellMixin;
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
  if (disabled && isCurrent) return disabledCurrentDateCellMixin;
  if (disabled) return disabledDateCellMixin;
  if (isActive) return baseDateCellMixin;
  if (selected || isRangeStart || isRangeEnd) return selectedDateCellMixin;
  //if (isRangeStart || isRangeEnd) return rangeEndsDateCellMixin;
  if (isInRange && isHoliday) return rangeHolidayDateCellMixin;
  if (isHoliday && isCurrent) return currentDateHolidayDateCellMixin;
  if (isHoliday) return holidayDateCellMixin;
  if (isCurrent) return currentDateCellMixin;
  if (isInRange) return rangeDateCellMixin;
  return baseDateCellMixin;
};

const getDateCellDataAttributes = (isHoliday?: boolean, isCurrent?: boolean, isActive?: boolean) => {
  return {
    'data-is-holiday-cell': isHoliday ? isHoliday : undefined,
    'data-is-current-day-cell': isCurrent ? isCurrent : undefined,
    'data-is-active-cell': isActive ? isActive : undefined,
  };
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
      {...getDateCellDataAttributes(isHoliday, isCurrent, props.isActive)}
      {...props}
    />
  );
};
export const MemoDefaultDateCell = memo(DefaultDateCell);

const getDateRangeCellDataAttributes = (
  isHoliday?: boolean,
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
    'data-is-holiday-cell': isHoliday ? isHoliday : undefined,
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
      {...getDateRangeCellDataAttributes(
        isHoliday,
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
