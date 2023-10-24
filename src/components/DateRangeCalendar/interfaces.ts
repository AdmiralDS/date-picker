import type { HTMLAttributes, ReactNode } from 'react';

import type { DateCellProps } from '#src/components/DatesOfMonthWidget/Dates';

export interface DateRangeCalendarProps extends HTMLAttributes<HTMLDivElement> {
  mode?: 'single' | 'double';

  /** Дата в формате ISO */
  date?: string;
  /** Дата по умолчанию в формате ISO */
  defaultDate?: string;
  onDateChange?: (dateString: string) => void;

  /** Даты в формате ISO */
  dateRange?: [string, string];
  /** Даты в формате ISO */
  defaultDateRange?: [string, string];
  onDateRangeChange?: (dateRangeString: [string, string]) => void;

  locale?: string;
  /** Таймзона в формате IANA, например 'Europe/Moscow' или текущая таймзона
   * (Intl.DateTimeFormat().resolvedOptions().timeZone) */
  timezone?: string;
  renderDateCell?: (props: DateCellProps) => ReactNode;
}
