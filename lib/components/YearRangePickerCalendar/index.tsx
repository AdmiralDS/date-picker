import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';

import type { PickerCalendarProps, RangeCalendarProps } from '#lib/calendarInterfaces.ts';
import { getCurrentDate } from '#lib/utils.ts';
import { TwentyYearsNavigationPanelWidget } from '#lib/TwentyYearsNavigationPanelWidget';
import { YEARS_ON_SCREEN } from '#lib/YearsOfTwentyYearsWidget/constants.ts';
import { CalendarContainer, SinglePickerCalendarWrapper, YearRangeCalendarView } from '#lib/calendarStyle.ts';
import { ruLocale } from '#lib/calendarConstants.ts';
import type { DateRange } from 'lib/types';

export interface YearRangePickerCalendarProps
  extends Omit<
      RangeCalendarProps,
      'activeDateRangeEndValue' | 'defaultActiveDateRangeEndValue' | 'onActiveDateRangeEndValueChange' | 'cell'
    >,
    Omit<PickerCalendarProps, 'viewModeValue' | 'defaultViewModeValue' | 'onViewModeChange'> {}

export const YearRangePickerCalendar = ({
  dateValue,
  defaultDateValue,
  onDateValueChange,
  selectedDateRangeValue,
  defaultSelectedDateRangeValue,
  onSelectedDateRangeValueChange,
  cell,
  locale = ruLocale,
  prevButtonProps,
  nextButtonProps,
  ...props
}: YearRangePickerCalendarProps) => {
  //<editor-fold desc="Date shown on calendar">
  const [dateState, setDateState] = useState(defaultDateValue || getCurrentDate(locale?.localeName));
  const dateInner = dateValue || dateState;

  const handleDateChange = (date: Dayjs) => {
    setDateState(date);
    onDateValueChange?.(date);
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

  const handleTwentyYearsNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        handleDateChange(dateInner.subtract(YEARS_ON_SCREEN, 'year'));
        break;
      case 'right':
        handleDateChange(dateInner.add(YEARS_ON_SCREEN, 'year'));
        break;
    }
  };

  return (
    <SinglePickerCalendarWrapper>
      <TwentyYearsNavigationPanelWidget
        date={dateInner}
        viewMode={'years'}
        locale={locale}
        onClick={handleTwentyYearsNavigationPanelClick}
        prevButtonProps={prevButtonProps}
        nextButtonProps={nextButtonProps}
      />
      <CalendarContainer>
        <YearRangeCalendarView
          {...props}
          cell={cell?.yearCell}
          dateValue={dateInner}
          selectedDateRangeValue={selectedDateRangeInner}
          onSelectedDateRangeValueChange={handleSelectedDateRangeChange}
          locale={locale}
          $isVisible={true}
        />
      </CalendarContainer>
    </SinglePickerCalendarWrapper>
  );
};
