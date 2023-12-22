import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import type { SingleCalendarProps } from '#src/components/calendarInterfaces.ts';
import { dateStringToDayjs, dayjsDateToString, getCurrentTimeZone } from '#src/components/utils.ts';
import { TwentyYearsNavigationPanelWidget } from '#src/components/TwentyYearsNavigationPanelWidget';
import { YEARS_ON_SCREEN } from '#src/components/YearsOfTwentyYearsWidget/constants.ts';
import { CalendarContainer, SinglePickerCalendarWrapper, YearCalendarView } from '#src/components/calendarStyle.ts';

export interface YearPickerCalendarProps extends SingleCalendarProps {}

export const YearPickerCalendar = ({
  dateValue,
  defaultDateValue,
  onDateValueChange,
  selectedDateValue,
  defaultSelectedDateValue,
  onSelectedDateValueChange,
  timezone = getCurrentTimeZone(),
  locale = 'ru',
  ...props
}: YearPickerCalendarProps) => {
  //<editor-fold desc="Date shown on calendar">
  const [dateState, setDateState] = useState(defaultDateValue || dayjs().tz(timezone).locale(locale));
  const dateInner = dateValue || dateState;

  const handleDateChange = (dateString: string) => {
    const dayjsDate = dateStringToDayjs(dateString, locale, timezone);
    if (dayjsDate) {
      setDateState(dayjsDate);
      onDateValueChange?.(dateString);
    }
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
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        handleDateChange(dayjsDateToString(dateInner.subtract(YEARS_ON_SCREEN, 'year')));
        break;
      case 'right':
        handleDateChange(dayjsDateToString(dateInner.add(YEARS_ON_SCREEN, 'year')));
        break;
    }
  };

  return (
    <SinglePickerCalendarWrapper>
      <TwentyYearsNavigationPanelWidget
        date={dateInner}
        viewMode={'years'}
        locale={locale}
        timezone={timezone}
        onClick={handleTwentyYearsNavigationPanelClick}
      />
      <CalendarContainer>
        <YearCalendarView
          {...props}
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
