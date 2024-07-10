import type { FunctionComponent, HTMLAttributes } from 'react';
import { createElement, useMemo } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import {
  dateIsInRange,
  dateIsInRangeSelecting,
  dateIsRangeEnd,
  dateIsRangeSelectingEnd,
  dateIsRangeSelectingStart,
  dateIsRangeStart,
  dateIsSelected,
  getSelectedDate,
  getSelectedDateRange,
} from '#lib/utils';
import { DATES_ON_SCREEN, DATES_WRAPPER_HEIGHT } from '#lib/DatesOfMonthWidget/constants';
import { MemoDefaultDateCell } from '#lib/DefaultCell';
import type { DateAttributes } from '#lib/DefaultCell';
import type { CalendarLocaleProps, DateCellProps } from '#lib/calendarInterfaces';
import {
  addOrSubstractDays,
  firstDayOfTheMonth,
  isInTheSameCalendarDay,
  isInTheSameCalendarMonth,
  mondayOfTheWeek,
} from 'lib/dateUtils';
import { defaultTimestampFormatter } from './defaultTimestampFormatter';

const DatesWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: ${DATES_WRAPPER_HEIGHT}px;
`;

export function generateCalendarDataCellList(
  initialDateTimestamp: number,
  formatter: (timestamp: number) => string,
): CalendarDataCell[] {
  return Array.from(Array(DATES_ON_SCREEN).keys()).map((n) => {
    const date = addOrSubstractDays(initialDateTimestamp, n);
    return {
      timestamp: date.getTime(),
      formattedDate: formatter(date.getTime()),
      dateOfMonth: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
    };
  });
}

export function defaultDateAttributes(): DateAttributes {
  return {
    disabled: false,
    hidden: false,
    isHoliday: false,
  };
}

export type CalendarDataCell = {
  /** Милисекунды, прошедшие с 1 января 1970 года 00:00:00 по UTC для данного
   * числа месяца и время установлено на полночь в текущей таймзоне */
  timestamp: number;
  /** Дата в отформатированном виде */
  formattedDate: string;
  /** Число месяца */
  dateOfMonth: number;
  /** Месяц в году, 0 - январь, 11 - декабрь */
  month: number;
  /** Год */
  year: number;
};

export interface DatesProps extends HTMLAttributes<HTMLDivElement> {
  /** timestamp задает дату календаря для отображения месяца */
  displayMonthTimestamp?: number;
  selectedTimestamp?: number;
  activeTimestamp?: number;
  activeRangeEnd?: Dayjs;
  dateAttributes?: (currentDateTimestamp: number) => DateAttributes;
  cell?: FunctionComponent<DateCellProps>;
  range?: boolean;
  /** Форматтер в необходимое представление строки */
  formatter?: (timestamp: number) => string;
}

export const Dates = ({
  displayMonthTimestamp = Date.now(),
  selectedTimestamp,
  activeTimestamp,
  activeRangeEnd,
  dateAttributes = defaultDateAttributes,
  cell = MemoDefaultDateCell,
  range,
  formatter = defaultTimestampFormatter,
  ...props
}: DatesProps) => {
  const cellDataList = useMemo<CalendarDataCell[]>(() => {
    const firstOfMonthDate = firstDayOfTheMonth(displayMonthTimestamp);
    const firstDate = mondayOfTheWeek(firstOfMonthDate.getTime());
    return generateCalendarDataCellList(firstDate.getTime(), formatter);
  }, [displayMonthTimestamp, formatter]);

  const cellModel = cellDataList.map(({ timestamp, formattedDate, dateOfMonth }) => {
    const { hidden, disabled, isHoliday } = dateAttributes(timestamp);

    const isCurrent = isInTheSameCalendarDay(timestamp, Date.now());
    const isActive = activeTimestamp ? isInTheSameCalendarDay(timestamp, activeTimestamp) : false;
    const isSelected = selectedTimestamp ? isInTheSameCalendarDay(timestamp, selectedTimestamp) : false;
    const cellContent = dateOfMonth;
    const isOutsideMonth = !isInTheSameCalendarMonth(timestamp, displayMonthTimestamp);

    const date = dayjs(timestamp);
    // if (range) {
    //   const selectedDateRange = getSelectedDateRange(selected);
    //   const isInRange = dateIsInRange('date', date, selectedDateRange);
    //   const isRangeStart = dateIsRangeStart('date', date, selectedDateRange);
    //   const isRangeEnd = dateIsRangeEnd('date', date, selectedDateRange);
    //   const isInRangeSelecting = dateIsInRangeSelecting('date', date, dayjs(activeTimestamp), activeRangeEnd);
    //   const isRangeSelectingStart = dateIsRangeSelectingStart(
    //     'date',
    //     date,
    //     dayjs(activeTimestamp),
    //     activeRangeEnd,
    //     disabled,
    //   );
    //   const isRangeSelectingEnd = dateIsRangeSelectingEnd(
    //     'date',
    //     date,
    //     dayjs(activeTimestamp),
    //     activeRangeEnd,
    //     disabled,
    //   );
    //   const isStartOfRow = date.isSame(date.startOf('week'), 'date') || date.isSame(date.startOf('month'), 'date');
    //   const isEndOfRow = date.isSame(date.endOf('week'), 'date') || date.isSame(date.endOf('month'), 'date');
    //   return {
    //     dateValue: timestamp,
    //     formattedDate,
    //     key: formattedDate,
    //     cellContent,
    //     selected: dateIsSelected('date', date, selectedDateRange),
    //     isActive,
    //     isCurrent,
    //     isOutsideMonth,

    //     disabled,
    //     hidden: hidden || isOutsideMonth,
    //     isHoliday,

    //     isInRange,
    //     isRangeStart,
    //     isRangeEnd,
    //     isInRangeSelecting,
    //     isRangeSelectingStart,
    //     isRangeSelectingEnd,
    //     isStartOfRow,
    //     isEndOfRow,
    //   };
    // }

    return {
      dateValue: timestamp,
      formattedDate,
      key: formattedDate,
      cellContent,
      selected: isSelected,
      isCurrent,
      isActive,
      disabled,
      hidden: hidden || isOutsideMonth,
      isHoliday,
    };
  });

  const cells = cellModel.map((model) => {
    return createElement(cell, model);
  });

  return (
    <DatesWrapper {...props} data-container-type="datesWrapper">
      {cells}
    </DatesWrapper>
  );
};
