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
import type { TwentyYearsNavigationPanelWidgetProps } from '#src/components/TwentyYearsNavigationPanelWidget/interfaces';
import { TwentyYearsNavigationPanelWidget } from '#src/components/TwentyYearsNavigationPanelWidget';
import { YearsOfTwentyYearsWidget } from '#src/components/YearsOfTwentyYearsWidget';
import { YEARS_ON_SCREEN } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';
import type { DefaultYearCellProps } from '#src/components/YearsOfTwentyYearsWidget/Years.tsx';
import { DefaultYearCell } from '#src/components/YearsOfTwentyYearsWidget/Years.tsx';

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

  const getYearCellDataAttributes = (value?: string, isCurrentYear?: boolean): Record<string, any> => {
    return {
      'data-value': value ? value : undefined,
      'data-is-current-year': isCurrentYear ? isCurrentYear : undefined,
    };
  };

  const renderYear = (dateString: string) => {
    const dateCurrent = dateStringToDayjs(dateString, locale, timezone);
    if (!dateCurrent) return () => <></>;
    const cellContent = dateCurrent.year();
    const selected = dateCurrent && selectedDate && dateCurrent.isSame(selectedDate, 'year');
    const isCurrentYear = dateCurrent && dateCurrent.isSame(getCurrentDate(locale, timezone), 'year');
    const dataAttributes = getYearCellDataAttributes(dateCurrent.toISOString(), isCurrentYear);

    const renderDefaultMonthCell = (props: DefaultYearCellProps) => (
      <DefaultYearCell key={dayjsDateToString(dateCurrent)} {...props} />
    );

    return renderDefaultMonthCell({ cellContent, selected, isCurrentYear, ...dataAttributes });
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
        renderYearCell={renderYear}
      />
    </CalendarWrapper>
  );
};
