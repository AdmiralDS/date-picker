import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';

import type { CalendarViewMode, SingleCalendarProps, PickerCalendarProps } from '#lib/calendarInterfaces.ts';
import { MonthNavigationPanelWidget } from '#lib/MonthNavigationPanelWidget';
import { getCurrentDate, setNoon } from '#lib/utils.ts';
import {
  CalendarContainer,
  SinglePickerCalendarWrapper,
  DateCalendarView,
  MonthCalendarView,
  YearCalendarView,
} from '#lib/calendarStyle.ts';
import { YEARS_ON_SCREEN } from '#lib/YearsWidget/constants.ts';
import { ruLocale } from '#lib/calendarConstants.ts';

export interface DatePickerCalendarProps extends Omit<SingleCalendarProps, 'cell'>, PickerCalendarProps {}

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
  cell,
  locale = ruLocale,
  prevButtonProps,
  nextButtonProps,
  className,
  style,
  ...props
}: DatePickerCalendarProps) => {
  //#region "Calendar view mode"
  const [viewModeState, setViewModeState] = useState<CalendarViewMode>(defaultViewModeValue || 'dates');
  const viewModeInner = viewModeValue || viewModeState;

  const handleViewModeChange = (mode: CalendarViewMode) => {
    setViewModeState(mode);
    onViewModeChange?.(mode);
  };
  //#endregion

  //#region "Date shown on calendar"
  const [dateState, setDateState] = useState(defaultDateValue || getCurrentDate(locale?.localeName));
  const dateInner = dateValue || dateState;

  const handleDateChange = (date: Dayjs) => {
    setDateState(date);
    onDateValueChange?.(date);
  };
  //#endregion

  //#region "Selected date"
  const [selectedDateState, setSelectedDateState] = useState<Dayjs | undefined>(defaultSelectedDateValue);
  const selectedDateInner = selectedDateValue || selectedDateState;

  const handleSelectedDateChange = (date: Dayjs) => {
    setSelectedDateState(date);
    onSelectedDateValueChange?.(date);
  };
  //#endregion

  const handleDateClick = (date: Dayjs) => {
    handleSelectedDateChange(date);
  };
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
    e.preventDefault();
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

  return (
    <SinglePickerCalendarWrapper className={className} style={style}>
      <MonthNavigationPanelWidget
        date={dateInner}
        viewMode={viewModeInner}
        locale={locale}
        onMouseDown={handleMonthNavigationPanelClick}
        prevButtonProps={prevButtonProps}
        nextButtonProps={nextButtonProps}
      />
      <CalendarContainer>
        <DateCalendarView
          {...props}
          cell={cell?.dateCell}
          dateValue={dateInner}
          selectedDateValue={selectedDateInner}
          onSelectedDateValueChange={handleDateClick}
          locale={locale}
          $isVisible={viewModeInner === 'dates'}
        />
        <MonthCalendarView
          {...props}
          cell={cell?.monthCell}
          dateValue={setNoon(dateInner.startOf('month'))}
          selectedDateValue={selectedDateInner}
          onSelectedDateValueChange={handleMonthClick}
          locale={locale}
          $isVisible={viewModeInner === 'months'}
        />
        <YearCalendarView
          {...props}
          cell={cell?.yearCell}
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
