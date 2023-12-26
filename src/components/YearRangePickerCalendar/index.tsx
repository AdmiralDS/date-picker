import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';

import type { RangeCalendarProps } from '#src/components/calendarInterfaces.ts';
import { getCurrentDate } from '#src/components/utils.ts';
import { TwentyYearsNavigationPanelWidget } from '#src/components/TwentyYearsNavigationPanelWidget';
import { YEARS_ON_SCREEN } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';
import {
  CalendarContainer,
  SinglePickerCalendarWrapper,
  YearRangeCalendarView,
} from '#src/components/calendarStyle.ts';

export interface YearRangePickerCalendarProps
  extends Omit<
    RangeCalendarProps,
    'activeDateRangeEndValue' | 'defaultActiveDateRangeEndValue' | 'onActiveDateRangeEndValueChange'
  > {}

export const YearRangePickerCalendar = ({
  dateValue,
  defaultDateValue,
  onDateValueChange,
  selectedDateRangeValue,
  defaultSelectedDateRangeValue,
  onSelectedDateRangeValueChange,
  locale = 'ru',
  ...props
}: YearRangePickerCalendarProps) => {
  //<editor-fold desc="Date shown on calendar">
  const [dateState, setDateState] = useState(defaultDateValue || getCurrentDate(locale));
  const dateInner = dateValue || dateState;

  const handleDateChange = (date: Dayjs) => {
    setDateState(date);
    onDateValueChange?.(date);
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
      />
      <CalendarContainer>
        <YearRangeCalendarView
          {...props}
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
