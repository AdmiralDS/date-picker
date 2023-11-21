import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';

import { mediumGroupBorderRadius } from '@admiral-ds/react-ui';

import type { RangeCalendarProps, PickerCalendarProps, CalendarViewMode } from '#src/components/calendarInterfaces.ts';
import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from '#src/components/calendarConstants.ts';
import { dateStringToDayjs, dayjsDateToString, getCurrentTimeZone, getDayjsDate } from '#src/components/utils.ts';
import { MonthRangeCalendar } from '#src/components/MonthRangeCalendar';
import { YearNavigationPanelWidget } from '#src/components/YearNavigationPanelWidget';
import { YearCalendar } from '#src/components/YearCalendar';

export interface MonthRangePickerCalendarProps
  extends Omit<
      RangeCalendarProps,
      'activeDateRangeEndValue' | 'defaultActiveDateRangeEndValue' | 'onActiveDateRangeEndValueChange'
    >,
    PickerCalendarProps {
  onYearChange?: (dateString: string) => void;
}

const MonthRangePickerCalendarWrapper = styled.div`
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

const MonthRangePickerCalendarContainer = styled.div`
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

const StyledMonthRangeCalendar = styled(MonthRangeCalendar)<{ $isVisible: boolean }>`
  visibility: ${(p) => (p.$isVisible ? 'visible' : 'hidden')};
`;

const StyledYearCalendar = styled(YearCalendar)<{ $isVisible: boolean }>`
  visibility: ${(p) => (p.$isVisible ? 'visible' : 'hidden')};
`;

export const MonthRangePickerCalendar = ({
  viewModeValue,
  defaultViewModeValue,
  onViewModeChange,
  dateValue,
  defaultDateValue,
  onDateValueChange,
  selectedDateRangeValue,
  defaultSelectedDateRangeValue,
  onSelectedDateRangeValueChange,
  onYearChange,
  timezone = getCurrentTimeZone(),
  locale = 'ru',
  ...props
}: MonthRangePickerCalendarProps) => {
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

  //<editor-fold desc="Selected range">
  const [selectedDateRangeState, setSelectedDateRangeState] = useState(defaultSelectedDateRangeValue);
  const selectedDateRangeInner = selectedDateRangeValue || selectedDateRangeState;
  const handleSelectedDateRangeChange = (dateRangeString: [string | undefined, string | undefined]) => {
    setSelectedDateRangeState(dateRangeString);
    onSelectedDateRangeValueChange?.(dateRangeString);
  };
  //</editor-fold>

  //<editor-fold desc="Active end of range">
  const [dateRangeActiveEndState, setDateRangeActiveEndState] = useState<Dayjs | undefined>();
  const handleDateRangeActiveEndChange = (dateString?: string) => {
    const dateDayjs = dateStringToDayjs(dateString, locale, timezone);
    //console.log(`activeEnd-${dateString}`);
    setDateRangeActiveEndState(dateDayjs);
  };
  //</editor-fold>

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

  const getSelectedRangeEnd = () => {
    //console.log(`dateRangeActiveEndState-${dateRangeActiveEndState}, selectedDateRangeInner-${selectedDateRangeInner}`);
    if (!dateRangeActiveEndState || !selectedDateRangeInner) return undefined;
    if (
      selectedDateRangeInner[0] &&
      dateRangeActiveEndState.isSame(dateStringToDayjs(selectedDateRangeInner[0], locale, timezone), 'month')
    ) {
      return selectedDateRangeInner[1];
    }
    if (
      selectedDateRangeInner[1] &&
      dateRangeActiveEndState.isSame(dateStringToDayjs(selectedDateRangeInner[1], locale, timezone), 'month')
    ) {
      return selectedDateRangeInner[0];
    }
  };
  const selectedRangeEnd = getSelectedRangeEnd();

  return (
    <MonthRangePickerCalendarWrapper>
      <YearNavigationPanelWidget
        date={dayjsDateToString(dateInner)}
        viewMode={viewModeInner}
        locale={locale}
        timezone={timezone}
        onClick={handleYearNavigationPanelClick}
      />
      <MonthRangePickerCalendarContainer>
        <StyledMonthRangeCalendar
          {...props}
          dateValue={dayjsDateToString(dateInner)}
          selectedDateRangeValue={selectedDateRangeInner}
          defaultSelectedDateRangeValue={defaultSelectedDateRangeValue}
          onSelectedDateRangeValueChange={handleSelectedDateRangeChange}
          onActiveDateRangeEndValueChange={handleDateRangeActiveEndChange}
          locale={locale}
          $isVisible={viewModeInner === 'months'}
        />
        <StyledYearCalendar
          {...props}
          dateValue={dayjsDateToString(dateInner)}
          selectedDateValue={selectedRangeEnd}
          onSelectedDateValueChange={handleYearClick}
          locale={locale}
          $isVisible={viewModeInner === 'years'}
        />
      </MonthRangePickerCalendarContainer>
    </MonthRangePickerCalendarWrapper>
  );
};
