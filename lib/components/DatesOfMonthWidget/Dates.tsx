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
  getSelectedDate,
  getSelectedDateRange,
  setNoon,
} from '#lib/utils';
import { DATES_ON_SCREEN, DATES_WRAPPER_HEIGHT } from '#lib/DatesOfMonthWidget/constants';
import type { DatesProps } from '#lib/DatesOfMonthWidget/interfaces';
import { ruLocale } from '#lib/calendarConstants.ts';

const DatesWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: ${DATES_WRAPPER_HEIGHT}px;
`;
const datesArray = Array.from(Array(DATES_ON_SCREEN).keys());

export const Dates = ({
  date: dateInner,
  selected,
  active,
  activeRangeEnd,
  dateAttributes,
  cell,
  locale = ruLocale,
  range = false,
  ...props
}: DatesProps) => {
  const firstDate = setNoon(dateInner.locale(locale?.localeName).startOf('month').startOf('week'));
  const cellModel = datesArray.map((v) => {
    const date = firstDate.add(v, 'day');
    const dateValue = date.format('YYYY-MM-DD');
    const dateAttrs = dateAttributes?.(date);
    const disabled = !!dateAttrs?.disabled;
    const isHoliday = !!dateAttrs?.isHoliday;
    const isCurrent = date.isSame(dayjs().locale(locale.localeName), 'date');
    const isActive = active ? date.isSame(active, 'date') : false;
    const cellContent = date.date();
    const isOutsideMonth = date.month() !== dateInner.month();
    const hidden = dateAttrs?.hidden ? dateAttrs?.hidden : isOutsideMonth;
    if (range) {
      const selectedDateRange = getSelectedDateRange(selected);
      const isInRange = dateIsInRange('date', date, selectedDateRange);
      const isRangeStart = dateIsRangeStart('date', date, selectedDateRange);
      const isRangeEnd = dateIsRangeEnd('date', date, selectedDateRange);
      const isInRangeSelecting = dateIsInRangeSelecting('date', date, active, activeRangeEnd);
      const isRangeSelectingStart = dateIsRangeSelectingStart('date', date, active, activeRangeEnd, disabled);
      const isRangeSelectingEnd = dateIsRangeSelectingEnd('date', date, active, activeRangeEnd, disabled);
      const isStartOfRow = date.isSame(date.startOf('week'), 'date') || date.isSame(date.startOf('month'), 'date');
      const isEndOfRow = date.isSame(date.endOf('week'), 'date') || date.isSame(date.endOf('month'), 'date');
      return {
        dateValue,
        key: dateValue,
        cellContent,
        selected: dateIsSelected('date', date, selectedDateRange),
        isActive,
        isCurrent,
        isOutsideMonth,

        disabled,
        hidden,
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
    const selectedDate = getSelectedDate(selected);
    return {
      dateValue,
      key: dateValue,
      cellContent,
      selected: selectedDate ? date.isSame(selectedDate, 'date') : false,
      isCurrent,
      isActive,
      disabled,
      hidden,
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
