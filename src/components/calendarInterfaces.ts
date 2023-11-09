import type { HTMLAttributes, JSX } from 'react';

export interface CalendarProps extends HTMLAttributes<HTMLDivElement> {
  renderDateCell?: (dateString: string) => JSX.Element | (() => JSX.Element);

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
  onActiveDateValueChange?: (dateString: string) => void;

  locale?: string;
  /** Таймзона в формате IANA, например 'Europe/Moscow' или текущая таймзона
   * (Intl.DateTimeFormat().resolvedOptions().timeZone) */
  timezone?: string;
}

export interface SinglePickerCalendarProps extends CalendarProps {
  /** Выбранное значение даты в формате ISO */
  selectedDateValue?: string;
  /** Выбранное значение даты по умолчанию в формате ISO */
  defaultSelectedDateValue?: string;
  /** Коллбэк на изменение выбранной даты */
  onSelectedDateValueChange?: (dateString: string) => void;
}

export interface RangePickerCalendarProps extends CalendarProps {
  /** Выбранное значение диапазона дат в формате ISO */
  selectedDateRangeValue?: [string, string];
  /** Выбранное значение диапазона дат по умолчанию в формате ISO */
  defaultSelectedDateRangeValue?: [string | undefined, string | undefined];
  /** Коллбэк на изменение выбранного диапазона дат */
  onSelectedDateRangeValueChange?: (dateRangeString: [string | undefined, string | undefined]) => void;
}
}
