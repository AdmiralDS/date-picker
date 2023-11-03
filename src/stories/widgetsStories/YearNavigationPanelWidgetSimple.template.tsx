import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';

import {
  capitalizeFirstLetter,
  dateStringToDayjs,
  dayjsDateToString,
  getCurrentDate,
  getCurrentTimeZone,
  getDayjsDate,
} from '#src/components/utils';
import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from '#src/components/calendarConstants';
import { MonthsOfYearWidget } from '#src/components/MonthsOfYearWidget';
import type { YearNavigationPanelWidgetProps } from '#src/components/YearNavigationPanelWidget/interfaces';
import { YearNavigationPanelWidget } from '#src/components/YearNavigationPanelWidget';
import type { DefaultMonthCellProps } from '#src/components/MonthsOfYearWidget/Months.tsx';
import { DefaultMonthCell } from '#src/components/MonthsOfYearWidget/Months.tsx';

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

  const getMonthCellDataAttributes = (value?: string, isCurrentMonth?: boolean): Record<string, any> => {
    return {
      'data-value': value ? value : undefined,
      'data-is-current-month': isCurrentMonth ? isCurrentMonth : undefined,
    };
  };

  const renderMonth = (dateString: string) => {
    const dateCurrent = dateStringToDayjs(dateString, locale, timezone);
    if (!dateCurrent) return () => <></>;
    const cellContent = capitalizeFirstLetter(dateCurrent.format('MMMM'));
    const selected = dateCurrent && selectedDate && dateCurrent.isSame(selectedDate, 'month');
    const isCurrentMonth = dateCurrent && dateCurrent.isSame(getCurrentDate(locale, timezone), 'month');
    const dataAttributes = getMonthCellDataAttributes(dateCurrent.toISOString(), isCurrentMonth);

    const renderDefaultMonthCell = (props: DefaultMonthCellProps) => (
      <DefaultMonthCell key={dayjsDateToString(dateCurrent)} {...props} />
    );

    return renderDefaultMonthCell({ cellContent, selected, isCurrentMonth, ...dataAttributes });
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
        renderMonthCell={renderMonth}
      />
    </CalendarWrapper>
  );
};
