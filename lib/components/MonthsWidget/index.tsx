import { createElement, memo, useMemo } from 'react';
import styled, { DataAttributes } from 'styled-components';
import 'dayjs/locale/ru';
import dayjs, { Dayjs } from 'dayjs';

import { vars, textValues } from '@admiral-ds/web';
import type { BaseWidgetProps } from '#lib/widgetInterfaces.ts';
import { ruLocale } from '#lib/calendarConstants.ts';

import {
  arrayFormatter,
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
import { DateRange } from 'lib/types';
import { DateAttributes } from '#lib/DefaultCell';
import { CalendarLocaleProps } from '#lib/calendarInterfaces';

export interface MonthsWidgetProps<T extends object> extends BaseWidgetProps {
  monthsWidgetContainerPropsConfig?: (
    props: React.ComponentProps<typeof MonthsWidgetContainer>,
  ) => Partial<React.ComponentProps<typeof MonthsWidgetContainer> & DataAttributes>;
  monthsModel?: T[];
}

const MonthsWidgetContainer = styled.div`
  background-color: ${vars.color.Special_ElevatedBG};
  width: 252px;
  margin: 28px 16px 36px 16px;
  ${textValues['Body/Body 2 Long']}
  height: 240px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

const MONTHS_COLUMNS = 3;

export const createDefaultModel = <T extends object>() => {
  const monthsList = new Array(12).fill({});

  return monthsList as T[];
};

export function monthsMapStateToProps<T extends object>(
  model: T[],
  firstMonth: Dayjs,
  range: boolean,
  active?: Dayjs,
  selected?: Dayjs | DateRange,
  activeRangeEnd?: Dayjs,
  locale?: CalendarLocaleProps,
  dateAttributes?: (currentDate: Dayjs) => DateAttributes,
) {
  const innerModel = arrayFormatter(12, model);

  return innerModel.map((additionalProps, index) => {
    const date = firstMonth.add(index, 'month');
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
        ...additionalProps,
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
      ...additionalProps,
    };
  });
}

export const MonthsWidget = memo(
  <T extends object>({
    selected,
    active,
    activeRangeEnd,
    dateAttributes,
    locale = ruLocale,
    date = getCurrentDate(locale?.localeName),
    cell,
    range = false,
    monthsModel,
    monthsWidgetContainerPropsConfig = () => ({}),
    ...containerProps
  }: MonthsWidgetProps<T>) => {
    const innerMonthsModelList = useMemo(() => monthsModel ?? createDefaultModel(), [monthsModel]);

    const firstMonth = setNoon(dayjs(`${date.year()}-01-01T12:00:00`).locale(locale?.localeName || 'ru'));

    //Определение пропсов для ячеек
    const cellProps = useMemo(
      () =>
        monthsMapStateToProps(
          innerMonthsModelList,
          firstMonth,
          range,
          active,
          selected,
          activeRangeEnd,
          locale,
          dateAttributes,
        ),
      [innerMonthsModelList, firstMonth, range, active, selected, activeRangeEnd, locale, dateAttributes],
    );

    const cells = cellProps.map((model) => {
      return createElement(cell, model);
    });

    const monthsWidgetContainerProps = {
      'data-container-type': 'monthsWidgetContainer',
      ...containerProps,
    };

    return (
      <MonthsWidgetContainer
        {...monthsWidgetContainerProps}
        {...monthsWidgetContainerPropsConfig(monthsWidgetContainerProps)}
      >
        {cells}
      </MonthsWidgetContainer>
    );
  },
);
