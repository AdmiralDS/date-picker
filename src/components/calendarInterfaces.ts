import type { HTMLAttributes } from 'react';
import type { DefaultCellProps } from '#src/components/DefaultCell';

export type CalendarViewMode = 'dates' | 'months' | 'years';

export interface CalendarProps extends HTMLAttributes<HTMLDivElement> {
  renderDateCell?: (dateString: string) => DefaultCellProps;

  /** Дата для отображения на экране в формате ISO */
  dateValue?: string;
  /** Дата для отображения на экране по умолчанию в формате ISO */
  defaultDateValue?: string;
  /** Коллбэк на изменение даты отображения на экране */
  onDateValueChange?: (dateString: string) => void;

  /** Активная дата (hover) в формате ISO */
  activeDateValue?: string;
  /** Активная дата (hover) по умолчанию в формате ISO */
  defaultActiveDateValue?: string;
  /** Коллбэк на изменение активной даты */
  onActiveDateValueChange?: (dateString?: string) => void;

  locale?: string;
  /** Таймзона в формате IANA, например 'Europe/Moscow' или текущая таймзона
   * (Intl.DateTimeFormat().resolvedOptions().timeZone) */
  timezone?: string;
}

export interface SingleCalendarProps extends CalendarProps {
  /** Выбранное значение даты в формате ISO */
  selectedDateValue?: string;
  /** Выбранное значение даты по умолчанию в формате ISO */
  defaultSelectedDateValue?: string;
  /** Коллбэк на изменение выбранной даты */
  onSelectedDateValueChange?: (dateString: string) => void;
}

export interface RangeCalendarProps extends CalendarProps {
  /** Выбранное значение диапазона дат в формате ISO */
  selectedDateRangeValue?: [string, string];
  /** Выбранное значение диапазона дат по умолчанию в формате ISO */
  defaultSelectedDateRangeValue?: [string | undefined, string | undefined];
  /** Коллбэк на изменение выбранного диапазона дат */
  onSelectedDateRangeValueChange?: (dateRangeString: [string | undefined, string | undefined]) => void;
}

export interface RangeCalendarDoubleProps
  extends Omit<RangeCalendarProps, 'dateValue' | 'defaultDateValue' | 'onDateValueChange'> {
  /** Выбранное значение диапазона дат в формате ISO */
  dateRangeValue?: [string, string];
  /** Выбранное значение диапазона дат по умолчанию в формате ISO */
  defaultDateRangeValue?: [string | undefined, string | undefined];
  /** Коллбэк на изменение выбранного диапазона дат */
  onDateRangeValueChange?: (dateRangeString: [string | undefined, string | undefined]) => void;
}

export interface PickerCalendarProps {
  /** Экран выбора дат, месяцев, лет */
  viewModeValue?: CalendarViewMode;
  /** Режим отображения по умолчанию */
  defaultViewModeValue?: CalendarViewMode;
  /** Коллбэк на переключение экрана */
  onViewModeChange?: (mode: CalendarViewMode) => void;
}
