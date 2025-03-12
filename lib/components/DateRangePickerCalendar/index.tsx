import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';

import type { RangeCalendarProps, PickerCalendarProps, CalendarViewMode } from '#lib/calendarInterfaces.ts';
import { getCurrentDate } from '#lib/utils.ts';
import { MonthNavigationPanelWidget } from '#lib/MonthNavigationPanelWidget';
import {
  CalendarContainer,
  SinglePickerCalendarWrapper,
  DateRangeCalendarView,
  MonthCalendarView,
  YearCalendarView,
} from '#lib/calendarStyle.ts';
import { YEARS_ON_SCREEN } from '#lib/YearsOfTwentyYearsWidget/constants.ts';
import { ruLocale } from '#lib/calendarConstants.ts';
import type { DateRange } from 'lib/types';

export interface DateRangePickerCalendarProps
  extends Omit<RangeCalendarProps, 'activeDateRangeEndValue' | 'defaultActiveDateRangeEndValue' | 'cell'>,
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
  onActiveDateRangeEndValueChange,
  cell,
  locale = ruLocale,
  prevButtonProps,
  nextButtonProps,
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
  const [dateState, setDateState] = useState(defaultDateValue || getCurrentDate(locale?.localeName));
  const dateInner = dateValue || dateState;

  const handleDateChange = (date: Dayjs) => {
    setDateState(date);
    onDateValueChange?.(date);
  };
  //</editor-fold>

  //<editor-fold desc="Selected range">
  const [selectedDateRangeState, setSelectedDateRangeState] = useState<DateRange>(
    defaultSelectedDateRangeValue ?? [undefined, undefined],
  );
  const selectedDateRangeInner = selectedDateRangeValue || selectedDateRangeState;

  const handleSelectedDateRangeChange = (dateRange: DateRange) => {
    setSelectedDateRangeState(dateRange);
    onSelectedDateRangeValueChange?.(dateRange);
  };
  //</editor-fold>

  //<editor-fold desc="Active end of range">
  const [dateRangeActiveEndState, setDateRangeActiveEndState] = useState<Dayjs | undefined>();

  const handleDateRangeActiveEndChange = (date?: Dayjs) => {
    setDateRangeActiveEndState(date);
    onActiveDateRangeEndValueChange?.(date);
  };
  //</editor-fold>

  const handleMonthClick = (date: Dayjs) => {
    const newDate = dateInner.month(date.month());
    handleDateChange(newDate);
    handleViewModeChange('dates');
  };
  const handleYearClick = (date: Dayjs) => {
    const newDate = dateInner.year(date.year());
    handleDateChange(newDate);
    handleViewModeChange('dates');
  };

  const handleMonthNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        if (viewModeInner === 'dates') {
          handleDateChange(dateInner.subtract(1, 'month'));
        } else if (viewModeInner === 'months') {
          handleDateChange(dateInner.subtract(1, 'year'));
        } else {
          handleDateChange(dateInner.subtract(YEARS_ON_SCREEN, 'year'));
        }
        break;
      case 'right':
        if (viewModeInner === 'dates') {
          handleDateChange(dateInner.add(1, 'month'));
        } else if (viewModeInner === 'months') {
          handleDateChange(dateInner.add(1, 'year'));
        } else {
          handleDateChange(dateInner.add(YEARS_ON_SCREEN, 'year'));
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
        onClick={handleMonthNavigationPanelClick}
        prevButtonProps={prevButtonProps}
        nextButtonProps={nextButtonProps}
      />
      <CalendarContainer>
        <DateRangeCalendarView
          {...props}
          cell={cell?.dateCell}
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
          cell={cell?.monthCell}
          dateValue={dateInner}
          selectedDateValue={selectedRangeEnd}
          onSelectedDateValueChange={handleMonthClick}
          locale={locale}
          $isVisible={viewModeInner === 'months'}
        />
        <YearCalendarView
          {...props}
          cell={cell?.yearCell}
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
