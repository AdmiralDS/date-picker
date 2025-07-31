import type { FunctionComponent, HTMLAttributes } from 'react';
import { createElement, useMemo } from 'react';
import styled from 'styled-components';
import { MemoDefaultDateCell } from '#lib/DefaultCell';
import type { DateAttributes } from '#lib/DefaultCell';
import type { DateCellProps, RangeTimestamp, Timestamp } from '#lib/calendarInterfaces';
import {
  addOrSubstractDays,
  firstDayOfTheMonth,
  isInTheSameCalendarDay,
  isInTheSameCalendarMonth,
  midnightOfTheDate,
  mondayOfTheWeek,
} from 'lib/dateTimestampUtils';
import { defaultTimestampFormatter } from './defaultTimestampFormatter';

const DATES_ON_SCREEN = 42;

const DatesWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: 236px;
`;

export function generateCalendarDataCellList(
  initialDateTimestamp: number,
  formatter: (timestamp: number) => string,
): CalendarDataCell[] {
  const firstOfMonthDate = firstDayOfTheMonth(initialDateTimestamp);
  const firstDateOfweek = mondayOfTheWeek(firstOfMonthDate.getTime());
  const startDate = midnightOfTheDate(firstDateOfweek.getTime());
  const start = startDate.getTime();
  return Array.from(Array(DATES_ON_SCREEN).keys()).map((n) => {
    const date = addOrSubstractDays(start, n);
    return {
      timestamp: date.getTime(),
      formattedDate: formatter(date.getTime()),
      dateOfMonth: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      dayOfTheWeek: date.getDay(),
      hidden: date.getMonth() !== firstOfMonthDate.getMonth(),
    };
  });
}

export function defaultDateAttributes(): DateAttributes {
  return { disabled: false, hidden: false, isHoliday: false };
}

/** Меняет местами концы отрезка, если они в не естественном порядке и приводит время к полночи в текущей временной зоне */
export function normalizeTimestampRange(timestampRange: RangeTimestamp): RangeTimestamp {
  const [start, end] = timestampRange.map((timestamp) => midnightOfTheDate(timestamp).getTime());
  if (start > end) {
    return [end, start];
  }
  return [start, end];
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

  /** день недели, где воскресенье = 0, понедельник = 1 */
  dayOfTheWeek: number;

  /** Должен ли присутствовать в данном сете дат, true = не должен */
  hidden: boolean;
};

export interface DatesProps extends HTMLAttributes<HTMLDivElement> {
  /** timestamp задает дату календаря для отображения месяца */
  displayMonthTimestamp?: Timestamp;

  /** Задает выбранную дату */
  selectedTimestamp?: Timestamp;

  /** Задает выбранный интервал */
  selectedRangeTimestamp?: RangeTimestamp;

  activeTimestamp?: Timestamp;

  dateAttributes?: (date: Timestamp) => DateAttributes;

  cell?: FunctionComponent<DateCellProps>;

  /** Форматтер в необходимое представление строки */
  formatter?: (date: Timestamp) => string;
}

export const Dates = ({
  displayMonthTimestamp = Date.now(),
  selectedTimestamp,
  selectedRangeTimestamp,
  activeTimestamp,
  dateAttributes = defaultDateAttributes,
  cell = MemoDefaultDateCell,

  formatter = defaultTimestampFormatter,
  ...props
}: DatesProps) => {
  const cellDataList = useMemo<CalendarDataCell[]>(() => {
    const firstOfMonthDate = firstDayOfTheMonth(displayMonthTimestamp);
    return generateCalendarDataCellList(firstOfMonthDate.getTime(), formatter);
  }, [displayMonthTimestamp, formatter]);

  const cellModel = cellDataList.map(({ timestamp, formattedDate, dateOfMonth, dayOfTheWeek }) => {
    const { hidden, disabled, isHoliday } = dateAttributes(timestamp);

    const isCurrent = isInTheSameCalendarDay(timestamp, Date.now());
    const isActive = activeTimestamp ? isInTheSameCalendarDay(timestamp, activeTimestamp) : false;
    const isSelected = selectedTimestamp ? isInTheSameCalendarDay(timestamp, selectedTimestamp) : false;
    const cellContent = dateOfMonth;
    const isOutsideMonth = !isInTheSameCalendarMonth(timestamp, displayMonthTimestamp);

    if (selectedRangeTimestamp) {
      const [startRangeTimestamp, endRangeTimestamp] = normalizeTimestampRange(selectedRangeTimestamp);

      const isInRange = timestamp > startRangeTimestamp && timestamp < endRangeTimestamp;
      const isRangeStart = timestamp == startRangeTimestamp;
      const isRangeEnd = timestamp == endRangeTimestamp;

      const isInRangeSelecting =
        activeTimestamp && !disabled && !hidden ? isInRange && activeTimestamp == timestamp : false;

      const isRangeSelectingStart =
        activeTimestamp && !disabled && !hidden ? isRangeStart && activeTimestamp == timestamp : false;

      const isRangeSelectingEnd =
        activeTimestamp && !disabled && !hidden ? isRangeEnd && activeTimestamp == timestamp : false;

      const isStartOfRow = dayOfTheWeek === 1;
      const isEndOfRow = dayOfTheWeek === 0;

      return {
        dateValue: timestamp,
        formattedDate,
        key: formattedDate,
        cellContent,
        selected: isRangeStart || isRangeEnd,
        isActive,
        isCurrent,
        isOutsideMonth,

        disabled,
        hidden: hidden || isOutsideMonth,
        isHoliday,

        isInRange,
        isRangeStart,
        isRangeEnd,
        isInRangeSelecting,
        isRangeSelectingStart,
        isRangeSelectingEnd,
        isStartOfRow,
        isEndOfRow,
      };
    }

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

  return (
    <DatesWrapper {...props} data-container-type="datesWrapper">
      {cellModel.map((model) => createElement(cell, model))}
    </DatesWrapper>
  );
};
