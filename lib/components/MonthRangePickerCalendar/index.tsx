import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';

import type { RangeCalendarProps, PickerCalendarProps, CalendarViewMode, ActiveEnd } from '#lib/calendarInterfaces.ts';
import { getCurrentDate } from '#lib/utils.ts';
import { YearNavigationPanelWidget } from '#lib/YearNavigationPanelWidget';
import {
  CalendarContainer,
  SinglePickerCalendarWrapper,
  MonthRangeCalendarView,
  YearCalendarView,
} from '#lib/calendarStyle.ts';
import { YEARS_ON_SCREEN } from '#lib/YearsWidget/constants.ts';
import { ruLocale } from '#lib/calendarConstants.ts';
import type { DateRange } from 'lib/types';

export interface MonthRangePickerCalendarProps
  extends Omit<
      RangeCalendarProps,
      'activeDateRangeEndValue' | 'defaultActiveDateRangeEndValue' | 'onActiveDateRangeEndValueChange' | 'cell'
    >,
    PickerCalendarProps {
  /** Конфиг функция пропсов для кнопки панели с выбором режима календаря. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  yearNavigationButtonPropsConfig?: React.ComponentProps<
    typeof YearNavigationPanelWidget
  >['yearNavigationButtonPropsConfig'];
}

export const MonthRangePickerCalendar = ({
  viewModeValue,
  defaultViewModeValue,
  onViewModeChange,
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
  ...props
}: MonthRangePickerCalendarProps) => {
  //#region "Calendar view mode"
  const [viewModeState, setViewModeState] = useState<CalendarViewMode>(defaultViewModeValue || 'months');
  const viewModeInner = viewModeValue || viewModeState;

  const handleViewModeChange = (mode: CalendarViewMode) => {
    setViewModeState(mode);
    onViewModeChange?.(mode);
  };
  //#endregion

  //#region "Date shown on calendar"
  const [dateState, setDateState] = useState(defaultDateValue || getCurrentDate(locale?.localeName));
  const dateInner = dateValue || dateState;

  const handleDateChange = (date: Dayjs) => {
    setDateState(date);
    onDateValueChange?.(date);
  };
  //#endregion

  //#region "Selected range"
  const [selectedDateRangeState, setSelectedDateRangeState] = useState<DateRange>(
    defaultSelectedDateRangeValue ?? [undefined, undefined],
  );
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

  const handleYearClick = (date: Dayjs) => {
    const newDate = dateInner.year(date.year());
    handleDateChange(newDate);
    handleViewModeChange('months');
  };

  const handleYearNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        if (viewModeInner === 'months') {
          handleDateChange(dateInner.subtract(1, 'year'));
        } else {
          handleDateChange(dateInner.subtract(YEARS_ON_SCREEN, 'year'));
        }
        break;
      case 'right':
        if (viewModeInner === 'months') {
          handleDateChange(dateInner.add(1, 'year'));
        } else {
          handleDateChange(dateInner.add(YEARS_ON_SCREEN, 'year'));
        }
        break;
      case 'year':
        handleViewModeChange(viewModeInner === 'years' ? 'months' : 'years');
        break;
    }
  };

  const getSelectedRangeEnd = () => {
    if (activeEndInner === 'none' || !selectedDateRangeInner) return undefined;
    if (selectedDateRangeInner[0] && activeEndInner === 'start') {
      return selectedDateRangeInner[1];
    }
    if (selectedDateRangeInner[1] && activeEndInner === 'end') {
      return selectedDateRangeInner[0];
    }
  };
  const selectedRangeEnd = getSelectedRangeEnd();

  return (
    <SinglePickerCalendarWrapper>
      <YearNavigationPanelWidget
        date={dateInner}
        viewMode={viewModeInner}
        locale={locale}
        onMouseDown={handleYearNavigationPanelClick}
        prevButtonPropsConfig={prevButtonPropsConfig}
        nextButtonPropsConfig={nextButtonPropsConfig}
      />
      <CalendarContainer>
        <MonthRangeCalendarView
          {...props}
          cell={cell?.monthCell}
          dateValue={dateInner}
          selectedDateRangeValue={selectedDateRangeInner}
          defaultSelectedDateRangeValue={defaultSelectedDateRangeValue}
          onSelectedDateRangeValueChange={handleSelectedDateRangeChange}
          activeEndValue={activeEndInner}
          defaultActiveEndValue={defaultActiveEndValue}
          onActiveEndValueChange={handleActiveEndChange}
          locale={locale}
          $isVisible={viewModeInner === 'months'}
        />
        <YearCalendarView
          {...props}
          cell={cell?.yearCell}
          dateValue={dateInner}
          selectedDateValue={selectedRangeEnd}
          onSelectedDateValueChange={handleYearClick}
          locale={locale}
          $isVisible={viewModeInner === 'years'}
        />
      </CalendarContainer>
    </SinglePickerCalendarWrapper>
  );
};
