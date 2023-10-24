import type { HTMLAttributes, ReactNode } from 'react';

import type { DateCellProps } from '#src/components/DatesOfMonthWidget/Dates';

export interface DateCalendarProps extends HTMLAttributes<HTMLDivElement> {
  mode?: 'single' | 'double';

  /** Дата в формате ISO */
  date?: string;
  /** Дата по умолчанию в формате ISO */
  defaultDate?: string;
  onDateChange?: (dateString: string) => void;

  /** Выбранная дата в формате ISO */
  selectedDate?: string;
  /** Выбранная дата по умолчанию в формате ISO */
  defaultSelectedDate?: string;
  onSelectedDateChange?: (dateString: string) => void;

  locale?: string;
  /** Таймзона в формате IANA, например 'Europe/Moscow' или текущая таймзона
   * (Intl.DateTimeFormat().resolvedOptions().timeZone) */
  timezone?: string;
  renderDateCell?: (props: DateCellProps) => ReactNode;
}
