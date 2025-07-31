import { createElement, memo, useMemo } from 'react';
import styled, { DataAttributes } from 'styled-components';
import dayjs, { Dayjs } from 'dayjs';

import {
  arrayFormatter,
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
import { ruLocale } from '#lib/calendarConstants.ts';
import { BaseWidgetProps } from '#lib/widgetInterfaces';
import { DateRange } from 'lib/types';
import { CalendarLocaleProps } from '#lib/calendarInterfaces';
import { DateAttributes } from '#lib/DefaultCell';

export const DATES_ON_SCREEN = 42;

const DatesContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: 236px;
`;

export interface DatesProps<T extends object> extends BaseWidgetProps {
  datesWidgetContainerPropsConfig?: (
    props: React.ComponentProps<typeof DatesContainer>,
  ) => Partial<React.ComponentProps<typeof DatesContainer> & DataAttributes>;
  datesModel?: T[];
}

export const createDefaultModel = <T extends object>() => {
  const datesList = new Array(DATES_ON_SCREEN).fill({});

  return datesList as T[];
};

export function datesMapStateToProps<T extends object>(
  model: T[],
  firstDate: Dayjs,
  range: boolean,
  locale: CalendarLocaleProps,
  dateOuter: Dayjs,
  active?: Dayjs,
  selected?: Dayjs | DateRange,
  activeRangeEnd?: Dayjs,
  dateAttributes?: (currentDate: Dayjs) => DateAttributes,
) {
  const innerModel = arrayFormatter(DATES_ON_SCREEN, model);

  return innerModel.map((additionalProps, index) => {
    const date = firstDate.add(index, 'day');
    const dateValue = date.format('YYYY-MM-DD');
    const dateAttrs = dateAttributes?.(date);
    const disabled = !!dateAttrs?.disabled;
    const isHoliday = !!dateAttrs?.isHoliday;
    const isCurrent = date.isSame(dayjs().locale(locale.localeName), 'date');
    const isActive = active ? date.isSame(active, 'date') : false;
    const cellContent = date.date();
    const isOutsideMonth = date.month() !== dateOuter.month();
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
        ...additionalProps,
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
      ...additionalProps,
    };
  });
}

export const Dates = memo(
  <T extends object>({
    date: dateInner,
    selected,
    active,
    activeRangeEnd,
    dateAttributes,
    cell,
    locale = ruLocale,
    range = false,
    datesWidgetContainerPropsConfig = () => ({}),
    datesModel,
    ...containerProps
  }: DatesProps<T>) => {
    const innerDatesModelList = useMemo(() => datesModel ?? createDefaultModel(), [datesModel]);

    const firstDate = setNoon(dateInner.locale(locale.localeName).startOf('month').startOf('week'));

    const cellProps = useMemo(
      () =>
        datesMapStateToProps(
          innerDatesModelList,
          firstDate,
          range,
          locale,
          dateInner,
          active,
          selected,
          activeRangeEnd,
          dateAttributes,
        ),
      [innerDatesModelList, firstDate, range, locale, dateInner, active, selected, activeRangeEnd, dateAttributes],
    );

    const cells = cellProps.map((model) => {
      return createElement(cell, model);
    });

    const datesContainerProps = {
      'data-container-type': 'datesContainer',
      ...containerProps,
    };

    return (
      <DatesContainer {...datesContainerProps} {...datesWidgetContainerPropsConfig(datesContainerProps)}>
        {cells}
      </DatesContainer>
    );
  },
);
