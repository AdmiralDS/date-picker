import type { HTMLAttributes, ReactNode } from 'react';

import type { DateCellProps } from '#src/components/DatesOfMonthWidget/Dates';

export interface CalendarProps extends HTMLAttributes<HTMLDivElement> {
  /** Даты в формате ISO */
  dateRange?: [string, string];
  /** Дата в формате ISO */
  date?: string;
  /** Дата по умолчанию в формате ISO */
  defaultDate?: string;
  onDateChange?: (dateString: string) => void;
  selectedDate?: string;
  defaultSelectedDate?: string;
  onSelectedDateChange?: (dateString: string) => void;
  locale?: string;
  /** Таймзона в формате IANA, например 'Europe/Moscow' или текущая таймзона
   * (Intl.DateTimeFormat().resolvedOptions().timeZone) */
  timezone?: string;
  renderDateCell?: (props: DateCellProps) => ReactNode;
}
