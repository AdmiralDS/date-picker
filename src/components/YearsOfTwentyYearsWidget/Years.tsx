import { createElement } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import {
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
  getYearAttributes,
  setNoon,
  yearsRange,
} from '#src/components/utils';
import {
  YEARS_COLUMNS,
  YEARS_ON_SCREEN,
  YEARS_WRAPPER_HEIGHT,
} from '#src/components/YearsOfTwentyYearsWidget/constants.ts';
import type { BaseWidgetProps } from '#src/components/widgetInterfaces.ts';

interface YearsProps extends BaseWidgetProps {}

const YearsWrapper = styled.div`
  height: ${YEARS_WRAPPER_HEIGHT}px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

const yearsArray = Array.from(Array(YEARS_ON_SCREEN).keys());

export const Years = ({
  date,
  selected,
  active,
  activeRangeEnd,
  dateAttributes,
  cell,
  locale = 'ru',
  range = false,
  ...props
}: YearsProps) => {
  const { start } = yearsRange(date, YEARS_ON_SCREEN);
  const firstYear = setNoon(dayjs(`${start}-01-01T12:00:00`).locale(locale));
  const cellModel = yearsArray.map((v) => {
    const date = firstYear.add(v, 'year');
    const dateValue = date.toString();
    const { disabled, isHoliday, hidden } = getYearAttributes(date, dateAttributes);
    const isCurrent = date.isSame(getCurrentDate(), 'year');
    const isActive = active ? date.isSame(active, 'year') : false;
    const cellContent = date.year();
    if (range) {
      const selectedDateRange = getSelectedDateRange(selected);
      const isInRange = dateIsInRange('year', date, selectedDateRange);
      const isRangeStart = dateIsRangeStart('year', date, selectedDateRange);
      const isRangeEnd = dateIsRangeEnd('year', date, selectedDateRange);
      const isInRangeSelecting = dateIsInRangeSelecting('year', date, active, activeRangeEnd);
      const isRangeSelectingStart = dateIsRangeSelectingStart('year', date, active, activeRangeEnd, disabled);
      const isRangeSelectingEnd = dateIsRangeSelectingEnd('year', date, active, activeRangeEnd, disabled);
      const isStartOfRow = (date.year() - 1) % YEARS_COLUMNS === 0;
      const isEndOfRow = (date.year() - 1) % YEARS_COLUMNS === 3;
      return {
        dateValue,
        key: dateValue,
        cellContent,
        selected: dateIsSelected('year', date, selectedDateRange),
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
      selected: selectedDate ? date.isSame(selectedDate, 'year') : false,
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

  return <YearsWrapper {...props}>{cells}</YearsWrapper>;
};
