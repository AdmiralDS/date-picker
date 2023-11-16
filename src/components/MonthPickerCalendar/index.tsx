import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';

import { mediumGroupBorderRadius } from '@admiral-ds/react-ui';

import type { CalendarViewMode, SingleCalendarProps, PickerCalendarProps } from '#src/components/calendarInterfaces.ts';
import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from '#src/components/calendarConstants.ts';
import {
  dateStringToDayjs,
  dayjsDateToString,
  dayjsStateToString,
  getCurrentTimeZone,
  getDayjsDate,
} from '#src/components/utils.ts';
import { MonthCalendar } from '#src/components/MonthCalendar';
import { YearCalendar } from '#src/components/YearCalendar';
import { YearNavigationPanelWidget } from '#src/components/YearNavigationPanelWidget';

export interface MonthPickerCalendarProps extends SingleCalendarProps, PickerCalendarProps {
  onMonthChange?: (dateString: string) => void;
  onYearChange?: (dateString: string) => void;
}

const MonthPickerCalendarWrapper = styled.div`
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

const MonthPickerCalendarContainer = styled.div`
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

const StyledMonthCalendar = styled(MonthCalendar)<{ $isVisible: boolean }>`
  visibility: ${(p) => (p.$isVisible ? 'visible' : 'hidden')};
`;

const StyledYearCalendar = styled(YearCalendar)<{ $isVisible: boolean }>`
  visibility: ${(p) => (p.$isVisible ? 'visible' : 'hidden')};
`;

export const MonthPickerCalendar = ({
  viewModeValue,
  defaultViewModeValue,
  onViewModeChange,
  dateValue,
  defaultDateValue,
  onDateValueChange,
  selectedDateValue,
  defaultSelectedDateValue,
  onSelectedDateValueChange,
  onMonthChange,
  onYearChange,
  timezone = getCurrentTimeZone(),
  locale = 'ru',
  ...props
}: MonthPickerCalendarProps) => {
  //<editor-fold desc="Calendar view mode">
  const [viewModeState, setViewModeState] = useState<CalendarViewMode>(defaultViewModeValue || 'months');
  const viewModeInner = viewModeValue || viewModeState;

  const handleViewModeChange = (mode: CalendarViewMode) => {
    setViewModeState(mode);
    onViewModeChange?.(mode);
  };
  //</editor-fold>

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

  //<editor-fold desc="Selected date">
  const [selectedDateState, setSelectedDateState] = useState<Dayjs | undefined>(
    defaultSelectedDateValue ? dateStringToDayjs(defaultSelectedDateValue, locale, timezone) : undefined,
  );
  const selectedDateInner =
    (selectedDateValue && dateStringToDayjs(selectedDateValue, locale, timezone)) || selectedDateState;

  const handleSelectedDateChange = (dateString: string) => {
    const dayjsSelectedDate = dateStringToDayjs(dateString, locale, timezone);
    setSelectedDateState(dayjsSelectedDate);
    onSelectedDateValueChange?.(dateString);
  };
  //</editor-fold>

  const handleMonthClick = (dateString: string) => {
    handleSelectedDateChange(dateString);
    onMonthChange?.(dateString);
  };
  const handleYearClick = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    const newDate = dayjsDate ? dayjsDateToString(dateInner.year(dayjsDate.year())) : dateString;
    handleDateChange(newDate);
    handleViewModeChange('months');
    onYearChange?.(newDate);
  };

  const handleYearNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        handleDateChange(dayjsDateToString(dateInner.subtract(1, 'year')));
        break;
      case 'right':
        handleDateChange(dayjsDateToString(dateInner.add(1, 'year')));
        break;
      case 'year':
        handleViewModeChange(viewModeInner === 'years' ? 'months' : 'years');
        break;
    }
  };

  return (
    <MonthPickerCalendarWrapper>
      <YearNavigationPanelWidget
        date={dayjsDateToString(dateInner)}
        viewMode={viewModeInner}
        locale={locale}
        timezone={timezone}
        onClick={handleYearNavigationPanelClick}
      />
      <MonthPickerCalendarContainer>
        <StyledMonthCalendar
          {...props}
          dateValue={dayjsDateToString(dateInner)}
          selectedDateValue={dayjsStateToString(selectedDateInner)}
          onSelectedDateValueChange={handleMonthClick}
          locale={locale}
          $isVisible={viewModeInner === 'months'}
        />
        <StyledYearCalendar
          {...props}
          dateValue={dayjsDateToString(dateInner)}
          selectedDateValue={dayjsStateToString(selectedDateInner)}
          onSelectedDateValueChange={handleYearClick}
          locale={locale}
          $isVisible={viewModeInner === 'years'}
        />
      </MonthPickerCalendarContainer>
    </MonthPickerCalendarWrapper>
  );
};
