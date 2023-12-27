import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';

import {
  capitalizeFirstLetter,
  dateStringToDayjs,
  dayjsDateToString,
  getCurrentDate,
  getDayjsDate,
} from '#src/components/utils';
import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from '#src/components/calendarConstants';
import { MonthsOfYearWidget } from '#src/components/MonthsOfYearWidget';
import type { YearNavigationPanelWidgetProps } from '#src/components/YearNavigationPanelWidget';
import { YearNavigationPanelWidget } from '#src/components/YearNavigationPanelWidget';

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
  date,
  ...props
}: YearNavigationPanelWidgetProps) => {
  const localeInner = locale || 'ru';
  const [dateState, setDateState] = useState(date || getCurrentDate(locale));
  const [selectedDate, setSelectedDate] = useState<Dayjs | undefined>(getCurrentDate(localeInner).add(1, 'day'));

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const clickedCell = (e.target as HTMLDivElement).dataset.value;
    console.log(`click on ${clickedCell}`);
    const clickedDate = dateStringToDayjs(clickedCell, localeInner);
    if (clickedDate) {
      setSelectedDate(clickedDate);
    }
  };

  const getMonthCellDataAttributes = (value?: string, isCurrent?: boolean): Record<string, any> => {
    return {
      'data-value': value ? value : undefined,
      'data-is-current-month': isCurrent ? isCurrent : undefined,
    };
  };

  const renderMonth = (dateString: string) => {
    const dateCurrent = dateStringToDayjs(dateString, localeInner);
    if (!dateCurrent) return {};
    const cellContent = capitalizeFirstLetter(dateCurrent.format('MMMM'));
    const selected = dateCurrent && selectedDate && dateCurrent.isSame(selectedDate, 'month');
    const isCurrent = dateCurrent && dateCurrent.isSame(getCurrentDate(localeInner), 'month');
    const dataAttributes = getMonthCellDataAttributes(dateCurrent.toISOString(), isCurrent);

    return { cellContent, selected, isCurrent, ...dataAttributes };
  };

  const handleDateChange = (dateString: string) => {
    const dayjsDate = getDayjsDate(localeInner, dateString);
    setDateState(dayjsDate);
    //onDateChange?.(dayjsDateToString(dayjsDate));
  };

  const handleYearNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
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
      <YearNavigationPanelWidget date={dateState} locale={localeInner} onClick={handleYearNavigationPanelClick} />
      <MonthsOfYearWidget
        {...props}
        date={dateState}
        locale={localeInner}
        onClick={handleClick}
        renderCellWithString={renderMonth}
      />
    </CalendarWrapper>
  );
};
