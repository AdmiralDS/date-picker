import type { MouseEventHandler } from 'react';
import { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';

import { getCurrentDate } from '#src/components/utils.ts';
import { TwentyYearsNavigationPanelWidget } from '#src/components/TwentyYearsNavigationPanelWidget';
import { YEARS_ON_SCREEN } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';
import type { RangeDoubleCalendarProps } from '#src/components/calendarInterfaces.ts';
import {
  CalendarContainer,
  DoublePickerCalendarWrapper,
  SingleContainer,
  YearRangeCalendarView,
} from '#src/components/calendarStyle.ts';
import { ruLocale } from '#src/components/calendarConstants.ts';

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
  locale = ruLocale,
  ...props
}: YearRangeDoublePickerCalendarProps) => {
  //<editor-fold desc="Date shown on calendar">
  const [dateLeftState, setDateLeftState] = useState(defaultDateRangeValue?.[0] || getCurrentDate(locale?.localeName));
  const dateLeftInner = dateRangeValue?.[0] || dateLeftState;

  const handleDateLeftChange = (date: Dayjs) => {
    setDateLeftState(date);
    onDateRangeValueChange?.([date, dateRightInner]);
  };

  const [dateRightState, setDateRightState] = useState(
    defaultDateRangeValue?.[1] || dateLeftInner.add(YEARS_ON_SCREEN, 'year'),
  );
  const dateRightInner = dateRangeValue?.[1] || dateRightState;

  const handleDateRightChange = (date: Dayjs) => {
    setDateRightState(date);
    onDateRangeValueChange?.([dateLeftInner, date]);
  };

  useEffect(() => {
    if (dateLeftInner.isSameOrAfter(dateRightInner)) {
      handleDateRightChange(dateLeftInner.add(YEARS_ON_SCREEN, 'year'));
    }
  }, [dateLeftInner]);
  useEffect(() => {
    if (dateRightInner.isSameOrBefore(dateLeftInner)) {
      handleDateLeftChange(dateRightInner.subtract(YEARS_ON_SCREEN, 'year'));
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

  const handleSelectedDateRangeChange = (dateRange: [Dayjs | undefined, Dayjs | undefined]) => {
    setSelectedDateRangeState(dateRange);
    onSelectedDateRangeValueChange?.(dateRange);
  };
  //</editor-fold>

  //<editor-fold desc="Active end of range">
  const [dateRangeActiveEndState, setDateRangeActiveEndState] = useState<Dayjs | undefined>();

  const handleDateRangeActiveEndChange = (date?: Dayjs) => {
    setDateRangeActiveEndState(date);
  };
  //</editor-fold>

  const handleLeftTwentyYearsNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        handleDateLeftChange(dateLeftInner.subtract(YEARS_ON_SCREEN, 'year'));
        break;
      case 'right':
        handleDateLeftChange(dateLeftInner.add(YEARS_ON_SCREEN, 'year'));
        break;
    }
  };
  const handleRightTwentyYearsNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        handleDateRightChange(dateRightInner.subtract(YEARS_ON_SCREEN, 'year'));
        break;
      case 'right':
        handleDateRightChange(dateRightInner.add(YEARS_ON_SCREEN, 'year'));
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
            activeDateRangeEndValue={dateRangeActiveEndState}
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
            activeDateRangeEndValue={dateRangeActiveEndState}
            onActiveDateRangeEndValueChange={handleDateRangeActiveEndChange}
            locale={locale}
            $isVisible={true}
          />
        </CalendarContainer>
      </SingleContainer>
    </DoublePickerCalendarWrapper>
  );
};
