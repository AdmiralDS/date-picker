import type { MouseEventHandler } from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';

import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from '#src/components/calendarConstants.ts';
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
import { YearNavigationPanelWidget } from '#src/components/YearNavigationPanelWidget';
import { MonthRangeCalendar } from '#src/components/MonthRangeCalendar';
import { YearCalendar } from '#src/components/YearCalendar';
import { DoublePickerCalendarWrapper } from '#src/components/pickerStyle.ts';

export interface MonthRangeDoublePickerCalendarProps
  extends Omit<
      RangeDoubleCalendarProps,
      'activeDateRangeEndValue' | 'defaultActiveDateRangeEndValue' | 'onActiveDateRangeEndValueChange'
    >,
    PickerCalendarProps {}

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  padding-top: 20px;
  width: ${CALENDAR_WIDTH}px;
  height: ${CALENDAR_HEIGHT}px;
`;

const MonthRangeDoublePickerCalendarContainer = styled.div`
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

export const MonthRangeDoublePickerCalendar = ({
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
}: MonthRangeDoublePickerCalendarProps) => {
  //<editor-fold desc="Calendar view mode">
  const [viewModeLeftState, setViewModeLeftState] = useState<CalendarViewMode>(defaultViewModeValue || 'months');
  const viewModeLeftInner = viewModeValue || viewModeLeftState;

  const handleViewModeLeftChange = (mode: CalendarViewMode) => {
    setViewModeLeftState(mode);
    onViewModeChange?.(mode);
  };

  const [viewModeRightState, setViewModeRightState] = useState<CalendarViewMode>(defaultViewModeValue || 'months');
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
      : dateLeftInner.add(1, 'year'),
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
      handleDateRightChange(dayjsDateToString(dateLeftInner.add(1, 'year')));
    }
  }, [dateLeftInner]);
  useEffect(() => {
    if (dateRightInner.isSameOrBefore(dateLeftInner)) {
      handleDateLeftChange(dayjsDateToString(dateRightInner.subtract(1, 'year')));
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

  const handleLeftYearNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        handleDateLeftChange(dayjsDateToString(dateLeftInner.subtract(1, 'year')));
        break;
      case 'right':
        handleDateLeftChange(dayjsDateToString(dateLeftInner.add(1, 'year')));
        break;
      case 'year':
        handleViewModeLeftChange(viewModeLeftInner === 'years' ? 'months' : 'years');
        break;
    }
  };
  const handleRightYearNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        handleDateRightChange(dayjsDateToString(dateRightInner.subtract(1, 'year')));
        break;
      case 'right':
        handleDateRightChange(dayjsDateToString(dateRightInner.add(1, 'year')));
        break;
      case 'year':
        handleViewModeRightChange(viewModeRightInner === 'years' ? 'months' : 'years');
        break;
    }
  };

  const getSelectedRangeEnd = () => {
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
    <DoublePickerCalendarWrapper>
      <Container>
        <YearNavigationPanelWidget
          date={dayjsDateToString(dateLeftInner)}
          viewMode={viewModeLeftInner}
          locale={locale}
          timezone={timezone}
          onClick={handleLeftYearNavigationPanelClick}
        />
        <MonthRangeDoublePickerCalendarContainer>
          <StyledMonthRangeCalendar
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
            $isVisible={viewModeLeftInner === 'months'}
          />
          <StyledYearCalendar
            {...props}
            dateValue={dayjsDateToString(dateLeftInner)}
            selectedDateValue={selectedRangeEnd}
            onSelectedDateValueChange={handleLeftYearClick}
            locale={locale}
            $isVisible={viewModeLeftInner === 'years'}
          />
        </MonthRangeDoublePickerCalendarContainer>
      </Container>
      <Container>
        <YearNavigationPanelWidget
          date={dayjsDateToString(dateRightInner)}
          viewMode={viewModeRightInner}
          locale={locale}
          timezone={timezone}
          onClick={handleRightYearNavigationPanelClick}
        />
        <MonthRangeDoublePickerCalendarContainer>
          <StyledMonthRangeCalendar
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
            $isVisible={viewModeRightInner === 'months'}
          />
          <StyledYearCalendar
            {...props}
            dateValue={dayjsDateToString(dateRightInner)}
            selectedDateValue={selectedRangeEnd}
            onSelectedDateValueChange={handleRightYearClick}
            locale={locale}
            $isVisible={viewModeRightInner === 'years'}
          />
        </MonthRangeDoublePickerCalendarContainer>
      </Container>
    </DoublePickerCalendarWrapper>
  );
};
