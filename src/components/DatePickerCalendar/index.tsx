import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

import type { CalendarViewMode, SingleCalendarProps, PickerCalendarProps } from '#src/components/calendarInterfaces.ts';
import { MonthNavigationPanelWidget } from '#src/components/MonthNavigationPanelWidget';
import { dateStringToDayjs, dayjsDateToString, getCurrentTimeZone, setNoon } from '#src/components/utils.ts';
import {
  CalendarContainer,
  SinglePickerCalendarWrapper,
  DateCalendarView,
  MonthCalendarView,
  YearCalendarView,
} from '#src/components/calendarStyle.ts';
import { YEARS_ON_SCREEN } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';

export interface DatePickerCalendarProps extends SingleCalendarProps, PickerCalendarProps {
  onDateChange?: (dateString: string) => void;
  onMonthChange?: (dateString: string) => void;
  onYearChange?: (dateString: string) => void;
}

export const DatePickerCalendar = ({
  viewModeValue,
  defaultViewModeValue,
  onViewModeChange,
  dateValue,
  defaultDateValue,
  onDateValueChange,
  selectedDateValue,
  defaultSelectedDateValue,
  onSelectedDateValueChange,
  onDateChange,
  onMonthChange,
  onYearChange,
  timezone = getCurrentTimeZone(),
  locale = 'ru',
  ...props
}: DatePickerCalendarProps) => {
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

  //<editor-fold desc="Selected date">
  const [selectedDateState, setSelectedDateState] = useState<Dayjs | undefined>(defaultSelectedDateValue);
  const selectedDateInner = selectedDateValue || selectedDateState;

  const handleSelectedDateChange = (dateString: string) => {
    const dayjsSelectedDate = dateStringToDayjs(dateString, locale, timezone);
    setSelectedDateState(dayjsSelectedDate);
    onSelectedDateValueChange?.(dateString);
  };
  //</editor-fold>

  const handleDateClick = (dateString: string) => {
    handleSelectedDateChange(dateString);
    onDateChange?.(dateString);
  };
  const handleMonthClick = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    const newDate = dayjsDate ? dayjsDateToString(dateInner.month(dayjsDate.month())) : dateString;
    handleDateChange(newDate);
    handleViewModeChange('dates');
    onMonthChange?.(newDate);
  };
  const handleYearClick = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    const newDate = dayjsDate ? dayjsDateToString(dateInner.year(dayjsDate.year())) : dateString;
    handleDateChange(newDate);
    handleViewModeChange('dates');
    onYearChange?.(newDate);
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
  console.log('render DatePickerCalendar');

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
        <DateCalendarView
          {...props}
          dateValue={dateInner}
          selectedDateValue={selectedDateInner}
          onSelectedDateValueChange={handleDateClick}
          locale={locale}
          $isVisible={viewModeInner === 'dates'}
        />
        <MonthCalendarView
          {...props}
          dateValue={setNoon(dateInner.startOf('month'))}
          selectedDateValue={selectedDateInner}
          onSelectedDateValueChange={handleMonthClick}
          locale={locale}
          $isVisible={viewModeInner === 'months'}
        />
        <YearCalendarView
          {...props}
          dateValue={setNoon(dateInner.startOf('year'))}
          selectedDateValue={selectedDateInner}
          onSelectedDateValueChange={handleYearClick}
          locale={locale}
          $isVisible={viewModeInner === 'years'}
        />
      </CalendarContainer>
    </SinglePickerCalendarWrapper>
  );
};
