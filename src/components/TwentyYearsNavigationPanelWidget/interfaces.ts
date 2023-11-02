import type { HTMLAttributes } from 'react';

export interface TwentyYearsNavigationPanelWidgetProps extends HTMLAttributes<HTMLElement> {
  /** Дата в формате ISO */
  date?: string;
  locale?: string;
  /** Таймзона в формате IANA, например 'Europe/Moscow' или текущая таймзона
   * (Intl.DateTimeFormat().resolvedOptions().timeZone) */
  timezone?: string;
}
