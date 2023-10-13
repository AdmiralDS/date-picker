import type { HTMLAttributes } from 'react';
import type { Dayjs } from 'dayjs';

export interface MonthNavigationPanelWidgetProps extends HTMLAttributes<HTMLElement> {
  /** Дата в формате ISO */
  date?: string;
  locale?: string;
  /** Таймзона в формате IANA, например 'Europe/Moscow' или текущая таймзона
   * (Intl.DateTimeFormat().resolvedOptions().timeZone) */
  timezone?: string;
}

export interface MonthYearProps {
  date: Dayjs;
}
