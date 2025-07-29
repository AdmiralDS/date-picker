import type { MouseEventHandler } from 'react';
import { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';

import { dateIsSameOrAfter, getCurrentDate } from '#lib/utils.ts';
import type { RangeDoubleCalendarProps, CalendarViewMode, PickerCalendarProps } from '#lib/calendarInterfaces.ts';
import { MonthNavigationPanelWidget } from '#lib/MonthNavigationPanelWidget';
import {
  CalendarContainer,
  DoublePickerCalendarWrapper,
  SingleContainer,
  DateRangeCalendarView,
  MonthCalendarView,
  YearCalendarView,
} from '#lib/calendarStyle.ts';
import { ruLocale } from '#lib/calendarConstants.ts';
import type { DateRange } from 'lib/types';

export interface DateRangeDoublePickerCalendarProps
  extends Omit<
      RangeDoubleCalendarProps,
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
  datesWidgetContainerPropsConfig?: React.ComponentProps<
    typeof DateRangeCalendarView
  >['datesWidgetContainerPropsConfig'];
  /** Модель массива для рендера ячеек с днями, на выход должна отдавать массив по размеру равный 42,
   * а также можно добавить объект с пропсами в элементы массива, которые будут внедряться в ячейки после оригинальных пропсов  */
  datesModel?: React.ComponentProps<typeof DateRangeCalendarView>['datesModel'];

  /** Конфиг функция пропсов для контейнера с названиями дня в неделе. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  daysWidgetContainerPropsConfig?: React.ComponentProps<typeof DateRangeCalendarView>['daysWidgetContainerPropsConfig'];
  /** Модель массива для рендера ячеек с названиями дня в неделе, на выход должна отдавать массив по размеру равный 7,
   * а также можно добавить объект с пропсами в элементы массива, которые будут внедряться в ячейки после оригинальных пропсов  */
  daysModel?: React.ComponentProps<typeof DateRangeCalendarView>['daysModel'];

  /** Модель массива для рендера ячеек с месяцами, на выход должна отдавать массив по размеру равный 12,
   * а также можно добавить объект с пропсами в элементы массива, которые будут внедряться в ячейки после оригинальных пропсов  */
  monthsModel?: React.ComponentProps<typeof MonthCalendarView>['monthsModel'];
  /** Конфиг функция пропсов для контейнера с месяцами. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  monthsWidgetContainerPropsConfig?: React.ComponentProps<typeof MonthCalendarView>['monthsWidgetContainerPropsConfig'];

  /** Конфиг функция пропсов для контейнера с годами. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  yearsWidgetContainerPropsConfig?: React.ComponentProps<typeof YearCalendarView>['yearsWidgetContainerPropsConfig'];
  /** Модель массива для рендера ячеек с годами, на выход должна отдавать массив по размеру равный yearsOnScreen,
   * а также можно добавить объект с пропсами в элементы массива, которые будут внедряться в ячейки после оригинальных пропсов  */
  yearsModel?: React.ComponentProps<typeof YearCalendarView>['yearsModel'];
  //** Количество ячеек в виджете с годами */
  yearsOnScreen?: number;
  //** Количество столбцов в виджете с годами */
  yearsColumns?: number;
}

export const DateRangeDoublePickerCalendar = ({
  viewModeValue,
  defaultViewModeValue,
  onViewModeChange,
  dateRangeValue,
  defaultDateRangeValue,
  onDateRangeValueChange,
  selectedDateRangeValue,
  defaultSelectedDateRangeValue,
  onSelectedDateRangeValueChange,
  activeDateValue,
  defaultActiveDateValue,
  onActiveDateValueChange,
  prevButtonPropsConfig,
  nextButtonPropsConfig,
  cell,
  locale = ruLocale,
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
}: DateRangeDoublePickerCalendarProps) => {
  //<editor-fold desc="Calendar view mode">
  const [viewModeLeftState, setViewModeLeftState] = useState<CalendarViewMode>(defaultViewModeValue || 'dates');
  const viewModeLeftInner = viewModeValue || viewModeLeftState;

  const handleViewModeLeftChange = (mode: CalendarViewMode) => {
    setViewModeLeftState(mode);
    onViewModeChange?.(mode);
  };

  const [viewModeRightState, setViewModeRightState] = useState<CalendarViewMode>(defaultViewModeValue || 'dates');
  const viewModeRightInner = viewModeValue || viewModeRightState;

  const handleViewModeRightChange = (mode: CalendarViewMode) => {
    setViewModeRightState(mode);
    onViewModeChange?.(mode);
  };
  //</editor-fold>

  //<editor-fold desc="Date shown on calendar">
  const [dateLeftState, setDateLeftState] = useState(defaultDateRangeValue?.[0] || getCurrentDate(locale?.localeName));
  const dateLeftInner = dateRangeValue?.[0] || dateLeftState;

  const handleDateLeftChange = (date: Dayjs) => {
    setDateLeftState(date);
    onDateRangeValueChange?.([date, dateRightInner]);
  };

  const [dateRightState, setDateRightState] = useState(defaultDateRangeValue?.[1] || dateLeftInner.add(1, 'month'));
  const dateRightInner = dateRangeValue?.[1] || dateRightState;

  const handleDateRightChange = (date: Dayjs) => {
    setDateRightState(date);
    onDateRangeValueChange?.([dateLeftInner, date]);
  };

  useEffect(() => {
    if (dateIsSameOrAfter(dateLeftInner, dateRightInner, 'month')) {
      handleDateRightChange(dateLeftInner.add(1, 'month'));
    }
  }, [dateLeftInner]);
  useEffect(() => {
    if (dateIsSameOrAfter(dateRightInner, dateLeftInner, 'month')) {
      handleDateLeftChange(dateRightInner.subtract(1, 'month'));
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
  const [selectedDateRangeState, setSelectedDateRangeState] = useState<DateRange>(
    defaultSelectedDateRangeValue ?? [undefined, undefined],
  );
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

  const handleLeftMonthClick = (date: Dayjs) => {
    const newDate = dateLeftInner.month(date.month());
    handleDateLeftChange(newDate);
    handleViewModeLeftChange('dates');
    //onMonthChange?.(newDate);
  };
  const handleRightMonthClick = (date: Dayjs) => {
    const newDate = dateRightInner.month(date.month());
    handleDateRightChange(newDate);
    handleViewModeRightChange('dates');
  };

  const handleLeftYearClick = (date: Dayjs) => {
    const newDate = dateLeftInner.year(date.year());
    handleDateLeftChange(newDate);
    handleViewModeLeftChange('months');
  };
  const handleRightYearClick = (date: Dayjs) => {
    const newDate = dateRightInner.year(date.year());
    handleDateRightChange(newDate);
    handleViewModeRightChange('months');
  };

  const handleLeftMonthNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        if (viewModeLeftInner === 'dates') {
          handleDateLeftChange(dateLeftInner.subtract(1, 'month'));
        } else if (viewModeLeftInner === 'months') {
          handleDateLeftChange(dateLeftInner.subtract(1, 'year'));
        } else {
          handleDateLeftChange(dateLeftInner.subtract(yearsOnScreen, 'year'));
        }
        break;
      case 'right':
        if (viewModeLeftInner === 'dates') {
          handleDateLeftChange(dateLeftInner.add(1, 'month'));
        } else if (viewModeLeftInner === 'months') {
          handleDateLeftChange(dateLeftInner.add(1, 'year'));
        } else {
          handleDateLeftChange(dateLeftInner.add(yearsOnScreen, 'year'));
        }
        break;
      case 'month':
        handleViewModeLeftChange(viewModeLeftInner === 'months' ? 'dates' : 'months');
        break;
      case 'year':
        handleViewModeLeftChange(viewModeLeftInner === 'years' ? 'dates' : 'years');
        break;
    }
  };
  const handleRightMonthNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        if (viewModeRightInner === 'dates') {
          handleDateRightChange(dateRightInner.subtract(1, 'month'));
        } else if (viewModeRightInner === 'months') {
          handleDateRightChange(dateRightInner.subtract(1, 'year'));
        } else {
          handleDateRightChange(dateRightInner.subtract(yearsOnScreen, 'year'));
        }
        break;
      case 'right':
        if (viewModeRightInner === 'dates') {
          handleDateRightChange(dateRightInner.add(1, 'month'));
        } else if (viewModeRightInner === 'months') {
          handleDateRightChange(dateRightInner.add(1, 'year'));
        } else {
          handleDateRightChange(dateRightInner.add(yearsOnScreen, 'year'));
        }
        break;
      case 'month':
        handleViewModeRightChange(viewModeRightInner === 'months' ? 'dates' : 'months');
        break;
      case 'year':
        handleViewModeRightChange(viewModeRightInner === 'years' ? 'dates' : 'years');
        break;
    }
  };

  const getSelectedRangeEnd = () => {
    if (!dateRangeActiveEndState || !selectedDateRangeInner) return undefined;
    if (selectedDateRangeInner[0] && dateRangeActiveEndState.isSame(selectedDateRangeInner[0], 'date')) {
      return selectedDateRangeInner[1];
    }
    if (selectedDateRangeInner[1] && dateRangeActiveEndState.isSame(selectedDateRangeInner[1], 'date')) {
      return selectedDateRangeInner[0];
    }
  };
  const selectedRangeEnd = getSelectedRangeEnd();

  return (
    <DoublePickerCalendarWrapper>
      <SingleContainer>
        <MonthNavigationPanelWidget
          date={dateLeftInner}
          viewMode={viewModeLeftInner}
          locale={locale}
          onMouseDown={handleLeftMonthNavigationPanelClick}
          prevButtonPropsConfig={prevButtonPropsConfig}
          nextButtonPropsConfig={nextButtonPropsConfig}
          monthNavigationButtonPropsConfig={monthNavigationButtonPropsConfig}
          yearNavigationButtonPropsConfig={yearNavigationButtonPropsConfig}
        />
        <CalendarContainer>
          <DateRangeCalendarView
            {...props}
            cell={cell?.dateCell}
            dateValue={dateLeftInner}
            selectedDateRangeValue={selectedDateRangeInner}
            defaultSelectedDateRangeValue={defaultSelectedDateRangeValue}
            onSelectedDateRangeValueChange={handleSelectedDateRangeChange}
            activeDateRangeEndValue={dateRangeActiveEndState}
            onActiveDateRangeEndValueChange={handleDateRangeActiveEndChange}
            activeDateValue={activeDateInner}
            onActiveDateValueChange={handleActiveDateChange}
            locale={locale}
            $isVisible={viewModeLeftInner === 'dates'}
            datesWidgetContainerPropsConfig={datesWidgetContainerPropsConfig}
            datesModel={datesModel}
            daysWidgetContainerPropsConfig={daysWidgetContainerPropsConfig}
            daysModel={daysModel}
          />
          <MonthCalendarView
            {...props}
            cell={cell?.monthCell}
            dateValue={dateLeftInner}
            selectedDateValue={selectedRangeEnd}
            onSelectedDateValueChange={handleLeftMonthClick}
            locale={locale}
            $isVisible={viewModeLeftInner === 'months'}
            monthsModel={monthsModel}
            monthsWidgetContainerPropsConfig={monthsWidgetContainerPropsConfig}
          />
          <YearCalendarView
            {...props}
            cell={cell?.yearCell}
            dateValue={dateLeftInner}
            selectedDateValue={selectedRangeEnd}
            onSelectedDateValueChange={handleLeftYearClick}
            locale={locale}
            $isVisible={viewModeLeftInner === 'years'}
            yearsModel={yearsModel}
            yearsWidgetContainerPropsConfig={yearsWidgetContainerPropsConfig}
            yearsOnScreen={yearsOnScreen}
            yearsColumns={yearsColumns}
          />
        </CalendarContainer>
      </SingleContainer>
      <SingleContainer>
        <MonthNavigationPanelWidget
          date={dateRightInner}
          viewMode={viewModeRightInner}
          locale={locale}
          onMouseDown={handleRightMonthNavigationPanelClick}
          prevButtonPropsConfig={prevButtonPropsConfig}
          nextButtonPropsConfig={nextButtonPropsConfig}
        />
        <CalendarContainer>
          <DateRangeCalendarView
            {...props}
            cell={cell?.dateCell}
            dateValue={dateRightInner}
            selectedDateRangeValue={selectedDateRangeInner}
            defaultSelectedDateRangeValue={defaultSelectedDateRangeValue}
            onSelectedDateRangeValueChange={handleSelectedDateRangeChange}
            activeDateRangeEndValue={dateRangeActiveEndState}
            onActiveDateRangeEndValueChange={handleDateRangeActiveEndChange}
            activeDateValue={activeDateInner}
            onActiveDateValueChange={handleActiveDateChange}
            locale={locale}
            $isVisible={viewModeRightInner === 'dates'}
          />
          <MonthCalendarView
            {...props}
            cell={cell?.monthCell}
            dateValue={dateLeftInner}
            selectedDateValue={selectedRangeEnd}
            onSelectedDateValueChange={handleRightMonthClick}
            locale={locale}
            $isVisible={viewModeRightInner === 'months'}
          />
          <YearCalendarView
            {...props}
            cell={cell?.yearCell}
            dateValue={dateRightInner}
            selectedDateValue={selectedRangeEnd}
            onSelectedDateValueChange={handleRightYearClick}
            locale={locale}
            $isVisible={viewModeRightInner === 'years'}
            yearsOnScreen={yearsOnScreen}
          />
        </CalendarContainer>
      </SingleContainer>
    </DoublePickerCalendarWrapper>
  );
};
