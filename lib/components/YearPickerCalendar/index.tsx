import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';

import type { PickerCalendarProps, SingleCalendarProps } from '#lib/calendarInterfaces.ts';
import { getCurrentDate } from '#lib/utils.ts';
import { TwentyYearsNavigationPanelWidget } from '#lib/TwentyYearsNavigationPanelWidget';
import { YEARS_ON_SCREEN } from '#lib/YearsOfTwentyYearsWidget/constants.ts';
import { CalendarContainer, SinglePickerCalendarWrapper, YearCalendarView } from '#lib/calendarStyle.ts';
import { ruLocale } from '#lib/calendarConstants.ts';

export interface YearPickerCalendarProps
  extends Omit<SingleCalendarProps, 'cell'>,
    Omit<PickerCalendarProps, 'viewModeValue' | 'defaultViewModeValue' | 'onViewModeChange'> {}

export const YearPickerCalendar = ({
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
  ...props
}: YearPickerCalendarProps) => {
  //<editor-fold desc="Date shown on calendar">
  const [dateState, setDateState] = useState(defaultDateValue || getCurrentDate(locale?.localeName));
  const dateInner = dateValue || dateState;

  const handleDateChange = (date: Dayjs) => {
    setDateState(date);
    onDateValueChange?.(date);
  };
  //</editor-fold>

  //<editor-fold desc="Selected date">
  const [selectedDateState, setSelectedDateState] = useState<Dayjs | undefined>(defaultSelectedDateValue);
  const selectedDateInner = selectedDateValue || selectedDateState;

  const handleSelectedDateChange = (date: Dayjs) => {
    setSelectedDateState(date);
    onSelectedDateValueChange?.(date);
  };
  //</editor-fold>

  const handleYearClick = (date: Dayjs) => {
    handleSelectedDateChange(date);
  };

  const handleTwentyYearsNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
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
        onMouseDown={handleTwentyYearsNavigationPanelClick}
        prevButtonProps={prevButtonProps}
        nextButtonProps={nextButtonProps}
      />
      <CalendarContainer>
        <YearCalendarView
          {...props}
          cell={cell?.yearCell}
          dateValue={dateInner}
          selectedDateValue={selectedDateInner}
          onSelectedDateValueChange={handleYearClick}
          locale={locale}
          $isVisible={true}
        />
      </CalendarContainer>
    </SinglePickerCalendarWrapper>
  );
};
