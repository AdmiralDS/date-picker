import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';

import type { ActiveEnd, PickerCalendarProps, RangeCalendarProps } from '#lib/calendarInterfaces.ts';
import { getCurrentDate } from '#lib/utils.ts';
import { RangeYearsNavigationPanelWidget } from '#lib/RangeYearsNavigationPanelWidget';
import { CalendarContainer, SinglePickerCalendarWrapper, YearRangeCalendarView } from '#lib/calendarStyle.ts';
import { ruLocale } from '#lib/calendarConstants.ts';
import type { DateRange } from 'lib/types';

export interface YearRangePickerCalendarProps
  extends Omit<
      RangeCalendarProps,
      'activeDateRangeEndValue' | 'defaultActiveDateRangeEndValue' | 'onActiveDateRangeEndValueChange' | 'cell'
    >,
    Omit<PickerCalendarProps, 'viewModeValue' | 'defaultViewModeValue' | 'onViewModeChange'> {
  yearsOnScreen?: number;
}

export const YearRangePickerCalendar = ({
  dateValue,
  defaultDateValue,
  onDateValueChange,
  selectedDateRangeValue,
  defaultSelectedDateRangeValue,
  onSelectedDateRangeValueChange,
  activeEndValue,
  defaultActiveEndValue,
  onActiveEndValueChange,
  cell,
  locale = ruLocale,
  prevButtonPropsConfig,
  nextButtonPropsConfig,
  yearsOnScreen = 20,
  ...props
}: YearRangePickerCalendarProps) => {
  //#region "Date shown on calendar"
  const [dateState, setDateState] = useState(defaultDateValue || getCurrentDate(locale?.localeName));
  const dateInner = dateValue || dateState;

  const handleDateChange = (date: Dayjs) => {
    setDateState(date);
    onDateValueChange?.(date);
  };
  //#endregion

  //#region "Selected range"
  const [selectedDateRangeState, setSelectedDateRangeState] = useState(defaultSelectedDateRangeValue);
  const selectedDateRangeInner = selectedDateRangeValue || selectedDateRangeState;

  const handleSelectedDateRangeChange = (dateRange: DateRange) => {
    setSelectedDateRangeState(dateRange);
    onSelectedDateRangeValueChange?.(dateRange);
  };
  //#endregion

  //#region "Active end of range"
  const setInitialActiveEndState = () => {
    if (defaultActiveEndValue) {
      return defaultActiveEndValue;
    }
    return 'start';
  };
  const [activeEndState, setActiveEndState] = useState<ActiveEnd>(setInitialActiveEndState());
  const activeEndInner = activeEndValue || activeEndState;

  const handleActiveEndChange = (end?: ActiveEnd) => {
    const newValue: ActiveEnd = end ? end : activeEndInner === 'start' ? 'end' : 'start';
    setActiveEndState(newValue);
    onActiveEndValueChange?.(newValue);
  };
  //#endregion

  const handleRangeYearsNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        handleDateChange(dateInner.subtract(yearsOnScreen, 'year'));
        break;
      case 'right':
        handleDateChange(dateInner.add(yearsOnScreen, 'year'));
        break;
    }
  };

  return (
    <SinglePickerCalendarWrapper>
      <RangeYearsNavigationPanelWidget
        date={dateInner}
        viewMode={'years'}
        locale={locale}
        onMouseDown={handleRangeYearsNavigationPanelClick}
        prevButtonPropsConfig={prevButtonPropsConfig}
        nextButtonPropsConfig={nextButtonPropsConfig}
        yearsOnScreen={yearsOnScreen}
      />
      <CalendarContainer>
        <YearRangeCalendarView
          {...props}
          cell={cell?.yearCell}
          dateValue={dateInner}
          selectedDateRangeValue={selectedDateRangeInner}
          onSelectedDateRangeValueChange={handleSelectedDateRangeChange}
          activeEndValue={activeEndInner}
          defaultActiveEndValue={defaultActiveEndValue}
          onActiveEndValueChange={handleActiveEndChange}
          locale={locale}
          $isVisible={true}
          yearsOnScreen={yearsOnScreen}
        />
      </CalendarContainer>
    </SinglePickerCalendarWrapper>
  );
};
