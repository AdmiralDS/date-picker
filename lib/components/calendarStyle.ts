import styled from 'styled-components';
import { vars } from '@admiral-ds/web';

import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from '#lib/calendarConstants.ts';
import { DateCalendar } from '#lib/DateCalendar';
import { MonthCalendar } from '#lib/MonthCalendar';
import { YearCalendar } from '#lib/YearCalendar';
import { DateRangeCalendar } from '#lib/DateRangeCalendar';
import { MonthRangeCalendar } from '#lib/MonthRangeCalendar';
import { YearRangeCalendar } from '#lib/YearRangeCalendar';

export const SinglePickerCalendarWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding-top: 20px;
  width: ${CALENDAR_WIDTH}px;
  height: ${CALENDAR_HEIGHT}px;
  background-color: ${vars.color.Special_ElevatedBG};
  border-radius: ${vars.borderRadius.Medium};
  box-shadow: ${vars.boxShadow.Shadow_08};
`;

export const DoublePickerCalendarWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  width: ${CALENDAR_WIDTH * 2}px;
  height: ${CALENDAR_HEIGHT}px;
  background-color: ${vars.color.Special_ElevatedBG};
  border-radius: ${vars.borderRadius.Medium};
  ${vars.boxShadow.Shadow_08}
`;

export const SingleContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding-top: 20px;
  width: ${CALENDAR_WIDTH}px;
  height: ${CALENDAR_HEIGHT}px;
`;

export const CalendarContainer = styled.div`
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

export const DateRangeCalendarView = styled(DateRangeCalendar)<{ $isVisible: boolean }>`
  visibility: ${(p) => (p.$isVisible ? 'visible' : 'hidden')};
`;

export const MonthRangeCalendarView = styled(MonthRangeCalendar)<{ $isVisible: boolean }>`
  visibility: ${(p) => (p.$isVisible ? 'visible' : 'hidden')};
`;

export const YearRangeCalendarView = styled(YearRangeCalendar)<{ $isVisible: boolean }>`
  visibility: ${(p) => (p.$isVisible ? 'visible' : 'hidden')};
`;

export const DateCalendarView = styled(DateCalendar)<{ $isVisible: boolean }>`
  visibility: ${(p) => (p.$isVisible ? 'visible' : 'hidden')};
`;

export const MonthCalendarView = styled(MonthCalendar)<{ $isVisible: boolean }>`
  visibility: ${(p) => (p.$isVisible ? 'visible' : 'hidden')};
`;

export const YearCalendarView = styled(YearCalendar)<{ $isVisible: boolean }>`
  visibility: ${(p) => (p.$isVisible ? 'visible' : 'hidden')};
`;
