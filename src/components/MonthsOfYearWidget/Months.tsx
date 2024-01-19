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
  getSelectedDate,
  getSelectedDateRange,
  monthIsDisabled,
  setNoon,
} from '#src/components/utils';
import { MONTHS_COLUMNS, MONTHS_ROWS, MONTHS_WRAPPER_HEIGHT } from '#src/components/MonthsOfYearWidget/constants';
import type { BaseWidgetProps } from '#src/components/widgetInterfaces.ts';
import { createElement } from 'react';

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
  disabledDate,
  cell,
  locale = 'ru',
  range = false,
  ...props
}: MonthsProps) => {
  const firstMonth = setNoon(dayjs(`${date.year()}-01-01T12:00:00`).locale(locale));
  const cellModel = monthsArray.map((v) => {
    const date = firstMonth.add(v, 'month');
    const dateValue = date.toString();
    const disabled = monthIsDisabled(date, disabledDate);
    const isCurrent = date.isSame(getCurrentDate(locale), 'month');
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
        disabled,
        selected: dateIsSelected('month', date, selectedDateRange),
        isCurrent,
        isActive,

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
      disabled,
      selected: selectedDate ? date.isSame(selectedDate, 'month') : false,
      isCurrent,
      isActive,
    };
  });
  const cells = cellModel.map((model) => {
    return createElement(cell, model);
  });

  return <MonthsWrapper {...props}>{cells}</MonthsWrapper>;
};
