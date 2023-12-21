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
import { TwentyYearsNavigationPanelWidget } from '#src/components/TwentyYearsNavigationPanelWidget';
import { YEARS_ON_SCREEN } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';
import type { RangeDoubleCalendarProps } from '#src/components/calendarInterfaces.ts';
import {
  CalendarContainer,
  DoublePickerCalendarWrapper,
  SingleContainer,
  YearRangeCalendarView,
} from '#src/components/calendarStyle.ts';

export interface YearRangeDoublePickerCalendarProps
  extends Omit<
    RangeDoubleCalendarProps,
    'activeDateRangeEndValue' | 'defaultActiveDateRangeEndValue' | 'onActiveDateRangeEndValueChange'
  > {}

export const YearRangeDoublePickerCalendar = ({
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
}: YearRangeDoublePickerCalendarProps) => {
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
      : dateLeftInner.add(YEARS_ON_SCREEN, 'year'),
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
      handleDateRightChange(dayjsDateToString(dateLeftInner.add(YEARS_ON_SCREEN, 'year')));
    }
  }, [dateLeftInner]);
  useEffect(() => {
    if (dateRightInner.isSameOrBefore(dateLeftInner)) {
      handleDateLeftChange(dayjsDateToString(dateRightInner.subtract(YEARS_ON_SCREEN, 'year')));
    }
  }, [dateRightInner]);
  //</editor-fold>

  //<editor-fold desc="Hovered date">
  const [activeDateState, setActiveDateState] = useState<Dayjs | undefined>(defaultActiveDateValue);
  const activeDateInner = activeDateValue || activeDateState;

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

  const handleLeftTwentyYearsNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        handleDateLeftChange(dayjsDateToString(dateLeftInner.subtract(YEARS_ON_SCREEN, 'year')));
        break;
      case 'right':
        handleDateLeftChange(dayjsDateToString(dateLeftInner.add(YEARS_ON_SCREEN, 'year')));
        break;
    }
  };
  const handleRightTwentyYearsNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        handleDateRightChange(dayjsDateToString(dateRightInner.subtract(YEARS_ON_SCREEN, 'year')));
        break;
      case 'right':
        handleDateRightChange(dayjsDateToString(dateRightInner.add(YEARS_ON_SCREEN, 'year')));
        break;
    }
  };

  return (
    <DoublePickerCalendarWrapper>
      <SingleContainer>
        <TwentyYearsNavigationPanelWidget
          date={dateLeftInner}
          viewMode={'years'}
          locale={locale}
          timezone={timezone}
          onClick={handleLeftTwentyYearsNavigationPanelClick}
        />
        <CalendarContainer>
          <YearRangeCalendarView
            {...props}
            dateValue={dateLeftInner}
            selectedDateRangeValue={selectedDateRangeInner}
            onSelectedDateRangeValueChange={handleSelectedDateRangeChange}
            activeDateValue={activeDateInner}
            onActiveDateValueChange={handleActiveDateChange}
            activeDateRangeEndValue={dayjsStateToString(dateRangeActiveEndState)}
            onActiveDateRangeEndValueChange={handleDateRangeActiveEndChange}
            locale={locale}
            $isVisible={true}
          />
        </CalendarContainer>
      </SingleContainer>
      <SingleContainer>
        <TwentyYearsNavigationPanelWidget
          date={dateRightInner}
          viewMode={'years'}
          locale={locale}
          timezone={timezone}
          onClick={handleRightTwentyYearsNavigationPanelClick}
        />
        <CalendarContainer>
          <YearRangeCalendarView
            {...props}
            dateValue={dateRightInner}
            selectedDateRangeValue={selectedDateRangeInner}
            onSelectedDateRangeValueChange={handleSelectedDateRangeChange}
            activeDateValue={activeDateInner}
            onActiveDateValueChange={handleActiveDateChange}
            activeDateRangeEndValue={dayjsStateToString(dateRangeActiveEndState)}
            onActiveDateRangeEndValueChange={handleDateRangeActiveEndChange}
            locale={locale}
            $isVisible={true}
          />
        </CalendarContainer>
      </SingleContainer>
    </DoublePickerCalendarWrapper>
  );
};
