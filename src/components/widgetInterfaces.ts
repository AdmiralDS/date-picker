import type { HTMLAttributes } from 'react';

import type { DefaultCellProps } from '#src/components/DefaultCell';
import { Dayjs } from 'dayjs';

export interface BaseWidgetProps extends HTMLAttributes<HTMLDivElement> {
  rangeCalendar?: boolean;
  /** Дата в формате ISO */
  date?: string;
  locale?: string;
  /** Таймзона в формате IANA, например 'Europe/Moscow' или текущая таймзона
   * (Intl.DateTimeFormat().resolvedOptions().timeZone) */
  timezone?: string;
  renderCell: (dateString: string) => DefaultCellProps;
}

export interface BaseInnerWidgetProps extends HTMLAttributes<HTMLDivElement> {
  rangeCalendar?: boolean;
  date: Dayjs;
  renderCell: (dateString: string) => DefaultCellProps;
}
