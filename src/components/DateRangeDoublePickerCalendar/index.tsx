import type { MouseEventHandler } from 'react';
import { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';

import {
  dateStringToDayjs,
  dayjsDateToString,
  dayjsStateToString,
  getCurrentTimeZone,
  getDayjsDate,
} from '#src/components/utils.ts';
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
} from '#src/components/pickerStyle.ts';

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
  timezone = getCurrentTimeZone(),
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
  const [dateLeftState, setDateLeftState] = useState(getDayjsDate(locale, timezone, defaultDateRangeValue?.[0]));
  const dateLeftInner = (dateRangeValue && getDayjsDate(locale, timezone, dateRangeValue[0])) || dateLeftState;
  const handleDateLeftChange = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    if (dayjsDate) {
      setDateLeftState(dayjsDate);
      onDateRangeValueChange?.([dateString, dayjsDateToString(dateRightInner)]);
    }
  };
  const [dateRightState, setDateRightState] = useState(
    defaultDateRangeValue && defaultDateRangeValue[1]
      ? getDayjsDate(locale, timezone, defaultDateRangeValue[1])
      : dateLeftInner.add(1, 'month'),
  );
  const dateRightInner = (dateRangeValue && getDayjsDate(locale, timezone, dateRangeValue[1])) || dateRightState;
  const handleDateRightChange = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
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
  const [activeDateState, setActiveDateState] = useState<Dayjs | undefined>(
    dateStringToDayjs(defaultActiveDateValue, locale, timezone),
  );
  const activeDateInner = (activeDateValue && getDayjsDate(locale, timezone, activeDateValue)) || activeDateState;
  const handleActiveDateChange = (dateString?: string) => {
    const dayjsActiveDate = dateStringToDayjs(dateString, locale, timezone);
    setActiveDateState(dayjsActiveDate);
    onActiveDateValueChange?.(dateString);
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
    setDateRangeActiveEndState(dateDayjs);
  };
  //</editor-fold>

  const handleLeftMonthClick = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    const newDate = dayjsDate ? dayjsDateToString(dateLeftInner.month(dayjsDate.month())) : dateString;
    handleDateLeftChange(newDate);
    handleViewModeLeftChange('dates');
    //onMonthChange?.(newDate);
  };
  const handleRightMonthClick = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    const newDate = dayjsDate ? dayjsDateToString(dateRightInner.month(dayjsDate.month())) : dateString;
    handleDateRightChange(newDate);
    handleViewModeRightChange('dates');
    //onMonthChange?.(newDate);
  };

  const handleLeftYearClick = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    const newDate = dayjsDate ? dayjsDateToString(dateLeftInner.year(dayjsDate.year())) : dateString;
    handleDateLeftChange(newDate);
    handleViewModeLeftChange('months');
    //onYearChange?.(newDate);
  };
  const handleRightYearClick = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    const newDate = dayjsDate ? dayjsDateToString(dateRightInner.year(dayjsDate.year())) : dateString;
    handleDateRightChange(newDate);
    handleViewModeRightChange('months');
    //onYearChange?.(newDate);
  };

  const handleLeftMonthNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        handleDateLeftChange(dayjsDateToString(dateLeftInner.subtract(1, 'month')));
        break;
      case 'right':
        handleDateLeftChange(dayjsDateToString(dateLeftInner.add(1, 'month')));
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
        handleDateRightChange(dayjsDateToString(dateRightInner.subtract(1, 'month')));
        break;
      case 'right':
        handleDateRightChange(dayjsDateToString(dateRightInner.add(1, 'month')));
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
    if (
      selectedDateRangeInner[0] &&
      dateRangeActiveEndState.isSame(dateStringToDayjs(selectedDateRangeInner[0], locale, timezone), 'date')
    ) {
      return selectedDateRangeInner[1];
    }
    if (
      selectedDateRangeInner[1] &&
      dateRangeActiveEndState.isSame(dateStringToDayjs(selectedDateRangeInner[1], locale, timezone), 'date')
    ) {
      return selectedDateRangeInner[0];
    }
  };
  const selectedRangeEnd = getSelectedRangeEnd();

  return (
    <DoublePickerCalendarWrapper>
      <SingleContainer>
        <MonthNavigationPanelWidget
          date={dayjsDateToString(dateLeftInner)}
          viewMode={viewModeLeftInner}
          locale={locale}
          timezone={timezone}
          onClick={handleLeftMonthNavigationPanelClick}
        />
        <CalendarContainer>
          <DateRangeCalendarView
            {...props}
            dateValue={dayjsDateToString(dateLeftInner)}
            selectedDateRangeValue={selectedDateRangeInner}
            defaultSelectedDateRangeValue={defaultSelectedDateRangeValue}
            onSelectedDateRangeValueChange={handleSelectedDateRangeChange}
            activeDateRangeEndValue={dayjsStateToString(dateRangeActiveEndState)}
            onActiveDateRangeEndValueChange={handleDateRangeActiveEndChange}
            activeDateValue={dayjsStateToString(activeDateInner)}
            onActiveDateValueChange={handleActiveDateChange}
            locale={locale}
            $isVisible={viewModeLeftInner === 'dates'}
          />
          <MonthCalendarView
            {...props}
            dateValue={dayjsDateToString(dateLeftInner)}
            selectedDateValue={selectedRangeEnd}
            onSelectedDateValueChange={handleLeftMonthClick}
            locale={locale}
            $isVisible={viewModeLeftInner === 'months'}
          />
          <YearCalendarView
            {...props}
            dateValue={dayjsDateToString(dateLeftInner)}
            selectedDateValue={selectedRangeEnd}
            onSelectedDateValueChange={handleLeftYearClick}
            locale={locale}
            $isVisible={viewModeLeftInner === 'years'}
          />
        </CalendarContainer>
      </SingleContainer>
      <SingleContainer>
        <MonthNavigationPanelWidget
          date={dayjsDateToString(dateRightInner)}
          viewMode={viewModeRightInner}
          locale={locale}
          timezone={timezone}
          onClick={handleRightMonthNavigationPanelClick}
        />
        <CalendarContainer>
          <DateRangeCalendarView
            {...props}
            dateValue={dayjsDateToString(dateRightInner)}
            selectedDateRangeValue={selectedDateRangeInner}
            defaultSelectedDateRangeValue={defaultSelectedDateRangeValue}
            onSelectedDateRangeValueChange={handleSelectedDateRangeChange}
            activeDateRangeEndValue={dayjsStateToString(dateRangeActiveEndState)}
            onActiveDateRangeEndValueChange={handleDateRangeActiveEndChange}
            activeDateValue={dayjsStateToString(activeDateInner)}
            onActiveDateValueChange={handleActiveDateChange}
            locale={locale}
            $isVisible={viewModeRightInner === 'dates'}
          />
          <MonthCalendarView
            {...props}
            dateValue={dayjsDateToString(dateLeftInner)}
            selectedDateValue={selectedRangeEnd}
            onSelectedDateValueChange={handleRightMonthClick}
            locale={locale}
            $isVisible={viewModeRightInner === 'months'}
          />
          <YearCalendarView
            {...props}
            dateValue={dayjsDateToString(dateRightInner)}
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
