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
import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from '#src/components/calendarConstants';
import {
  baseYearCellMixin,
  currentYearCellMixin,
  disabledYearCellMixin,
  hiddenYearCellMixin,
  selectedYearCellMixin,
} from '#src/components/YearsOfTwentyYearsWidget/mixins.tsx';
import type { TwentyYearsNavigationPanelWidgetProps } from '#src/components/TwentyYearsNavigationPanelWidget/interfaces';
import { TwentyYearsNavigationPanelWidget } from '#src/components/TwentyYearsNavigationPanelWidget';
import { YearsOfTwentyYearsWidget } from '#src/components/YearsOfTwentyYearsWidget';
import { YEARS_ON_SCREEN } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';

const CalendarWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding-top: 20px;
  width: ${CALENDAR_WIDTH}px;
  height: ${CALENDAR_HEIGHT}px;
  ${(p) => p.theme.shadow['Shadow 08']}
`;

export const TwentyYearsNavigationPanelWidgetSimpleTemplate = ({
  locale = 'ru',
  timezone = getCurrentTimeZone(),
  date,
  ...props
}: TwentyYearsNavigationPanelWidgetProps) => {
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

  const getYearCellMixin = (selected?: boolean, disabled?: boolean, hidden?: boolean, isCurrentYear?: boolean) => {
    if (hidden) return hiddenYearCellMixin;
    if (disabled) return disabledYearCellMixin;
    if (selected) return selectedYearCellMixin;
    if (isCurrentYear) return currentYearCellMixin;
    return baseYearCellMixin;
  };

  const getYearCellDataAttributes = (isCurrentYear?: boolean): Record<string, any> => {
    return {
      'data-is-current-year': isCurrentYear ? isCurrentYear : undefined,
    };
  };

  const getYearCellState = (dateString: string) => {
    const date = dateStringToDayjs(dateString, locale, timezone);
    const selected = date && selectedDate && date.isSame(selectedDate, 'year');
    const isCurrentYear = date && date.isSame(getCurrentDate(locale, timezone), 'year');

    const cellMixin = getYearCellMixin(selected, false, false, isCurrentYear);
    const dataAttributes = getYearCellDataAttributes(isCurrentYear);

    return { selected, cellMixin, ...dataAttributes };
  };

  const handleDateChange = (dateString: string) => {
    const dayjsDate = getDayjsDate(locale, timezone, dateString);
    setDateState(dayjsDate);
    //onDateChange?.(dayjsDateToString(dayjsDate));
  };

  const handleTwentyYearsNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.direction;
    switch (targetType) {
      case 'left':
        handleDateChange(dayjsDateToString(dateState.subtract(YEARS_ON_SCREEN, 'year')));
        break;
      case 'right':
        handleDateChange(dayjsDateToString(dateState.add(YEARS_ON_SCREEN, 'year')));
        break;
    }
  };

  return (
    <CalendarWrapper>
      <TwentyYearsNavigationPanelWidget
        date={dayjsDateToString(dateState)}
        locale={locale}
        timezone={timezone}
        onClick={handleTwentyYearsNavigationPanelClick}
      />
      <YearsOfTwentyYearsWidget
        {...props}
        date={dayjsDateToString(dateState)}
        locale={locale}
        timezone={timezone}
        onClick={handleClick}
        yearCellState={getYearCellState}
      />
    </CalendarWrapper>
  );
};
