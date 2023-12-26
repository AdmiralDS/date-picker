import type { MouseEventHandler } from 'react';
import { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';

import { dateStringToDayjs, dayjsDateToString, getCurrentDate } from '#src/components/utils.ts';
import type {
  RangeDoubleCalendarProps,
  CalendarViewMode,
  PickerCalendarProps,
} from '#src/components/calendarInterfaces.ts';
import { MonthNavigationPanelWidget } from '#src/components/MonthNavigationPanelWidget';
import {
  CalendarContainer,
  DoublePickerCalendarWrapper,
  SingleContainer,
  DateRangeCalendarView,
  MonthCalendarView,
  YearCalendarView,
} from '#src/components/calendarStyle.ts';
import { YEARS_ON_SCREEN } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';

export interface DateRangeDoublePickerCalendarProps
  extends Omit<
      RangeDoubleCalendarProps,
      'activeDateRangeEndValue' | 'defaultActiveDateRangeEndValue' | 'onActiveDateRangeEndValueChange'
    >,
    PickerCalendarProps {}

export const DateRangeDoublePickerCalendar = ({
  viewModeValue,
  defaultViewModeValue,
  onViewModeChange,
  dateRangeValue,
  defaultDateRangeValue,
  onDateRangeValueChange,
  selectedDateRangeValue,
  defaultSelectedDateRangeValue,
  onSelectedDateRangeValueChange,
  activeDateValue,
  defaultActiveDateValue,
  onActiveDateValueChange,
  locale = 'ru',
  ...props
}: DateRangeDoublePickerCalendarProps) => {
  //<editor-fold desc="Calendar view mode">
  const [viewModeLeftState, setViewModeLeftState] = useState<CalendarViewMode>(defaultViewModeValue || 'dates');
  const viewModeLeftInner = viewModeValue || viewModeLeftState;

  const handleViewModeLeftChange = (mode: CalendarViewMode) => {
    setViewModeLeftState(mode);
    onViewModeChange?.(mode);
  };

  const [viewModeRightState, setViewModeRightState] = useState<CalendarViewMode>(defaultViewModeValue || 'dates');
  const viewModeRightInner = viewModeValue || viewModeRightState;

  const handleViewModeRightChange = (mode: CalendarViewMode) => {
    setViewModeRightState(mode);
    onViewModeChange?.(mode);
  };
  //</editor-fold>

  //<editor-fold desc="Date shown on calendar">
  const [dateLeftState, setDateLeftState] = useState(defaultDateRangeValue?.[0] || getCurrentDate(locale));
  const dateLeftInner = dateRangeValue?.[0] || dateLeftState;

  const handleDateLeftChange = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale);
    if (dayjsDate) {
      setDateLeftState(dayjsDate);
      onDateRangeValueChange?.([dateString, dayjsDateToString(dateRightInner)]);
    }
  };

  const [dateRightState, setDateRightState] = useState(defaultDateRangeValue?.[1] || dateLeftInner.add(1, 'month'));
  const dateRightInner = dateRangeValue?.[1] || dateRightState;

  const handleDateRightChange = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale);
    if (dayjsDate) {
      setDateRightState(dayjsDate);
      onDateRangeValueChange?.([dayjsDateToString(dateLeftInner), dateString]);
    }
  };

  useEffect(() => {
    if (dateLeftInner.isSameOrAfter(dateRightInner)) {
      handleDateRightChange(dayjsDateToString(dateLeftInner.add(1, 'month')));
    }
  }, [dateLeftInner]);
  useEffect(() => {
    if (dateRightInner.isSameOrBefore(dateLeftInner)) {
      handleDateLeftChange(dayjsDateToString(dateRightInner.subtract(1, 'month')));
    }
  }, [dateRightInner]);
  //</editor-fold>

  //<editor-fold desc="Hovered date">
  const [activeDateState, setActiveDateState] = useState<Dayjs | undefined>(defaultActiveDateValue);
  const activeDateInner = activeDateValue || activeDateState;

  const handleActiveDateChange = (date?: Dayjs) => {
    setActiveDateState(date);
    onActiveDateValueChange?.(date);
  };
  //</editor-fold>

  //<editor-fold desc="Selected range">
  const [selectedDateRangeState, setSelectedDateRangeState] = useState(defaultSelectedDateRangeValue);
  const selectedDateRangeInner = selectedDateRangeValue || selectedDateRangeState;

  const handleSelectedDateRangeChange = (dateRangeString: [string | undefined, string | undefined]) => {
    setSelectedDateRangeState([
      dateStringToDayjs(dateRangeString[0], locale),
      dateStringToDayjs(dateRangeString[1], locale),
    ]);
    onSelectedDateRangeValueChange?.(dateRangeString);
  };
  //</editor-fold>

  //<editor-fold desc="Active end of range">
  const [dateRangeActiveEndState, setDateRangeActiveEndState] = useState<Dayjs | undefined>();
  const handleDateRangeActiveEndChange = (dateString?: string) => {
    const dateDayjs = dateStringToDayjs(dateString, locale);
    setDateRangeActiveEndState(dateDayjs);
  };
  //</editor-fold>

  const handleLeftMonthClick = (date: Dayjs) => {
    const newDate = dateLeftInner.month(date.month());
    handleDateLeftChange(dayjsDateToString(newDate));
    handleViewModeLeftChange('dates');
    //onMonthChange?.(newDate);
  };
  const handleRightMonthClick = (date: Dayjs) => {
    const newDate = dateRightInner.month(date.month());
    handleDateRightChange(dayjsDateToString(newDate));
    handleViewModeRightChange('dates');
  };

  const handleLeftYearClick = (date: Dayjs) => {
    const newDate = dateLeftInner.year(date.year());
    handleDateLeftChange(dayjsDateToString(newDate));
    handleViewModeLeftChange('months');
  };
  const handleRightYearClick = (date: Dayjs) => {
    const newDate = dateRightInner.year(date.year());
    handleDateRightChange(dayjsDateToString(newDate));
    handleViewModeRightChange('months');
  };

  const handleLeftMonthNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        if (viewModeLeftInner === 'dates') {
          handleDateLeftChange(dayjsDateToString(dateLeftInner.subtract(1, 'month')));
        } else if (viewModeLeftInner === 'months') {
          handleDateLeftChange(dayjsDateToString(dateLeftInner.subtract(1, 'year')));
        } else {
          handleDateLeftChange(dayjsDateToString(dateLeftInner.subtract(YEARS_ON_SCREEN, 'year')));
        }
        break;
      case 'right':
        if (viewModeLeftInner === 'dates') {
          handleDateLeftChange(dayjsDateToString(dateLeftInner.add(1, 'month')));
        } else if (viewModeLeftInner === 'months') {
          handleDateLeftChange(dayjsDateToString(dateLeftInner.add(1, 'year')));
        } else {
          handleDateLeftChange(dayjsDateToString(dateLeftInner.add(YEARS_ON_SCREEN, 'year')));
        }
        break;
      case 'month':
        handleViewModeLeftChange(viewModeLeftInner === 'months' ? 'dates' : 'months');
        break;
      case 'year':
        handleViewModeLeftChange(viewModeLeftInner === 'years' ? 'dates' : 'years');
        break;
    }
  };
  const handleRightMonthNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        if (viewModeRightInner === 'dates') {
          handleDateRightChange(dayjsDateToString(dateRightInner.subtract(1, 'month')));
        } else if (viewModeRightInner === 'months') {
          handleDateRightChange(dayjsDateToString(dateRightInner.subtract(1, 'year')));
        } else {
          handleDateRightChange(dayjsDateToString(dateRightInner.subtract(YEARS_ON_SCREEN, 'year')));
        }
        break;
      case 'right':
        if (viewModeRightInner === 'dates') {
          handleDateRightChange(dayjsDateToString(dateRightInner.add(1, 'month')));
        } else if (viewModeRightInner === 'months') {
          handleDateRightChange(dayjsDateToString(dateRightInner.add(1, 'year')));
        } else {
          handleDateRightChange(dayjsDateToString(dateRightInner.add(YEARS_ON_SCREEN, 'year')));
        }
        break;
      case 'month':
        handleViewModeRightChange(viewModeRightInner === 'months' ? 'dates' : 'months');
        break;
      case 'year':
        handleViewModeRightChange(viewModeRightInner === 'years' ? 'dates' : 'years');
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
    <DoublePickerCalendarWrapper>
      <SingleContainer>
        <MonthNavigationPanelWidget
          date={dateLeftInner}
          viewMode={viewModeLeftInner}
          locale={locale}
          onClick={handleLeftMonthNavigationPanelClick}
        />
        <CalendarContainer>
          <DateRangeCalendarView
            {...props}
            dateValue={dateLeftInner}
            selectedDateRangeValue={selectedDateRangeInner}
            defaultSelectedDateRangeValue={defaultSelectedDateRangeValue}
            onSelectedDateRangeValueChange={handleSelectedDateRangeChange}
            activeDateRangeEndValue={dateRangeActiveEndState}
            onActiveDateRangeEndValueChange={handleDateRangeActiveEndChange}
            activeDateValue={activeDateInner}
            onActiveDateValueChange={handleActiveDateChange}
            locale={locale}
            $isVisible={viewModeLeftInner === 'dates'}
          />
          <MonthCalendarView
            {...props}
            dateValue={dateLeftInner}
            selectedDateValue={selectedRangeEnd}
            onSelectedDateValueChange={handleLeftMonthClick}
            locale={locale}
            $isVisible={viewModeLeftInner === 'months'}
          />
          <YearCalendarView
            {...props}
            dateValue={dateLeftInner}
            selectedDateValue={selectedRangeEnd}
            onSelectedDateValueChange={handleLeftYearClick}
            locale={locale}
            $isVisible={viewModeLeftInner === 'years'}
          />
        </CalendarContainer>
      </SingleContainer>
      <SingleContainer>
        <MonthNavigationPanelWidget
          date={dateRightInner}
          viewMode={viewModeRightInner}
          locale={locale}
          onClick={handleRightMonthNavigationPanelClick}
        />
        <CalendarContainer>
          <DateRangeCalendarView
            {...props}
            dateValue={dateRightInner}
            selectedDateRangeValue={selectedDateRangeInner}
            defaultSelectedDateRangeValue={defaultSelectedDateRangeValue}
            onSelectedDateRangeValueChange={handleSelectedDateRangeChange}
            activeDateRangeEndValue={dateRangeActiveEndState}
            onActiveDateRangeEndValueChange={handleDateRangeActiveEndChange}
            activeDateValue={activeDateInner}
            onActiveDateValueChange={handleActiveDateChange}
            locale={locale}
            $isVisible={viewModeRightInner === 'dates'}
          />
          <MonthCalendarView
            {...props}
            dateValue={dateLeftInner}
            selectedDateValue={selectedRangeEnd}
            onSelectedDateValueChange={handleRightMonthClick}
            locale={locale}
            $isVisible={viewModeRightInner === 'months'}
          />
          <YearCalendarView
            {...props}
            dateValue={dateRightInner}
            selectedDateValue={selectedRangeEnd}
            onSelectedDateValueChange={handleRightYearClick}
            locale={locale}
            $isVisible={viewModeRightInner === 'years'}
          />
        </CalendarContainer>
      </SingleContainer>
    </DoublePickerCalendarWrapper>
  );
};
