import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

import { getCurrentDate } from '#lib/utils';
import { DatesWidget } from '#lib/DatesWidget';
import type { CellStateProps } from '#lib/DatesWidget/interfaces';
import { baseDayNameCellMixin } from '#lib/DefaultCell/mixins.tsx';
import type { ActiveEnd, RangeCalendarProps } from '#lib/calendarInterfaces';
import { MemoDefaultDateRangeCell } from '#lib/DefaultCell';
import { ruLocale } from '#lib/calendarConstants.ts';
import type { DateRange } from 'lib/types';

export interface DateRangeCalendarProps extends Omit<RangeCalendarProps, 'defaultDateValue' | 'onDateValueChange'> {
  /** Конфиг функция пропсов для контейнера с днями. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  datesWidgetContainerPropsConfig?: React.ComponentProps<typeof DatesWidget>['datesWidgetContainerPropsConfig'];

  /** Модель массива для рендера ячеек с днями, на выход должна отдавать массив по размеру равный 42,
   * а также можно добавить объект с пропсами в элементы массива, которые будут внедряться в ячейки после оригинальных пропсов  */
  datesModel?: React.ComponentProps<typeof DatesWidget>['datesModel'];

  /** Конфиг функция пропсов для контейнера с названиями дня в неделе. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  daysWidgetContainerPropsConfig?: React.ComponentProps<typeof DatesWidget>['daysWidgetContainerPropsConfig'];

  /** Модель массива для рендера ячеек с названиями дня в неделе, на выход должна отдавать массив по размеру равный 7,
   * а также можно добавить объект с пропсами в элементы массива, которые будут внедряться в ячейки после оригинальных пропсов  */
  daysModel?: React.ComponentProps<typeof DatesWidget>['daysModel'];
}

export const DateRangeCalendar = ({
  selectedDateRangeValue,
  defaultSelectedDateRangeValue,
  onSelectedDateRangeValueChange,
  onActiveDateRangeEndValueChange,
  dateAttributes,
  dateValue,
  activeDateValue,
  defaultActiveDateValue,
  onActiveDateValueChange,
  activeEndValue,
  defaultActiveEndValue,
  onActiveEndValueChange,
  cell,
  locale = ruLocale,
  datesWidgetContainerPropsConfig,
  datesModel,
  daysWidgetContainerPropsConfig,
  daysModel,
  ...props
}: DateRangeCalendarProps) => {
  //#region "Date shown on calendar"
  const dateInner = dateValue || getCurrentDate(locale?.localeName);
  //#endregion

  //#region "Hovered date"
  const [activeDateState, setActiveDateState] = useState<Dayjs | undefined>(defaultActiveDateValue);
  const activeDateInner = activeDateValue || activeDateState;

  const handleActiveDateChange = (date?: Dayjs) => {
    setActiveDateState(date);
    onActiveDateValueChange?.(date);
  };

  const handleMouseOver: MouseEventHandler<HTMLDivElement> = (e) => {
    const targetDataAttributes = (e.target as HTMLDivElement).dataset;
    if (targetDataAttributes['cellType'] !== 'dateCell') {
      return;
    }
    const date = dayjs(targetDataAttributes['value']).locale(locale?.localeName);
    const disabled = targetDataAttributes['disabledCell'] === 'true' || targetDataAttributes['hiddenCell'] === 'true';
    if (!disabled) {
      handleActiveDateChange(date);
    }
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    handleActiveDateChange(undefined);
  };
  //#endregion

  //#region "First date of range"
  const [dateRangeFirstState, setDateRangeFirstState] = useState(defaultSelectedDateRangeValue?.[0]);
  const dateRangeFirstInner = selectedDateRangeValue?.[0] || dateRangeFirstState;

  const handleDateRangeFirstChange = (date?: Dayjs) => {
    setDateRangeFirstState(date);
  };
  //#endregion

  //#region "Second date of range"
  const [dateRangeSecondState, setDateRangeSecondState] = useState(defaultSelectedDateRangeValue?.[1]);
  const dateRangeSecondInner = selectedDateRangeValue?.[1] || dateRangeSecondState;

  const handleDateRangeSecondChange = (date?: Dayjs) => {
    setDateRangeSecondState(date);
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

  const setInitialDateRangeActiveEndState = () => {
    if (activeEndInner) {
      switch (activeEndInner) {
        case 'start':
        default:
          return dateRangeFirstInner;
        case 'end':
          return dateRangeSecondInner;
      }
    }
    return undefined;
  };
  const [dateRangeActiveEnd, setDateRangeActiveEndState] = useState<Dayjs | undefined>(
    setInitialDateRangeActiveEndState(),
  );

  const handleDateRangeActiveEndChange = (date?: Dayjs) => {
    setDateRangeActiveEndState(date);
    onActiveDateRangeEndValueChange?.(date);
  };
  //#endregion

  const handleDateClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const targetDataAttributes = (e.target as HTMLDivElement).dataset;
    if (targetDataAttributes['cellType'] !== 'dateCell') {
      return;
    }
    const date = dayjs(targetDataAttributes['value']).locale(locale?.localeName);
    const disabled = targetDataAttributes['disabledCell'] === 'true' || targetDataAttributes['hiddenCell'] === 'true';
    if (!disabled) {
      let first: Dayjs | undefined = undefined;
      let second: Dayjs | undefined = undefined;
      switch (activeEndInner) {
        case 'start':
          handleDateRangeFirstChange(date);
          first = date;
          second = dateRangeSecondInner;
          break;
        case 'end':
          handleDateRangeSecondChange(date);
          first = dateRangeFirstInner;
          second = date;
          break;
        case 'none':
        default:
          break;
      }

      const newSelectedDateRangeValue: DateRange = [first, second];
      handleActiveEndChange();
      handleDateRangeActiveEndChange(date);
      onSelectedDateRangeValueChange?.(newSelectedDateRangeValue);
    }
  };

  const getDayNameCellState = (): CellStateProps => {
    const cellMixin = baseDayNameCellMixin;
    return { cellMixin };
  };

  return (
    <DatesWidget
      {...props}
      date={dateInner}
      selected={[dateRangeFirstInner, dateRangeSecondInner]}
      active={activeDateInner}
      activeRangeEnd={dateRangeActiveEnd}
      dateAttributes={dateAttributes}
      locale={locale}
      dayNamesProps={{ dayNameCellState: getDayNameCellState }}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
      onClick={handleDateClick}
      cell={cell || MemoDefaultDateRangeCell}
      range={true}
      datesWidgetContainerPropsConfig={datesWidgetContainerPropsConfig}
      datesModel={datesModel}
      daysWidgetContainerPropsConfig={daysWidgetContainerPropsConfig}
      daysModel={daysModel}
    />
  );
};
