import { createElement } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import {
  capitalizeFirstLetter,
  dateIsInRange,
  dateIsInRangeSelecting,
  dateIsRangeEnd,
  dateIsRangeSelectingEnd,
  dateIsRangeSelectingStart,
  dateIsRangeStart,
  dateIsSelected,
  getCurrentDate,
  getMonthAttributes,
  getSelectedDate,
  getSelectedDateRange,
  setNoon,
} from '#lib/utils';
import { MONTHS_COLUMNS, MONTHS_ROWS, MONTHS_WRAPPER_HEIGHT } from '#lib/MonthsOfYearWidget/constants';
import type { BaseWidgetProps } from '#lib/widgetInterfaces.ts';
import { ruLocale } from '#lib/calendarConstants.ts';

interface MonthsProps extends BaseWidgetProps {}

const MonthsWrapper = styled.div`
  height: ${MONTHS_WRAPPER_HEIGHT}px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

const monthsArray = Array.from(Array(MONTHS_ROWS * MONTHS_COLUMNS).keys());

export const Months = ({
  date,
  selected,
  active,
  activeRangeEnd,
  dateAttributes,
  cell,
  locale = ruLocale,
  range = false,
  ...props
}: MonthsProps) => {
  const firstMonth = setNoon(dayjs(`${date.year()}-01-01T12:00:00`).locale(locale?.localeName || 'ru'));
  const cellModel = monthsArray.map((v) => {
    const date = firstMonth.add(v, 'month');
    const dateValue = date.toString();
    const { disabled, isHoliday, hidden } = getMonthAttributes(date, dateAttributes);
    const isCurrent = date.isSame(getCurrentDate(locale?.localeName), 'month');
    const isActive = active ? date.isSame(active, 'month') : false;
    const cellContent = capitalizeFirstLetter(date.format('MMMM'));
    if (range) {
      const selectedDateRange = getSelectedDateRange(selected);
      const isInRange = dateIsInRange('month', date, selectedDateRange);
      const isRangeStart = dateIsRangeStart('month', date, selectedDateRange);
      const isRangeEnd = dateIsRangeEnd('month', date, selectedDateRange);
      const isInRangeSelecting = dateIsInRangeSelecting('month', date, active, activeRangeEnd);
      const isRangeSelectingStart = dateIsRangeSelectingStart('month', date, active, activeRangeEnd, disabled);
      const isRangeSelectingEnd = dateIsRangeSelectingEnd('month', date, active, activeRangeEnd, disabled);
      const isStartOfRow = date.month() % MONTHS_COLUMNS === 0;
      const isEndOfRow = date.month() % MONTHS_COLUMNS === 2;
      return {
        dateValue,
        key: dateValue,
        cellContent,
        selected: dateIsSelected('month', date, selectedDateRange),
        isCurrent,
        isActive,
        disabled,
        isHoliday,
        hidden,

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
    const selectedDate = getSelectedDate(selected);
    return {
      dateValue,
      key: dateValue,
      cellContent,
      selected: selectedDate ? date.isSame(selectedDate, 'month') : false,
      isCurrent,
      isActive,
      disabled,
      isHoliday,
      hidden,
    };
  });
  const cells = cellModel.map((model) => {
    return createElement(cell, model);
  });

  return <MonthsWrapper {...props}>{cells}</MonthsWrapper>;
};
