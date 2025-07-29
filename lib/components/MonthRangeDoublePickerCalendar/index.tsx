import type { MouseEventHandler } from 'react';
import { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';

import { dateIsSameOrAfter, getCurrentDate } from '#lib/utils.ts';
import type { RangeDoubleCalendarProps, CalendarViewMode, PickerCalendarProps } from '#lib/calendarInterfaces.ts';
import { YearNavigationPanelWidget } from '#lib/YearNavigationPanelWidget';
import {
  CalendarContainer,
  DoublePickerCalendarWrapper,
  SingleContainer,
  MonthRangeCalendarView,
  YearCalendarView,
} from '#lib/calendarStyle.ts';
import { ruLocale } from '#lib/calendarConstants.ts';
import type { DateRange } from 'lib/types';

export interface MonthRangeDoublePickerCalendarProps
  extends Omit<
      RangeDoubleCalendarProps,
      'activeDateRangeEndValue' | 'defaultActiveDateRangeEndValue' | 'onActiveDateRangeEndValueChange' | 'cell'
    >,
    PickerCalendarProps {
  /** Конфиг функция пропсов для кнопки с годом на навигационной панели с выбором режима календаря. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  yearNavigationButtonPropsConfig?: React.ComponentProps<
    typeof YearNavigationPanelWidget
  >['yearNavigationButtonPropsConfig'];

  /** Модель массива для рендера ячеек с месяцами, на выход должна отдавать массив по размеру равный 12,
   * а также можно добавить объект с пропсами в элементы массива, которые будут внедряться в ячейки после оригинальных пропсов  */
  monthsModel?: React.ComponentProps<typeof MonthRangeCalendarView>['monthsModel'];

  /** Конфиг функция пропсов для контейнера с месяцами. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  monthsWidgetContainerPropsConfig?: React.ComponentProps<
    typeof MonthRangeCalendarView
  >['monthsWidgetContainerPropsConfig'];

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

export const MonthRangeDoublePickerCalendar = ({
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
  cell,
  locale = ruLocale,
  prevButtonPropsConfig,
  nextButtonPropsConfig,
  yearNavigationButtonPropsConfig,
  monthsModel,
  monthsWidgetContainerPropsConfig,
  yearsWidgetContainerPropsConfig,
  yearsModel,
  yearsOnScreen = 20,
  yearsColumns,
  ...props
}: MonthRangeDoublePickerCalendarProps) => {
  //<editor-fold desc="Calendar view mode">
  const [viewModeLeftState, setViewModeLeftState] = useState<CalendarViewMode>(defaultViewModeValue || 'months');
  const viewModeLeftInner = viewModeValue || viewModeLeftState;

  const handleViewModeLeftChange = (mode: CalendarViewMode) => {
    setViewModeLeftState(mode);
    onViewModeChange?.(mode);
  };

  const [viewModeRightState, setViewModeRightState] = useState<CalendarViewMode>(defaultViewModeValue || 'months');
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

  const [dateRightState, setDateRightState] = useState(defaultDateRangeValue?.[1] || dateLeftInner.add(1, 'year'));
  const dateRightInner = dateRangeValue?.[1] || dateRightState;

  const handleDateRightChange = (date: Dayjs) => {
    setDateRightState(date);
    onDateRangeValueChange?.([dateLeftInner, date]);
  };

  useEffect(() => {
    if (dateIsSameOrAfter(dateLeftInner, dateRightInner, 'year')) {
      handleDateRightChange(dateLeftInner.add(1, 'year'));
    }
  }, [dateLeftInner]);
  useEffect(() => {
    if (dateIsSameOrAfter(dateRightInner, dateLeftInner, 'year')) {
      handleDateLeftChange(dateRightInner.subtract(1, 'year'));
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

  const handleLeftYearNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        if (viewModeLeftInner === 'months') {
          handleDateLeftChange(dateLeftInner.subtract(1, 'year'));
        } else {
          handleDateLeftChange(dateLeftInner.subtract(yearsOnScreen, 'year'));
        }
        break;
      case 'right':
        if (viewModeLeftInner === 'months') {
          handleDateLeftChange(dateLeftInner.add(1, 'year'));
        } else {
          handleDateLeftChange(dateLeftInner.add(yearsOnScreen, 'year'));
        }
        break;
      case 'year':
        handleViewModeLeftChange(viewModeLeftInner === 'years' ? 'months' : 'years');
        break;
    }
  };
  const handleRightYearNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    const targetType = (e.target as HTMLElement).dataset.panelTargetType;
    switch (targetType) {
      case 'left':
        if (viewModeRightInner === 'months') {
          handleDateRightChange(dateRightInner.subtract(1, 'year'));
        } else {
          handleDateRightChange(dateRightInner.subtract(yearsOnScreen, 'year'));
        }
        break;
      case 'right':
        if (viewModeRightInner === 'months') {
          handleDateRightChange(dateRightInner.add(1, 'year'));
        } else {
          handleDateRightChange(dateRightInner.add(yearsOnScreen, 'year'));
        }
        break;
      case 'year':
        handleViewModeRightChange(viewModeRightInner === 'years' ? 'months' : 'years');
        break;
    }
  };

  const getSelectedRangeEnd = () => {
    if (!dateRangeActiveEndState || !selectedDateRangeInner) return undefined;
    if (selectedDateRangeInner[0] && dateRangeActiveEndState.isSame(selectedDateRangeInner[0], 'month')) {
      return selectedDateRangeInner[1];
    }
    if (selectedDateRangeInner[1] && dateRangeActiveEndState.isSame(selectedDateRangeInner[1], 'month')) {
      return selectedDateRangeInner[0];
    }
  };
  const selectedRangeEnd = getSelectedRangeEnd();

  return (
    <DoublePickerCalendarWrapper>
      <SingleContainer>
        <YearNavigationPanelWidget
          date={dateLeftInner}
          viewMode={viewModeLeftInner}
          locale={locale}
          onMouseDown={handleLeftYearNavigationPanelClick}
          prevButtonPropsConfig={prevButtonPropsConfig}
          nextButtonPropsConfig={nextButtonPropsConfig}
          yearNavigationButtonPropsConfig={yearNavigationButtonPropsConfig}
        />
        <CalendarContainer>
          <MonthRangeCalendarView
            {...props}
            cell={cell?.monthCell}
            dateValue={dateLeftInner}
            selectedDateRangeValue={selectedDateRangeInner}
            defaultSelectedDateRangeValue={defaultSelectedDateRangeValue}
            onSelectedDateRangeValueChange={handleSelectedDateRangeChange}
            activeDateRangeEndValue={dateRangeActiveEndState}
            onActiveDateRangeEndValueChange={handleDateRangeActiveEndChange}
            activeDateValue={activeDateInner}
            onActiveDateValueChange={handleActiveDateChange}
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
            yearsWidgetContainerPropsConfig={yearsWidgetContainerPropsConfig}
            yearsModel={yearsModel}
            yearsOnScreen={yearsOnScreen}
            yearsColumns={yearsColumns}
          />
        </CalendarContainer>
      </SingleContainer>
      <SingleContainer>
        <YearNavigationPanelWidget
          date={dateRightInner}
          viewMode={viewModeRightInner}
          locale={locale}
          onMouseDown={handleRightYearNavigationPanelClick}
          prevButtonPropsConfig={prevButtonPropsConfig}
          nextButtonPropsConfig={nextButtonPropsConfig}
          yearNavigationButtonPropsConfig={yearNavigationButtonPropsConfig}
        />
        <CalendarContainer>
          <MonthRangeCalendarView
            {...props}
            cell={cell?.monthCell}
            dateValue={dateRightInner}
            selectedDateRangeValue={selectedDateRangeInner}
            defaultSelectedDateRangeValue={defaultSelectedDateRangeValue}
            onSelectedDateRangeValueChange={handleSelectedDateRangeChange}
            activeDateRangeEndValue={dateRangeActiveEndState}
            onActiveDateRangeEndValueChange={handleDateRangeActiveEndChange}
            activeDateValue={activeDateInner}
            onActiveDateValueChange={handleActiveDateChange}
            locale={locale}
            $isVisible={viewModeRightInner === 'months'}
            monthsModel={monthsModel}
            monthsWidgetContainerPropsConfig={monthsWidgetContainerPropsConfig}
          />
          <YearCalendarView
            {...props}
            cell={cell?.yearCell}
            dateValue={dateRightInner}
            selectedDateValue={selectedRangeEnd}
            onSelectedDateValueChange={handleRightYearClick}
            locale={locale}
            $isVisible={viewModeRightInner === 'years'}
            yearsWidgetContainerPropsConfig={yearsWidgetContainerPropsConfig}
            yearsModel={yearsModel}
            yearsOnScreen={yearsOnScreen}
            yearsColumns={yearsColumns}
          />
        </CalendarContainer>
      </SingleContainer>
    </DoublePickerCalendarWrapper>
  );
};
