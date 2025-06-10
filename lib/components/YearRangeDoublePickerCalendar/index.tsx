import type { MouseEventHandler } from 'react';
import { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';

import { dateIsSameOrAfter, getCurrentDate } from '#lib/utils.ts';
import { RangeYearsNavigationPanelWidget } from '#lib/RangeYearsNavigationPanelWidget';
import type { PickerCalendarProps, RangeDoubleCalendarProps } from '#lib/calendarInterfaces.ts';
import {
  CalendarContainer,
  DoublePickerCalendarWrapper,
  SingleContainer,
  YearRangeCalendarView,
} from '#lib/calendarStyle.ts';
import { ruLocale } from '#lib/calendarConstants.ts';
import type { DateRange } from 'lib/types';

export interface YearRangeDoublePickerCalendarProps
  extends Omit<
      RangeDoubleCalendarProps,
      'activeDateRangeEndValue' | 'defaultActiveDateRangeEndValue' | 'onActiveDateRangeEndValueChange' | 'cell'
    >,
    Omit<PickerCalendarProps, 'viewModeValue' | 'defaultViewModeValue' | 'onViewModeChange'> {
  yearsOnScreen?: number;
}

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
  cell,
  locale = ruLocale,
  prevButtonPropsConfig,
  nextButtonPropsConfig,
  yearsOnScreen = 20,
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
    defaultDateRangeValue?.[1] || dateLeftInner.add(yearsOnScreen, 'year'),
  );
  const dateRightInner = dateRangeValue?.[1] || dateRightState;

  const handleDateRightChange = (date: Dayjs) => {
    setDateRightState(date);
    onDateRangeValueChange?.([dateLeftInner, date]);
  };

  useEffect(() => {
    if (dateIsSameOrAfter(dateLeftInner, dateRightInner, 'year')) {
      handleDateRightChange(dateLeftInner.add(yearsOnScreen, 'year'));
    }
  }, [dateLeftInner]);
  useEffect(() => {
    if (dateIsSameOrAfter(dateRightInner, dateLeftInner, 'year')) {
      handleDateLeftChange(dateRightInner.subtract(yearsOnScreen, 'year'));
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

  const handleSelectedDateRangeChange = (dateRange: DateRange) => {
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

  const handleLeftRangeYearsNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        handleDateLeftChange(dateLeftInner.subtract(yearsOnScreen, 'year'));
        break;
      case 'right':
        handleDateLeftChange(dateLeftInner.add(yearsOnScreen, 'year'));
        break;
    }
  };
  const handleRightRangeYearsNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        handleDateRightChange(dateRightInner.subtract(yearsOnScreen, 'year'));
        break;
      case 'right':
        handleDateRightChange(dateRightInner.add(yearsOnScreen, 'year'));
        break;
    }
  };

  return (
    <DoublePickerCalendarWrapper>
      <SingleContainer>
        <RangeYearsNavigationPanelWidget
          date={dateLeftInner}
          viewMode={'years'}
          locale={locale}
          onMouseDown={handleLeftRangeYearsNavigationPanelClick}
          prevButtonPropsConfig={prevButtonPropsConfig}
          nextButtonPropsConfig={nextButtonPropsConfig}
          yearsOnScreen={yearsOnScreen}
        />
        <CalendarContainer>
          <YearRangeCalendarView
            {...props}
            cell={cell?.yearCell}
            dateValue={dateLeftInner}
            selectedDateRangeValue={selectedDateRangeInner}
            onSelectedDateRangeValueChange={handleSelectedDateRangeChange}
            activeDateValue={activeDateInner}
            onActiveDateValueChange={handleActiveDateChange}
            activeDateRangeEndValue={dateRangeActiveEndState}
            onActiveDateRangeEndValueChange={handleDateRangeActiveEndChange}
            locale={locale}
            $isVisible={true}
            yearsOnScreen={yearsOnScreen}
          />
        </CalendarContainer>
      </SingleContainer>
      <SingleContainer>
        <RangeYearsNavigationPanelWidget
          date={dateRightInner}
          viewMode={'years'}
          locale={locale}
          onMouseDown={handleRightRangeYearsNavigationPanelClick}
          prevButtonPropsConfig={prevButtonPropsConfig}
          nextButtonPropsConfig={nextButtonPropsConfig}
          yearsOnScreen={yearsOnScreen}
        />
        <CalendarContainer>
          <YearRangeCalendarView
            {...props}
            cell={cell?.yearCell}
            dateValue={dateRightInner}
            selectedDateRangeValue={selectedDateRangeInner}
            onSelectedDateRangeValueChange={handleSelectedDateRangeChange}
            activeDateValue={activeDateInner}
            onActiveDateValueChange={handleActiveDateChange}
            activeDateRangeEndValue={dateRangeActiveEndState}
            onActiveDateRangeEndValueChange={handleDateRangeActiveEndChange}
            locale={locale}
            $isVisible={true}
            yearsOnScreen={yearsOnScreen}
          />
        </CalendarContainer>
      </SingleContainer>
    </DoublePickerCalendarWrapper>
  );
};
