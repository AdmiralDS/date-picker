import { createElement, useMemo } from 'react';
import styled, { DataAttributes } from 'styled-components';
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
} from '#lib/utils';
import type { BaseWidgetProps } from '#lib/widgetInterfaces.ts';
import { ruLocale } from '#lib/calendarConstants';
import { textValues, vars } from '@admiral-ds/web';

export interface YearsWidgetProps<T extends object> extends BaseWidgetProps {
  yearsOnScreen?: number;
  yearsColumns?: number;
  yearModel?: T[];
  yearsWidgetContainerPropsConfig?: (
    props: React.ComponentProps<typeof YearsWidgetContainer>,
  ) => Partial<React.ComponentProps<typeof YearsWidgetContainer> & DataAttributes>;
}

const YearsWidgetContainer = styled.div`
  background-color: ${vars.color.Special_ElevatedBG};
  width: 240px;
  margin: 28px 22px 32px 22px;
  ${textValues['Body/Body 2 Long']};
  height: 244px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

export const createDefaultModel = <T extends object>(yearsOnScreen: number) => {
  const yearsList = new Array(yearsOnScreen).fill({});

  return yearsList as T[];
};

export const YearsWidget = <T extends object>({
  date,
  selected,
  active,
  activeRangeEnd,
  dateAttributes,
  cell,
  locale = ruLocale,
  range = false,
  yearsColumns = 4,
  yearsOnScreen = 20,
  yearModel,
  yearsWidgetContainerPropsConfig = () => ({}),
  ...containerProps
}: YearsWidgetProps<T>) => {
  const innerYearModelList = useMemo(() => yearModel ?? createDefaultModel(yearsOnScreen), [yearModel, yearsOnScreen]);

  const { start } = yearsRange(date, yearsOnScreen);
  const firstYear = setNoon(dayjs(`${start}-01-01T12:00:00`).locale(locale?.localeName || 'ru'));

  //Определение пропсов для ячеек
  const cellProps = innerYearModelList.map((additionalProps, index) => {
    const date = firstYear.add(index, 'year');
    const dateValue = date.toString();
    const { disabled, isHoliday, hidden } = getYearAttributes(date, dateAttributes);
    const isCurrent = date.isSame(getCurrentDate(), 'year');
    const isActive = active ? date.isSame(active, 'year') : false;
    const cellContent = date.year();
    const selectedDate = getSelectedDate(selected);

    if (range) {
      const selectedDateRange = getSelectedDateRange(selected);
      const isInRange = dateIsInRange('year', date, selectedDateRange);
      const isRangeStart = dateIsRangeStart('year', date, selectedDateRange);
      const isRangeEnd = dateIsRangeEnd('year', date, selectedDateRange);
      const isInRangeSelecting = dateIsInRangeSelecting('year', date, active, activeRangeEnd);
      const isRangeSelectingStart = dateIsRangeSelectingStart('year', date, active, activeRangeEnd, disabled);
      const isRangeSelectingEnd = dateIsRangeSelectingEnd('year', date, active, activeRangeEnd, disabled);
      const isStartOfRow = (date.year() - 1) % yearsColumns === 0;
      const isEndOfRow = (date.year() - 1) % yearsColumns === 3;

      return {
        dateValue,
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
        ...additionalProps,
      };
    }

    return {
      dateValue,
      cellContent,
      selected: selectedDate ? date.isSame(selectedDate, 'year') : false,
      isCurrent,
      isActive,
      disabled,
      isHoliday,
      hidden,
      ...additionalProps,
    };
  });

  const cells = cellProps.map((props) => createElement(cell, { ...props, key: props.dateValue }));

  const yearsWidgetContainerProps = {
    'data-container-type': 'yearsWidgetContainer',
    ...containerProps,
  };

  return (
    <YearsWidgetContainer
      {...yearsWidgetContainerProps}
      {...yearsWidgetContainerPropsConfig(yearsWidgetContainerProps)}
    >
      {cells}
    </YearsWidgetContainer>
  );
};
