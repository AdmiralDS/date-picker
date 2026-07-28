import type { MouseEventHandler } from 'react';
import { useCallback, useState } from 'react';
import type { Dayjs } from 'dayjs';

import type {
  RangeCalendarProps,
  PickerCalendarProps,
  CalendarViewMode,
  ActiveInputType,
} from '#lib/calendarInterfaces.ts';
import { getCurrentDate } from '#lib/utils.ts';
import { MonthNavigationPanelWidget } from '#lib/MonthNavigationPanelWidget';
import { CalendarContainer, SinglePickerCalendarWrapper } from '#lib/calendarStyle.ts';
import { ruLocale } from '#lib/calendarConstants.ts';
import type { DateRange } from 'lib/types';
import { DateRangeCalendar } from '#lib/DateRangeCalendar';
import { YearCalendar } from '#lib/YearCalendar';
import { MonthCalendar } from '#lib/MonthCalendar';

export interface DateRangePickerCalendarProps
  extends
    Omit<
      RangeCalendarProps,
      'activeDateRangeEndValue' | 'defaultActiveDateRangeEndValue' | 'onActiveDateRangeEndValueChange' | 'cell'
    >,
    PickerCalendarProps {
  /** Конфиг функция пропсов для кнопки с месяцем на навигационной панели с выбором режима календаря. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  monthNavigationButtonPropsConfig?: React.ComponentProps<
    typeof MonthNavigationPanelWidget
  >['monthNavigationButtonPropsConfig'];
  /** Конфиг функция пропсов для кнопки с годом на навигационной панели с выбором режима календаря. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  yearNavigationButtonPropsConfig?: React.ComponentProps<
    typeof MonthNavigationPanelWidget
  >['yearNavigationButtonPropsConfig'];

  /** Конфиг функция пропсов для контейнера с днями. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  datesWidgetContainerPropsConfig?: React.ComponentProps<typeof DateRangeCalendar>['datesWidgetContainerPropsConfig'];
  /** Модель массива для рендера ячеек с днями, на выход должна отдавать массив по размеру равный 42,
   * а также можно добавить объект с пропсами в элементы массива, которые будут внедряться в ячейки после оригинальных пропсов  */
  datesModel?: React.ComponentProps<typeof DateRangeCalendar>['datesModel'];

  /** Конфиг функция пропсов для контейнера с названиями дня в неделе. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  daysWidgetContainerPropsConfig?: React.ComponentProps<typeof DateRangeCalendar>['daysWidgetContainerPropsConfig'];
  /** Модель массива для рендера ячеек с названиями дня в неделе, на выход должна отдавать массив по размеру равный 7,
   * а также можно добавить объект с пропсами в элементы массива, которые будут внедряться в ячейки после оригинальных пропсов  */
  daysModel?: React.ComponentProps<typeof DateRangeCalendar>['daysModel'];

  /** Модель массива для рендера ячеек с месяцами, на выход должна отдавать массив по размеру равный 12,
   * а также можно добавить объект с пропсами в элементы массива, которые будут внедряться в ячейки после оригинальных пропсов  */
  monthsModel?: React.ComponentProps<typeof MonthCalendar>['monthsModel'];
  /** Конфиг функция пропсов для контейнера с месяцами. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  monthsWidgetContainerPropsConfig?: React.ComponentProps<typeof MonthCalendar>['monthsWidgetContainerPropsConfig'];

  /** Конфиг функция пропсов для контейнера с годами. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  yearsWidgetContainerPropsConfig?: React.ComponentProps<typeof YearCalendar>['yearsWidgetContainerPropsConfig'];
  /** Модель массива для рендера ячеек с годами, на выход должна отдавать массив по размеру равный yearsOnScreen,
   * а также можно добавить объект с пропсами в элементы массива, которые будут внедряться в ячейки после оригинальных пропсов  */
  yearsModel?: React.ComponentProps<typeof YearCalendar>['yearsModel'];
  //** Количество ячеек в виджете с годами */
  yearsOnScreen?: number;
  //** Количество столбцов в виджете с годами */
  yearsColumns?: number;
}

export const DateRangePickerCalendar = ({
  viewModeValue,
  defaultViewModeValue,
  onViewModeChange,
  dateValue,
  defaultDateValue,
  onDateValueChange,
  selectedDateRangeValue,
  defaultSelectedDateRangeValue,
  onSelectedDateRangeValueChange,
  activeInput,
  defaultActiveInput,
  onActiveInputChange,
  cell,
  locale = ruLocale,
  prevButtonPropsConfig,
  nextButtonPropsConfig,
  datesWidgetContainerPropsConfig,
  datesModel,
  daysWidgetContainerPropsConfig,
  daysModel,
  monthsModel,
  monthsWidgetContainerPropsConfig,
  yearsWidgetContainerPropsConfig,
  yearsModel,
  yearsOnScreen = 20,
  yearsColumns,
  monthNavigationButtonPropsConfig,
  yearNavigationButtonPropsConfig,
  ...props
}: DateRangePickerCalendarProps) => {
  //#region "Calendar view mode"
  const [viewModeState, setViewModeState] = useState<CalendarViewMode>(defaultViewModeValue || 'dates');
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
  const [activeInputState, setActiveInputState] = useState<ActiveInputType>(defaultActiveInput || 'start');
  const activeInputInner = activeInput || activeInputState;

  const handleActiveInputChange = (activeInputProp?: ActiveInputType) => {
    const newValue: ActiveInputType = activeInputProp
      ? activeInputProp
      : activeInputInner === 'start'
        ? 'end'
        : 'start';
    setActiveInputState(newValue);
    onActiveInputChange?.(newValue);
  };
  //#endregion

  const handleMonthClick = (date: Dayjs) => {
    const newDate = dateInner.month(date.month());
    handleDateChange(newDate);
    handleViewModeChange('dates');
  };
  const handleYearClick = (date: Dayjs) => {
    const newDate = dateInner.year(date.year());
    handleDateChange(newDate);
    handleViewModeChange('dates');
  };

  const handleMonthNavigationPanelClick: MouseEventHandler<HTMLElement> = useCallback(
    (e) => {
      e.preventDefault();
      const targetType = (e.target as HTMLElement).dataset.panelTargetType;
      switch (targetType) {
        case 'left':
          if (viewModeInner === 'dates') {
            handleDateChange(dateInner.subtract(1, 'month'));
          } else if (viewModeInner === 'months') {
            handleDateChange(dateInner.subtract(1, 'year'));
          } else {
            handleDateChange(dateInner.subtract(yearsOnScreen, 'year'));
          }
          break;
        case 'right':
          if (viewModeInner === 'dates') {
            handleDateChange(dateInner.add(1, 'month'));
          } else if (viewModeInner === 'months') {
            handleDateChange(dateInner.add(1, 'year'));
          } else {
            handleDateChange(dateInner.add(yearsOnScreen, 'year'));
          }
          break;
        case 'month':
          handleViewModeChange(viewModeInner === 'months' ? 'dates' : 'months');
          break;
        case 'year':
          handleViewModeChange(viewModeInner === 'years' ? 'dates' : 'years');
          break;
      }
    },
    [viewModeInner, yearsOnScreen, dateInner],
  );

  const getSelectedRangeEnd = () => {
    if (activeInputInner === 'none' || !selectedDateRangeInner) return undefined;
    if (selectedDateRangeInner[0] && activeInputInner === 'start') {
      return selectedDateRangeInner[1];
    }
    if (selectedDateRangeInner[1] && activeInputInner === 'end') {
      return selectedDateRangeInner[0];
    }
  };
  const selectedRangeEnd = getSelectedRangeEnd();

  return (
    <SinglePickerCalendarWrapper>
      <MonthNavigationPanelWidget
        date={dateInner}
        viewMode={viewModeInner}
        locale={locale}
        onMouseDown={handleMonthNavigationPanelClick}
        prevButtonPropsConfig={prevButtonPropsConfig}
        nextButtonPropsConfig={nextButtonPropsConfig}
        monthNavigationButtonPropsConfig={monthNavigationButtonPropsConfig}
        yearNavigationButtonPropsConfig={yearNavigationButtonPropsConfig}
      />
      <CalendarContainer>
        {viewModeInner === 'dates' && (
          <DateRangeCalendar
            {...props}
            cell={cell?.dateCell}
            dateValue={dateInner}
            selectedDateRangeValue={selectedDateRangeInner}
            defaultSelectedDateRangeValue={defaultSelectedDateRangeValue}
            onSelectedDateRangeValueChange={handleSelectedDateRangeChange}
            activeInput={activeInputInner}
            defaultActiveInput={defaultActiveInput}
            onActiveInputChange={handleActiveInputChange}
            locale={locale}
            datesWidgetContainerPropsConfig={datesWidgetContainerPropsConfig}
            datesModel={datesModel}
            daysWidgetContainerPropsConfig={daysWidgetContainerPropsConfig}
            daysModel={daysModel}
          />
        )}
        {viewModeInner === 'months' && (
          <MonthCalendar
            {...props}
            cell={cell?.monthCell}
            dateValue={dateInner}
            selectedDateValue={selectedRangeEnd}
            onSelectedDateValueChange={handleMonthClick}
            locale={locale}
            monthsModel={monthsModel}
            monthsWidgetContainerPropsConfig={monthsWidgetContainerPropsConfig}
          />
        )}
        {viewModeInner === 'years' && (
          <YearCalendar
            {...props}
            cell={cell?.yearCell}
            dateValue={dateInner}
            selectedDateValue={selectedRangeEnd}
            onSelectedDateValueChange={handleYearClick}
            locale={locale}
            yearsModel={yearsModel}
            yearsWidgetContainerPropsConfig={yearsWidgetContainerPropsConfig}
            yearsOnScreen={yearsOnScreen}
            yearsColumns={yearsColumns}
          />
        )}
      </CalendarContainer>
    </SinglePickerCalendarWrapper>
  );
};
