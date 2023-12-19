import type { HTMLAttributes, ReactNode } from 'react';
import type { Dayjs } from 'dayjs';

import type { DefaultCellProps } from '#src/components/DefaultCell';
import type { CalendarViewMode } from '#src/components/calendarInterfaces.ts';

export interface BaseWidgetProps extends HTMLAttributes<HTMLDivElement> {
  rangeCalendar?: boolean;
  /** Дата в формате ISO */
  date?: string;
  locale?: string;
  /** Таймзона в формате IANA, например 'Europe/Moscow' или текущая таймзона
   * (Intl.DateTimeFormat().resolvedOptions().timeZone) */
  timezone?: string;
  renderCell?: (dateString: string) => DefaultCellProps;
  cells?: ReactNode;
}

export interface BaseInnerWidgetProps extends HTMLAttributes<HTMLDivElement> {
  rangeCalendar?: boolean;
  date: Dayjs;
  renderCell?: (dateString: string) => DefaultCellProps;
  cells?: ReactNode;
}

export interface BasePanelWidgetProps extends HTMLAttributes<HTMLDivElement> {
  viewMode?: CalendarViewMode;
  /** Дата в формате ISO */
  date?: string;
  locale?: string;
  /** Таймзона в формате IANA, например 'Europe/Moscow' или текущая таймзона
   * (Intl.DateTimeFormat().resolvedOptions().timeZone) */
  timezone?: string;
}
