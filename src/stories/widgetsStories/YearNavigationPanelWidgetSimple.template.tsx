import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';

import {
  dateStringToDayjs,
  dayjsDateToString,
  getCurrentDate,
  getCurrentTimeZone,
  getDayjsDate,
} from '#src/components/utils';
import { DATE_CALENDAR_HEIGHT, DATE_CALENDAR_WIDTH } from '#src/components/DateCalendar/constants';
import { MonthsOfYearWidget } from '#src/components/MonthsOfYearWidget';
import {
  baseMonthCellMixin,
  currentMonthCellMixin,
  disabledMonthCellMixin,
  hiddenMonthCellMixin,
  selectedMonthCellMixin,
} from '#src/components/MonthsOfYearWidget/mixins';
import type { YearNavigationPanelWidgetProps } from '#src/components/YearNavigationPanelWidget/interfaces';
import { YearNavigationPanelWidget } from '#src/components/YearNavigationPanelWidget';

const CalendarWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding-top: 20px;
  width: ${DATE_CALENDAR_WIDTH}px;
  height: ${DATE_CALENDAR_HEIGHT}px;
  ${(p) => p.theme.shadow['Shadow 08']}
`;

export const YearNavigationPanelWidgetSimpleTemplate = ({
  locale = 'ru',
  timezone = getCurrentTimeZone(),
  date,
  ...props
}: YearNavigationPanelWidgetProps) => {
  const [dateState, setDateState] = useState(getDayjsDate(locale, timezone, date));
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(getCurrentDate(locale, timezone).add(1, 'day'));

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
    const clickedDate = dateStringToDayjs(clickedCell, locale, timezone);
    if (clickedDate) {
      setSelectedDate(clickedDate);
    }
  };

  const getMonthCellMixin = (selected?: boolean, disabled?: boolean, hidden?: boolean, isCurrentMonth?: boolean) => {
    if (hidden) return hiddenMonthCellMixin;
    if (disabled) return disabledMonthCellMixin;
    if (selected) return selectedMonthCellMixin;
    if (isCurrentMonth) return currentMonthCellMixin;
    return baseMonthCellMixin;
  };

  const getMonthCellDataAttributes = (isCurrentMonth?: boolean): Record<string, any> => {
    return {
      'data-is-current-month': isCurrentMonth ? isCurrentMonth : undefined,
    };
  };

  const getMonthCellState = (dateString: string) => {
    const date = dateStringToDayjs(dateString, locale, timezone);
    const selected = date && selectedDate && date.isSame(selectedDate, 'month');
    const isCurrentMonth = date && date.isSame(getCurrentDate(locale, timezone), 'month');

    const cellMixin = getMonthCellMixin(selected, false, false, isCurrentMonth);
    const dataAttributes = getMonthCellDataAttributes(isCurrentMonth);

    return { selected, cellMixin, ...dataAttributes };
  };

  const handleDateChange = (dateString: string) => {
    const dayjsDate = getDayjsDate(locale, timezone, dateString);
    setDateState(dayjsDate);
    //onDateChange?.(dayjsDateToString(dayjsDate));
  };

  const handleYearNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.direction;
    switch (targetType) {
      case 'left':
        handleDateChange(dayjsDateToString(dateState.subtract(1, 'year')));
        break;
      case 'right':
        handleDateChange(dayjsDateToString(dateState.add(1, 'year')));
        break;
    }
  };

  return (
    <CalendarWrapper>
      <YearNavigationPanelWidget
        date={dayjsDateToString(dateState)}
        locale={locale}
        timezone={timezone}
        onClick={handleYearNavigationPanelClick}
      />
      <MonthsOfYearWidget
        {...props}
        date={dayjsDateToString(dateState)}
        locale={locale}
        timezone={timezone}
        onClick={handleClick}
        monthCellState={getMonthCellState}
      />
    </CalendarWrapper>
  );
};
