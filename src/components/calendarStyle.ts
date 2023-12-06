import styled from 'styled-components';

import { mediumGroupBorderRadius } from '@admiral-ds/react-ui';

import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from '#src/components/calendarConstants.ts';
import { DateCalendar } from '#src/components/DateCalendar';
import { MonthCalendar } from '#src/components/MonthCalendar';
import { YearCalendar } from '#src/components/YearCalendar';
import { DateRangeCalendar } from '#src/components/DateRangeCalendar';
import { MonthRangeCalendar } from '#src/components/MonthRangeCalendar';
import { YearRangeCalendar } from '#src/components/YearRangeCalendar';

export const SinglePickerCalendarWrapper = styled.div`
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

export const DoublePickerCalendarWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  width: ${CALENDAR_WIDTH * 2}px;
  height: ${CALENDAR_HEIGHT}px;
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  ${(p) => p.theme.shadow['Shadow 08']}
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
