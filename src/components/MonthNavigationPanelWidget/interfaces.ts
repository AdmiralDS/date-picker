import type { MouseEventHandler } from 'react';
import type { Dayjs } from 'dayjs';

export interface MonthNavigationPanelWidgetProps {
  /** Дата в формате ISO */
  date?: string;
  locale?: string;
  /** Таймзона в формате IANA, например 'Europe/Moscow' или текущая таймзона
   * (Intl.DateTimeFormat().resolvedOptions().timeZone) */
  timezone?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface MonthYearProps {
  date: Dayjs;
}
