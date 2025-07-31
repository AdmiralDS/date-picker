import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';

import type { CalendarViewMode, SingleCalendarProps, PickerCalendarProps } from '#lib/calendarInterfaces.ts';
import { getCurrentDate } from '#lib/utils.ts';
import { YearNavigationPanelWidget } from '#lib/YearNavigationPanelWidget';
import {
  CalendarContainer,
  SinglePickerCalendarWrapper,
  MonthCalendarView,
  YearCalendarView,
} from '#lib/calendarStyle.ts';
import { ruLocale } from '#lib/calendarConstants.ts';

export interface MonthPickerCalendarProps extends Omit<SingleCalendarProps, 'cell'>, PickerCalendarProps {
  /** Конфиг функция пропсов для кнопки с годом на навигационной панели с выбором режима календаря. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  yearNavigationButtonPropsConfig?: React.ComponentProps<
    typeof YearNavigationPanelWidget
  >['yearNavigationButtonPropsConfig'];

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

export const MonthPickerCalendar = ({
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
  yearNavigationButtonPropsConfig,
  monthsModel,
  monthsWidgetContainerPropsConfig,
  yearsWidgetContainerPropsConfig,
  yearsModel,
  yearsOnScreen = 20,
  yearsColumns,
  ...props
}: MonthPickerCalendarProps) => {
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

  //#region "Selected date"
  const [selectedDateState, setSelectedDateState] = useState<Dayjs | undefined>(defaultSelectedDateValue);
  const selectedDateInner = selectedDateValue || selectedDateState;

  const handleSelectedDateChange = (date: Dayjs) => {
    setSelectedDateState(date);
    onSelectedDateValueChange?.(date);
  };
  //#endregion

  const handleMonthClick = (date: Dayjs) => {
    handleSelectedDateChange(date);
  };
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
          handleDateChange(dateInner.subtract(yearsOnScreen, 'year'));
        }
        break;
      case 'right':
        if (viewModeInner === 'months') {
          handleDateChange(dateInner.add(1, 'year'));
        } else {
          handleDateChange(dateInner.add(yearsOnScreen, 'year'));
        }
        break;
      case 'year':
        handleViewModeChange(viewModeInner === 'years' ? 'months' : 'years');
        break;
    }
  };

  return (
    <SinglePickerCalendarWrapper>
      <YearNavigationPanelWidget
        date={dateInner}
        viewMode={viewModeInner}
        locale={locale}
        onMouseDown={handleYearNavigationPanelClick}
        prevButtonPropsConfig={prevButtonPropsConfig}
        nextButtonPropsConfig={nextButtonPropsConfig}
        yearNavigationButtonPropsConfig={yearNavigationButtonPropsConfig}
      />
      <CalendarContainer>
        <MonthCalendarView
          {...props}
          cell={cell?.monthCell}
          dateValue={dateInner}
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
          dateValue={dateInner}
          selectedDateValue={selectedDateInner}
          onSelectedDateValueChange={handleYearClick}
          locale={locale}
          $isVisible={viewModeInner === 'years'}
          yearsWidgetContainerPropsConfig={yearsWidgetContainerPropsConfig}
          yearsModel={yearsModel}
          yearsOnScreen={yearsOnScreen}
          yearsColumns={yearsColumns}
        />
      </CalendarContainer>
    </SinglePickerCalendarWrapper>
  );
};
