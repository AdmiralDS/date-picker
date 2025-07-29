import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';

import type { CalendarViewMode, SingleCalendarProps, PickerCalendarProps } from '#lib/calendarInterfaces.ts';
import { MonthNavigationPanelWidget } from '#lib/MonthNavigationPanelWidget';
import { getCurrentDate, setNoon } from '#lib/utils.ts';
import {
  CalendarContainer,
  SinglePickerCalendarWrapper,
  DateCalendarView,
  MonthCalendarView,
  YearCalendarView,
} from '#lib/calendarStyle.ts';
import { ruLocale } from '#lib/calendarConstants.ts';

export interface DatePickerCalendarProps extends Omit<SingleCalendarProps, 'cell'>, PickerCalendarProps {
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
  datesWidgetContainerPropsConfig?: React.ComponentProps<typeof DateCalendarView>['datesWidgetContainerPropsConfig'];
  /** Модель массива для рендера ячеек с днями, на выход должна отдавать массив по размеру равный 42,
   * а также можно добавить объект с пропсами в элементы массива, которые будут внедряться в ячейки после оригинальных пропсов  */
  datesModel?: React.ComponentProps<typeof DateCalendarView>['datesModel'];

  /** Конфиг функция пропсов для контейнера с названиями дня в неделе. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  daysWidgetContainerPropsConfig?: React.ComponentProps<typeof DateCalendarView>['daysWidgetContainerPropsConfig'];
  /** Модель массива для рендера ячеек с названиями дня в неделе, на выход должна отдавать массив по размеру равный 7,
   * а также можно добавить объект с пропсами в элементы массива, которые будут внедряться в ячейки после оригинальных пропсов  */
  daysModel?: React.ComponentProps<typeof DateCalendarView>['daysModel'];

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

export const DatePickerCalendar = ({
  viewModeValue,
  defaultViewModeValue,
  onViewModeChange,
  dateValue,
  defaultDateValue,
  onDateValueChange,
  selectedDateValue,
  defaultSelectedDateValue,
  onSelectedDateValueChange,
  cell,
  locale = ruLocale,
  prevButtonPropsConfig,
  nextButtonPropsConfig,
  className,
  style,
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
}: DatePickerCalendarProps) => {
  //<editor-fold desc="Calendar view mode">
  const [viewModeState, setViewModeState] = useState<CalendarViewMode>(defaultViewModeValue || 'dates');
  const viewModeInner = viewModeValue || viewModeState;

  const handleViewModeChange = (mode: CalendarViewMode) => {
    setViewModeState(mode);
    onViewModeChange?.(mode);
  };
  //</editor-fold>

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

  const handleDateClick = (date: Dayjs) => {
    handleSelectedDateChange(date);
  };
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

  const handleMonthNavigationPanelClick: MouseEventHandler<HTMLElement> = (e) => {
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
  };

  return (
    <SinglePickerCalendarWrapper className={className} style={style}>
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
        <DateCalendarView
          {...props}
          cell={cell?.dateCell}
          dateValue={dateInner}
          selectedDateValue={selectedDateInner}
          onSelectedDateValueChange={handleDateClick}
          locale={locale}
          $isVisible={viewModeInner === 'dates'}
          datesWidgetContainerPropsConfig={datesWidgetContainerPropsConfig}
          datesModel={datesModel}
          daysWidgetContainerPropsConfig={daysWidgetContainerPropsConfig}
          daysModel={daysModel}
        />
        <MonthCalendarView
          {...props}
          cell={cell?.monthCell}
          dateValue={setNoon(dateInner.startOf('month'))}
          selectedDateValue={selectedDateInner}
          onSelectedDateValueChange={handleMonthClick}
          locale={locale}
          $isVisible={viewModeInner === 'months'}
          monthsModel={monthsModel}
          monthsWidgetContainerPropsConfig={monthsWidgetContainerPropsConfig}
        />
        <YearCalendarView
          {...props}
          cell={cell?.yearCell}
          dateValue={setNoon(dateInner.startOf('year'))}
          selectedDateValue={selectedDateInner}
          onSelectedDateValueChange={handleYearClick}
          locale={locale}
          $isVisible={viewModeInner === 'years'}
          yearsModel={yearsModel}
          yearsWidgetContainerPropsConfig={yearsWidgetContainerPropsConfig}
          yearsOnScreen={yearsOnScreen}
          yearsColumns={yearsColumns}
        />
      </CalendarContainer>
    </SinglePickerCalendarWrapper>
  );
};
