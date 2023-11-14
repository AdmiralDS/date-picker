import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import { mediumGroupBorderRadius } from '@admiral-ds/react-ui';

import type { SinglePickerCalendarProps } from '#src/components/calendarInterfaces.ts';
import { DateCalendar } from '#src/components/DateCalendar';
import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from '#src/components/calendarConstants.ts';
import { MonthNavigationPanelWidget } from '#src/components/MonthNavigationPanelWidget';
import { dateStringToDayjs, dayjsDateToString, getCurrentTimeZone, getDayjsDate } from '#src/components/utils.ts';
import { MonthCalendar } from '#src/components/MonthCalendar';
import { YearCalendar } from '#src/components/YearCalendar';

export type CalendarViewMode = 'dates' | 'months' | 'years';

export interface CalendarProps extends SinglePickerCalendarProps {
  viewModeValue?: CalendarViewMode;
  defaultViewModeValue?: CalendarViewMode;
  onViewModeChange?: (mode: CalendarViewMode) => void;
}

const CalendarWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding-top: 20px;
  width: ${CALENDAR_WIDTH}px;
  height: ${CALENDAR_HEIGHT}px;
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  ${(p) => p.theme.shadow['Shadow 08']}
`;

const CalendarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  & > div {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const StyledDateCalendar = styled(DateCalendar)<{ $isVisible: boolean }>`
  visibility: ${(p) => (p.$isVisible ? 'visible' : 'hidden')};
`;

const StyledMonthCalendar = styled(MonthCalendar)<{ $isVisible: boolean }>`
  visibility: ${(p) => (p.$isVisible ? 'visible' : 'hidden')};
`;

const StyledYearCalendar = styled(YearCalendar)<{ $isVisible: boolean }>`
  visibility: ${(p) => (p.$isVisible ? 'visible' : 'hidden')};
`;

export const Calendar = ({
  dateValue,
  defaultDateValue,
  onDateValueChange,
  viewModeValue,
  defaultViewModeValue,
  onViewModeChange,
  timezone = getCurrentTimeZone(),
  locale = 'ru',
  ...props
}: CalendarProps) => {
  //<editor-fold desc="Date shown on calendar">
  const [dateState, setDateState] = useState(getDayjsDate(locale, timezone, defaultDateValue));
  const dateInner = (dateValue && getDayjsDate(locale, timezone, dateValue)) || dateState;

  const handleDateChange = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    if (dayjsDate) {
      setDateState(dayjsDate);
      onDateValueChange?.(dateString);
    }
  };
  //</editor-fold>

  //<editor-fold desc="Calendar view mode">
  const [viewModeState, setViewModeState] = useState<CalendarViewMode>(defaultViewModeValue || 'dates');
  const viewModeInner = viewModeValue || viewModeState;

  const handleViewModeChange = (mode: CalendarViewMode) => {
    setViewModeState(mode);
    onViewModeChange?.(mode);
  };
  //</editor-fold>

  const handleMonthNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        handleDateChange(dayjsDateToString(dateInner.subtract(1, 'month')));
        break;
      case 'right':
        handleDateChange(dayjsDateToString(dateInner.add(1, 'month')));
        break;
      case 'month':
        handleViewModeChange(viewModeInner === 'months' ? 'dates' : 'months');
        break;
      case 'year':
        handleViewModeChange(viewModeInner === 'years' ? 'dates' : 'years');
        break;
    }
  };

  return (
    <CalendarWrapper>
      <MonthNavigationPanelWidget
        date={dayjsDateToString(dateInner)}
        viewMode={viewModeInner}
        locale={locale}
        timezone={timezone}
        onClick={handleMonthNavigationPanelClick}
      />
      <CalendarContainer>
        <StyledDateCalendar
          {...props}
          dateValue={dayjsDateToString(dateInner)}
          locale={locale}
          $isVisible={viewModeInner === 'dates'}
        />
        <StyledMonthCalendar
          {...props}
          dateValue={dayjsDateToString(dateInner)}
          locale={locale}
          $isVisible={viewModeInner === 'months'}
        />
        <StyledYearCalendar
          {...props}
          dateValue={dayjsDateToString(dateInner)}
          locale={locale}
          $isVisible={viewModeInner === 'years'}
        />
      </CalendarContainer>
    </CalendarWrapper>
  );
};
