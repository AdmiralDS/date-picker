import type { HTMLAttributes, JSX } from 'react';

export interface CalendarProps extends HTMLAttributes<HTMLDivElement> {
  mode?: 'single' | 'double';

  renderDateCell?: (dateString: string) => JSX.Element | (() => JSX.Element);

  /** Дата в формате ISO */
  date?: string;
  /** Дата по умолчанию в формате ISO */
  defaultDate?: string;
  onDateChange?: (dateString: string) => void;

  locale?: string;
  /** Таймзона в формате IANA, например 'Europe/Moscow' или текущая таймзона
   * (Intl.DateTimeFormat().resolvedOptions().timeZone) */
  timezone?: string;
}
