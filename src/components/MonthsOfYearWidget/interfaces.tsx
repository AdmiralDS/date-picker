import type { MouseEventHandler, HTMLAttributes } from 'react';
import type { Dayjs } from 'dayjs';
import type { DefaultCellProps } from '#src/components/DefaultCell';

export interface MonthsOfYearWidgetProps extends HTMLAttributes<HTMLDivElement> {
  /** Дата в формате ISO */
  date?: string;
  locale?: string;
  /** Таймзона в формате IANA, например 'Europe/Moscow' или текущая таймзона
   * (Intl.DateTimeFormat().resolvedOptions().timeZone) */
  timezone?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  renderMonthCell: (dateString: string) => DefaultCellProps;
}

export interface MonthsProps {
  date: Dayjs;
  renderMonthCell: (dateString: string) => DefaultCellProps;
}
