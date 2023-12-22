import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

import type { RangeCalendarProps, PickerCalendarProps, CalendarViewMode } from '#src/components/calendarInterfaces.ts';
import { dateStringToDayjs, dayjsDateToString, getCurrentTimeZone } from '#src/components/utils.ts';
import { MonthNavigationPanelWidget } from '#src/components/MonthNavigationPanelWidget';
import {
  CalendarContainer,
  SinglePickerCalendarWrapper,
  DateRangeCalendarView,
  MonthCalendarView,
  YearCalendarView,
} from '#src/components/calendarStyle.ts';
import { YEARS_ON_SCREEN } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';

export interface DateRangePickerCalendarProps
  extends Omit<
      RangeCalendarProps,
      'activeDateRangeEndValue' | 'defaultActiveDateRangeEndValue' | 'onActiveDateRangeEndValueChange'
    >,
    PickerCalendarProps {}

export const DateRangePickerCalendar = ({
  viewModeValue,
  defaultViewModeValue,
  onViewModeChange,
  dateValue,
  defaultDateValue,
  onDateValueChange,
  selectedDateRangeValue,
  defaultSelectedDateRangeValue,
  onSelectedDateRangeValueChange,
  timezone = getCurrentTimeZone(),
  locale = 'ru',
  ...props
}: DateRangePickerCalendarProps) => {
  //<editor-fold desc="Calendar view mode">
  const [viewModeState, setViewModeState] = useState<CalendarViewMode>(defaultViewModeValue || 'dates');
  const viewModeInner = viewModeValue || viewModeState;

  const handleViewModeChange = (mode: CalendarViewMode) => {
    setViewModeState(mode);
    onViewModeChange?.(mode);
  };
  //</editor-fold>

  //<editor-fold desc="Date shown on calendar">
  const [dateState, setDateState] = useState(defaultDateValue || dayjs().tz(timezone).locale(locale));
  const dateInner = dateValue || dateState;

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
    setSelectedDateRangeState([
      dateStringToDayjs(dateRangeString[0], locale, timezone),
      dateStringToDayjs(dateRangeString[1], locale, timezone),
    ]);
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

  const handleMonthClick = (date: Dayjs) => {
    const newDate = dateInner.month(date.month());
    handleDateChange(dayjsDateToString(newDate));
    handleViewModeChange('dates');
  };
  const handleYearClick = (date: Dayjs) => {
    const newDate = dateInner.year(date.year());
    handleDateChange(dayjsDateToString(newDate));
    handleViewModeChange('dates');
  };

  const handleMonthNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        if (viewModeInner === 'dates') {
          handleDateChange(dayjsDateToString(dateInner.subtract(1, 'month')));
        } else if (viewModeInner === 'months') {
          handleDateChange(dayjsDateToString(dateInner.subtract(1, 'year')));
        } else {
          handleDateChange(dayjsDateToString(dateInner.subtract(YEARS_ON_SCREEN, 'year')));
        }
        break;
      case 'right':
        if (viewModeInner === 'dates') {
          handleDateChange(dayjsDateToString(dateInner.add(1, 'month')));
        } else if (viewModeInner === 'months') {
          handleDateChange(dayjsDateToString(dateInner.add(1, 'year')));
        } else {
          handleDateChange(dayjsDateToString(dateInner.add(YEARS_ON_SCREEN, 'year')));
        }
        break;
      case 'month':
        handleViewModeChange(viewModeInner === 'months' ? 'dates' : 'months');
        break;
      case 'year':
        handleViewModeChange(viewModeInner === 'years' ? 'dates' : 'years');
        break;
    }
  };

  const getSelectedRangeEnd = () => {
    //console.log(`dateRangeActiveEndState-${dateRangeActiveEndState}, selectedDateRangeInner-${selectedDateRangeInner}`);
    if (!dateRangeActiveEndState || !selectedDateRangeInner) return undefined;
    if (selectedDateRangeInner[0] && dateRangeActiveEndState.isSame(selectedDateRangeInner[0], 'date')) {
      return selectedDateRangeInner[1];
    }
    if (selectedDateRangeInner[1] && dateRangeActiveEndState.isSame(selectedDateRangeInner[1], 'date')) {
      return selectedDateRangeInner[0];
    }
  };
  const selectedRangeEnd = getSelectedRangeEnd();

  return (
    <SinglePickerCalendarWrapper>
      <MonthNavigationPanelWidget
        date={dateInner}
        viewMode={viewModeInner}
        locale={locale}
        timezone={timezone}
        onClick={handleMonthNavigationPanelClick}
      />
      <CalendarContainer>
        <DateRangeCalendarView
          {...props}
          dateValue={dateInner}
          selectedDateRangeValue={selectedDateRangeInner}
          defaultSelectedDateRangeValue={defaultSelectedDateRangeValue}
          onSelectedDateRangeValueChange={handleSelectedDateRangeChange}
          onActiveDateRangeEndValueChange={handleDateRangeActiveEndChange}
          locale={locale}
          $isVisible={viewModeInner === 'dates'}
        />
        <MonthCalendarView
          {...props}
          dateValue={dateInner}
          selectedDateValue={selectedRangeEnd}
          onSelectedDateValueChange={handleMonthClick}
          locale={locale}
          $isVisible={viewModeInner === 'months'}
        />
        <YearCalendarView
          {...props}
          dateValue={dateInner}
          selectedDateValue={selectedRangeEnd}
          onSelectedDateValueChange={handleYearClick}
          locale={locale}
          $isVisible={viewModeInner === 'years'}
        />
      </CalendarContainer>
    </SinglePickerCalendarWrapper>
  );
};
